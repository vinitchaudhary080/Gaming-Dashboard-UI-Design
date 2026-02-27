export interface Match {
  id: string;
  sport: string;
  category: string;
  teams: string;
  date: string;
  time: string;
  isLive: boolean;
  isFeatured?: boolean;
  isLocked?: boolean;
  odds: {
    back1?: number;
    lay1?: number;
    back2?: number;
    lay2?: number;
    backX?: number;
    layX?: number;
  };
}

export interface GameBanner {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  isNew?: boolean;
  isHot?: boolean;
}

export interface SportCategory {
  id: string;
  name: string;
  icon: string;
  count?: number;
}
