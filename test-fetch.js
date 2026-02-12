const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://imlrduvkamfolqpbpqag.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_iiOhdwXogclrmeBCjp7gJQ_8Xwyy2BA';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testFetch() {
  console.log('Testing Supabase connection...');
  const { data, error } = await supabase
    .from('bets')
    .select('*')
    .limit(5);
  
  if (error) {
    console.error('Error:', error);
  } else {
    console.log(`Successfully fetched ${data.length} bets:`);
    data.forEach(bet => {
      console.log(`- ${bet.event}: $${bet.wager} at ${bet.odds}`);
    });
  }
}

testFetch();