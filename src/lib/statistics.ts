import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

const TRACKER_PATH = path.join(process.cwd(), 'Official_Picks_Tracker.csv');

export interface Pick {
  Date: string;
  Sport: string;
  'Home Team': string;
  'Away Team': string;
  'Bet Type': string;
  'Bet Pick': string;
  Odds: string;
  'Win/Loss': string;
  Profit: string;
}

export async function getTrackerData(): Promise<Pick[]> {
  return new Promise((resolve, reject) => {
    const picks: Pick[] = [];
    fs.createReadStream(TRACKER_PATH)
      .pipe(csv())
      .on('data', (row) => picks.push(row))
      .on('end', () => resolve(picks))
      .on('error', reject);
  });
}

export interface Stats {
  totalPicks: number;
  wins: number;
  winRate: number;
  cumulativeProfit: number;
  pendingPicks: number;
  bySport: {
    [sport: string]: {
      wins: number;
      total: number;
      profit: number;
    };
  };
}

export async function getStats(): Promise<Stats> {
  const picks = await getTrackerData();
  const completed = picks.filter(p => p['Win/Loss'] && p['Win/Loss'].trim() !== '');
  const total = completed.length;
  const wins = completed.filter(p => p['Win/Loss'] === 'W').length;
  const winRate = total > 0 ? (wins / total) * 100 : 0;
  const cumulativeProfit = completed.reduce((sum, p) => sum + (parseFloat(p.Profit) || 0), 0);
  const pendingPicks = picks.length - total;

  const bySport: Stats['bySport'] = {};
  completed.forEach(p => {
    const sport = p.Sport;
    if (!bySport[sport]) {
      bySport[sport] = { wins: 0, total: 0, profit: 0 };
    }
    bySport[sport].total += 1;
    if (p['Win/Loss'] === 'W') bySport[sport].wins += 1;
    bySport[sport].profit += parseFloat(p.Profit) || 0;
  });

  return {
    totalPicks: total,
    wins,
    winRate,
    cumulativeProfit,
    pendingPicks,
    bySport,
  };
}

export async function getTodayPicks(): Promise<Pick[]> {
  const picks = await getTrackerData();
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  return picks.filter(p => p.Date === today && (!p['Win/Loss'] || p['Win/Loss'].trim() === ''));
}