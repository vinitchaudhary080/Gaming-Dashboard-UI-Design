import { Lock, Calendar } from 'lucide-react';
import { t20WorldCupTeams } from '../services/mockData';

export function T20WorldCupPage() {
  return (
    <div className="space-y-4 sm:space-y-5">
      {/* Page Header */}
      <div className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 rounded-xl overflow-hidden p-4 sm:p-6">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:44px_44px]" />
        
        <div className="relative">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">ICC MENS T20 WORLD CUP</h1>
              <div className="flex items-center gap-2 text-purple-100 text-xs sm:text-sm">
                <Calendar className="w-4 h-4" />
                <span>07/02/2026 11:00:00</span>
              </div>
            </div>
            <button className="px-4 sm:px-6 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-lg font-medium text-sm transition-colors border border-white/20">
              Maths
            </button>
          </div>
        </div>
      </div>

      {/* Tournament Winner Section */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-fuchsia-500/10 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
        
        <div className="relative bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
          {/* Header */}
          <div className="px-3 sm:px-5 py-2.5 sm:py-3 border-b border-gray-200/60 bg-gradient-to-r from-violet-50 via-purple-50 to-fuchsia-50">
            <h2 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900">TOURNAMENT WINNER</h2>
            <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">Bet on the tournament winner</p>
          </div>

          {/* Mobile Card View */}
          <div className="sm:hidden divide-y divide-gray-100">
            {t20WorldCupTeams.map((team) => (
              <div 
                key={team.id} 
                className={`p-3 ${team.status !== 'active' ? 'bg-gray-800' : 'bg-white'} transition-colors`}
              >
                {/* Team Name */}
                <div className={`font-semibold text-xs mb-2 ${team.status !== 'active' ? 'text-white' : 'text-gray-900'}`}>
                  {team.name}
                </div>

                {/* Odds Grid */}
                {team.status === 'active' && (team.odds.back1 || team.odds.back2 || team.odds.back3) ? (
                  <div className="grid grid-cols-3 gap-1.5">
                    {/* Column 1 */}
                    <div className="space-y-1">
                      {team.odds.back1 ? (
                        <button className="w-full px-2 py-1.5 bg-[#73b9e8] hover:bg-[#5da8d8] text-gray-900 font-semibold text-[10px] rounded">
                          {team.odds.back1}
                        </button>
                      ) : (
                        <div className="w-full px-2 py-1.5 bg-gray-100 text-gray-400 text-center text-[10px] rounded">-</div>
                      )}
                      {team.odds.lay1 ? (
                        <button className="w-full px-2 py-1.5 bg-[#f8b5ca] hover:bg-[#f5a0bb] text-gray-900 font-semibold text-[10px] rounded">
                          {team.odds.lay1}
                        </button>
                      ) : (
                        <div className="w-full px-2 py-1.5 bg-gray-100 text-gray-400 text-center text-[10px] rounded">-</div>
                      )}
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-1">
                      {team.odds.back2 ? (
                        <button className="w-full px-2 py-1.5 bg-[#73b9e8] hover:bg-[#5da8d8] text-gray-900 font-semibold text-[10px] rounded">
                          {team.odds.back2}
                        </button>
                      ) : (
                        <div className="w-full px-2 py-1.5 bg-gray-100 text-gray-400 text-center text-[10px] rounded">-</div>
                      )}
                      {team.odds.lay2 ? (
                        <button className="w-full px-2 py-1.5 bg-[#f8b5ca] hover:bg-[#f5a0bb] text-gray-900 font-semibold text-[10px] rounded">
                          {team.odds.lay2}
                        </button>
                      ) : (
                        <div className="w-full px-2 py-1.5 bg-gray-100 text-gray-400 text-center text-[10px] rounded">-</div>
                      )}
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-1">
                      {team.odds.back3 ? (
                        <button className="w-full px-2 py-1.5 bg-[#73b9e8] hover:bg-[#5da8d8] text-gray-900 font-semibold text-[10px] rounded">
                          {team.odds.back3}
                        </button>
                      ) : (
                        <div className="w-full px-2 py-1.5 bg-gray-100 text-gray-400 text-center text-[10px] rounded">-</div>
                      )}
                      {team.odds.lay3 ? (
                        <button className="w-full px-2 py-1.5 bg-[#f8b5ca] hover:bg-[#f5a0bb] text-gray-900 font-semibold text-[10px] rounded">
                          {team.odds.lay3}
                        </button>
                      ) : (
                        <div className="w-full px-2 py-1.5 bg-gray-100 text-gray-400 text-center text-[10px] rounded">-</div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center py-3">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                      {team.status === 'loser' ? 'LOSER' : 'SUSPENDED'}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide min-w-[180px]">
                    Team
                  </th>
                  <th className="px-3 py-2.5 text-center text-xs font-semibold text-gray-600 uppercase tracking-wide border-l border-gray-200" colSpan={2}>
                    Column 1
                  </th>
                  <th className="px-3 py-2.5 text-center text-xs font-semibold text-gray-600 uppercase tracking-wide border-l border-gray-200" colSpan={2}>
                    Column 2
                  </th>
                  <th className="px-3 py-2.5 text-center text-xs font-semibold text-gray-600 uppercase tracking-wide border-l border-gray-200" colSpan={2}>
                    Column 3
                  </th>
                </tr>
                <tr className="border-b border-gray-200 bg-white">
                  <th></th>
                  <th className="px-2 py-1.5 text-center text-[10px] font-medium text-gray-500 uppercase border-l border-gray-200">
                    Back
                  </th>
                  <th className="px-2 py-1.5 text-center text-[10px] font-medium text-gray-500 uppercase">
                    Lay
                  </th>
                  <th className="px-2 py-1.5 text-center text-[10px] font-medium text-gray-500 uppercase border-l border-gray-200">
                    Back
                  </th>
                  <th className="px-2 py-1.5 text-center text-[10px] font-medium text-gray-500 uppercase">
                    Lay
                  </th>
                  <th className="px-2 py-1.5 text-center text-[10px] font-medium text-gray-500 uppercase border-l border-gray-200">
                    Back
                  </th>
                  <th className="px-2 py-1.5 text-center text-[10px] font-medium text-gray-500 uppercase">
                    Lay
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {t20WorldCupTeams.map((team) => (
                  <tr 
                    key={team.id}
                    className={`${team.status !== 'active' ? 'bg-gray-800' : 'hover:bg-violet-50/20'} transition-colors`}
                  >
                    <td className={`px-4 py-3 ${team.status !== 'active' ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>
                      {team.name}
                    </td>

                    {team.status !== 'active' ? (
                      <td colSpan={6} className="px-2 py-2 border-l border-gray-200">
                        <div className="flex items-center justify-center h-8">
                          <span className="text-sm font-bold text-red-600 uppercase tracking-wide">
                            {team.status === 'loser' ? 'LOSER' : 'SUSPENDED'}
                          </span>
                        </div>
                      </td>
                    ) : (
                      <>
                        {/* Column 1 - Back */}
                        <td className="px-2 py-2 border-l border-gray-200">
                          {team.odds.back1 ? (
                            <button className="w-[70px] px-3 py-2 bg-[#73b9e8] hover:bg-[#5da8d8] active:bg-[#4a97c7] text-gray-900 font-semibold text-xs transition-all text-center rounded-lg">
                              {team.odds.back1}
                            </button>
                          ) : (
                            <div className="w-[70px] px-3 py-2 bg-gray-100 text-gray-400 text-center font-medium text-xs rounded-lg">-</div>
                          )}
                        </td>

                        {/* Column 1 - Lay */}
                        <td className="px-2 py-2">
                          {team.odds.lay1 ? (
                            <button className="w-[70px] px-3 py-2 bg-[#f8b5ca] hover:bg-[#f5a0bb] active:bg-[#f28daa] text-gray-900 font-semibold text-xs transition-all text-center rounded-lg">
                              {team.odds.lay1}
                            </button>
                          ) : (
                            <div className="w-[70px] px-3 py-2 bg-gray-100 text-gray-400 text-center font-medium text-xs rounded-lg">-</div>
                          )}
                        </td>

                        {/* Column 2 - Back */}
                        <td className="px-2 py-2 border-l border-gray-200">
                          {team.odds.back2 ? (
                            <button className="w-[70px] px-3 py-2 bg-[#73b9e8] hover:bg-[#5da8d8] active:bg-[#4a97c7] text-gray-900 font-semibold text-xs transition-all text-center rounded-lg">
                              {team.odds.back2}
                            </button>
                          ) : (
                            <div className="w-[70px] px-3 py-2 bg-gray-100 text-gray-400 text-center font-medium text-xs rounded-lg">-</div>
                          )}
                        </td>

                        {/* Column 2 - Lay */}
                        <td className="px-2 py-2">
                          {team.odds.lay2 ? (
                            <button className="w-[70px] px-3 py-2 bg-[#f8b5ca] hover:bg-[#f5a0bb] active:bg-[#f28daa] text-gray-900 font-semibold text-xs transition-all text-center rounded-lg">
                              {team.odds.lay2}
                            </button>
                          ) : (
                            <div className="w-[70px] px-3 py-2 bg-gray-100 text-gray-400 text-center font-medium text-xs rounded-lg">-</div>
                          )}
                        </td>

                        {/* Column 3 - Back */}
                        <td className="px-2 py-2 border-l border-gray-200">
                          {team.odds.back3 ? (
                            <button className="w-[70px] px-3 py-2 bg-[#73b9e8] hover:bg-[#5da8d8] active:bg-[#4a97c7] text-gray-900 font-semibold text-xs transition-all text-center rounded-lg">
                              {team.odds.back3}
                            </button>
                          ) : (
                            <div className="w-[70px] px-3 py-2 bg-gray-100 text-gray-400 text-center font-medium text-xs rounded-lg">-</div>
                          )}
                        </td>

                        {/* Column 3 - Lay */}
                        <td className="px-2 py-2">
                          {team.odds.lay3 ? (
                            <button className="w-[70px] px-3 py-2 bg-[#f8b5ca] hover:bg-[#f5a0bb] active:bg-[#f28daa] text-gray-900 font-semibold text-xs transition-all text-center rounded-lg">
                              {team.odds.lay3}
                            </button>
                          ) : (
                            <div className="w-[70px] px-3 py-2 bg-gray-100 text-gray-400 text-center font-medium text-xs rounded-lg">-</div>
                          )}
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Bookmaker Section */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/10 via-pink-500/10 to-rose-500/10 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
        
        <div className="relative bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
          {/* Header */}
          <div className="px-3 sm:px-5 py-2.5 sm:py-3 border-b border-gray-200/60 bg-gradient-to-r from-red-50 via-pink-50 to-rose-50">
            <h2 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900">ICC Mens T20 World Cup Winner Bookmaker</h2>
            <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">Min 100.00 | Max 100k</p>
          </div>

          {/* Mobile Card View */}
          <div className="sm:hidden divide-y divide-gray-100">
            {t20WorldCupTeams.map((team) => (
              <div 
                key={team.id} 
                className={`p-3 ${team.status !== 'active' ? 'bg-gray-800' : 'bg-white'} transition-colors`}
              >
                {/* Team Name */}
                <div className={`font-semibold text-xs mb-2 ${team.status !== 'active' ? 'text-white' : 'text-gray-900'}`}>
                  {team.name}
                </div>

                {/* Bookmaker Odds */}
                {team.status === 'active' && team.bookmakerOdds ? (
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="text-[9px] text-gray-500 uppercase mb-1 text-center">Back</div>
                      <button className="w-full px-3 py-2 bg-[#73b9e8] hover:bg-[#5da8d8] text-gray-900 font-bold text-sm rounded">
                        {team.bookmakerOdds.back}
                      </button>
                    </div>
                    <div>
                      <div className="text-[9px] text-gray-500 uppercase mb-1 text-center">Lay</div>
                      <button className="w-full px-3 py-2 bg-[#f8b5ca] hover:bg-[#f5a0bb] text-gray-900 font-bold text-sm rounded">
                        {team.bookmakerOdds.lay}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center py-3">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wide">
                      {team.status === 'loser' ? 'LOSER' : 'SUSPENDED'}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide min-w-[180px]">
                    Team
                  </th>
                  <th className="px-3 py-2.5 text-center text-xs font-semibold text-gray-600 uppercase tracking-wide border-l border-gray-200" colSpan={2}>
                    Bookmaker
                  </th>
                </tr>
                <tr className="border-b border-gray-200 bg-white">
                  <th></th>
                  <th className="px-3 py-2 text-center text-[10px] font-medium text-gray-500 uppercase border-l border-gray-200 w-32">
                    Back
                  </th>
                  <th className="px-3 py-2 text-center text-[10px] font-medium text-gray-500 uppercase w-32">
                    Lay
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {t20WorldCupTeams.map((team) => (
                  <tr 
                    key={team.id}
                    className={`${team.status !== 'active' ? 'bg-gray-800' : 'hover:bg-red-50/20'} transition-colors`}
                  >
                    <td className={`px-4 py-3 ${team.status !== 'active' ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>
                      {team.name}
                    </td>

                    {team.status !== 'active' ? (
                      <td colSpan={2} className="px-3 py-2 border-l border-gray-200">
                        <div className="flex items-center justify-center h-10">
                          <span className="text-sm font-bold text-red-600 uppercase tracking-wide">
                            {team.status === 'loser' ? 'LOSER' : 'SUSPENDED'}
                          </span>
                        </div>
                      </td>
                    ) : (
                      <>
                        {/* Back */}
                        <td className="px-3 py-2 border-l border-gray-200 text-center">
                          {team.bookmakerOdds ? (
                            <button className="px-6 py-2.5 bg-[#73b9e8] hover:bg-[#5da8d8] active:bg-[#4a97c7] text-gray-900 font-bold text-sm transition-all rounded-lg">
                              {team.bookmakerOdds.back}
                            </button>
                          ) : (
                            <div className="px-6 py-2.5 bg-gray-100 text-gray-400 text-center font-medium text-sm rounded-lg">-</div>
                          )}
                        </td>

                        {/* Lay */}
                        <td className="px-3 py-2 text-center">
                          {team.bookmakerOdds ? (
                            <button className="px-6 py-2.5 bg-[#f8b5ca] hover:bg-[#f5a0bb] active:bg-[#f28daa] text-gray-900 font-bold text-sm transition-all rounded-lg">
                              {team.bookmakerOdds.lay}
                            </button>
                          ) : (
                            <div className="px-6 py-2.5 bg-gray-100 text-gray-400 text-center font-medium text-sm rounded-lg">-</div>
                          )}
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}