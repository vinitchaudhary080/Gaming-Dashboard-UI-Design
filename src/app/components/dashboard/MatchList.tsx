import { Tv, Star, Lock, Circle, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { matches } from '../../services/mockData';

// Helper function to get the correct route based on match type
function getMatchRoute(match: typeof matches[0]): string {
  if (match.matchType === 't20') {
    return '/t20-world-cup';
  } else if (match.matchType === 'super-over') {
    return '/super-over2';
  } else {
    // Regular match (versus)
    return '/india-zimbabwe';
  }
}

export function MatchList() {
  const navigate = useNavigate();

  return (
    <div className="relative group">
      {/* Subtle glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-fuchsia-500/10 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
      
      <div className="relative bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
        {/* Header Section */}
        <div className="px-2.5 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 border-b border-gray-200/60 bg-gradient-to-r from-white/90 via-white/80 to-white/90">
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h2 className="text-[11px] sm:text-xs md:text-sm lg:text-base font-semibold text-gray-900 truncate">Live & Upcoming Matches</h2>
              <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-500 mt-0.5 truncate">Real-time odds and betting opportunities</p>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 md:px-2.5 lg:px-3 py-0.5 sm:py-1 md:py-1.5 bg-red-50 border border-red-200 rounded-md sm:rounded-lg shrink-0">
              <Circle className="w-1.5 sm:w-2 h-1.5 sm:h-2 text-red-500 fill-red-500 animate-pulse" />
              <span className="text-red-700 font-medium text-[9px] sm:text-[10px] md:text-xs whitespace-nowrap">156 Live</span>
            </div>
          </div>
        </div>

        {/* Mobile Card View - Visible only on mobile */}
        <div className="sm:hidden">
          <div className="divide-y divide-gray-100">
            {matches.map((match) => {
              const isLocked = match.isLocked;
              const matchRoute = getMatchRoute(match);
              
              return (
                <Link 
                  key={match.id}
                  to={matchRoute}
                  className={`block p-3 ${isLocked ? 'bg-gray-800 pointer-events-none' : 'bg-white hover:bg-violet-50/20'} transition-colors`}
                >
                  {/* Match Header */}
                  <div className="flex items-start justify-between gap-2 mb-2.5">
                    <div className="flex-1 min-w-0">
                      <div className={`font-semibold text-xs leading-tight mb-1 ${isLocked ? 'text-white' : 'text-gray-900'}`}>
                        {match.teams}
                      </div>
                      <div className={`text-[9px] flex items-center gap-1.5 flex-wrap ${isLocked ? 'text-gray-300' : 'text-gray-500'}`}>
                        <span>{match.category}</span>
                        <span>•</span>
                        <span>{match.date} {match.time}</span>
                      </div>
                    </div>
                    
                    {/* Icons */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      {match.isLive && (
                        <Circle className="w-2 h-2 text-green-500 fill-green-500 animate-pulse" />
                      )}
                      {match.isFeatured && (
                        <Tv className="w-3.5 h-3.5 text-violet-600" />
                      )}
                      {(match.odds.back1 || match.odds.back2) && !isLocked && (
                        <Star className="w-3.5 h-3.5 text-purple-500 fill-purple-500" />
                      )}
                      {isLocked && (
                        <Lock className="w-3.5 h-3.5 text-gray-400" />
                      )}
                    </div>
                  </div>

                  {/* Odds Grid */}
                  {!isLocked ? (
                    <div className="grid grid-cols-3 gap-2">
                      {/* Option 1 */}
                      <div className="space-y-1">
                        <div className="text-[9px] font-medium text-gray-500 text-center uppercase">1</div>
                        <div className="flex flex-col gap-1">
                          {match.odds.back1 ? (
                            <button className="px-2 py-1.5 bg-[#73b9e8] hover:bg-[#5da8d8] active:bg-[#4a97c7] text-gray-900 font-semibold text-[10px] transition-all text-center rounded">
                              {match.odds.back1.toFixed(2)}
                            </button>
                          ) : (
                            <div className="px-2 py-1.5 bg-gray-100 text-gray-400 text-center font-medium text-[10px] rounded">-</div>
                          )}
                          {match.odds.lay1 ? (
                            <button className="px-2 py-1.5 bg-[#f8b5ca] hover:bg-[#f5a0bb] active:bg-[#f28daa] text-gray-900 font-semibold text-[10px] transition-all text-center rounded">
                              {match.odds.lay1.toFixed(2)}
                            </button>
                          ) : (
                            <div className="px-2 py-1.5 bg-gray-100 text-gray-400 text-center font-medium text-[10px] rounded">-</div>
                          )}
                        </div>
                      </div>

                      {/* Option X */}
                      <div className="space-y-1">
                        <div className="text-[9px] font-medium text-gray-500 text-center uppercase">X</div>
                        <div className="flex flex-col gap-1">
                          {match.odds.backX ? (
                            <button className="px-2 py-1.5 bg-[#73b9e8] hover:bg-[#5da8d8] active:bg-[#4a97c7] text-gray-900 font-semibold text-[10px] transition-all text-center rounded">
                              {match.odds.backX.toFixed(2)}
                            </button>
                          ) : (
                            <div className="px-2 py-1.5 bg-gray-100 text-gray-400 text-center font-medium text-[10px] rounded">-</div>
                          )}
                          {match.odds.layX ? (
                            <button className="px-2 py-1.5 bg-[#f8b5ca] hover:bg-[#f5a0bb] active:bg-[#f28daa] text-gray-900 font-semibold text-[10px] transition-all text-center rounded">
                              {match.odds.layX.toFixed(2)}
                            </button>
                          ) : (
                            <div className="px-2 py-1.5 bg-gray-100 text-gray-400 text-center font-medium text-[10px] rounded">-</div>
                          )}
                        </div>
                      </div>

                      {/* Option 2 */}
                      <div className="space-y-1">
                        <div className="text-[9px] font-medium text-gray-500 text-center uppercase">2</div>
                        <div className="flex flex-col gap-1">
                          {match.odds.back2 ? (
                            <button className="px-2 py-1.5 bg-[#73b9e8] hover:bg-[#5da8d8] active:bg-[#4a97c7] text-gray-900 font-semibold text-[10px] transition-all text-center rounded">
                              {match.odds.back2.toFixed(2)}
                            </button>
                          ) : (
                            <div className="px-2 py-1.5 bg-gray-100 text-gray-400 text-center font-medium text-[10px] rounded">-</div>
                          )}
                          {match.odds.lay2 ? (
                            <button className="px-2 py-1.5 bg-[#f8b5ca] hover:bg-[#f5a0bb] active:bg-[#f28daa] text-gray-900 font-semibold text-[10px] transition-all text-center rounded">
                              {match.odds.lay2.toFixed(2)}
                            </button>
                          ) : (
                            <div className="px-2 py-1.5 bg-gray-100 text-gray-400 text-center font-medium text-[10px] rounded">-</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center py-4">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Lock className="w-4 h-4" />
                        <span className="text-xs font-medium">Match Locked</span>
                      </div>
                    </div>
                  )}

                  {/* Back/Lay Labels - shown below buttons */}
                  {!isLocked && (
                    <div className="flex justify-center gap-4 mt-2 pt-2 border-t border-gray-100">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 bg-[#73b9e8] rounded-sm"></div>
                        <span className="text-[9px] text-gray-500 font-medium">Back</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 bg-[#f8b5ca] rounded-sm"></div>
                        <span className="text-[9px] text-gray-500 font-medium">Lay</span>
                      </div>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Desktop Table View - Hidden on mobile */}
        <div className="hidden sm:block relative">
          {/* Scroll indicator gradient - shows on mobile only */}
          <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-white/90 via-white/60 to-transparent pointer-events-none z-10 sm:hidden"></div>
          
          {/* Scroll hint badge - mobile only with animated arrow */}
          <div className="absolute top-2 right-2 text-[9px] font-medium text-violet-600 bg-violet-50/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm border border-violet-200 z-20 sm:hidden flex items-center gap-1 animate-pulse">
            <span>Scroll</span>
            <ChevronRight className="w-2.5 h-2.5 animate-bounce" style={{ animationDirection: 'alternate', animationDuration: '0.8s' }} />
          </div>

          <div className="overflow-x-auto overflow-y-visible overscroll-x-contain -mx-px scrollbar-thin scrollbar-thumb-violet-300 scrollbar-track-gray-100">
            <div className="inline-block min-w-full align-middle">
              <table className="w-full border-collapse">
              {/* Header */}
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-2 sm:px-3 py-2 text-left text-[10px] sm:text-[11px] font-semibold text-gray-600 uppercase tracking-wide min-w-[140px] sm:min-w-[180px]">
                    Game
                  </th>
                  <th className="px-1 sm:px-2 py-2 w-8 sm:w-10 text-center">
                    <div className="flex items-center justify-center">
                      <Circle className="w-1.5 h-1.5 text-green-500 fill-green-500" />
                    </div>
                  </th>
                  <th className="px-1 sm:px-2 py-2 w-8 sm:w-10 text-center">
                    <Tv className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gray-400 mx-auto" />
                  </th>
                  <th className="px-1 sm:px-2 py-2 w-8 sm:w-10 text-center">
                    <Star className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-purple-400 mx-auto" />
                  </th>
                  <th className="px-1 sm:px-2 py-2 w-8 sm:w-10 text-center">
                    <Lock className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gray-400 mx-auto" />
                  </th>
                  <th className="px-2 sm:px-3 py-2 text-center text-[10px] sm:text-[11px] font-semibold text-gray-600 uppercase tracking-wide border-l border-gray-200" colSpan={2}>
                    1
                  </th>
                  <th className="px-2 sm:px-3 py-2 text-center text-[10px] sm:text-[11px] font-semibold text-gray-600 uppercase tracking-wide border-l border-gray-200" colSpan={2}>
                    X
                  </th>
                  <th className="px-2 sm:px-3 py-2 text-center text-[10px] sm:text-[11px] font-semibold text-gray-600 uppercase tracking-wide border-l border-gray-200" colSpan={2}>
                    2
                  </th>
                </tr>
                <tr className="border-b border-gray-200 bg-white">
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th className="px-1.5 sm:px-2 py-1.5 text-center text-[9px] sm:text-[10px] font-medium text-gray-500 uppercase border-l border-gray-200">
                    Back
                  </th>
                  <th className="px-1.5 sm:px-2 py-1.5 text-center text-[9px] sm:text-[10px] font-medium text-gray-500 uppercase">
                    Lay
                  </th>
                  <th className="px-1.5 sm:px-2 py-1.5 text-center text-[9px] sm:text-[10px] font-medium text-gray-500 uppercase border-l border-gray-200">
                    Back
                  </th>
                  <th className="px-1.5 sm:px-2 py-1.5 text-center text-[9px] sm:text-[10px] font-medium text-gray-500 uppercase">
                    Lay
                  </th>
                  <th className="px-1.5 sm:px-2 py-1.5 text-center text-[9px] sm:text-[10px] font-medium text-gray-500 uppercase border-l border-gray-200">
                    Back
                  </th>
                  <th className="px-1.5 sm:px-2 py-1.5 text-center text-[9px] sm:text-[10px] font-medium text-gray-500 uppercase">
                    Lay
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="divide-y divide-gray-100">
                {matches.map((match) => {
                  const hasOdds = !match.isLocked && (match.odds.back1 || match.odds.back2 || match.odds.lay1 || match.odds.lay2);
                  const isLocked = match.isLocked;
                  const matchRoute = getMatchRoute(match);
                  
                  return (
                    <tr 
                      key={match.id} 
                      className={`transition-colors ${
                        isLocked 
                          ? 'bg-gray-800' 
                          : 'hover:bg-violet-50/20 cursor-pointer'
                      }`}
                      onClick={() => !isLocked && navigate(matchRoute)}
                    >
                      {/* Game name and time */}
                      <td className={`px-2 sm:px-3 py-2 ${isLocked ? 'text-white' : 'text-gray-900'} min-w-[140px] sm:min-w-[180px]`}>
                        <div className="font-medium text-[10px] sm:text-xs leading-tight">{match.teams}</div>
                        <div className={`text-[9px] sm:text-[10px] mt-0.5 ${isLocked ? 'text-gray-300' : 'text-gray-500'}`}>
                          {match.category} • {match.date} {match.time}
                        </div>
                      </td>

                      {/* Live indicator */}
                      <td className="px-1 sm:px-2 py-2 text-center">
                        {match.isLive && (
                          <div className="relative inline-flex">
                            <Circle className="w-2 h-2 text-green-500 fill-green-500 animate-pulse" />
                          </div>
                        )}
                      </td>

                      {/* TV icon */}
                      <td className="px-1 sm:px-2 py-2 text-center">
                        {match.isFeatured && (
                          <Tv className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-violet-600 mx-auto" />
                        )}
                      </td>

                      {/* Fancy/Star icon */}
                      <td className="px-1 sm:px-2 py-2 text-center">
                        {(match.odds.back1 || match.odds.back2) && !isLocked && (
                          <Star className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-purple-500 fill-purple-500 mx-auto" />
                        )}
                      </td>

                      {/* Lock icon */}
                      <td className="px-1 sm:px-2 py-2 text-center">
                        {isLocked && (
                          <Lock className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gray-400 mx-auto" />
                        )}
                      </td>

                      {/* 1 - Back */}
                      <td className="px-1.5 sm:px-2 py-2 border-l border-gray-200">
                        {isLocked ? (
                          <div className="flex items-center justify-center h-7 w-[50px] sm:w-[60px]">
                            <Lock className="w-3 h-3 text-gray-400" />
                          </div>
                        ) : match.odds.back1 ? (
                          <button className="w-[50px] sm:w-[60px] px-2 sm:px-3 py-1.5 bg-[#73b9e8] hover:bg-[#5da8d8] active:bg-[#4a97c7] text-gray-900 font-semibold text-[10px] sm:text-xs transition-all text-center rounded-lg">
                            {match.odds.back1.toFixed(2)}
                          </button>
                        ) : (
                          <div className="w-[50px] sm:w-[60px] px-2 sm:px-3 py-1.5 bg-gray-100 text-gray-400 text-center font-medium text-[10px] sm:text-xs rounded-lg">-</div>
                        )}
                      </td>

                      {/* 1 - Lay */}
                      <td className="px-1.5 sm:px-2 py-2">
                        {isLocked ? (
                          <div className="flex items-center justify-center h-7 w-[50px] sm:w-[60px]">
                            <Lock className="w-3 h-3 text-gray-400" />
                          </div>
                        ) : match.odds.lay1 ? (
                          <button className="w-[50px] sm:w-[60px] px-2 sm:px-3 py-1.5 bg-[#f8b5ca] hover:bg-[#f5a0bb] active:bg-[#f28daa] text-gray-900 font-semibold text-[10px] sm:text-xs transition-all text-center rounded-lg">
                            {match.odds.lay1.toFixed(2)}
                          </button>
                        ) : (
                          <div className="w-[50px] sm:w-[60px] px-2 sm:px-3 py-1.5 bg-gray-100 text-gray-400 text-center font-medium text-[10px] sm:text-xs rounded-lg">-</div>
                        )}
                      </td>

                      {/* X - Back */}
                      <td className="px-1.5 sm:px-2 py-2 border-l border-gray-200">
                        {isLocked ? (
                          <div className="flex items-center justify-center h-7 w-[50px] sm:w-[60px]">
                            <Lock className="w-3 h-3 text-gray-400" />
                          </div>
                        ) : match.odds.backX ? (
                          <button className="w-[50px] sm:w-[60px] px-2 sm:px-3 py-1.5 bg-[#73b9e8] hover:bg-[#5da8d8] active:bg-[#4a97c7] text-gray-900 font-semibold text-[10px] sm:text-xs transition-all text-center rounded-lg">
                            {match.odds.backX.toFixed(2)}
                          </button>
                        ) : (
                          <div className="w-[50px] sm:w-[60px] px-2 sm:px-3 py-1.5 bg-gray-100 text-gray-400 text-center font-medium text-[10px] sm:text-xs rounded-lg">-</div>
                        )}
                      </td>

                      {/* X - Lay */}
                      <td className="px-1.5 sm:px-2 py-2">
                        {isLocked ? (
                          <div className="flex items-center justify-center h-7 w-[50px] sm:w-[60px]">
                            <Lock className="w-3 h-3 text-gray-400" />
                          </div>
                        ) : match.odds.layX ? (
                          <button className="w-[50px] sm:w-[60px] px-2 sm:px-3 py-1.5 bg-[#f8b5ca] hover:bg-[#f5a0bb] active:bg-[#f28daa] text-gray-900 font-semibold text-[10px] sm:text-xs transition-all text-center rounded-lg">
                            {match.odds.layX.toFixed(2)}
                          </button>
                        ) : (
                          <div className="w-[50px] sm:w-[60px] px-2 sm:px-3 py-1.5 bg-gray-100 text-gray-400 text-center font-medium text-[10px] sm:text-xs rounded-lg">-</div>
                        )}
                      </td>

                      {/* 2 - Back */}
                      <td className="px-1.5 sm:px-2 py-2 border-l border-gray-200">
                        {isLocked ? (
                          <div className="flex items-center justify-center h-7 w-[50px] sm:w-[60px]">
                            <Lock className="w-3 h-3 text-gray-400" />
                          </div>
                        ) : match.odds.back2 ? (
                          <button className="w-[50px] sm:w-[60px] px-2 sm:px-3 py-1.5 bg-[#73b9e8] hover:bg-[#5da8d8] active:bg-[#4a97c7] text-gray-900 font-semibold text-[10px] sm:text-xs transition-all text-center rounded-lg">
                            {match.odds.back2.toFixed(2)}
                          </button>
                        ) : (
                          <div className="w-[50px] sm:w-[60px] px-2 sm:px-3 py-1.5 bg-gray-100 text-gray-400 text-center font-medium text-[10px] sm:text-xs rounded-lg">-</div>
                        )}
                      </td>

                      {/* 2 - Lay */}
                      <td className="px-1.5 sm:px-2 py-2">
                        {isLocked ? (
                          <div className="flex items-center justify-center h-7 w-[50px] sm:w-[60px]">
                            <Lock className="w-3 h-3 text-gray-400" />
                          </div>
                        ) : match.odds.lay2 ? (
                          <button className="w-[50px] sm:w-[60px] px-2 sm:px-3 py-1.5 bg-[#f8b5ca] hover:bg-[#f5a0bb] active:bg-[#f28daa] text-gray-900 font-semibold text-[10px] sm:text-xs transition-all text-center rounded-lg">
                            {match.odds.lay2.toFixed(2)}
                          </button>
                        ) : (
                          <div className="w-[50px] sm:w-[60px] px-2 sm:px-3 py-1.5 bg-gray-100 text-gray-400 text-center font-medium text-[10px] sm:text-xs rounded-lg">-</div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-3 sm:px-5 py-3 border-t border-gray-200 bg-gray-50">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
            <p className="text-xs text-gray-600">
              Showing <span className="font-semibold text-gray-900">{matches.length}</span> of 156 matches
            </p>
            <button className="w-full sm:w-auto px-5 py-2 bg-violet-600 hover:bg-violet-700 active:bg-violet-800 text-white font-medium text-xs rounded-lg transition-colors">
              Load More Matches
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
