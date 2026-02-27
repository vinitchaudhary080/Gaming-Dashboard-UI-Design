import { useState } from 'react';

export function AccountStatementPage() {
  const [startDate, setStartDate] = useState('2026-02-19');
  const [endDate, setEndDate] = useState('2026-02-26');
  const [reportType, setReportType] = useState('deposit-withdraw');
  const [showEntries, setShowEntries] = useState('10');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock transaction data
  const transactions = [
    { id: 1, date: '2026-02-26 14:32:15', srNo: 'TXN001234', credit: 5000, debit: 0, pts: 5000, remark: 'Deposit via UPI' },
    { id: 2, date: '2026-02-26 13:45:22', srNo: 'TXN001233', credit: 0, debit: 1500, pts: 3500, remark: 'Bet Placed - India vs Zimbabwe' },
    { id: 3, date: '2026-02-26 12:18:45', srNo: 'TXN001232', credit: 2500, debit: 0, pts: 5000, remark: 'Won Bet - T20 World Cup' },
    { id: 4, date: '2026-02-25 19:22:30', srNo: 'TXN001231', credit: 0, debit: 2000, pts: 2500, remark: 'Casino - Teen Patti Round #4521' },
    { id: 5, date: '2026-02-25 17:15:10', srNo: 'TXN001230', credit: 3500, debit: 0, pts: 4500, remark: 'Won Bet - England vs Pakistan' },
    { id: 6, date: '2026-02-25 15:42:18', srNo: 'TXN001229', credit: 0, debit: 1000, pts: 1000, remark: 'Bet Placed - Fancy Market' },
    { id: 7, date: '2026-02-24 21:05:33', srNo: 'TXN001228', credit: 10000, debit: 0, pts: 2000, remark: 'Deposit via Bank Transfer' },
    { id: 8, date: '2026-02-24 18:30:45', srNo: 'TXN001227', credit: 0, debit: 3000, pts: -8000, remark: 'Lost Bet - Super Over2' },
    { id: 9, date: '2026-02-24 16:12:20', srNo: 'TXN001226', credit: 0, debit: 2500, pts: -5000, remark: 'Casino - Dragon Tiger Round #3456' },
    { id: 10, date: '2026-02-23 20:45:55', srNo: 'TXN001225', credit: 8000, debit: 0, pts: -2500, remark: 'Won Bet - Bookmaker Market' },
    { id: 11, date: '2026-02-23 14:28:12', srNo: 'TXN001224', credit: 0, debit: 5000, pts: -10500, remark: 'Bet Placed - Match Odds' },
    { id: 12, date: '2026-02-22 19:55:40', srNo: 'TXN001223', credit: 0, debit: 1500, pts: -5500, remark: 'Casino - Andar Bahar Round #2341' },
    { id: 13, date: '2026-02-22 16:40:25', srNo: 'TXN001222', credit: 4000, debit: 0, pts: -4000, remark: 'Won Bet - Cricket Match' },
    { id: 14, date: '2026-02-21 22:15:30', srNo: 'TXN001221', credit: 0, debit: 3500, pts: -8000, remark: 'Lost Bet - Tennis Match' },
    { id: 15, date: '2026-02-20 11:30:00', srNo: 'TXN001220', credit: 15000, debit: 0, pts: -4500, remark: 'Deposit via Net Banking' },
  ];

  const filteredTransactions = transactions.filter(txn => 
    txn.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
    txn.srNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    txn.remark.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalCredit = transactions.reduce((sum, txn) => sum + txn.credit, 0);
  const totalDebit = transactions.reduce((sum, txn) => sum + txn.debit, 0);

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Left Sidebar - Hidden on mobile by default, can be toggled */}
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
            <h2 className="text-white font-bold text-sm">Account Statement</h2>
          </div>

          {/* Filters */}
          <div className="p-3 sm:p-4 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-stretch sm:items-center">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full">
                <input 
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded text-sm bg-white w-full sm:w-auto"
                />
                <input 
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded text-sm bg-white w-full sm:w-auto"
                />
              </div>
              <select 
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded text-sm bg-white w-full sm:flex-1 sm:min-w-[200px]"
              >
                <option value="deposit-withdraw">Deposit/Withdraw Reports</option>
                <option value="game-report">Game Report</option>
                <option value="account-summary">Account Summary</option>
              </select>
              <button className="px-4 sm:px-6 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold text-sm rounded hover:from-violet-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg whitespace-nowrap w-full sm:w-auto">
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
              {filteredTransactions.map(txn => (
                <div key={txn.id} className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2 pb-2 border-b border-gray-100">
                    <div className="flex-1">
                      <div className="text-[10px] text-gray-500 mb-1">DATE & TIME</div>
                      <div className="text-xs font-medium text-gray-700">{txn.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-gray-500 mb-1">SR NO</div>
                      <div className="text-xs font-semibold text-violet-600">{txn.srNo}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-2">
                    <div>
                      <div className="text-[10px] text-gray-500 mb-1">CREDIT</div>
                      <div className="text-xs font-bold text-emerald-600">
                        {txn.credit > 0 ? txn.credit.toLocaleString() : '-'}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-500 mb-1">DEBIT</div>
                      <div className="text-xs font-bold text-red-600">
                        {txn.debit > 0 ? txn.debit.toLocaleString() : '-'}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-500 mb-1">PTS</div>
                      <div className={`text-xs font-bold ${txn.pts >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                        {txn.pts.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-100">
                    <div className="text-[10px] text-gray-500 mb-1">REMARK</div>
                    <div className="text-xs text-gray-700">{txn.remark}</div>
                  </div>
                </div>
              ))}
              
              {/* Total Summary Card */}
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 border-2 border-violet-200 rounded-lg p-3 shadow-md">
                <div className="text-xs font-bold text-gray-900 mb-2">SUMMARY</div>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <div className="text-[10px] text-gray-600 mb-1">Total Credit</div>
                    <div className="text-sm font-bold text-emerald-600">{totalCredit.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-600 mb-1">Total Debit</div>
                    <div className="text-sm font-bold text-red-600">{totalDebit.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-600 mb-1">Balance</div>
                    <div className="text-sm font-bold text-violet-600">{(totalCredit - totalDebit).toLocaleString()}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Table View */}
            <table className="hidden sm:table w-full min-w-[600px]">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-300">
                  <th className="px-2 sm:px-4 py-2 sm:py-2.5 text-left text-[10px] sm:text-xs font-semibold text-gray-700 uppercase">Date</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-2.5 text-left text-[10px] sm:text-xs font-semibold text-gray-700 uppercase">Sr no</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-2.5 text-left text-[10px] sm:text-xs font-semibold text-gray-700 uppercase">Credit</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-2.5 text-left text-[10px] sm:text-xs font-semibold text-gray-700 uppercase">Debit</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-2.5 text-left text-[10px] sm:text-xs font-semibold text-gray-700 uppercase">Pts</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-2.5 text-left text-[10px] sm:text-xs font-semibold text-gray-700 uppercase">Remark</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map(txn => (
                  <tr key={txn.id} className="border-b border-gray-200 hover:bg-violet-50/30 transition-colors">
                    <td className="px-2 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-sm text-gray-700 whitespace-nowrap">{txn.date}</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-sm text-gray-700">{txn.srNo}</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-sm font-semibold text-emerald-600">{txn.credit > 0 ? txn.credit.toLocaleString() : '-'}</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-sm font-semibold text-red-600">{txn.debit > 0 ? txn.debit.toLocaleString() : '-'}</td>
                    <td className={`px-2 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-sm font-semibold ${txn.pts >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>{txn.pts.toLocaleString()}</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-sm text-gray-700">{txn.remark}</td>
                  </tr>
                ))}
                <tr className="bg-violet-50 font-semibold">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-[10px] sm:text-sm text-gray-900" colSpan={2}>Total</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-[10px] sm:text-sm text-emerald-600">{totalCredit.toLocaleString()}</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-[10px] sm:text-sm text-red-600">{totalDebit.toLocaleString()}</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-[10px] sm:text-sm text-gray-900" colSpan={2}>Balance: {(totalCredit - totalDebit).toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-3 sm:p-4 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs sm:text-sm text-gray-700">
              <span className="text-center sm:text-left">Showing 1 to {filteredTransactions.length} of {filteredTransactions.length} entries</span>
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