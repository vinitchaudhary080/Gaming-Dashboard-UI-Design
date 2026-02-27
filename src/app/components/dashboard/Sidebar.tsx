import { useState } from 'react';
import { ChevronUp, Plus, Minus } from 'lucide-react';
import { sportCategories, sportLeagues } from '../../services/mockData';

interface SidebarSection {
  title: string;
  items: string[];
}

export function Sidebar() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['All Sports']);
  const [horseRacingMenuOpen, setHorseRacingMenuOpen] = useState(false);
  const [expandedSports, setExpandedSports] = useState<string[]>([]);
  const [expandedLeagues, setExpandedLeagues] = useState<string[]>([]);

  const horseRacingEvents = [
    { time: '15:50', location: 'Gloucester Park (AU)' },
    { time: '16:10', location: 'Junee (AU)' },
    { time: '16:10', location: 'Vaal (ZA)' },
    { time: '16:12', location: 'Angers (FR)' },
    { time: '16:20', location: 'Gloucester Park (AU)' },
    { time: '16:30', location: 'Cagnes-sur-Mer (FR)' },
    { time: '16:45', location: 'Vaal (ZA)' },
    { time: '16:47', location: 'Angers (FR)' },
    { time: '16:50', location: 'Gloucester Park (AU)' },
    { time: '17:05', location: 'Cagnes-sur-Mer (FR)' },
    { time: '17:15', location: 'Gloucester Park (AU)' },
    { time: '17:20', location: 'Vaal (ZA)' },
    { time: '17:22', location: 'Angers (FR)' },
    { time: '17:40', location: 'Cagnes-sur-Mer (FR)' },
    { time: '17:47', location: 'Gloucester Park (AU)' },
    { time: '17:55', location: 'Vaal (ZA)' },
    { time: '17:57', location: 'Angers (FR)' },
  ];

  const sections: SidebarSection[] = [
    {
      title: 'Racing Sports',
      items: ['Horse Racing', 'Greyhound Racing'],
    },
    {
      title: 'Casino Games',
      items: ['Our Premium Casino', 'Our Virtual', 'Live Casino', 'Slot Game', 'Fishing Game'],
    },
    {
      title: 'All Sports',
      items: ['Politics', 'Cricket', 'Football', 'Tennis', 'Table Tennis', 'Basketball', 'Volleyball', 'E-Soccer'],
    },
  ];

  const toggleSection = (title: string) => {
    setExpandedSections(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  const toggleSport = (sport: string) => {
    setExpandedSports(prev =>
      prev.includes(sport)
        ? prev.filter(t => t !== sport)
        : [...prev, sport]
    );
  };

  const toggleLeague = (league: string) => {
    setExpandedLeagues(prev =>
      prev.includes(league)
        ? prev.filter(t => t !== league)
        : [...prev, league]
    );
  };

  return (
    <div className="space-y-0">
      {sections.map((section) => (
        <div key={section.title} className="border-b border-gray-200">
          {/* Section Header with glassmorphism header background */}
          <button
            onClick={() => toggleSection(section.title)}
            className="relative flex items-center justify-between w-full px-4 py-3 text-sm font-bold text-gray-900 transition-all overflow-hidden"
          >
            {/* Purple gradient background layer (darker than header) */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/[0.08] via-violet-500/[0.12] to-purple-500/[0.08] pointer-events-none"></div>
            
            {/* White backdrop with blur */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-2xl -z-10"></div>
            
            <span className="relative z-10">{section.title}</span>
            {expandedSections.includes(section.title) && (
              <ChevronUp className="w-4 h-4 relative z-10" />
            )}
          </button>

          {/* Section Items */}
          {expandedSections.includes(section.title) && (
            <div className="bg-gray-100">
              {section.items.map((item) => {
                const sportData = sportCategories.find(s => s.name === item);
                const isHorseRacing = item === 'Horse Racing';
                const hasLeagues = sportLeagues[item] && sportLeagues[item].length > 0;
                const isExpanded = expandedSports.includes(item);
                const leagues = sportLeagues[item] || [];

                return (
                  <div key={item} className="relative">
                    {/* Sport/Item Row */}
                    <div
                      className="flex items-center border-b border-gray-200 hover:bg-gray-200 transition-colors"
                      onMouseEnter={() => {
                        if (isHorseRacing && section.title === 'Racing Sports') {
                          setHorseRacingMenuOpen(true);
                        }
                      }}
                      onMouseLeave={() => {
                        if (isHorseRacing && section.title === 'Racing Sports') {
                          setHorseRacingMenuOpen(false);
                        }
                      }}
                    >
                      {hasLeagues && (
                        <button
                          onClick={() => toggleSport(item)}
                          className="flex items-center justify-center w-8 h-10 hover:bg-gray-300 transition-colors"
                        >
                          {isExpanded ? (
                            <Minus className="w-4 h-4 text-gray-700" strokeWidth={2.5} />
                          ) : (
                            <Plus className="w-4 h-4 text-gray-700" strokeWidth={2.5} />
                          )}
                        </button>
                      )}
                      <button className="flex-1 px-4 py-2.5 text-left text-sm font-semibold text-gray-800">
                        {item}
                      </button>
                    </div>

                    {/* Horse Racing Dropdown (only for Racing Sports section) */}
                    {isHorseRacing && horseRacingMenuOpen && section.title === 'Racing Sports' && (
                      <div className="absolute left-full top-0 ml-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-[9999]">
                        <div className="px-5 py-3 border-b border-gray-200 bg-gradient-to-r from-violet-50/50 to-purple-50/50">
                          <h3 className="font-semibold text-sm text-gray-900">All Horse Racing</h3>
                        </div>
                        <div className="max-h-[400px] overflow-y-auto">
                          {horseRacingEvents.map((event, idx) => (
                            <a
                              key={idx}
                              href="#"
                              className="flex items-center gap-3 px-5 py-3 hover:bg-violet-50/30 border-b border-gray-100 last:border-b-0 transition-colors group"
                            >
                              <div className="text-sm font-semibold text-gray-900 min-w-[45px]">{event.time}</div>
                              <div className="text-sm text-gray-700 group-hover:text-violet-700 transition-colors">{event.location}</div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Leagues/Tournaments (nested level) */}
                    {hasLeagues && isExpanded && (
                      <div className="bg-gray-100">
                        {leagues.map((league) => {
                          const hasMatches = league.matches && league.matches.length > 0;
                          const leagueExpanded = expandedLeagues.includes(league.name);

                          return (
                            <div key={league.name}>
                              {/* League Row */}
                              <div className="flex items-center border-b border-gray-200 hover:bg-gray-200 transition-colors">
                                {hasMatches && (
                                  <button
                                    onClick={() => toggleLeague(league.name)}
                                    className="flex items-center justify-center w-8 h-10 hover:bg-gray-300 transition-colors ml-8"
                                  >
                                    {leagueExpanded ? (
                                      <Minus className="w-4 h-4 text-gray-700" strokeWidth={2.5} />
                                    ) : (
                                      <Plus className="w-4 h-4 text-gray-700" strokeWidth={2.5} />
                                    )}
                                  </button>
                                )}
                                {!hasMatches && <div className="w-8 ml-8"></div>}
                                <button className="flex-1 px-4 py-2.5 text-left text-xs font-semibold text-gray-800 uppercase">
                                  {league.name}
                                </button>
                              </div>

                              {/* Matches (nested level 3) */}
                              {hasMatches && leagueExpanded && (
                                <div className="bg-gray-100">
                                  {league.matches!.map((match, idx) => (
                                    <div
                                      key={idx}
                                      className="flex items-center border-b border-gray-200 hover:bg-gray-200 transition-colors"
                                    >
                                      <div className="w-8 ml-16"></div>
                                      <button className="flex-1 px-4 py-2.5 text-left text-sm text-gray-800">
                                        {match}
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}