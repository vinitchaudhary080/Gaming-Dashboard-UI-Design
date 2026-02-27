import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { 
  Menu, 
  X, 
  Search, 
  Bell, 
  User, 
  Wallet, 
  Settings,
  LogOut,
  ChevronDown,
  Shield
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Sidebar } from '../components/dashboard/Sidebar';

export function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    'HOME',
    'LOTTERY',
    'CRICKET',
    'TENNIS',
    'FOOTBALL',
    'TABLE TENNIS',
    'BACCARAT',
    '32 CARDS',
    'TEENPATTI',
    'POKER',
    'LUCKY 7',
    'CRASH',
    'HORSE RACING',
  ];

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

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-violet-50/30 to-purple-50/40" />
        
        {/* Animated gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-violet-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-gradient-to-tr from-fuchsia-300/15 to-pink-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-gradient-to-bl from-indigo-300/15 to-purple-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(147,51,234,0.05),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(217,70,239,0.05),transparent_50%)]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-100 shadow-sm">
        {/* Purple gradient background layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/[0.03] via-violet-500/[0.05] to-purple-500/[0.03] pointer-events-none"></div>
        
        {/* White backdrop with blur */}
        <div className="absolute inset-0 bg-white/90 backdrop-blur-2xl -z-10"></div>
        
        <div className="relative flex items-center justify-between px-4 lg:px-6 h-16">
          {/* Left section */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hover:bg-violet-50/50"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500/80 to-violet-500/80 rounded-lg flex items-center justify-center shadow-md shadow-purple-500/10">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="hidden lg:block">
                <div className="text-sm font-bold text-gray-900">Gaming Dashboard</div>
                <div className="text-[10px] text-gray-500">Version 21 • Refined Header</div>
              </div>
            </div>
          </div>

          {/* Center - Search */}
          <div className="flex-1 max-w-md mx-4 hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search games, sports..."
                className="pl-10 h-9 bg-white border-gray-200/50 focus:border-violet-300 focus:ring-violet-200/50"
              />
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-2">
            {/* Balance */}
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-50/30 to-purple-50/30 rounded-xl border border-violet-100/30">
              <Wallet className="w-4 h-4 text-violet-500" />
              <div className="text-sm">
                <div className="text-xs text-gray-500">Balance</div>
                <div className="font-bold text-violet-600">₹1500</div>
              </div>
            </div>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative hover:bg-violet-50/50">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </Button>

            {/* User menu */}
            <div className="relative z-[100]">
              <Button
                variant="ghost"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 hover:bg-violet-50/50"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-violet-500/70 to-purple-500/70 rounded-full flex items-center justify-center shadow-sm">
                  <User className="w-5 h-5 text-white" />
                </div>
                <span className="hidden sm:block font-medium text-sm">Demo User</span>
                <ChevronDown className="w-4 h-4" />
              </Button>

              {/* Dropdown */}
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-[200]">
                  <Link to="/account-statement" className="block px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-900 transition-colors">
                    Account Statement
                  </Link>
                  <Link to="/current-bets" className="block px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-900 transition-colors">
                    Current Bet
                  </Link>
                  <Link to="/casino-results" className="block px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-900 transition-colors">
                    Casino Results
                  </Link>
                  <a href="#" className="block px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-900 transition-colors">
                    Set Button Values
                  </a>
                  <hr className="my-2 border-gray-200" />
                  <Link to="/login" className="block px-4 py-2.5 hover:bg-red-50 text-sm font-medium text-red-600 transition-colors">
                    SignOut
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* White spacer between header and tabs */}
        <div className="relative bg-white h-4 z-10"></div>

        {/* Navigation tabs - Separated with subtle styling */}
        <div className="relative">
          {/* Subtle top border with gradient */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          
          {/* Tabs container - Clean white background */}
          <div className="bg-white">
            <div className="px-4 lg:px-6 overflow-x-auto scrollbar-hide">
              <div className="flex gap-1 min-w-max">
                {navItems.map((item, index) => {
                  const isHome = item === 'HOME';
                  const isActive = isHome && location.pathname === '/';
                  
                  return isHome ? (
                    <Link
                      key={item}
                      to="/"
                      className={`
                        relative px-4 py-3 text-sm font-medium transition-all duration-200 whitespace-nowrap rounded-t-lg bg-white
                        ${isActive
                          ? 'text-violet-700 shadow-sm' 
                          : 'text-gray-600 hover:text-gray-900'
                        }
                      `}
                    >
                      {item}
                      {/* Active indicator - touches the bottom */}
                      {isActive && (
                        <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500"></div>
                      )}
                    </Link>
                  ) : (
                    <button
                      key={item}
                      className="relative px-4 py-3 text-sm font-medium transition-all duration-200 whitespace-nowrap rounded-t-lg bg-white text-gray-600 hover:text-gray-900"
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-64 bg-white/60 backdrop-blur-sm border-r border-gray-100 min-h-[calc(100vh-145px)] sticky top-[145px] hidden lg:block">
            <Sidebar />
          </aside>
        )}

        {/* Content area - Reduced padding on mobile */}
        <main className="flex-1 p-1.5 sm:p-3 md:p-4 lg:p-5 xl:p-6 overflow-x-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}