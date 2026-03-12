import React from 'react';
import { Stats } from '@/lib/statistics';

interface PerformanceTableProps {
  stats: Stats;
}

export default function PerformanceTable2({ stats }: PerformanceTableProps) {
  const { bySport, totalPicks, wins, winRate, cumulativeProfit } = stats;

  const sportRows = Object.entries(bySport).map(([sport, data]) => ({
    sport,
    record: `${data.wins}-${data.total - data.wins}`,
    winRate: ((data.wins / data.total) * 100).toFixed(1) + '%',
    pnl: data.profit >= 0 ? `+$${data.profit.toFixed(0)}` : `-$${Math.abs(data.profit).toFixed(0)}`,
    roi: ((data.profit / (data.total * 100)) * 100).toFixed(1) + '%', // rough ROI per bet
    highlight: false,
  }));

  const overallRow = {
    sport: 'Overall',
    record: `${wins}-${totalPicks - wins}`,
    winRate: winRate.toFixed(1) + '%',
    pnl: cumulativeProfit >= 0 ? `+$${cumulativeProfit.toFixed(0)}` : `-$${Math.abs(cumulativeProfit).toFixed(0)}`,
    roi: ((cumulativeProfit / (totalPicks * 100)) * 100).toFixed(1) + '%',
    highlight: true,
  };

  const rows = [...sportRows, overallRow];

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-800">
            <th className="px-6 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">Sport</th>
            <th className="px-6 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">Record</th>
            <th className="px-6 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">Win Rate</th>
            <th className="px-6 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">P&L</th>
            <th className="px-6 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">ROI</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={row.sport}
              className={`border-b border-gray-800/50 transition-colors duration-300 ${
                row.highlight
                  ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20'
                  : 'hover:bg-gray-800/30'
              }`}
            >
              <td className="px-6 py-4 text-sm font-bold text-white">{row.sport}</td>
              <td className="px-6 py-4 text-sm font-mono text-gray-300">{row.record}</td>
              <td className="px-6 py-4 text-sm font-bold text-cyan-400">{row.winRate}</td>
              <td className={`px-6 py-4 text-sm font-bold ${row.pnl.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                {row.pnl}
              </td>
              <td className="px-6 py-4 text-sm font-bold text-gray-400">{row.roi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}