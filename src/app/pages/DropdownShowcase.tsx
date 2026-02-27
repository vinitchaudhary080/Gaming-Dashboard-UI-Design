import { useState } from 'react';
import { Settings, User, LogOut, Bell, CreditCard, Shield } from 'lucide-react';
import {
  CollapsibleSection,
  ExpandableSportItem,
  HorseRacingDropdown,
  LeagueItem,
  UserMenuDropdown,
  SimpleDropdown,
} from '../components/dropdowns/SidebarDropdowns';

export function DropdownShowcase() {
  // Section 1 - Collapsible Section
  const [section1Open, setSection1Open] = useState(true);
  const [section2Open, setSection2Open] = useState(true);
  const [section3Open, setSection3Open] = useState(false);

  // Section 2 - Expandable Sport Item
  const [sport1Expanded, setSport1Expanded] = useState(false);
  const [sport2Expanded, setSport2Expanded] = useState(true);
  const [sport3Expanded, setSport3Expanded] = useState(false);

  // Section 3 - Horse Racing Dropdown
  const [horseRacingMenuOpen, setHorseRacingMenuOpen] = useState(false);

  // Section 4 - League Items
  const [league1Expanded, setLeague1Expanded] = useState(false);
  const [league2Expanded, setLeague2Expanded] = useState(true);
  const [league3Expanded, setLeague3Expanded] = useState(false);

  // Section 5 - User Menu
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Section 6 - Simple Dropdown
  const [simpleMenu1Open, setSimpleMenu1Open] = useState(false);
  const [simpleMenu2Open, setSimpleMenu2Open] = useState(false);

  const horseRacingEvents = [
    { time: '15:50', location: 'Gloucester Park (AU)' },
    { time: '16:10', location: 'Junee (AU)' },
    { time: '16:10', location: 'Vaal (ZA)' },
    { time: '16:12', location: 'Angers (FR)' },
    { time: '16:20', location: 'Gloucester Park (AU)' },
    { time: '16:30', location: 'Cagnes-sur-Mer (FR)' },
    { time: '16:45', location: 'Vaal (ZA)' },
    { time: '16:47', location: 'Angers (FR)' },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">{/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Dropdown Components Library</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            6 Professional & Reusable Dropdown Components - Copy & Use Anywhere
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
            <div className="px-4 py-2 bg-purple-100 rounded-full border border-purple-200 text-purple-700 text-sm font-medium">
              ✨ Ready to Copy
            </div>
            <div className="px-4 py-2 bg-purple-100 rounded-full border border-purple-200 text-purple-700 text-sm font-medium">
              🎨 Fully Styled
            </div>
            <div className="px-4 py-2 bg-purple-100 rounded-full border border-purple-200 text-purple-700 text-sm font-medium">
              ⚡ TypeScript Ready
            </div>
          </div>
        </div>

        {/* Grid layout with larger cards */}
        <div className="space-y-8">{/* 1. COLLAPSIBLE SECTION */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="relative overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 px-8 py-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-2xl font-bold text-white border border-white/30 backdrop-blur-xl shadow-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-1">Collapsible Section</h2>
                    <p className="text-purple-100">Main category dropdown with glassmorphism effect & chevron indicator</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="max-w-xs mx-auto">
                <div className="w-64 border border-gray-200 rounded-2xl overflow-hidden shadow-xl bg-white">
                  <CollapsibleSection
                    title="Racing Sports"
                    isExpanded={section1Open}
                    onToggle={() => setSection1Open(!section1Open)}
                  >
                    <div className="p-4 text-sm text-gray-600 bg-gray-50">
                      <p className="mb-2">✓ Horse Racing</p>
                      <p>✓ Greyhound Racing</p>
                    </div>
                  </CollapsibleSection>

                  <CollapsibleSection
                    title="Casino Games"
                    isExpanded={section2Open}
                    onToggle={() => setSection2Open(!section2Open)}
                  >
                    <div className="p-4 text-sm text-gray-600 bg-gray-50">
                      <p className="mb-2">✓ Premium Casino</p>
                      <p className="mb-2">✓ Live Casino</p>
                      <p>✓ Slot Games</p>
                    </div>
                  </CollapsibleSection>

                  <CollapsibleSection
                    title="All Sports"
                    isExpanded={section3Open}
                    onToggle={() => setSection3Open(!section3Open)}
                  >
                    <div className="p-4 text-sm text-gray-600 bg-gray-50">
                      <p className="mb-2">✓ Cricket</p>
                      <p className="mb-2">✓ Football</p>
                      <p>✓ Tennis</p>
                    </div>
                  </CollapsibleSection>
                </div>
              </div>
            </div>
          </div>

          {/* 2. EXPANDABLE SPORT ITEM */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="relative overflow-hidden">
              <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 px-8 py-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-2xl font-bold text-white border border-white/30 backdrop-blur-xl shadow-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-1">Expandable Sport Item</h2>
                    <p className="text-purple-100">Sport items with Plus/Minus toggle buttons for expanding sub-items</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="max-w-2xl mx-auto">
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-xl">
                  <ExpandableSportItem
                    name="Cricket"
                    hasSubItems={true}
                    isExpanded={sport1Expanded}
                    onToggle={() => setSport1Expanded(!sport1Expanded)}
                  >
                    <div className="p-4 text-sm text-gray-600 bg-gray-50 ml-8">
                      <p className="mb-2">→ IPL 2026</p>
                      <p className="mb-2">→ T20 World Cup</p>
                      <p>→ The Ashes</p>
                    </div>
                  </ExpandableSportItem>

                  <ExpandableSportItem
                    name="Football"
                    hasSubItems={true}
                    isExpanded={sport2Expanded}
                    onToggle={() => setSport2Expanded(!sport2Expanded)}
                  >
                    <div className="p-4 text-sm text-gray-600 bg-gray-50 ml-8">
                      <p className="mb-2">→ Premier League</p>
                      <p className="mb-2">→ Champions League</p>
                      <p>→ La Liga</p>
                    </div>
                  </ExpandableSportItem>

                  <ExpandableSportItem
                    name="Tennis"
                    hasSubItems={true}
                    isExpanded={sport3Expanded}
                    onToggle={() => setSport3Expanded(!sport3Expanded)}
                  >
                    <div className="p-4 text-sm text-gray-600 bg-gray-50 ml-8">
                      <p className="mb-2">→ Australian Open</p>
                      <p className="mb-2">→ Wimbledon</p>
                      <p>→ US Open</p>
                    </div>
                  </ExpandableSportItem>

                  <ExpandableSportItem
                    name="Basketball"
                    hasSubItems={false}
                    isExpanded={false}
                    onToggle={() => {}}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* TWO COLUMN LAYOUT FOR REMAINING COMPONENTS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 3. HORSE RACING HOVER DROPDOWN */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <div className="bg-gradient-to-r from-fuchsia-600 via-pink-600 to-fuchsia-600 px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-xl font-bold text-white border border-white/30 backdrop-blur-xl shadow-lg">
                      3
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-white mb-0.5">Horse Racing Flyout</h2>
                      <p className="text-pink-100 text-sm">Hover menu with events</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-gray-100 shadow-xl">
                  <div className="relative">
                    <div
                      className="flex items-center border-b border-gray-200 hover:bg-gray-200 transition-colors cursor-pointer"
                      onMouseEnter={() => setHorseRacingMenuOpen(true)}
                      onMouseLeave={() => setHorseRacingMenuOpen(false)}
                    >
                      <button className="flex-1 px-4 py-2.5 text-left text-sm font-semibold text-gray-800">
                        Horse Racing (Hover me)
                      </button>
                    </div>
                    <HorseRacingDropdown 
                      isOpen={horseRacingMenuOpen} 
                      events={horseRacingEvents} 
                    />
                  </div>

                  <div className="p-4 text-sm text-gray-600 bg-purple-50 border-t border-gray-200">
                    <p className="font-semibold mb-2">💡 Tip:</p>
                    <p>Hover over "Horse Racing" to see the flyout menu.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. LEAGUE ITEMS */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-xl font-bold text-white border border-white/30 backdrop-blur-xl shadow-lg">
                      4
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-white mb-0.5">League/Tournament Items</h2>
                      <p className="text-indigo-100 text-sm">Nested with match listings</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-gray-100 shadow-xl">
                  <LeagueItem
                    name="Premier League"
                    hasMatches={true}
                    isExpanded={league1Expanded}
                    onToggle={() => setLeague1Expanded(!league1Expanded)}
                    matches={[
                      'Manchester United v Liverpool',
                      'Chelsea v Arsenal',
                      'Tottenham v Manchester City',
                      'Newcastle v Brighton'
                    ]}
                  />

                  <LeagueItem
                    name="Champions League"
                    hasMatches={true}
                    isExpanded={league2Expanded}
                    onToggle={() => setLeague2Expanded(!league2Expanded)}
                    matches={[
                      'Real Madrid v Barcelona',
                      'Bayern Munich v PSG',
                      'Manchester City v Inter Milan'
                    ]}
                  />

                  <LeagueItem
                    name="La Liga"
                    hasMatches={true}
                    isExpanded={league3Expanded}
                    onToggle={() => setLeague3Expanded(!league3Expanded)}
                    matches={[
                      'Atletico Madrid v Sevilla',
                      'Valencia v Villarreal'
                    ]}
                  />

                  <LeagueItem
                    name="Serie A"
                    hasMatches={false}
                    isExpanded={false}
                    onToggle={() => {}}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ANOTHER TWO COLUMN LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 5. USER MENU DROPDOWN */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-xl font-bold text-white border border-white/30 backdrop-blur-xl shadow-lg">
                      5
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-white mb-0.5">User Menu Dropdown</h2>
                      <p className="text-emerald-100 text-sm">Avatar menu with options</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="border border-gray-200 rounded-xl p-6 bg-white/5 backdrop-blur-sm shadow-xl">
                  <div className="relative inline-block">
                    <button
                      onClick={() => setUserMenuOpen(!userMenuOpen)}
                      className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5" />
                      </div>
                      <span>Demo User</span>
                    </button>
                    <UserMenuDropdown
                      isOpen={userMenuOpen}
                      onClose={() => setUserMenuOpen(false)}
                      username="Demo User"
                    />
                  </div>

                  <div className="mt-5 p-4 bg-purple-50/50 backdrop-blur-sm rounded-lg border border-purple-200/50">
                    <p className="text-xs text-gray-700">
                      <span className="font-semibold">Includes:</span> Account Statement, Current Bet, Casino Results, Set Button Values, and SignOut
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. SIMPLE DROPDOWN MENU */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-xl font-bold text-white border border-white/30 backdrop-blur-xl shadow-lg">
                      6
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-white mb-0.5">Simple Dropdown Menu</h2>
                      <p className="text-pink-100 text-sm">Generic customizable menu</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="border border-gray-200 rounded-xl p-6 bg-white/5 backdrop-blur-sm shadow-xl space-y-4">
                  {/* Example 1: Settings Menu */}
                  <div className="relative inline-block">
                    <button
                      onClick={() => setSimpleMenu1Open(!simpleMenu1Open)}
                      className="flex items-center gap-2 px-5 py-3 bg-white border-2 border-purple-200 hover:border-purple-300 text-gray-900 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all hover:scale-105"
                    >
                      <Settings className="w-5 h-5" />
                      <span>Options Menu</span>
                    </button>
                    <SimpleDropdown
                      isOpen={simpleMenu1Open}
                      position="left"
                      items={[
                        { 
                          label: 'Profile', 
                          icon: <User className="w-4 h-4" />,
                          onClick: () => {
                            setSimpleMenu1Open(false);
                            alert('Profile clicked!');
                          }
                        },
                        { 
                          label: 'Settings', 
                          icon: <Settings className="w-4 h-4" />,
                          onClick: () => {
                            setSimpleMenu1Open(false);
                            alert('Settings clicked!');
                          }
                        },
                        { 
                          label: 'Notifications', 
                          icon: <Bell className="w-4 h-4" />,
                          onClick: () => setSimpleMenu1Open(false)
                        },
                        { isDivider: true },
                        { 
                          label: 'Logout', 
                          icon: <LogOut className="w-4 h-4" />,
                          isDestructive: true,
                          onClick: () => {
                            setSimpleMenu1Open(false);
                            alert('Logout clicked!');
                          }
                        },
                      ]}
                    />
                  </div>

                  {/* Example 2: Account Menu */}
                  <div className="relative inline-block">
                    <button
                      onClick={() => setSimpleMenu2Open(!simpleMenu2Open)}
                      className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    >
                      <CreditCard className="w-5 h-5" />
                      <span>Account Menu</span>
                    </button>
                    <SimpleDropdown
                      isOpen={simpleMenu2Open}
                      position="left"
                      width="w-64"
                      items={[
                        { 
                          label: 'Account Details', 
                          icon: <User className="w-4 h-4" />,
                          onClick: () => setSimpleMenu2Open(false)
                        },
                        { 
                          label: 'Payment Methods', 
                          icon: <CreditCard className="w-4 h-4" />,
                          onClick: () => setSimpleMenu2Open(false)
                        },
                        { 
                          label: 'Security Settings', 
                          icon: <Shield className="w-4 h-4" />,
                          onClick: () => setSimpleMenu2Open(false)
                        },
                        { isDivider: true },
                        { 
                          label: 'Sign Out', 
                          icon: <LogOut className="w-4 h-4" />,
                          isDestructive: true,
                          onClick: () => setSimpleMenu2Open(false)
                        },
                      ]}
                    />
                  </div>

                  <div className="mt-4 p-4 bg-purple-50/50 backdrop-blur-sm rounded-lg border border-purple-200/50">
                    <p className="text-xs text-gray-700">
                      <span className="font-semibold">Features:</span> Custom width, icons, dividers, destructive styling, click handlers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Code Reference */}
        <div className="mt-12 bg-white/[0.08] backdrop-blur-3xl rounded-3xl border border-white/30 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '500ms' }}>
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800/90 to-gray-900/90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
            <div className="relative px-8 py-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-3xl">📦</span>
                How to Use These Components
              </h2>
            </div>
          </div>
          <div className="p-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-sm text-white mb-6 leading-relaxed">
                All components are available in <code className="bg-purple-500/30 text-purple-200 px-3 py-1.5 rounded-lg font-mono text-xs border border-purple-400/30">/src/app/components/dropdowns/SidebarDropdowns.tsx</code>
              </p>
              <div className="bg-gray-900 text-gray-100 rounded-xl p-6 font-mono text-sm overflow-x-auto border border-gray-700 shadow-inner">
                <div className="text-green-400">// Import the components you need</div>
                <div className="mt-2">
                  <span className="text-purple-400">import</span> {'{'} CollapsibleSection, UserMenuDropdown {'}'}
                </div>
                <div className="ml-4">
                  <span className="text-purple-400">from</span> <span className="text-yellow-300">'./components/dropdowns/SidebarDropdowns'</span>;
                </div>
                <div className="mt-4 text-green-400">// Use in your component</div>
                <div className="mt-2">
                  <span className="text-blue-400">{'<CollapsibleSection'}</span>
                </div>
                <div className="ml-4">
                  <span className="text-purple-300">title</span>=<span className="text-yellow-300">"My Section"</span>
                </div>
                <div className="ml-4">
                  <span className="text-purple-300">isExpanded</span>={'{isOpen}'}
                </div>
                <div className="ml-4">
                  <span className="text-purple-300">onToggle</span>={'{() => setIsOpen(!isOpen)}'}
                </div>
                <div>
                  <span className="text-blue-400">{'>'}</span>
                </div>
                <div className="ml-4">
                  <span className="text-gray-400">{'<div>Content</div>'}</span>
                </div>
                <div>
                  <span className="text-blue-400">{'</CollapsibleSection>'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center animate-in fade-in duration-700" style={{ animationDelay: '600ms' }}>
          <a
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-violet-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}