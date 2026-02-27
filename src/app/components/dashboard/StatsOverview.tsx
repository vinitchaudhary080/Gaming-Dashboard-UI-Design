import { TrendingUp, Users, Trophy, Zap } from 'lucide-react';

export function StatsOverview() {
  const stats = [
    {
      label: 'Live Matches',
      value: '156',
      change: '+12',
      icon: Zap,
      color: 'from-violet-500 to-purple-600',
    },
    {
      label: 'Active Users',
      value: '2.4K',
      change: '+18%',
      icon: Users,
      color: 'from-cyan-500 to-blue-600',
    },
    {
      label: 'Wins',
      value: '342',
      change: '+24',
      icon: Trophy,
      color: 'from-purple-500 to-violet-600',
    },
    {
      label: 'Total Bets',
      value: '8.9K',
      change: '+32%',
      icon: TrendingUp,
      color: 'from-emerald-500 to-green-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="relative group bg-white rounded-2xl p-5 border border-gray-200 hover:border-violet-200 transition-all duration-300 hover:shadow-lg hover:shadow-violet-100"
          >
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 to-cyan-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative">
              <div className="flex items-start justify-between mb-3">
                <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-xl shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="px-2 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                  {stat.change}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}