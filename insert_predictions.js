const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const csv = require('csv-parser');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// Convert American odds to decimal
function americanToDecimal(american) {
  const num = parseInt(american);
  if (num > 0) {
    return (num / 100) + 1;
  } else {
    return (100 / Math.abs(num)) + 1;
  }
}

async function insertPredictions() {
  const csvFile = '../tonight_predictions_14_strategies_1018.csv';
  const predictions = [];
  
  console.log(`Reading predictions from ${csvFile}...`);
  
  await new Promise((resolve, reject) => {
    fs.createReadStream(csvFile)
      .pipe(csv())
      .on('data', (row) => {
        predictions.push(row);
      })
      .on('end', resolve)
      .on('error', reject);
  });
  
  console.log(`Found ${predictions.length} predictions.`);
  
  // Prepare bets
  const bets = predictions.map(pred => {
    const decimalOdds = americanToDecimal(pred.price);
    const notes = `Strategy ${pred.strategy}: ${pred.model} ${pred.features} window ${pred.window}, confidence ${(parseFloat(pred.confidence) * 100).toFixed(1)}%`;
    
    return {
      event: pred.game,
      wager: parseFloat(pred.stake),
      odds: decimalOdds,
      outcome: 'pending',
      date: '2026-02-11', // today
      sport: 'Basketball',
      league: 'NBA',
      notes: notes,
      // Additional fields we could store in a JSON column if we add later
    };
  });
  
  console.log('Inserting bets into Supabase...');
  
  // Insert in batches of 50
  const batchSize = 50;
  let inserted = 0;
  let errors = 0;
  
  for (let i = 0; i < bets.length; i += batchSize) {
    const batch = bets.slice(i, i + batchSize);
    
    const { data, error } = await supabase
      .from('bets')
      .insert(batch)
      .select();
    
    if (error) {
      console.error(`❌ Error inserting batch ${i / batchSize + 1}:`, error.message);
      errors++;
    } else {
      inserted += batch.length;
      console.log(`✅ Batch ${i / batchSize + 1} inserted (${batch.length} rows)`);
    }
    
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 200));
  }
  
  console.log(`\n🎉 Insertion complete.`);
  console.log(`   Total: ${bets.length}`);
  console.log(`   Inserted: ${inserted}`);
  console.log(`   Errors: ${errors}`);
  
  if (errors > 0) {
    process.exit(1);
  }
}

insertPredictions().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});