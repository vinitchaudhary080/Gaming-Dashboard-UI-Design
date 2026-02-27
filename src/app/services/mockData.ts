// Mock data for the gaming dashboard

export interface Match {
  id: string;
  sport: string;
  category: string;
  teams: string;
  date: string;
  time: string;
  isLive: boolean;
  isFeatured?: boolean;
  matchType?: 'regular' | 't20' | 'super-over'; // Added match type
  odds: {
    back1: number;
    lay1: number;
    back2: number;
    lay2: number;
    backX?: number;
    layX?: number;
  };
  isLocked?: boolean;
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
  count: number;
}

export const matches: Match[] = [
  {
    id: '1',
    sport: 'Cricket',
    category: 'T20 World Cup',
    teams: 'ICC T20 World Cup 2026 - Winner',
    date: '24/02/2026',
    time: '14:00:00',
    isLive: true,
    isFeatured: true,
    matchType: 't20',
    odds: {
      back1: 3.50,
      lay1: 3.55,
      back2: 4.20,
      lay2: 4.30,
    },
  },
  {
    id: '2',
    sport: 'Cricket',
    category: 'Super Over',
    teams: 'Australia v Pakistan - Super Over',
    date: '24/02/2026',
    time: '09:30:00',
    isLive: true,
    matchType: 'super-over',
    odds: {
      back1: 1.55,
      lay1: 1.57,
      back2: 2.76,
      lay2: 2.82,
    },
  },
  {
    id: '3',
    sport: 'Cricket',
    category: 'ODI',
    teams: 'India v Zimbabwe',
    date: '24/02/2026',
    time: '17:00:00',
    isLive: true,
    isFeatured: true,
    matchType: 'regular',
    odds: {
      back1: 1.07,
      lay1: 1.08,
      back2: 14.0,
      lay2: 15.5,
    },
  },
  {
    id: '4',
    sport: 'Cricket',
    category: 'T20',
    teams: 'Rohit Sharma - Total Match Runs Over 45.5',
    date: '24/02/2026',
    time: '12:00:00',
    isLive: true,
    matchType: 'regular',
    odds: {
      back1: 1.90,
      lay1: 1.92,
      back2: 2.00,
      lay2: 2.04,
    },
  },
  {
    id: '5',
    sport: 'Cricket',
    category: 'IPL',
    teams: 'Mumbai Indians v Chennai Super Kings',
    date: '24/02/2026',
    time: '16:30:00',
    isLive: true,
    matchType: 'regular',
    odds: {
      back1: 1.72,
      lay1: 1.74,
      back2: 2.32,
      lay2: 2.36,
    },
  },
  {
    id: '6',
    sport: 'Cricket',
    category: 'Super Over',
    teams: 'England v New Zealand - Super Over Special',
    date: '25/02/2026',
    time: '20:00:00',
    isLive: false,
    isFeatured: true,
    matchType: 'super-over',
    odds: {
      back1: 1.85,
      lay1: 1.88,
      back2: 2.10,
      lay2: 2.15,
    },
    isLocked: true,
  },
  {
    id: '7',
    sport: 'Cricket',
    category: 'Test',
    teams: 'England v Pakistan - 1st Innings Total Over 325.5',
    date: '24/02/2026',
    time: '19:30:00',
    isLive: true,
    isFeatured: true,
    matchType: 'regular',
    odds: {
      back1: 1.95,
      lay1: 1.98,
      back2: 1.95,
      lay2: 1.98,
    },
  },
  {
    id: '8',
    sport: 'Cricket',
    category: 'ODI',
    teams: 'South Africa v Sri Lanka',
    date: '24/02/2026',
    time: '19:00:00',
    isLive: true,
    isFeatured: true,
    matchType: 'regular',
    odds: {
      back1: 1.44,
      lay1: 1.45,
      back2: 3.15,
      lay2: 3.25,
    },
  },
  {
    id: '9',
    sport: 'Cricket',
    category: 'T20 World Cup',
    teams: 'Top Batsman - Virat Kohli',
    date: '24/02/2026',
    time: '21:00:00',
    isLive: true,
    matchType: 't20',
    odds: {
      back1: 5.50,
      lay1: 5.75,
      back2: 6.00,
      lay2: 6.25,
    },
  },
  {
    id: '10',
    sport: 'Cricket',
    category: 'Fancy',
    teams: 'India v Zimbabwe - 10 Over Runs India',
    date: '25/02/2026',
    time: '11:45:00',
    isLive: true,
    matchType: 'regular',
    odds: {
      back1: 1.80,
      lay1: 1.82,
      back2: 2.20,
      lay2: 2.24,
    },
  },
  {
    id: '11',
    sport: 'Cricket',
    category: 'Test',
    teams: 'Australia v Pakistan',
    date: '25/02/2026',
    time: '19:00:00',
    isLive: false,
    isFeatured: true,
    matchType: 'regular',
    odds: {
      back1: 1.55,
      lay1: 1.57,
      back2: 2.76,
      lay2: 2.82,
    },
  },
  {
    id: '12',
    sport: 'Cricket',
    category: 'Super Over',
    teams: 'West Indies W v Sri Lanka W - Super Over',
    date: '25/02/2026',
    time: '19:30:00',
    isLive: true,
    isFeatured: true,
    matchType: 'super-over',
    odds: {
      back1: 1.73,
      lay1: 1.77,
      back2: 2.30,
      lay2: 2.38,
    },
  },
  {
    id: '13',
    sport: 'Cricket',
    category: 'T20',
    teams: 'Most Sixes in Match - Over 12.5',
    date: '26/02/2026',
    time: '15:00:00',
    isLive: false,
    matchType: 'regular',
    odds: {
      back1: 1.91,
      lay1: 1.93,
      back2: 2.00,
      lay2: 2.02,
    },
  },
  {
    id: '14',
    sport: 'Cricket',
    category: 'ODI',
    teams: 'Bangladesh v Nepal',
    date: '26/02/2026',
    time: '19:00:00',
    isLive: false,
    matchType: 'regular',
    odds: {
      back1: 1.03,
      lay1: 1.04,
      back2: 26.0,
      lay2: 28.0,
    },
  },
];

export const gameBanners: GameBanner[] = [
  {
    id: '1',
    title: 'Teen Patti 1 Day',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1760183195033-a54a94b50e3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjBuZW9uJTIwc2lnbiUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MTkyNTc4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isNew: true,
  },
  {
    id: '2',
    title: 'VIP Teen Patti',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1680191741548-1a9321688cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjB2aXAlMjBsb3VuZ2UlMjBlbGVnYW50fGVufDF8fHx8MTc3MTkyNTc4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isHot: true,
  },
  {
    id: '3',
    title: 'Bollywood Casino',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1566563255308-753861417000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGphY2twb3QlMjBzY3JlZW58ZW58MXx8fHwxNzcxOTI1Nzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isHot: true,
  },
  {
    id: '4',
    title: 'Mogambo',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1721002357688-b81404a3cf8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3VsZXR0ZSUyMHRhYmxlJTIwbHV4dXJ5JTIwY2FzaW5vfGVufDF8fHx8MTc3MTkyNTc4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '5',
    title: 'Teen Patti',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1655008109440-df3a58567cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlciUyMGNhcmRzJTIwcm95YWwlMjBmbHVzaHxlbnwxfHx8fDE3NzE5MjE1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isNew: true,
  },
  {
    id: '6',
    title: 'Lucky 7',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1768359666502-306694fa6fcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjBjaGlwcyUyMGx1eHVyeSUyMGdvbGR8ZW58MXx8fHwxNzcxOTI1Nzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isHot: true,
  },
  {
    id: '7',
    title: 'Beach Roulette',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1663110094638-0d4abe240fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWNlJTIwbmVvbiUyMGxpZ2h0cyUyMGNhc2lub3xlbnwxfHx8fDE3NzE5MjU3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '8',
    title: 'Roulette',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1758563920532-adbb05710d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3VsZXR0ZSUyMHdoZWVsJTIwc3Bpbm5pbmclMjBsdXh1cnl8ZW58MXx8fHwxNzcxOTI0NDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isHot: true,
  },
  {
    id: '9',
    title: 'Golden Casino',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1743824521065-48d394eafcda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFja2phY2slMjB0YWJsZSUyMGNhc2lubyUyMG5pZ2h0fGVufDF8fHx8MTc3MTkyNTc5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '10',
    title: 'Poison Teen Patti 1 Day',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1713756629990-2657a4209bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlciUyMGNoaXBzJTIwc3RhY2tzJTIwY29sb3JmdWx8ZW58MXx8fHwxNzcxOTI1NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isNew: true,
  },
  {
    id: '11',
    title: 'Poison Teen Patti 20',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1765624408968-f50eaac94e2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjBjYXJkcyUyMGFjZSUyMGtpbmd8ZW58MXx8fHwxNzcxOTE5OTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '12',
    title: 'Unlimited Joker Poker',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1768201493980-95066d0949a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMHZpbnRhZ2UlMjBuZW9ufGVufDF8fHx8MTc3MTkyNTc5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isHot: true,
  },
  {
    id: '13',
    title: 'Teen Patti Joker',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1621265054041-e90cefa414a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjBqb2tlciUyMGNhcmQlMjBkYXJrfGVufDF8fHx8MTc3MTkyNTc5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '14',
    title: 'Unlimited Joker One Day',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1592602944193-0848995f4b5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3VsZXR0ZSUyMGJldHRpbmclMjB0YWJsZSUyMHJlZHxlbnwxfHx8fDE3NzE5MjU3OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '15',
    title: '32 Cards A',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1632032858061-b321b3c1d52b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlciUyMGNhcmRzJTIwaGFuZCUyMHdpbm5lcnxlbnwxfHx8fDE3NzE5MjU3OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isNew: true,
  },
  {
    id: '16',
    title: 'Bollywood Casino 2',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1708027111092-4c421303f803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjBjaGlwcyUyMGJldHRpbmclMjByZWR8ZW58MXx8fHwxNzcxOTI1NzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isHot: true,
  },
  {
    id: '17',
    title: 'Andar Bahar',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1599579887642-9821ebe3c79a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNjYXJhdCUyMHRhYmxlJTIwZWxlZ2FudCUyMGNhc2lub3xlbnwxfHx8fDE3NzE5MjQ1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isHot: true,
  },
  {
    id: '18',
    title: 'Lucky 15',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1765624408968-f50eaac94e2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF5aW5nJTIwY2FyZHMlMjBxdWVlbiUyMGRpYW1vbmR8ZW58MXx8fHwxNzcxOTI1MTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '19',
    title: 'Super Andar Bahar',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1657883888456-5db6947fa574?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjBuZW9uJTIwbGlnaHRzJTIwdmVnYXN8ZW58MXx8fHwxNzcxOTI1Nzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '20',
    title: 'Queen Top Open Teen Patti',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1654459531174-9a1902981869?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlciUyMHRhYmxlJTIwcHJvZmVzc2lvbmFsJTIwdG91cm5hbWVudHxlbnwxfHx8fDE3NzE5MjU3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '21',
    title: 'Jack',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1566563255308-753861417000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbG90JTIwcmVlbHMlMjBsdWNreSUyMHNldmVufGVufDF8fHx8MTc3MTkyNTc5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '22',
    title: 'Sic Bo 2',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1675392347257-2511c631f5e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3VsZXR0ZSUyMGJhbGwlMjBnb2xkJTIwbHV4dXJ5fGVufDF8fHx8MTc3MTkyNTc5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '23',
    title: 'TheClassic',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1760183195033-a54a94b50e3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjBuZW9uJTIwc2lnbiUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MTkyNTc4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '24',
    title: 'Sic Bo',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1654459531174-9a1902981869?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlciUyMHRvdXJuYW1lbnQlMjBiYW5uZXIlMjBzaWdufGVufDF8fHx8MTc3MTkyNTc4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isNew: true,
  },
  {
    id: '25',
    title: 'Ball By Ball',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1721002357688-b81404a3cf8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3VsZXR0ZSUyMHRhYmxlJTIwbHV4dXJ5JTIwY2FzaW5vfGVufDF8fHx8MTc3MTkyNTc4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '26',
    title: 'Teen Patti 20-20',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1680191741548-1a9321688cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjB2aXAlMjBsb3VuZ2UlMjBlbGVnYW50fGVufDF8fHx8MTc3MTkyNTc4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '27',
    title: 'Teen Patti Test',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1768359666502-306694fa6fcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjBjaGlwcyUyMGx1eHVyeSUyMGdvbGR8ZW58MXx8fHwxNzcxOTI1Nzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '28',
    title: 'Teen Patti Open',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1663110094638-0d4abe240fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWNlJTIwbmVvbiUyMGxpZ2h0cyUyMGNhc2lub3xlbnwxfHx8fDE3NzE5MjU3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isHot: true,
  },
  {
    id: '29',
    title: 'Poker T Day',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1758563920532-adbb05710d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3VsZXR0ZSUyMHdoZWVsJTIwc3Bpbm5pbmclMjBsdXh1cnl8ZW58MXx8fHwxNzcxOTI0NDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '30',
    title: 'Poker 20-20',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1713756629990-2657a4209bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlciUyMGNoaXBzJTIwc3RhY2tzJTIwY29sb3JmdWx8ZW58MXx8fHwxNzcxOTI1NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '31',
    title: 'Poker 6 Players',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1768201493980-95066d0949a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMHZpbnRhZ2UlMjBuZW9ufGVufDF8fHx8MTc3MTkyNTc5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '32',
    title: 'Baccarat',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1599579887642-9821ebe3c79a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNjYXJhdCUyMHRhYmxlJTIwZWxlZ2FudCUyMGNhc2lub3xlbnwxfHx8fDE3NzE5MjQ1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isHot: true,
  },
  {
    id: '33',
    title: 'Baccarat 2',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1708027111092-4c421303f803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjBjaGlwcyUyMGJldHRpbmclMjByZWR8ZW58MXx8fHwxNzcxOTI1NzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '34',
    title: '29-29 Dragon Tiger 2',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1657883888456-5db6947fa574?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjBuZW9uJTIwbGlnaHRzJTIwdmVnYXN8ZW58MXx8fHwxNzcxOTI1Nzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '35',
    title: '32 Cards A',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1632032858061-b321b3c1d52b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlciUyMGNhcmRzJTIwaGFuZCUyMHdpbm5lcnxlbnwxfHx8fDE3NzE5MjU3OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '36',
    title: '32 Cards B',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1655008109440-df3a58567cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlciUyMGNhcmRzJTIwcm95YWwlMjBmbHVzaHxlbnwxfHx8fDE3NzE5MjE1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '37',
    title: 'Andar Bahar',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1743824521065-48d394eafcda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFja2phY2slMjB0YWJsZSUyMGNhc2lobyUyMG5pZ2h0fGVufDF8fHx8MTc3MTkyNTc5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '38',
    title: 'Andar Bahar 2',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1592602944193-0848995f4b5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3VsZXR0ZSUyMGJldHRpbmclMjB0YWJsZSUyMHJlZHxlbnwxfHx8fDE3NzE5MjU3OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '39',
    title: 'Muflis Teen Patti',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1621265054041-e90cefa414a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjBqb2tlciUyMGNhcmQlMjBkYXJrfGVufDF8fHx8MTc3MTkyNTc5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isNew: true,
  },
  {
    id: '40',
    title: 'Muflis Teen Patti 1 Day',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1566563255308-753861417000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbG90JTIwcmVlbHMlMjBsdWNreSUyMHNldmVufGVufDF8fHx8MTc3MTkyNTc5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '41',
    title: '32 Card 1 Day',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1675392347257-2511c631f5e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3VsZXR0ZSUyMGJhbGwlMjBnb2xkJTIwbHV4dXJ5fGVufDF8fHx8MTc3MTkyNTc5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isNew: true,
  },
  {
    id: '42',
    title: 'Amar Akbar Anthony',
    category: 'Casino',
    imageUrl: 'https://images.unsplash.com/photo-1566563255308-753861417000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGphY2twb3QlMjBzY3JlZW58ZW58MXx8fHwxNzcxOTI1Nzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isHot: true,
  },
];

export const sportCategories: SportCategory[] = [
  { id: 'cricket', name: 'Cricket', icon: '🏏', count: 156 },
  { id: 'football', name: 'Football', icon: '⚽', count: 89 },
  { id: 'tennis', name: 'Tennis', icon: '🎾', count: 45 },
  { id: 'table-tennis', name: 'Table Tennis', icon: '🏓', count: 23 },
  { id: 'horse-racing', name: 'Horse Racing', icon: '🏇', count: 34 },
  { id: 'greyhound-racing', name: 'Greyhound Racing', icon: '🐕', count: 18 },
  { id: 'basketball', name: 'Basketball', icon: '🏀', count: 56 },
  { id: 'volleyball', name: 'Volleyball', icon: '🏐', count: 12 },
  { id: 'esoccer', name: 'E-Soccer', icon: '🎮', count: 67 },
];

// Nested sport leagues and tournaments
export const sportLeagues: Record<string, Array<{ name: string; matches?: string[] }>> = {
  'Politics': [
    { name: 'US Elections' },
    { name: 'UK Politics' },
  ],
  'Cricket': [
    { name: 'IPL 2026' },
    { name: 'T20 World Cup' },
    { name: 'The Ashes' },
  ],
  'Football': [
    { 
      name: 'SOUTH AFRICA Premiership',
      matches: ['AmaZulu v Mamelodi Sundowns', 'Kaizer Chiefs v Stellenbosch FC']
    },
    { name: 'EUROPE CONFERENCE LEAGUE' },
    { name: 'INDIA ISL' },
    { name: 'COLOMBIA Primera B' },
    { name: 'EUROPE EUROPA LEAGUE' },
    { name: 'SCOTLAND CHALLENGE CUP - SEMI-FINALS' },
    { name: 'ENGLAND Championship' },
    { name: 'SAUDI ARABIA Saudi Professional League' },
    { name: 'NEPAL National League' },
    { name: 'UEFA CHAMPIONS LEAGUE - WINNER 2025/26' },
    { name: 'VIETNAM V.League 1' },
    { name: 'INDONESIA Super League' },
    { name: 'ENGLAND Professional Development League' },
    { name: 'EUROPE CHAMPIONS LEAGUE' },
    { name: 'EGYPT Premier League' },
    { name: 'NORTH MACEDONIA MACEDONIAN CUP - QUARTER-FINALS' },
    { name: 'SCOTLAND Championship' },
    { name: 'SCOTLAND Premiership' },
  ],
  'Tennis': [
    { name: 'ATP Tour' },
    { name: 'WTA Tour' },
    { name: 'Grand Slam' },
  ],
  'Table Tennis': [
    { name: 'World Championship' },
    { name: 'Asian Championship' },
  ],
  'Basketball': [
    { name: 'NBA' },
    { name: 'EuroLeague' },
    { name: 'FIBA World Cup' },
  ],
  'Volleyball': [
    { name: 'FIVB World League' },
    { name: 'European Championship' },
  ],
  'E-Soccer': [
    { name: 'FIFA eWorld Cup' },
    { name: 'ePremier League' },
  ],
};

// Tournament Winner data
export interface TournamentTeam {
  id: string;
  name: string;
  odds: {
    back1?: number;
    lay1?: number;
    back2?: number;
    lay2?: number;
    back3?: number;
    lay3?: number;
  };
  bookmakerOdds?: {
    back: number;
    lay: number;
  };
  isLocked?: boolean;
  status?: 'active' | 'loser' | 'suspended';
}

export const t20WorldCupTeams: TournamentTeam[] = [
  {
    id: '1',
    name: 'India',
    odds: { back1: 3.2, lay1: 3.25, back2: 3.3, lay2: 3.35, back3: 3.4, lay3: 3.45 },
    bookmakerOdds: { back: 500, lay: 520 },
    status: 'active'
  },
  {
    id: '2',
    name: 'Australia',
    odds: { back1: 3.5, lay1: 3.55, back2: 3.6, lay2: 3.65, back3: 3.7, lay3: 3.75 },
    bookmakerOdds: { back: 480, lay: 500 },
    status: 'active'
  },
  {
    id: '3',
    name: 'South Africa',
    odds: { back1: 3.6, lay1: 3.65, back2: 3.7, lay2: 3.75, back3: 3.8, lay3: 3.9 },
    bookmakerOdds: { back: 460, lay: 480 },
    status: 'active'
  },
  {
    id: '4',
    name: 'England',
    odds: { back1: 5.1, lay1: 5.2, back2: 5.3, lay2: 5.4, back3: 5.5, lay3: 5.6 },
    bookmakerOdds: { back: 380, lay: 400 },
    status: 'active'
  },
  {
    id: '5',
    name: 'New Zealand',
    odds: { back1: 6.2, lay1: 6.4, back2: 6.6, lay2: 7, back3: 7.2, lay3: 7.6 },
    bookmakerOdds: { back: 320, lay: 340 },
    status: 'active'
  },
  {
    id: '6',
    name: 'Pakistan',
    odds: { back1: 55, lay1: 60, back2: 70, lay2: 85, back3: 100, lay3: 110 },
    bookmakerOdds: { back: 280, lay: 300 },
    status: 'active'
  },
  {
    id: '7',
    name: 'West Indies',
    odds: { back1: 11, lay1: 11.5, back2: 12, lay2: 12.5, back3: 13, lay3: 13.5 },
    bookmakerOdds: { back: 240, lay: 260 },
    status: 'active'
  },
  {
    id: '8',
    name: 'Sri Lanka',
    odds: { back1: 44, lay1: 500, back2: 1000, lay2: 1500 },
    bookmakerOdds: { back: 200, lay: 220 },
    status: 'suspended'
  },
  {
    id: '9',
    name: 'Afghanistan',
    odds: {},
    bookmakerOdds: { back: 180, lay: 200 },
    status: 'loser'
  },
  {
    id: '10',
    name: 'Italy',
    odds: {},
    bookmakerOdds: { back: 160, lay: 180 },
    status: 'loser'
  },
  {
    id: '11',
    name: 'USA',
    odds: {},
    bookmakerOdds: { back: 140, lay: 160 },
    status: 'suspended'
  },
  {
    id: '12',
    name: 'Zimbabwe',
    odds: { back1: 720, lay1: 730, back2: 740 },
    bookmakerOdds: { back: 120, lay: 140 },
    status: 'active'
  },
  {
    id: '13',
    name: 'Ireland',
    odds: {},
    bookmakerOdds: { back: 100, lay: 120 },
    status: 'loser'
  },
  {
    id: '14',
    name: 'UAE',
    odds: {},
    bookmakerOdds: { back: 90, lay: 110 },
    status: 'suspended'
  },
  {
    id: '15',
    name: 'Scotland',
    odds: {},
    bookmakerOdds: { back: 80, lay: 100 },
    status: 'loser'
  },
  {
    id: '16',
    name: 'Netherlands',
    odds: {},
    bookmakerOdds: { back: 70, lay: 90 },
    status: 'loser'
  },
  {
    id: '17',
    name: 'Namibia',
    odds: {},
    bookmakerOdds: { back: 60, lay: 80 },
    status: 'suspended'
  },
  {
    id: '18',
    name: 'Canada',
    odds: {},
    bookmakerOdds: { back: 50, lay: 70 },
    status: 'loser'
  },
  {
    id: '19',
    name: 'Oman',
    odds: {},
    bookmakerOdds: { back: 40, lay: 60 },
    status: 'loser'
  },
  {
    id: '20',
    name: 'Nepal',
    odds: {},
    bookmakerOdds: { back: 30, lay: 50 },
    status: 'suspended'
  },
  {
    id: '21',
    name: 'Bangladesh',
    odds: {},
    bookmakerOdds: { back: 20, lay: 40 },
    status: 'loser'
  },
  {
    id: '22',
    name: 'Uganda',
    odds: {},
    bookmakerOdds: { back: 10, lay: 30 },
    status: 'loser'
  },
  {
    id: '23',
    name: 'Papua New Guinea',
    odds: {},
    bookmakerOdds: { back: 5, lay: 25 },
    status: 'loser'
  },
];