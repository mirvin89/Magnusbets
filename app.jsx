const { useState, useEffect } = React;

const BetTracker = () => {
  const [bets, setBets] = useState([]);
  const [form, setForm] = useState({ event: '', wager: '', odds: '', outcome: 'pending' });
  const [stats, setStats] = useState({ totalBets: 0, totalWagered: 0, totalProfit: 0, winRate: 0, roi: 0 });
  const [filter, setFilter] = useState('all');
  const STORAGE_KEY = 'magnusbets';

  useEffect(() =&gt; {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setBets(JSON.parse(saved));
    } else {
      fetch('data.json')
        .then(r =&gt; r.json())
        .then(data =&gt; {
          const sampleBets = data.map((d, i) =&gt; ({
            id: Date.now() + i,
            date: new Date().toLocaleDateString(),
            event: `${d.game} - ${d.pick}`,
            wager: d.stake.toString(),
            odds: d.roi.toString(),
            outcome: 'pending'
          }));
          setBets(sampleBets);
        })
        .catch(() =&gt; {});
    }
  }, []);

  useEffect(() =&gt; {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bets));
    const totalBets = bets.length;
    const totalWagered = bets.reduce((sum, bet) =&gt; sum + parseFloat(bet.wager || 0), 0);
    const wins = bets.filter(bet =&gt; bet.outcome === 'win').length;
    const totalProfit = bets.reduce((sum, bet) =&gt; {
      const w = parseFloat(bet.wager || 0);
      const o = parseFloat(bet.odds || 1);
      switch (bet.outcome) {
        case 'win': return sum + (w * (o - 1));
        case 'loss': return sum - w;
        case 'push': return sum;
        default: return sum;
      }
    }, 0);
    const winRate = totalBets ? ((wins / totalBets) * 100).toFixed(1) : 0;
    const roi = totalWagered ? ((totalProfit / totalWagered) * 100).toFixed(1) : 0;
    setStats({ totalBets, totalWagered: totalWagered.toFixed(2), totalProfit: totalProfit.toFixed(2), winRate, roi });
  }, [bets]);

  const addBet = (e) =&gt; {
    e.preventDefault();
    if (!form.event || !form.wager || !form.odds) return;
    setBets([...bets, { id: Date.now(), date: new Date().toLocaleDateString(), ...form }]);
    setForm({ event: '', wager: '', odds: '', outcome: 'pending' });
  };

  const updateOutcome = (id, outcome) =&gt; {
    setBets(bets.map(bet =&gt; bet.id === id ? { ...bet, outcome } : bet));
  };

  const deleteBet = (id) =&gt; {
    setBets(bets.filter(bet =&gt; bet.id !== id));
  };

  const filteredBets = bets.filter(bet =&gt; filter === 'all' || bet.outcome === filter);

  return (
    &lt;div className="max-w-6xl mx-auto p-4 md:p-8 space-y-8 animate-fade-in"&gt;
      &lt;div className="text-center"&gt;
        &lt;h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"&gt;
          MagnusBets Tracker
        &lt;/h1&gt;
        &lt;p className="text-xl text-gray-300"&gt;Track your bets, analyze performance, stay sharp.&lt;/p&gt;
      &lt;/div&gt;

      {/* Stats Cards */}
      &lt;div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"&gt;
        &lt;div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 shadow-2xl"&gt;
          &lt;h3 className="text-sm font-medium text-gray-400 mb-2"&gt;Total Bets&lt;/h3&gt;
          &lt;p className="text-3xl font-bold text-white"&gt;{stats.totalBets}&lt;/p&gt;
        &lt;/div&gt;
        &lt;div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 shadow-2xl"&gt;
          &lt;h3 className="text-sm font-medium text-gray-400 mb-2"&gt;Win Rate&lt;/h3&gt;
          &lt;p className="text-3xl font-bold text-green-400"&gt;{stats.winRate}%&lt;/p&gt;
        &lt;/div&gt;
        &lt;div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 shadow-2xl"&gt;
          &lt;h3 className="text-sm font-medium text-gray-400 mb-2"&gt;Total Wagered&lt;/h3&gt;
          &lt;p className="text-3xl font-bold text-blue-400"&gt;${stats.totalWagered}&lt;/p&gt;
        &lt;/div&gt;
        &lt;div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 shadow-2xl"&gt;
          &lt;h3 className="text-sm font-medium text-gray-400 mb-2"&gt;Total Profit&lt;/h3&gt;
          &lt;p className={`text-3xl font-bold ${parseFloat(stats.totalProfit) &gt;= 0 ? 'text-green-400' : 'text-red-400'}`}&gt;
            ${stats.totalProfit}
          &lt;/p&gt;
        &lt;/div&gt;
        &lt;div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 shadow-2xl"&gt;
          &lt;h3 className="text-sm font-medium text-gray-400 mb-2"&gt;ROI&lt;/h3&gt;
          &lt;p className={`text-3xl font-bold ${parseFloat(stats.roi) &gt;= 0 ? 'text-green-400' : 'text-red-400'}`}&gt;
            {stats.roi}%
          &lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      {/* Add Bet Form */}
      &lt;form onSubmit={addBet} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 shadow-2xl"&gt;
        &lt;h2 className="text-2xl font-bold mb-6 text-center"&gt;Add New Bet&lt;/h2&gt;
        &lt;div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"&gt;
          &lt;input
            type="text"
            placeholder="Event (e.g., Lakers vs Warriors)"
            value={form.event}
            onChange={(e) =&gt; setForm({ ...form, event: e.target.value })}
            className="bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          /&gt;
          &lt;input
            type="number"
            placeholder="Wager ($)"
            value={form.wager}
            onChange={(e) =&gt; setForm({ ...form, wager: e.target.value })}
            className="bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          /&gt;
          &lt;input
            type="number"
            step="0.01"
            placeholder="Odds (decimal)"
            value={form.odds}
            onChange={(e) =&gt; setForm({ ...form, odds: e.target.value })}
            className="bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          /&gt;
          &lt;select
            value={form.outcome}
            onChange={(e) =&gt; setForm({ ...form, outcome: e.target.value })}
            className="bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          &gt;
            &lt;option value="pending"&gt;Pending&lt;/option&gt;
            &lt;option value="win"&gt;Win&lt;/option&gt;
            &lt;option value="loss"&gt;Loss&lt;/option&gt;
            &lt;option value="push"&gt;Push&lt;/option&gt;
          &lt;/select&gt;
        &lt;/div&gt;
        &lt;button
          type="submit"
          className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        &gt;
          Add Bet
        &lt;/button&gt;
      &lt;/form&gt;

      {/* Filter */}
      &lt;div className="flex flex-wrap gap-2 justify-center"&gt;
        {['all', 'pending', 'win', 'loss', 'push'].map(f =&gt; (
          &lt;button
            key={f}
            onClick={() =&gt; setFilter(f)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === f
                ? 'bg-purple-500 text-white shadow-lg'
                : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700 border border-slate-600 hover:border-slate-500'
            }`}
          &gt;
            {f.toUpperCase()}
          &lt;/button&gt;
        ))}
      &lt;/div&gt;

      {/* Bets Table */}
      &lt;div className="overflow-x-auto"&gt;
        &lt;table className="w-full bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700 shadow-2xl overflow-hidden"&gt;
          &lt;thead&gt;
            &lt;tr className="bg-slate-700/50"&gt;
              &lt;th className="p-4 text-left font-bold text-gray-200"&gt;Date&lt;/th&gt;
              &lt;th className="p-4 text-left font-bold text-gray-200"&gt;Event&lt;/th&gt;
              &lt;th className="p-4 text-left font-bold text-gray-200 hidden md:table-cell"&gt;Wager&lt;/th&gt;
              &lt;th className="p-4 text-left font-bold text-gray-200 hidden lg:table-cell"&gt;Odds&lt;/th&gt;
              &lt;th className="p-4 text-left font-bold text-gray-200"&gt;Outcome&lt;/th&gt;
              &lt;th className="p-4 text-left font-bold text-gray-200"&gt;P/L&lt;/th&gt;
              &lt;th className="p-4 text-right font-bold text-gray-200"&gt;Actions&lt;/th&gt;
            &lt;/tr&gt;
          &lt;/thead&gt;
          &lt;tbody&gt;
            {filteredBets.map(bet =&gt; {
              const wager = parseFloat(bet.wager);
              const odds = parseFloat(bet.odds);
              let pl = 0;
              if (bet.outcome === 'win') pl = wager * (odds - 1);
              else if (bet.outcome === 'loss') pl = -wager;
              return (
                &lt;tr key={bet.id} className="border-t border-slate-700/50 hover:bg-slate-700/30 transition-all"&gt;
                  &lt;td className="p-4 font-medium"&gt;{bet.date}&lt;/td&gt;
                  &lt;td className="p-4"&gt;{bet.event}&lt;/td&gt;
                  &lt;td className="p-4 hidden md:table-cell"&gt;${wager.toFixed(2)}&lt;/td&gt;
                  &lt;td className="p-4 hidden lg:table-cell"&gt;{odds.toFixed(2)}&lt;/td&gt;
                  &lt;td className="p-4"&gt;
                    &lt;span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      bet.outcome === 'win' ? 'bg-green-500/20 text-green-300' :
                      bet.outcome === 'loss' ? 'bg-red-500/20 text-red-300' :
                      bet.outcome === 'push' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-gray-500/20 text-gray-300'
                    }`}&gt;
                      {bet.outcome.toUpperCase()}
                    &lt;/span&gt;
                  &lt;/td&gt;
                  &lt;td className={`p-4 font-bold ${
                    pl &gt;= 0 ? 'text-green-400' : 'text-red-400'
                  }`}&gt;
                    ${pl.toFixed(2)}
                  &lt;/td&gt;
                  &lt;td className="p-4"&gt;
                    &lt;div className="flex gap-2"&gt;
                      &lt;select
                        value={bet.outcome}
                        onChange={(e) =&gt; updateOutcome(bet.id, e.target.value)}
                        className="bg-slate-700/50 border border-slate-600 rounded-lg px-2 py-1 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      &gt;
                        &lt;option value="pending"&gt;Pending&lt;/option&gt;
                        &lt;option value="win"&gt;Win&lt;/option&gt;
                        &lt;option value="loss"&gt;Loss&lt;/option&gt;
                        &lt;option value="push"&gt;Push&lt;/option&gt;
                      &lt;/select&gt;
                      &lt;button
                        onClick={() =&gt; deleteBet(bet.id)}
                        className="text-red-400 hover:text-red-300 p-1 rounded-lg hover:bg-red-500/20 transition-all"
                      &gt;
                        🗑️
                      &lt;/button&gt;
                    &lt;/div&gt;
                  &lt;/td&gt;
                &lt;/tr&gt;
              );
            })}
            {filteredBets.length === 0 &amp;&amp; (
              &lt;tr&gt;
                &lt;td colSpan="7" className="p-12 text-center text-gray-500"&gt;
                  No bets matching filter. Add one above! 🎯
                &lt;/td&gt;
              &lt;/tr&gt;
            )}
          &lt;/tbody&gt;
        &lt;/table&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(&lt;BetTracker /&gt;);