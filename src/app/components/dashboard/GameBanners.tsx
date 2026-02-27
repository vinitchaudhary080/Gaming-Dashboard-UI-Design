import { Flame, Sparkles, Play } from 'lucide-react';
import { gameBanners } from '../../services/mockData';
import spriteSheet from '@/assets/game.png';

export function GameBanners() {
  // Grid configuration: 10 columns x 5 rows
  const COLS = 10;
  const ROWS = 5;
  
  // Calculate background position for each game based on its index
  const getBackgroundPosition = (index: number) => {
    const col = index % COLS;
    const row = Math.floor(index / COLS);
    const xPercent = (col * 100) / (COLS - 1);
    const yPercent = (row * 100) / (ROWS - 1);
    return `${xPercent}% ${yPercent}%`;
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h2 className="text-[11px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-semibold text-gray-900 truncate">Popular Games</h2>
          <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-500 mt-0.5 truncate">42 Casino Games • Live & Ready to Play</p>
        </div>
        <button className="text-purple-600 hover:text-purple-700 font-medium text-[10px] sm:text-xs md:text-sm hover:underline transition-colors shrink-0 whitespace-nowrap">
          View All →
        </button>
      </div>

      {/* Grid with subtle glow effect */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/5 via-violet-500/5 to-fuchsia-500/5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />
        
        {/* Mobile: 4 columns, Tablet: 5, Desktop: 6-8 */}
        <div className="relative grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3">
          {gameBanners.map((game, index) => (
            <div
              key={game.id}
              className="group relative bg-gray-900 rounded-lg sm:rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:shadow-purple-500/20 aspect-[3/4]"
            >
              {/* Game thumbnail from sprite sheet */}
              <div 
                className="absolute inset-0 bg-cover bg-no-repeat transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${spriteSheet})`,
                  backgroundPosition: getBackgroundPosition(index),
                  backgroundSize: `${COLS * 100}% ${ROWS * 100}%`,
                }}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500 rounded-lg sm:rounded-xl transition-all duration-300 pointer-events-none"></div>
              
              {/* Play button on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-purple-600/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white fill-white ml-0.5 sm:ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Promotional banner */}
      <div className="mt-6 relative bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 rounded-xl overflow-hidden p-4 sm:p-6">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:44px_44px]" />
        
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-bold mb-2">
              <Sparkles className="w-3 h-3" />
              SPECIAL OFFER
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
              Get 100% Welcome Bonus
            </h3>
            <p className="text-purple-50 text-xs sm:text-sm max-w-lg">
              New users get up to ₹10,000 bonus on first deposit. Limited time offer!
            </p>
          </div>
          
          <button className="w-full lg:w-auto px-6 py-2.5 bg-white text-purple-600 rounded-lg font-bold hover:bg-purple-50 transition-colors shadow-lg whitespace-nowrap text-sm">
            Claim Now →
          </button>
        </div>
      </div>
    </div>
  );
}