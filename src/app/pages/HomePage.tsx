import { MatchList } from '../components/dashboard/MatchList';
import { GameBanners } from '../components/dashboard/GameBanners';

export function HomePage() {
  return (
    <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
      {/* Live & Upcoming Matches */}
      <MatchList />

      {/* Game Banners */}
      <GameBanners />
    </div>
  );
}