import React from 'react';
import { Pick } from '@/lib/statistics';

interface PicksGridProps {
  picks: Pick[];
}

export default function PicksGrid2({ picks }: PicksGridProps) {
  if (picks.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-bold text-gray-300 mb-4">No picks for today</h3>
        <p className="text-gray-500">Check back later for today&apos;s top plays.</p>
      </div>
    );
  }

  const getSportBadge = (sport: string) => {
    const colors: Record<string, string> = {
      NBA: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      CBB: 'bg-green-500/20 text-green-300 border-green-500/30',
      MLB: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      PGA: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    };
    return colors[sport] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  const formatGame = (pick: Pick) => {
    return `${pick['Away Team']} @ ${pick['Home Team']}`;
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {picks.map((pick, idx) => (
        <div
          key={idx}
          className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <div className="flex justify-between items-start mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getSportBadge(pick.Sport)}`}>
              {pick.Sport}
            </span>
            <span className="text-sm text-gray-400">{pick.Date}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{formatGame(pick)}</h3>
          <div className="mb-4">
            <div className="text-2xl font-bold text-cyan-400">{pick['Bet Pick']}</div>
            <div className="text-lg text-gray-300">Odds: {pick.Odds}</div>
            <div className="text-sm text-gray-500">Type: {pick['Bet Type']}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-400">Pending</div>
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg text-sm font-medium transition-colors">
              Track
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}