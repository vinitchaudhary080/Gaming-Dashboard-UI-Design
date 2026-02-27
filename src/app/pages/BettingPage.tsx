import { useState, useEffect } from 'react';

type BettingTab = 'match-odds' | 'bookmaker' | 'fancy1' | 'super-over2';

interface BettingPageProps {
  initialTab?: BettingTab;
}

export function BettingPage({ initialTab = 'super-over2' }: BettingPageProps) {
  const [activeTab, setActiveTab] = useState<BettingTab>(initialTab);
  const [countdown, setCountdown] = useState(15);
  const lastResults = ['4', 'E', 'E', 'E', 'E', 'E', '6', 'T', 'E', 'E'];

  // Countdown timer effect
  useEffect(() => {
    if (activeTab === 'super-over2' && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            return 15; // Reset to 15 when it reaches 0
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [activeTab, countdown]);

  const fancyBets = [
    { label: '0.5 Over Wicket ENG' },
    { label: '0.5 Over One ENG' },
    { label: '0.5 Over Three ENG' },
    { label: '0.5 Over Zero ENG' },
    { label: '0.5 Over Two ENG' },
    { label: '0.5 Over Boundry ENG' },
  ];

  const fancy1Bets = [
    { label: 'Common Wicket IND', backOdds: '7.89', layOdds: '-', backStake: 'Min: 100.00\nMax: 10K', layStake: 'Min: 100.00\nMax: 10K' },
    { label: '0.3 Over Wicket IND', backOdds: '7.89', layOdds: '-', backStake: 'Min: 100.00\nMax: 10K', layStake: 'Min: 100.00\nMax: 10K' },
    { label: '0.3 Over One IND', backOdds: '6.32', layOdds: '-', backStake: 'Min: 100.00\nMax: 10K', layStake: 'Min: 100.00\nMax: 10K' },
    { label: '0.3 Over Three IND', backOdds: '7.89', layOdds: '-', backStake: 'Min: 100.00\nMax: 10K', layStake: 'Min: 100.00\nMax: 10K' },
    { label: 'Common Boundry IND', backOdds: '6.32', layOdds: '-', backStake: 'Min: 100.00\nMax: 10K', layStake: 'Min: 100.00\nMax: 10K' },
    { label: '0.3 Over Zero IND', backOdds: '6.32', layOdds: '-', backStake: 'Min: 100.00\nMax: 10K', layStake: 'Min: 100.00\nMax: 10K' },
    { label: '0.3 Over Two IND', backOdds: '6.32', layOdds: '-', backStake: 'Min: 100.00\nMax: 10K', layStake: 'Min: 100.00\nMax: 10K' },
    { label: '0.3 Over Boundry IND', backOdds: '3.18', layOdds: '-', backStake: 'Min: 100.00\nMax: 10K', layStake: 'Min: 100.00\nMax: 10K' },
  ];

  // Format countdown to show individual digits
  const formatCountdown = (time: number) => {
    const tens = Math.floor(time / 10);
    const ones = time % 10;
    return { tens, ones };
  };

  const { tens, ones } = formatCountdown(countdown);

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Main Content Area */}
      <div className="flex-1 space-y-0 overflow-x-auto">
        {/* Match Header */}
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 px-3 sm:px-4 py-2 sm:py-3 border-b border-slate-500 min-w-[380px]">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h1 className="text-white font-bold text-sm sm:text-base">IND vs ENG</h1>
              <p className="text-gray-300 text-[10px] sm:text-xs mt-0.5">Test Match • Live</p>
            </div>
            <div className="text-white text-xs sm:text-sm">
              <span className="text-gray-300">Match ID:</span> <span className="font-semibold">12345678</span>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white border-b border-gray-300 overflow-x-auto min-w-[380px]">
          <div className="flex min-w-max">
            <button
              onClick={() => setActiveTab('match-odds')}
              className={`px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold transition-colors border-b-2 whitespace-nowrap ${
                activeTab === 'match-odds'
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Match Odds
            </button>
            <button
              onClick={() => setActiveTab('bookmaker')}
              className={`px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold transition-colors border-b-2 whitespace-nowrap ${
                activeTab === 'bookmaker'
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Bookmaker
            </button>
            <button
              onClick={() => setActiveTab('fancy1')}
              className={`px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold transition-colors border-b-2 whitespace-nowrap ${
                activeTab === 'fancy1'
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Fancy1
            </button>
            <button
              onClick={() => setActiveTab('super-over2')}
              className={`px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold transition-colors border-b-2 whitespace-nowrap ${
                activeTab === 'super-over2'
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              SUPER OVER2
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'super-over2' && (
          <div className="space-y-0">
            {/* Header with Rules */}
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between border-b border-slate-500 flex-wrap gap-2">
              <div className="flex items-center gap-2 sm:gap-3">
                <h2 className="text-white font-bold text-sm sm:text-base">SUPER OVER2</h2>
                <button className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm underline">
                  Rules
                </button>
              </div>
              <div className="text-white text-xs sm:text-sm">
                Round ID: <span className="font-semibold">8571213446</span>
              </div>
            </div>

            {/* Black Video/Content Area */}
            <div className="bg-black aspect-video w-full flex items-center justify-center">
              {/* Countdown Timer */}
              <div className="flex items-center gap-2 sm:gap-4">
                {/* Tens digit */}
                <div className="w-16 h-24 sm:w-24 sm:h-32 bg-gradient-to-b from-slate-700 to-slate-800 rounded-lg sm:rounded-xl flex items-center justify-center shadow-2xl border border-slate-600">
                  <span className="text-white font-bold text-5xl sm:text-7xl">{tens}</span>
                </div>
                {/* Ones digit */}
                <div className="w-16 h-24 sm:w-24 sm:h-32 bg-gradient-to-b from-slate-700 to-slate-800 rounded-lg sm:rounded-xl flex items-center justify-center shadow-2xl border border-slate-600">
                  <span className="text-white font-bold text-5xl sm:text-7xl">{ones}</span>
                </div>
              </div>
            </div>

            {/* Bookmaker Section */}
            <div>
              {/* Bookmaker Header */}
              <div className="bg-gradient-to-r from-slate-700 to-slate-600 px-3 sm:px-4 py-2 border-b border-slate-500">
                <h3 className="text-white font-bold text-xs sm:text-sm">Bookmaker</h3>
              </div>

              {/* Min/Max Info */}
              <div className="bg-gray-100 px-3 sm:px-4 py-2 border-b border-gray-300">
                <p className="text-xs sm:text-sm text-gray-700">
                  <span className="font-semibold">Min:</span> 100.00{' '}
                  <span className="font-semibold ml-2 sm:ml-4">Max:</span> 3L
                </p>
              </div>

              {/* Scrollable container for mobile */}
              <div className="overflow-x-auto">
                <div className="min-w-[400px]">
                  {/* Betting Grid Header */}
                  <div className="grid grid-cols-[1fr_auto] bg-white border-b border-gray-300">
                    <div></div>
                    <div className="grid grid-cols-2 w-44 sm:w-48">
                      <div className="bg-[#72BBEF] text-white text-center py-2 px-2 sm:px-4 font-bold text-xs sm:text-sm border-l border-white">
                        Back
                      </div>
                      <div className="bg-[#FAA9BA] text-white text-center py-2 px-2 sm:px-4 font-bold text-xs sm:text-sm border-l border-white">
                        Lay
                      </div>
                    </div>
                  </div>

                  {/* IND Row */}
                  <div className="grid grid-cols-[1fr_auto] bg-white border-b border-gray-200 hover:bg-gray-50">
                    <div className="px-3 sm:px-4 py-3">
                      <span className="font-semibold text-gray-800 text-sm">IND</span>
                    </div>
                    <div className="grid grid-cols-2 w-44 sm:w-48">
                      <button className="bg-gradient-to-b from-slate-600 to-slate-700 text-center py-3 px-2 sm:px-4 border-l border-gray-300 relative overflow-hidden group">
                        <span className="text-red-500 font-bold text-xs sm:text-sm">SUSPENDED</span>
                      </button>
                      <button className="bg-gradient-to-b from-slate-600 to-slate-700 text-center py-3 px-2 sm:px-4 border-l border-gray-300 relative overflow-hidden group">
                        <span className="text-red-500 font-bold text-xs sm:text-sm opacity-0">SUSPENDED</span>
                      </button>
                    </div>
                  </div>

                  {/* ENG Row */}
                  <div className="grid grid-cols-[1fr_auto] bg-white border-b border-gray-200 hover:bg-gray-50">
                    <div className="px-3 sm:px-4 py-3">
                      <span className="font-semibold text-gray-800 text-sm">ENG</span>
                    </div>
                    <div className="grid grid-cols-2 w-44 sm:w-48">
                      <button className="bg-gradient-to-b from-slate-600 to-slate-700 text-center py-3 px-2 sm:px-4 border-l border-gray-300 relative overflow-hidden group">
                        <span className="text-red-500 font-bold text-xs sm:text-sm opacity-0">SUSPENDED</span>
                      </button>
                      <button className="bg-gradient-to-b from-slate-600 to-slate-700 text-center py-3 px-2 sm:px-4 border-l border-gray-300 relative overflow-hidden group">
                        <span className="text-red-500 font-bold text-xs sm:text-sm opacity-0">SUSPENDED</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fancy Section */}
              <div className="mt-4">
                {/* Fancy Header */}
                <div className="bg-gradient-to-r from-slate-700 to-slate-600 px-3 sm:px-4 py-2 border-b border-slate-500">
                  <h3 className="text-white font-bold text-xs sm:text-sm">Fancy</h3>
                </div>

                {/* Scrollable container for mobile */}
                <div className="overflow-x-auto">
                  <div className="min-w-[400px]">
                    {/* Fancy Betting Options */}
                    <div className="bg-white">
                      {/* 1 over run than IND */}
                      <div className="grid grid-cols-[1fr_auto] border-b border-gray-200 hover:bg-gray-50">
                        <div className="px-3 sm:px-4 py-3">
                          <span className="font-semibold text-gray-800 text-xs sm:text-sm">1 over run than IND</span>
                        </div>
                        <div className="grid grid-cols-2 w-44 sm:w-48">
                          <button className="bg-[#FAA9BA] text-center py-2.5 sm:py-3 px-2 sm:px-4 border-l border-gray-300 hover:bg-[#f89aae] transition-colors">
                            <div className="text-white font-bold text-sm sm:text-base">No</div>
                            <div className="text-white text-[10px] sm:text-xs mt-1">13</div>
                            <div className="text-white text-[9px] sm:text-[10px]">93</div>
                            <div className="text-white text-[8px] sm:text-[9px] mt-0.5 leading-tight">Min: 1L<br/>Max: 1L</div>
                          </button>
                          <button className="bg-[#72BBEF] text-center py-2.5 sm:py-3 px-2 sm:px-4 border-l border-gray-300 hover:bg-[#62abdf] transition-colors">
                            <div className="text-white font-bold text-sm sm:text-base">Yes</div>
                            <div className="text-white text-[10px] sm:text-xs mt-1">13</div>
                            <div className="text-white text-[9px] sm:text-[10px]">94</div>
                            <div className="text-white text-[8px] sm:text-[9px] mt-0.5 leading-tight">Min: 1L<br/>Max: 100.00</div>
                          </button>
                        </div>
                      </div>

                      {/* 1 over run IND */}
                      <div className="grid grid-cols-[1fr_auto] border-b border-gray-200 hover:bg-gray-50">
                        <div className="px-3 sm:px-4 py-3">
                          <span className="font-semibold text-gray-800 text-xs sm:text-sm">1 over run IND</span>
                        </div>
                        <div className="grid grid-cols-2 w-44 sm:w-48">
                          <button className="bg-[#FAA9BA] text-center py-2.5 sm:py-3 px-2 sm:px-4 border-l border-gray-300 hover:bg-[#f89aae] transition-colors">
                            <div className="text-white font-bold text-sm sm:text-base">No</div>
                            <div className="text-white text-[10px] sm:text-xs mt-1">11</div>
                            <div className="text-white text-[9px] sm:text-[10px]">93</div>
                            <div className="text-white text-[8px] sm:text-[9px] mt-0.5 leading-tight">Min: 1L<br/>Max: 1L</div>
                          </button>
                          <button className="bg-[#72BBEF] text-center py-2.5 sm:py-3 px-2 sm:px-4 border-l border-gray-300 hover:bg-[#62abdf] transition-colors">
                            <div className="text-white font-bold text-sm sm:text-base">Yes</div>
                            <div className="text-white text-[10px] sm:text-xs mt-1">11</div>
                            <div className="text-white text-[9px] sm:text-[10px]">94</div>
                            <div className="text-white text-[8px] sm:text-[9px] mt-0.5 leading-tight">Min: 1L<br/>Max: 100.00</div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fancy1 Section */}
              <div className="mt-4">
                {/* Fancy1 Header */}
                <div className="bg-gradient-to-r from-slate-700 to-slate-600 px-3 sm:px-4 py-2 border-b border-slate-500">
                  <h3 className="text-white font-bold text-xs sm:text-sm">Fancy1</h3>
                </div>

                {/* Fancy1 Betting Grid - Responsive: 1 column on mobile, 2 on desktop */}
                <div className="bg-white p-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                    {/* All Bets */}
                    {fancy1Bets.map((bet, index) => (
                      <div key={index} className="grid grid-cols-[1fr_auto] bg-gray-50 rounded border border-gray-200">
                        <div className="px-2 sm:px-3 py-2 flex items-center min-w-0">
                          <span className="font-semibold text-gray-800 text-[10px] sm:text-xs truncate">{bet.label}</span>
                        </div>
                        <div className="grid grid-cols-2 w-32 sm:w-auto shrink-0">
                          <button className="bg-[#72BBEF] text-center py-1.5 sm:py-2 px-1.5 sm:px-2 hover:bg-[#62abdf] transition-colors">
                            <div className="text-white font-bold text-xs sm:text-sm">{bet.backOdds}</div>
                            <div className="text-white text-[8px] sm:text-[9px] mt-0.5 leading-tight">Min: 100<br/>Max: 10K</div>
                          </button>
                          <button className="bg-[#FAA9BA] text-center py-1.5 sm:py-2 px-1.5 sm:px-2 hover:bg-[#f89aae] transition-colors border-l border-white">
                            <div className="text-white font-bold text-xs sm:text-sm">{bet.layOdds}</div>
                            <div className="text-white text-[8px] sm:text-[9px] mt-0.5 leading-tight">Min: 100<br/>Max: 10K</div>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Last Result Section */}
              <div className="mt-4">
                {/* Last Result Header */}
                <div className="bg-gradient-to-r from-slate-700 to-slate-600 px-4 py-2 flex items-center justify-between">
                  <h3 className="text-white font-bold text-sm">Last Result</h3>
                  <button className="text-blue-400 hover:text-blue-300 text-sm underline">
                    View All
                  </button>
                </div>

                {/* Result Circles */}
                <div className="bg-white px-4 py-6 border border-gray-200">
                  <div className="flex items-center justify-center gap-2">
                    {lastResults.map((result, index) => (
                      <div
                        key={index}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center text-white font-bold text-sm shadow-md border-2 border-emerald-800"
                      >
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'fancy1' && (
          <div className="space-y-0">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 px-4 py-2.5 border-b border-slate-500">
              <h2 className="text-white font-bold text-base">Fancy1</h2>
            </div>

            {/* Betting Grid */}
            <div>
              {/* Grid Header */}
              <div className="grid grid-cols-[1fr_auto_1fr] gap-4 bg-white p-2 border-b border-gray-200">
                {/* Left Column Header */}
                <div className="grid grid-cols-[1fr_auto]">
                  <div></div>
                  <div className="grid grid-cols-2 w-48">
                    <div className="bg-[#72BBEF] text-white text-center py-2 px-4 font-bold text-sm">
                      Back
                    </div>
                    <div className="bg-[#FAA9BA] text-white text-center py-2 px-4 font-bold text-sm">
                      Lay
                    </div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="w-px"></div>

                {/* Right Column Header */}
                <div className="grid grid-cols-[1fr_auto]">
                  <div></div>
                  <div className="grid grid-cols-2 w-48">
                    <div className="bg-[#72BBEF] text-white text-center py-2 px-4 font-bold text-sm">
                      Back
                    </div>
                    <div className="bg-[#FAA9BA] text-white text-center py-2 px-4 font-bold text-sm">
                      Lay
                    </div>
                  </div>
                </div>
              </div>

              {/* Betting Rows - 3 rows with 2 columns each */}
              <div className="bg-white">
                {[0, 1, 2].map((rowIndex) => (
                  <div key={rowIndex} className="grid grid-cols-[1fr_auto_1fr] gap-4 p-2 border-t border-gray-200">
                    {/* Left Bet */}
                    <div className="grid grid-cols-[1fr_auto] bg-gray-50 rounded">
                      <div className="px-4 py-3 flex items-center">
                        <span className="font-semibold text-gray-800 text-sm">
                          {fancyBets[rowIndex * 2].label}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 w-48">
                        <button className="bg-gradient-to-b from-slate-600 to-slate-700 text-center py-3 px-2 relative overflow-hidden group">
                          <span className="text-red-500 font-bold text-xs">SUSPENDED</span>
                          <div className="text-gray-400 text-xs mt-0.5">Max: 2L</div>
                        </button>
                        <button className="bg-gradient-to-b from-slate-600 to-slate-700 text-center py-3 px-2 relative overflow-hidden group">
                          <span className="text-red-500 font-bold text-xs opacity-0">SUSPENDED</span>
                          <div className="text-gray-400 text-xs mt-0.5 opacity-0">Max: 2L</div>
                        </button>
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="w-px bg-gray-200"></div>

                    {/* Right Bet */}
                    {fancyBets[rowIndex * 2 + 1] && (
                      <div className="grid grid-cols-[1fr_auto] bg-gray-50 rounded">
                        <div className="px-4 py-3 flex items-center">
                          <span className="font-semibold text-gray-800 text-sm">
                            {fancyBets[rowIndex * 2 + 1].label}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 w-48">
                          <button className="bg-gradient-to-b from-slate-600 to-slate-700 text-center py-3 px-2 relative overflow-hidden group">
                            <span className="text-red-500 font-bold text-xs">SUSPENDED</span>
                            <div className="text-gray-400 text-xs mt-0.5">Max: 2L</div>
                          </button>
                          <button className="bg-gradient-to-b from-slate-600 to-slate-700 text-center py-3 px-2 relative overflow-hidden group">
                            <span className="text-red-500 font-bold text-xs opacity-0">SUSPENDED</span>
                            <div className="text-gray-400 text-xs mt-0.5 opacity-0">Max: 2L</div>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Last Result Section */}
            <div className="mt-4">
              {/* Last Result Header */}
              <div className="bg-gradient-to-r from-slate-700 to-slate-600 px-4 py-2 flex items-center justify-between">
                <h3 className="text-white font-bold text-sm">Last Result</h3>
                <button className="text-blue-400 hover:text-blue-300 text-sm underline">
                  View All
                </button>
              </div>

              {/* Result Circles */}
              <div className="bg-white px-4 py-6 border border-gray-200">
                <div className="flex items-center justify-center gap-2">
                  {lastResults.map((result, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center text-white font-bold text-sm shadow-md border-2 border-emerald-800"
                    >
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'match-odds' && (
          <div className="bg-white p-8 text-center text-gray-500">
            <p>Match Odds content will be displayed here</p>
          </div>
        )}

        {activeTab === 'bookmaker' && (
          <div className="bg-white p-8 text-center text-gray-500">
            <p>Bookmaker content will be displayed here</p>
          </div>
        )}
      </div>

      {/* Right Sidebar - My Bet */}
      <div className="w-80 bg-white border border-gray-200 rounded-lg shadow-sm h-fit sticky top-4">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 px-4 py-2.5 rounded-t-lg">
          <h2 className="text-white font-bold text-sm">My Bet</h2>
        </div>
        
        {/* Table Headers */}
        <div className="grid grid-cols-3 bg-gray-100 border-b border-gray-200">
          <div className="px-3 py-2 text-xs font-bold text-gray-700">Matched Bet</div>
          <div className="px-3 py-2 text-xs font-bold text-gray-700 text-center">Odds</div>
          <div className="px-3 py-2 text-xs font-bold text-gray-700 text-right">Stake</div>
        </div>

        {/* Empty State */}
        <div className="p-8 text-center">
          <p className="text-gray-400 text-sm">No bets placed yet</p>
        </div>
      </div>
    </div>
  );
}