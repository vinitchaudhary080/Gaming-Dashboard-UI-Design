import { useState } from 'react';

export function CurrentBetsEmptyPage() {
  const [reportType, setReportType] = useState('');
  const [betFilter, setBetFilter] = useState('all');
  const [showEntries, setShowEntries] = useState('10');
  const [searchTerm, setSearchTerm] = useState('');

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
      <div className="flex-1 overflow-x-auto">
        <div className="bg-white rounded-lg shadow-sm min-w-[320px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 px-4 py-2.5">
            <h2 className="text-white font-bold text-sm">Current Bets</h2>
          </div>

          {/* Filters */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center flex-wrap">
              <select 
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded text-sm flex-1 min-w-[200px] bg-white"
              >
                <option value="">Select Report Type</option>
                <option value="matched-bet">Matched Bet</option>
                <option value="unmatched-bet">Unmatched Bet</option>
                <option value="deleted-bet">Deleted Bet</option>
              </select>

              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="betType"
                    value="all"
                    checked={betFilter === 'all'}
                    onChange={(e) => setBetFilter(e.target.value)}
                    className="w-4 h-4 text-violet-600"
                  />
                  <span className="text-sm text-gray-700">All</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="betType"
                    value="back"
                    checked={betFilter === 'back'}
                    onChange={(e) => setBetFilter(e.target.value)}
                    className="w-4 h-4 text-violet-600"
                  />
                  <span className="text-sm text-gray-700">Back</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="betType"
                    value="lay"
                    checked={betFilter === 'lay'}
                    onChange={(e) => setBetFilter(e.target.value)}
                    className="w-4 h-4 text-violet-600"
                  />
                  <span className="text-sm text-gray-700">Lay</span>
                </label>
              </div>

              <button className="px-6 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold text-sm rounded hover:from-violet-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg">
                Submit
              </button>
            </div>
          </div>

          {/* Table Controls */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">Show</span>
                <select 
                  value={showEntries}
                  onChange={(e) => setShowEntries(e.target.value)}
                  className="px-3 py-1.5 border border-gray-300 rounded text-sm bg-white"
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                <span className="text-sm text-gray-700">Entries</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">Search:</span>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="0 records..."
                  className="px-3 py-1.5 border border-gray-300 rounded text-sm w-40"
                />
              </div>
            </div>
          </div>

          {/* Table - Scrollable on mobile */}
          <div className="overflow-x-auto">
            {/* Mobile Card View - Empty State */}
            <div className="block sm:hidden p-3">
              <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-violet-50 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm font-medium">No active bets found</p>
                <p className="text-gray-400 text-xs mt-1">Place a bet to see it here</p>
              </div>
            </div>

            {/* Desktop Table View - Empty State */}
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
                <tr>
                  <td colSpan={6} className="px-4 py-16 text-center">
                    <div className="flex flex-col items-center justify-center gap-3">
                      <div className="w-16 h-16 rounded-full bg-violet-50 flex items-center justify-center">
                        <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <p className="text-gray-500 text-sm font-medium">No active bets found</p>
                      <p className="text-gray-400 text-xs">Place a bet to see it here</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-700">
              <span>Showing 0 to 0 of 0 entries</span>
              <div className="flex gap-1">
                <button className="px-3 py-1 border border-gray-300 rounded text-gray-400 cursor-not-allowed bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded text-gray-400 cursor-not-allowed bg-gray-50">
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