import { useState } from 'react';
import { Check, X, CheckCircle2, Eye, Clock, TrendingUp, AlertCircle, Download, Share2 } from 'lucide-react';

export function IndiaZimbabwePage() {
  const [betsPlaced, setBetsPlaced] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [confirmedBets, setConfirmedBets] = useState<any[]>([]);
  const [showDetails, setShowDetails] = useState(false);
  
  // Mock bet data
  const myBets = [
    {
      id: 1,
      selection: 'INDIA',
      type: 'back',
      odds: 1.36,
      stake: 5000,
      potentialWin: 1800,
      time: '14:23:15'
    },
    {
      id: 2,
      selection: 'IND Over 235.5 (Yes)',
      type: 'lay',
      odds: 1.95,
      stake: 2000,
      potentialWin: 1900,
      time: '14:25:42'
    },
    {
      id: 3,
      selection: 'Rohit Sharma Over 45.5',
      type: 'back',
      odds: 2.10,
      stake: 1500,
      potentialWin: 1650,
      time: '14:27:08'
    }
  ];

  const totalStake = myBets.reduce((sum, bet) => sum + bet.stake, 0);
  const totalPotentialWin = myBets.reduce((sum, bet) => sum + bet.potentialWin, 0);

  const handlePlaceBets = () => {
    // Simulate placing bets
    const newConfirmedBets = myBets.map(bet => ({
      ...bet,
      betId: `BET${Math.floor(Math.random() * 1000000)}`,
      placedAt: new Date().toLocaleTimeString(),
      status: 'confirmed'
    }));
    
    setConfirmedBets(newConfirmedBets);
    setBetsPlaced(true);
    setShowSuccess(true);
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const handleClearBets = () => {
    setBetsPlaced(false);
    setConfirmedBets([]);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Detailed Bet View Modal */}
      {showDetails && betsPlaced && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-lg">Bet Details</h2>
                  <p className="text-white/80 text-xs">INDIA v ZIMBABWE</p>
                </div>
              </div>
              <button 
                onClick={() => setShowDetails(false)}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
              {/* Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-gray-50">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-violet-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Total Bets</div>
                      <div className="text-2xl font-bold text-gray-900">{confirmedBets.length}</div>
                    </div>
                  </div>
                  <div className="text-[10px] text-gray-500">All bets confirmed</div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Total Stake</div>
                      <div className="text-2xl font-bold text-gray-900">₹{totalStake.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="text-[10px] text-gray-500">Amount at risk</div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Potential Win</div>
                      <div className="text-2xl font-bold text-emerald-600">₹{totalPotentialWin.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="text-[10px] text-emerald-600">If all bets win</div>
                </div>
              </div>

              {/* Detailed Bet List */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900">All Bets</h3>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-xs font-semibold text-gray-700 transition-colors">
                      <Download className="w-3.5 h-3.5" />
                      Export
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-xs font-semibold text-gray-700 transition-colors">
                      <Share2 className="w-3.5 h-3.5" />
                      Share
                    </button>
                  </div>
                </div>

                {confirmedBets.map((bet, index) => (
                  <div key={bet.betId} className="bg-white border-2 border-gray-100 rounded-xl p-5 hover:border-violet-200 transition-colors">
                    {/* Bet Header */}
                    <div className="flex items-start justify-between mb-4 pb-4 border-b border-gray-100">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2.5 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-bold">
                            Bet #{index + 1}
                          </span>
                          <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                            bet.type === 'back' 
                              ? 'bg-blue-100 text-blue-700' 
                              : 'bg-pink-100 text-pink-700'
                          }`}>
                            {bet.type.toUpperCase()}
                          </span>
                          <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">
                            ACTIVE
                          </span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-1">{bet.selection}</h4>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            Placed at {bet.placedAt}
                          </div>
                          <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                          <div>ID: {bet.betId}</div>
                        </div>
                      </div>
                    </div>

                    {/* Bet Details Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Odds</div>
                        <div className="text-xl font-bold text-violet-600">{bet.odds}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Stake</div>
                        <div className="text-xl font-bold text-gray-900">₹{bet.stake.toLocaleString()}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">To Win</div>
                        <div className="text-xl font-bold text-emerald-600">₹{bet.potentialWin.toLocaleString()}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Payout</div>
                        <div className="text-xl font-bold text-blue-600">₹{(bet.stake + bet.potentialWin).toLocaleString()}</div>
                      </div>
                    </div>

                    {/* Match Details */}
                    <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-lg p-4">
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Market Type:</span>
                          <span className="font-semibold text-gray-900">
                            {bet.selection.includes('Over') ? 'Fancy' : 
                             bet.selection.includes('Sharma') || bet.selection.includes('Kohli') ? 'Player Runs' : 
                             'Match Odds'}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Bet Type:</span>
                          <span className="font-semibold text-gray-900 capitalize">{bet.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Status:</span>
                          <span className="font-semibold text-emerald-600">Open</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Settlement:</span>
                          <span className="font-semibold text-gray-900">Pending</span>
                        </div>
                      </div>
                    </div>

                    {/* Profit/Loss Scenarios */}
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="text-xs font-semibold text-blue-900 mb-2">Profit/Loss Scenarios</div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-blue-700">If Win:</span>
                          <span className="font-bold text-emerald-600">+₹{bet.potentialWin.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-blue-700">If Lose:</span>
                          <span className="font-bold text-red-600">-₹{bet.stake.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer Summary */}
              <div className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 border-t-2 border-violet-200">
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-4">Summary</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Number of Bets</span>
                      <span className="font-bold text-gray-900">{confirmedBets.length}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Total Staked</span>
                      <span className="font-bold text-gray-900">₹{totalStake.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Total Potential Win</span>
                      <span className="font-bold text-emerald-600">₹{totalPotentialWin.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Total Potential Payout</span>
                      <span className="font-bold text-blue-600">₹{(totalStake + totalPotentialWin).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-sm font-bold text-gray-900">Net Exposure</span>
                      <span className="text-lg font-bold text-violet-600">₹{totalStake.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => setShowDetails(false)}
                    className="px-4 py-2.5 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-all"
                  >
                    Close
                  </button>
                  <button className="px-4 py-2.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-semibold text-sm hover:from-violet-700 hover:to-purple-700 transition-all shadow-md">
                    Print Receipt
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 space-y-4 overflow-x-auto">
        {/* Match Header */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden min-w-[320px]">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 px-4 py-2.5">
            <h2 className="text-white font-bold text-sm">INDIA v ZIMBABWE</h2>
          </div>
          
          {/* Match Odds */}
          <div>
            <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-gray-700">Match Odds</span>
                <span className="text-gray-600">Min: 100 | Max: 50K</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left px-4 py-2 text-xs font-semibold text-gray-700"></th>
                    <th className="text-center px-2 py-2 text-xs font-semibold text-gray-700 bg-[#73b9e8] text-white w-20">Back</th>
                    <th className="text-center px-2 py-2 text-xs font-semibold text-gray-700 bg-[#73b9e8] text-white w-20">Back</th>
                    <th className="text-center px-2 py-2 text-xs font-semibold text-gray-700 bg-[#73b9e8] text-white w-20">Back</th>
                    <th className="text-center px-2 py-2 text-xs font-semibold text-gray-700 bg-[#f8b5ca] text-white w-20">Lay</th>
                    <th className="text-center px-2 py-2 text-xs font-semibold text-gray-700 bg-[#f8b5ca] text-white w-20">Lay</th>
                    <th className="text-center px-2 py-2 text-xs font-semibold text-gray-700 bg-[#f8b5ca] text-white w-20">Lay</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-2.5 font-semibold text-sm text-gray-800">INDIA</td>
                    <td className="px-2 py-2 text-center bg-[#bae1f5] hover:bg-[#aad1e5] cursor-pointer">
                      <div className="font-bold text-sm text-gray-900">1.36</div>
                      <div className="text-[10px] text-gray-700">15K</div>
                    </td>
                    <td className="px-2 py-2 text-center bg-[#9cd4f1] hover:bg-[#8cc4e1] cursor-pointer">
                      <div className="font-bold text-sm text-gray-900">1.37</div>
                      <div className="text-[10px] text-gray-700">12K</div>
                    </td>
                    <td className="px-2 py-2 text-center bg-[#73b9e8] hover:bg-[#63a9d8] cursor-pointer">
                      <div className="font-bold text-sm text-white">1.38</div>
                      <div className="text-[10px] text-white">10K</div>
                    </td>
                    <td className="px-2 py-2 text-center bg-[#f8b5ca] hover:bg-[#e8a5ba] cursor-pointer">
                      <div className="font-bold text-sm text-white">1.39</div>
                      <div className="text-[10px] text-white">8K</div>
                    </td>
                    <td className="px-2 py-2 text-center bg-[#fccfdc] hover:bg-[#ecbfcc] cursor-pointer">
                      <div className="font-bold text-sm text-gray-900">1.40</div>
                      <div className="text-[10px] text-gray-700">6K</div>
                    </td>
                    <td className="px-2 py-2 text-center bg-[#fde5ed] hover:bg-[#edd5dd] cursor-pointer">
                      <div className="font-bold text-sm text-gray-900">1.41</div>
                      <div className="text-[10px] text-gray-700">5K</div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-2.5 font-semibold text-sm text-gray-800">ZIMBABWE</td>
                    <td className="px-2 py-2 text-center bg-[#bae1f5] hover:bg-[#aad1e5] cursor-pointer">
                      <div className="font-bold text-sm text-gray-900">3.45</div>
                      <div className="text-[10px] text-gray-700">8K</div>
                    </td>
                    <td className="px-2 py-2 text-center bg-[#9cd4f1] hover:bg-[#8cc4e1] cursor-pointer">
                      <div className="font-bold text-sm text-gray-900">3.50</div>
                      <div className="text-[10px] text-gray-700">6K</div>
                    </td>
                    <td className="px-2 py-2 text-center bg-[#73b9e8] hover:bg-[#63a9d8] cursor-pointer">
                      <div className="font-bold text-sm text-white">3.55</div>
                      <div className="text-[10px] text-white">5K</div>
                    </td>
                    <td className="px-2 py-2 text-center bg-[#f8b5ca] hover:bg-[#e8a5ba] cursor-pointer">
                      <div className="font-bold text-sm text-white">3.60</div>
                      <div className="text-[10px] text-white">4K</div>
                    </td>
                    <td className="px-2 py-2 text-center bg-[#fccfdc] hover:bg-[#ecbfcc] cursor-pointer">
                      <div className="font-bold text-sm text-gray-900">3.65</div>
                      <div className="text-[10px] text-gray-700">3K</div>
                    </td>
                    <td className="px-2 py-2 text-center bg-[#fde5ed] hover:bg-[#edd5dd] cursor-pointer">
                      <div className="font-bold text-sm text-gray-900">3.70</div>
                      <div className="text-[10px] text-gray-700">2K</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bookmaker */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden min-w-[320px]">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 px-4 py-2.5">
            <h2 className="text-white font-bold text-sm">Bookmaker</h2>
          </div>
          
          <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-gray-700">Min: 100 | Max: 25K</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px]">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left px-4 py-2 text-xs font-semibold text-gray-700"></th>
                  <th className="text-center px-4 py-2 text-xs font-semibold bg-[#72BBEF] text-white w-32">Back</th>
                  <th className="text-center px-4 py-2 text-xs font-semibold bg-[#FAA9BA] text-white w-32">Lay</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-sm text-gray-800">INDIA</td>
                  <td className="px-4 py-3 text-center bg-[#72BBEF] hover:bg-[#62abdf] cursor-pointer">
                    <div className="font-bold text-sm text-white">38</div>
                    <div className="text-[10px] text-white mt-0.5">100-25K</div>
                  </td>
                  <td className="px-4 py-3 text-center bg-[#FAA9BA] hover:bg-[#ea99aa] cursor-pointer">
                    <div className="font-bold text-sm text-white">40</div>
                    <div className="text-[10px] text-white mt-0.5">100-25K</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-sm text-gray-800">ZIMBABWE</td>
                  <td className="px-4 py-3 text-center bg-[#72BBEF] hover:bg-[#62abdf] cursor-pointer">
                    <div className="font-bold text-sm text-white">62</div>
                    <div className="text-[10px] text-white mt-0.5">100-25K</div>
                  </td>
                  <td className="px-4 py-3 text-center bg-[#FAA9BA] hover:bg-[#ea99aa] cursor-pointer">
                    <div className="font-bold text-sm text-white">64</div>
                    <div className="text-[10px] text-white mt-0.5">100-25K</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Fancy */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden min-w-[320px]">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 px-4 py-2.5">
            <h2 className="text-white font-bold text-sm">Fancy</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px]">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left px-4 py-2 text-xs font-semibold text-gray-700"></th>
                  <th className="text-center px-4 py-2 text-xs font-semibold bg-[#FAA9BA] text-white w-28">No</th>
                  <th className="text-center px-4 py-2 text-xs font-semibold bg-[#72BBEF] text-white w-28">Yes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2.5 text-sm text-gray-800">IND 1st 6 Over Run</td>
                  <td className="px-4 py-2.5 text-center bg-[#FAA9BA] hover:bg-[#ea99aa] cursor-pointer">
                    <div className="font-bold text-sm text-white">52</div>
                    <div className="text-[10px] text-white mt-0.5">180</div>
                  </td>
                  <td className="px-4 py-2.5 text-center bg-[#72BBEF] hover:bg-[#62abdf] cursor-pointer">
                    <div className="font-bold text-sm text-white">54</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2.5 text-sm text-gray-800">IND 1st 10 Over Run</td>
                  <td className="px-4 py-2.5 text-center bg-[#FAA9BA] hover:bg-[#ea99aa] cursor-pointer">
                    <div className="font-bold text-sm text-white">88</div>
                    <div className="text-[10px] text-white mt-0.5">180</div>
                  </td>
                  <td className="px-4 py-2.5 text-center bg-[#72BBEF] hover:bg-[#62abdf] cursor-pointer">
                    <div className="font-bold text-sm text-white">90</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2.5 text-sm text-gray-800">IND 1st 15 Over Run</td>
                  <td className="px-4 py-2.5 text-center bg-gray-100">
                    <div className="font-bold text-sm text-gray-400">-</div>
                  </td>
                  <td className="px-4 py-2.5 text-center bg-gray-100">
                    <div className="font-bold text-sm text-gray-400">-</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2.5 text-sm text-gray-800">ZIMB 1st 6 Over Run</td>
                  <td className="px-4 py-2.5 text-center bg-gray-100">
                    <div className="font-bold text-sm text-gray-400">-</div>
                  </td>
                  <td className="px-4 py-2.5 text-center bg-gray-100">
                    <div className="font-bold text-sm text-gray-400">-</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2.5 text-sm text-gray-800">ZIMB 1st 10 Over Run</td>
                  <td className="px-4 py-2.5 text-center bg-gray-100">
                    <div className="font-bold text-sm text-gray-400">-</div>
                  </td>
                  <td className="px-4 py-2.5 text-center bg-gray-100">
                    <div className="font-bold text-sm text-gray-400">-</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2.5 text-sm text-gray-800">ZIMB 1st 15 Over Run</td>
                  <td className="px-4 py-2.5 text-center bg-gray-100">
                    <div className="font-bold text-sm text-gray-400">-</div>
                  </td>
                  <td className="px-4 py-2.5 text-center bg-gray-100">
                    <div className="font-bold text-sm text-gray-400">-</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2.5 text-sm text-gray-800">6 over Run INDIA vs ZIMB</td>
                  <td className="px-4 py-2.5 text-center bg-[#FAA9BA] hover:bg-[#ea99aa] cursor-pointer">
                    <div className="font-bold text-sm text-white">58</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                  <td className="px-4 py-2.5 text-center bg-[#72BBEF] hover:bg-[#62abdf] cursor-pointer">
                    <div className="font-bold text-sm text-white">59</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2.5 text-sm text-gray-800">15 over Run INDIA vs ZIMB</td>
                  <td className="px-4 py-2.5 text-center bg-[#FAA9BA] hover:bg-[#ea99aa] cursor-pointer">
                    <div className="font-bold text-sm text-white">142</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                  <td className="px-4 py-2.5 text-center bg-[#72BBEF] hover:bg-[#62abdf] cursor-pointer">
                    <div className="font-bold text-sm text-white">143</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2.5 text-sm text-gray-800">INDIA vs ZIMB 1st wkt partnership</td>
                  <td className="px-4 py-2.5 text-center bg-[#FAA9BA] hover:bg-[#ea99aa] cursor-pointer">
                    <div className="font-bold text-sm text-white">29</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                  <td className="px-4 py-2.5 text-center bg-[#72BBEF] hover:bg-[#62abdf] cursor-pointer">
                    <div className="font-bold text-sm text-white">30</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2.5 text-sm text-gray-800">3 over runs INDIA vs ZIMB</td>
                  <td className="px-4 py-2.5 text-center bg-[#FAA9BA] hover:bg-[#ea99aa] cursor-pointer">
                    <div className="font-bold text-sm text-white">26</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                  <td className="px-4 py-2.5 text-center bg-[#72BBEF] hover:bg-[#62abdf] cursor-pointer">
                    <div className="font-bold text-sm text-white">27</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2.5 text-sm text-gray-800">R Sharma run IND vs ZIMB</td>
                  <td className="px-4 py-2.5 text-center bg-[#FAA9BA] hover:bg-[#ea99aa] cursor-pointer">
                    <div className="font-bold text-sm text-white">32</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                  <td className="px-4 py-2.5 text-center bg-[#72BBEF] hover:bg-[#62abdf] cursor-pointer">
                    <div className="font-bold text-sm text-white">34</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2.5 text-sm text-gray-800">S Gill run IND vs ZIMB</td>
                  <td className="px-4 py-2.5 text-center bg-[#FAA9BA] hover:bg-[#ea99aa] cursor-pointer">
                    <div className="font-bold text-sm text-white">27</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                  <td className="px-4 py-2.5 text-center bg-[#72BBEF] hover:bg-[#62abdf] cursor-pointer">
                    <div className="font-bold text-sm text-white">29</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2.5 text-sm text-gray-800">V Kohli run IND vs ZIMB</td>
                  <td className="px-4 py-2.5 text-center bg-[#FAA9BA] hover:bg-[#ea99aa] cursor-pointer">
                    <div className="font-bold text-sm text-white">45</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                  <td className="px-4 py-2.5 text-center bg-[#72BBEF] hover:bg-[#62abdf] cursor-pointer">
                    <div className="font-bold text-sm text-white">47</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2.5 text-sm text-gray-800">S Iyer run IND vs ZIMB</td>
                  <td className="px-4 py-2.5 text-center bg-[#FAA9BA] hover:bg-[#ea99aa] cursor-pointer">
                    <div className="font-bold text-sm text-white">28</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                  <td className="px-4 py-2.5 text-center bg-[#72BBEF] hover:bg-[#62abdf] cursor-pointer">
                    <div className="font-bold text-sm text-white">30</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2.5 text-sm text-gray-800">KL Rahul run IND vs ZIMB</td>
                  <td className="px-4 py-2.5 text-center bg-[#FAA9BA] hover:bg-[#ea99aa] cursor-pointer">
                    <div className="font-bold text-sm text-white">25</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                  <td className="px-4 py-2.5 text-center bg-[#72BBEF] hover:bg-[#62abdf] cursor-pointer">
                    <div className="font-bold text-sm text-white">27</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2.5 text-sm text-gray-800">H Pandya run IND vs ZIMB</td>
                  <td className="px-4 py-2.5 text-center bg-[#FAA9BA] hover:bg-[#ea99aa] cursor-pointer">
                    <div className="font-bold text-sm text-white">18</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                  <td className="px-4 py-2.5 text-center bg-[#72BBEF] hover:bg-[#62abdf] cursor-pointer">
                    <div className="font-bold text-sm text-white">20</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2.5 text-sm text-gray-800">INDIA 1st inning fifty</td>
                  <td className="px-4 py-2.5 text-center bg-[#FAA9BA] hover:bg-[#ea99aa] cursor-pointer">
                    <div className="font-bold text-sm text-white">1.11</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                  <td className="px-4 py-2.5 text-center bg-[#72BBEF] hover:bg-[#62abdf] cursor-pointer">
                    <div className="font-bold text-sm text-white">1.12</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2.5 text-sm text-gray-800">ZIMB 1st inning fifty</td>
                  <td className="px-4 py-2.5 text-center bg-[#FAA9BA] hover:bg-[#ea99aa] cursor-pointer">
                    <div className="font-bold text-sm text-white">1.11</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                  <td className="px-4 py-2.5 text-center bg-[#72BBEF] hover:bg-[#62abdf] cursor-pointer">
                    <div className="font-bold text-sm text-white">1.12</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2.5 text-sm text-gray-800">INDIA vs ZIMB total match fours</td>
                  <td className="px-4 py-2.5 text-center bg-[#FAA9BA] hover:bg-[#ea99aa] cursor-pointer">
                    <div className="font-bold text-sm text-white">23</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                  <td className="px-4 py-2.5 text-center bg-[#72BBEF] hover:bg-[#62abdf] cursor-pointer">
                    <div className="font-bold text-sm text-white">24</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2.5 text-sm text-gray-800">INDIA vs ZIMB total match sixes</td>
                  <td className="px-4 py-2.5 text-center bg-[#FAA9BA] hover:bg-[#ea99aa] cursor-pointer">
                    <div className="font-bold text-sm text-white">9</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                  <td className="px-4 py-2.5 text-center bg-[#72BBEF] hover:bg-[#62abdf] cursor-pointer">
                    <div className="font-bold text-sm text-white">10</div>
                    <div className="text-[10px] text-white mt-0.5">100</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right Sidebar - My Bet */}
      <div className="w-full lg:w-80 bg-white rounded-lg shadow-sm h-fit lg:sticky lg:top-4">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 px-4 py-2.5 rounded-t-lg">
          <h2 className="text-white font-bold text-sm">My Bets</h2>
        </div>
        
        {!betsPlaced ? (
          <>
            {/* Before Placing Bets */}
            <div className="border-b border-gray-200">
              <div className="grid grid-cols-3 bg-gray-100">
                <div className="px-3 py-2 text-xs font-bold text-gray-700">Selection</div>
                <div className="px-3 py-2 text-xs font-bold text-gray-700 text-center">Odds</div>
                <div className="px-3 py-2 text-xs font-bold text-gray-700 text-right">Stake</div>
              </div>
            </div>

            <div className="overflow-y-auto max-h-[300px]">
              {myBets.map(bet => (
                <div key={bet.id} className="border-b border-gray-100 hover:bg-violet-50/30 transition-colors">
                  <div className="p-3">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-gray-900 mb-1">{bet.selection}</div>
                        <div className="text-[10px] text-gray-500">{bet.time}</div>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        bet.type === 'back' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-pink-100 text-pink-700'
                      }`}>
                        {bet.type.toUpperCase()}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <div className="text-[10px] text-gray-500 mb-0.5">Odds</div>
                        <div className="font-bold text-violet-600">{bet.odds}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-500 mb-0.5">Stake</div>
                        <div className="font-bold text-gray-900">₹{bet.stake.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-500 mb-0.5">To Win</div>
                        <div className="font-bold text-emerald-600">₹{bet.potentialWin.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-gradient-to-br from-violet-50 to-purple-50 border-t-2 border-violet-200">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-gray-700">Total Stake</span>
                <span className="text-sm font-bold text-gray-900">₹{totalStake.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-semibold text-gray-700">Potential Returns</span>
                <span className="text-sm font-bold text-emerald-600">₹{totalPotentialWin.toLocaleString()}</span>
              </div>
              <button 
                onClick={handlePlaceBets}
                className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-2.5 rounded-lg font-semibold text-sm hover:from-violet-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
              >
                Place Bets
              </button>
            </div>
          </>
        ) : (
          <>
            {/* After Placing Bets - Success State */}
            {showSuccess && (
              <div className="p-4 bg-gradient-to-br from-emerald-50 to-green-50 border-b-2 border-emerald-200 animate-in fade-in duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-emerald-900">Bets Confirmed!</div>
                    <div className="text-[10px] text-emerald-700">Your bets have been placed successfully</div>
                  </div>
                  <button 
                    onClick={() => setShowSuccess(false)}
                    className="text-emerald-600 hover:text-emerald-800 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="bg-white/60 rounded-lg p-2.5 border border-emerald-200">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-emerald-800 font-semibold">{confirmedBets.length} Bets Confirmed</span>
                    <span className="text-emerald-600 font-bold">₹{totalStake.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Confirmed Bets List */}
            <div className="p-3 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-gray-700">Confirmed Bets</h3>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold">
                  {confirmedBets.length} Active
                </span>
              </div>
            </div>

            <div className="overflow-y-auto max-h-[400px]">
              {confirmedBets.map(bet => (
                <div key={bet.betId} className="border-b border-gray-100 hover:bg-violet-50/30 transition-colors">
                  <div className="p-3">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-gray-900 mb-1">{bet.selection}</div>
                        <div className="flex items-center gap-2">
                          <div className="text-[10px] text-gray-500">ID: {bet.betId}</div>
                          <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                          <div className="text-[10px] text-gray-500">{bet.placedAt}</div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          bet.type === 'back' 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'bg-pink-100 text-pink-700'
                        }`}>
                          {bet.type.toUpperCase()}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200">
                          CONFIRMED
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 text-xs bg-gray-50 rounded-lg p-2">
                      <div>
                        <div className="text-[10px] text-gray-500 mb-0.5">Odds</div>
                        <div className="font-bold text-violet-600">{bet.odds}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-500 mb-0.5">Stake</div>
                        <div className="font-bold text-gray-900">₹{bet.stake.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-500 mb-0.5">To Win</div>
                        <div className="font-bold text-emerald-600">₹{bet.potentialWin.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary & Actions */}
            <div className="p-4 bg-gradient-to-br from-violet-50 to-purple-50 border-t-2 border-violet-200">
              <div className="bg-white rounded-lg p-3 mb-3 shadow-sm">
                <div className="flex justify-between items-center mb-2 pb-2 border-b border-gray-100">
                  <span className="text-xs font-semibold text-gray-600">Total Staked</span>
                  <span className="text-sm font-bold text-gray-900">₹{totalStake.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center mb-2 pb-2 border-b border-gray-100">
                  <span className="text-xs font-semibold text-gray-600">Potential Win</span>
                  <span className="text-sm font-bold text-emerald-600">₹{totalPotentialWin.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-gray-700">Net Exposure</span>
                  <span className="text-base font-bold text-violet-600">₹{totalStake.toLocaleString()}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={handleClearBets}
                  className="px-3 py-2 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-xs hover:bg-gray-50 transition-all shadow-sm"
                >
                  Clear All
                </button>
                <button 
                  onClick={() => setShowDetails(!showDetails)}
                  className="px-3 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-semibold text-xs hover:from-violet-700 hover:to-purple-700 transition-all shadow-md"
                >
                  {showDetails ? 'Hide Details' : 'View Details'}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}