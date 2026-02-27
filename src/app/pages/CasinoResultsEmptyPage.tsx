import { useState } from 'react';

export function CasinoResultsEmptyPage() {
  const [selectedDate, setSelectedDate] = useState('2026-02-26');
  const [casinoType, setCasinoType] = useState('');
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
            <h2 className="text-white font-bold text-sm">Casino Results</h2>
          </div>

          {/* Filters */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <input 
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded text-sm bg-white"
              />
              <select 
                value={casinoType}
                onChange={(e) => setCasinoType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded text-sm flex-1 min-w-[200px] bg-white"
              >
                <option value="">Select Casino Type</option>
                <option value="teen-patti">Teen Patti</option>
                <option value="andar-bahar">Andar Bahar</option>
                <option value="dragon-tiger">Dragon Tiger</option>
                <option value="lucky-7">Lucky 7</option>
                <option value="roulette">Roulette</option>
                <option value="baccarat">Baccarat</option>
              </select>
              <button className="px-6 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold text-sm rounded hover:from-violet-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg whitespace-nowrap">
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm font-medium">No casino results found</p>
                <p className="text-gray-400 text-xs mt-1">Select a casino type and date to view results</p>
              </div>
            </div>

            {/* Desktop Table View - Empty State */}
            <table className="hidden sm:table w-full min-w-[400px]">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-300">
                  <th className="px-2 sm:px-4 py-2 sm:py-2.5 text-left text-[10px] sm:text-xs font-semibold text-gray-700 uppercase">Round ID</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-2.5 text-left text-[10px] sm:text-xs font-semibold text-gray-700 uppercase">Winner</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={2} className="px-4 py-16 text-center">
                    <div className="flex flex-col items-center justify-center gap-3">
                      <div className="w-16 h-16 rounded-full bg-violet-50 flex items-center justify-center">
                        <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <p className="text-gray-500 text-sm font-medium">No casino results found</p>
                      <p className="text-gray-400 text-xs">Select a casino type and date to view results</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex justify-between items-center text-sm text-gray-700">
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