const fs = require('fs');
const csv = require('csv-parser');

const picks = [];

fs.createReadStream('Official_Picks_Tracker.csv')
  .pipe(csv())
  .on('data', (row) => picks.push(row))
  .on('end', () => {
    console.log('Total rows:', picks.length);
    const completed = picks.filter(p => p['Win/Loss'] && p['Win/Loss'].trim() !== '');
    console.log('Completed picks:', completed.length);
    const wins = completed.filter(p => p['Win/Loss'] === 'W').length;
    console.log('Wins:', wins);
    console.log('Win rate:', (wins / completed.length * 100).toFixed(1) + '%');
    const profit = completed.reduce((sum, p) => sum + (parseFloat(p.Profit) || 0), 0);
    console.log('Profit:', profit);
  });