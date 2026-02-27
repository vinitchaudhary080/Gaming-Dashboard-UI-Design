import { useState } from 'react';

export function CurrentBetsPage() {
  const [reportType, setReportType] = useState('');
  const [betFilter, setBetFilter] = useState('all');
  const [showEntries, setShowEntries] = useState('10');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock current bets data
  const bets = [
    { id: 1, eventName: 'India vs Zimbabwe', nation: 'India', userRate: '1.38', amount: 5000, placeDate: '2026-02-26 14:25:30', type: 'back' },
    { id: 2, eventName: 'ICC Men\'s T20 World Cup', nation: 'Australia', userRate: '3.25', amount: 3000, placeDate: '2026-02-26 13:18:45', type: 'lay' },
    { id: 3, eventName: 'England vs Pakistan', nation: 'England', userRate: '2.15', amount: 7500, placeDate: '2026-02-26 12:42:10', type: 'back' },
    { id: 4, eventName: 'India vs Zimbabwe - Fancy Market', nation: '1 over run IND', userRate: '13.94', amount: 2000, placeDate: '2026-02-26 11:55:22', type: 'back' },
    { id: 5, eventName: 'Super Over 2 - Bookmaker', nation: 'India', userRate: '1.85', amount: 4500, placeDate: '2026-02-26 10:30:15', type: 'lay' },
    { id: 6, eventName: 'South Africa vs New Zealand', nation: 'South Africa', userRate: '1.72', amount: 6000, placeDate: '2026-02-25 22:15:40', type: 'back' },
    { id: 7, eventName: 'Bangladesh vs Sri Lanka', nation: 'Bangladesh', userRate: '2.45', amount: 3500, placeDate: '2026-02-25 20:45:55', type: 'back' },
    { id: 8, eventName: 'West Indies vs Ireland', nation: 'West Indies', userRate: '1.95', amount: 5500, placeDate: '2026-02-25 18:20:30', type: 'lay' },
    { id: 9, eventName: 'ICC Men\'s T20 World Cup', nation: 'India', userRate: '2.85', amount: 8000, placeDate: '2026-02-25 16:10:12', type: 'back' },
    { id: 10, eventName: 'Afghanistan vs Netherlands', nation: 'Afghanistan', userRate: '1.68', amount: 4000, placeDate: '2026-02-25 14:35:25', type: 'back' },
  ];

  const filteredBets = bets.filter(bet => {
    const matchesSearch = 
      bet.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bet.nation.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = 
      betFilter === 'all' || 
      (betFilter === 'back' && bet.type === 'back') || 
      (betFilter === 'lay' && bet.type === 'lay');
    
    return matchesSearch && matchesFilter;
  });

  const totalBets = filteredBets.length;
  const totalAmount = filteredBets.reduce((sum, bet) => sum + bet.amount, 0);

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Left Sidebar - Hidden on mobile by default */}
      <div className="hidden lg:block w-full lg:w-64 flex-shrink-0">
        {/* Racing Sports Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4">
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-2.5">
            <h3 className="text-white font-bold text-sm">Racing Sports</h3>
          </div>
          <div className="bg-gray-100">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 border-b border-gray-300 transition-colors">Horse Racing</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 border-b border-gray-300 transition-colors">Greyhound Racing</a>
          </div>
        </div>

        {/* Others Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4">
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-2.5">
            <h3 className="text-white font-bold text-sm">Others</h3>
          </div>
          <div className="bg-gray-100">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 border-b border-gray-300 transition-colors">Our Casino</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 border-b border-gray-300 transition-colors">Our VIP Casino</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 border-b border-gray-300 transition-colors">Our Premium Casino</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 border-b border-gray-300 transition-colors">Our Virtual</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 border-b border-gray-300 transition-colors">Tembo</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 border-b border-gray-300 transition-colors">Live Casino</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 border-b border-gray-300 transition-colors">Slot Game</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 transition-colors">Fantasy Game</a>
          </div>
        </div>

        {/* All Sports Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-2.5">
            <h3 className="text-white font-bold text-sm">All Sports</h3>
          </div>
          <div className="bg-gray-100">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 border-b border-gray-300 transition-colors">⊞ Politics</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 border-b border-gray-300 transition-colors">⊞ Cricket</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 border-b border-gray-300 transition-colors">⊞ Football</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 border-b border-gray-300 transition-colors">⊞ Tennis</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 border-b border-gray-300 transition-colors">⊞ Table Tennis</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 border-b border-gray-300 transition-colors">⊞ Badminton</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 border-b border-gray-300 transition-colors">⊞ Esoccer</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 border-b border-gray-300 transition-colors">⊞ Basketball</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 border-b border-gray-300 transition-colors">⊞ Volleyball</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 border-b border-gray-300 transition-colors">⊞ Snooker</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 border-b border-gray-300 transition-colors">⊞ Ice Hockey</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 border-b border-gray-300 transition-colors">⊞ E Games</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 border-b border-gray-300 transition-colors">⊞ Futsal</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 border-b border-gray-300 transition-colors">⊞ Handball</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 border-b border-gray-300 transition-colors">⊞ Kabaddi</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 transition-colors">⊞ Golf</a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <div className="bg-white rounded-lg shadow-sm">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 px-3 sm:px-4 py-2.5">
            <h2 className="text-white font-bold text-sm">Current Bets</h2>
          </div>

          {/* Filters */}
          <div className="p-3 sm:p-4 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-stretch sm:items-center">
              <select 
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded text-sm bg-white w-full sm:flex-1 sm:min-w-[200px]"
              >
                <option value="">Select Report Type</option>
                <option value="all-bets">All Bets</option>
                <option value="matched-bets">Matched Bets</option>
                <option value="unmatched-bets">Unmatched Bets</option>
              </select>
              <button className="px-4 sm:px-6 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold text-sm rounded hover:from-violet-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg w-full sm:w-auto">
                Submit
              </button>
            </div>
          </div>

          {/* Table Controls */}
          <div className="p-3 sm:p-4 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm text-gray-700">Show</span>
                <select 
                  value={showEntries}
                  onChange={(e) => setShowEntries(e.target.value)}
                  className="px-2 sm:px-3 py-1.5 border border-gray-300 rounded text-xs sm:text-sm bg-white"
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                <span className="text-xs sm:text-sm text-gray-700">Entries</span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <label className="flex items-center gap-1 sm:gap-2">
                  <input 
                    type="radio" 
                    name="betType" 
                    value="all"
                    checked={betFilter === 'all'}
                    onChange={(e) => setBetFilter(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-xs sm:text-sm text-gray-700">All</span>
                </label>
                <label className="flex items-center gap-1 sm:gap-2">
                  <input 
                    type="radio" 
                    name="betType" 
                    value="back"
                    checked={betFilter === 'back'}
                    onChange={(e) => setBetFilter(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-xs sm:text-sm text-gray-700">Back</span>
                </label>
                <label className="flex items-center gap-1 sm:gap-2">
                  <input 
                    type="radio" 
                    name="betType" 
                    value="lay"
                    checked={betFilter === 'lay'}
                    onChange={(e) => setBetFilter(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-xs sm:text-sm text-gray-700">Lay</span>
                </label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-3">
              <div className="text-xs sm:text-sm text-gray-700">
                Total Bets: <span className="font-semibold">{totalBets}</span>{' '}
                Total Amount: <span className="font-semibold">{totalAmount.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-xs sm:text-sm text-gray-700">Search:</span>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search..."
                  className="px-3 py-1.5 border border-gray-300 rounded text-xs sm:text-sm flex-1 sm:w-40"
                />
              </div>
            </div>
          </div>

          {/* Table - Scrollable on mobile */}
          <div className="overflow-x-auto">
            {/* Mobile Card View */}
            <div className="block sm:hidden space-y-3 p-3">
              {filteredBets.map(bet => (
                <div key={bet.id} className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <div className="text-[10px] text-gray-500 mb-1">EVENT NAME</div>
                      <div className="text-xs font-semibold text-gray-900">{bet.eventName}</div>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold ${
                      bet.type === 'back' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-pink-100 text-pink-700'
                    }`}>
                      {bet.type === 'back' ? 'BACK' : 'LAY'}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-2 pb-2 border-b border-gray-100">
                    <div>
                      <div className="text-[10px] text-gray-500 mb-1">NATION</div>
                      <div className="text-xs font-medium text-gray-700">{bet.nation}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-500 mb-1">USER RATE</div>
                      <div className="text-xs font-bold text-violet-600">{bet.userRate}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="text-[10px] text-gray-500 mb-1">AMOUNT</div>
                      <div className="text-sm font-bold text-gray-900">{bet.amount.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-500 mb-1">PLACE DATE</div>
                      <div className="text-[10px] text-gray-600">{bet.placeDate}</div>
                    </div>
                  </div>
                </div>
              ))}
              
              {filteredBets.length === 0 && (
                <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
                  <p className="text-gray-500 text-sm">No bets found</p>
                  <p className="text-gray-400 text-xs mt-1">Place a bet to get started</p>
                </div>
              )}
            </div>

            {/* Desktop Table View */}
            <table className="hidden sm:table w-full min-w-[600px]">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-300">
                  <th className="px-2 sm:px-4 py-2 sm:py-2.5 text-left text-[10px] sm:text-xs font-semibold text-gray-700 uppercase">Event Name</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-2.5 text-left text-[10px] sm:text-xs font-semibold text-gray-700 uppercase">Nation</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-2.5 text-left text-[10px] sm:text-xs font-semibold text-gray-700 uppercase">User Rate</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-2.5 text-left text-[10px] sm:text-xs font-semibold text-gray-700 uppercase">Amount</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-2.5 text-left text-[10px] sm:text-xs font-semibold text-gray-700 uppercase">Place Date</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-2.5 text-center text-[10px] sm:text-xs font-semibold text-gray-700 uppercase w-12"></th>
                </tr>
              </thead>
              <tbody>
                {filteredBets.map(bet => (
                  <tr key={bet.id} className="border-b border-gray-200 hover:bg-violet-50/30 transition-colors">
                    <td className="px-2 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-sm text-gray-700">{bet.eventName}</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-sm text-gray-700">{bet.nation}</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-sm font-semibold text-violet-600">{bet.userRate}</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-sm font-semibold text-gray-900">{bet.amount.toLocaleString()}</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-sm text-gray-600 whitespace-nowrap">{bet.placeDate}</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-2.5 text-center">
                      <span className={`inline-flex items-center px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold ${
                        bet.type === 'back' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-pink-100 text-pink-700'
                      }`}>
                        {bet.type === 'back' ? 'Back' : 'Lay'}
                      </span>
                    </td>
                  </tr>
                ))}
                {filteredBets.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-4 py-12 text-center text-gray-500 text-xs sm:text-sm">
                      No data available in table
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-3 sm:p-4 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs sm:text-sm text-gray-700">
              <span className="text-center sm:text-left">Showing 1 to {filteredBets.length} of {filteredBets.length} entries</span>
              <div className="flex gap-1">
                <button className="px-2 sm:px-3 py-1 border border-gray-300 rounded text-xs sm:text-sm hover:bg-violet-50 transition-colors">
                  Previous
                </button>
                <button className="px-2 sm:px-3 py-1 bg-violet-600 text-white rounded text-xs sm:text-sm">
                  1
                </button>
                <button className="px-2 sm:px-3 py-1 border border-gray-300 rounded text-xs sm:text-sm hover:bg-violet-50 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}