import { useState } from 'react';
import { ChevronUp, Plus, Minus } from 'lucide-react';

/**
 * SIDEBAR DROPDOWN COMPONENTS - READY TO COPY
 * 
 * This file contains all sidebar dropdown components that can be copied
 * and reused anywhere in your application.
 */

// ============================================================================
// 1. COLLAPSIBLE SECTION DROPDOWN (Main Category Dropdown)
// ============================================================================

interface CollapsibleSectionProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export function CollapsibleSection({ title, isExpanded, onToggle, children }: CollapsibleSectionProps) {
  return (
    <div className="border-b border-gray-200">
      {/* Section Header with glassmorphism */}
      <button
        onClick={onToggle}
        className="relative flex items-center justify-between w-full px-4 py-3 text-sm font-bold text-gray-900 transition-all overflow-hidden hover:bg-purple-50/30"
      >
        {/* Purple gradient background layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/[0.08] via-violet-500/[0.12] to-purple-500/[0.08] pointer-events-none"></div>
        
        {/* White backdrop with blur */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-2xl -z-10"></div>
        
        <span className="relative z-10">{title}</span>
        {isExpanded && (
          <ChevronUp className="w-4 h-4 relative z-10" />
        )}
      </button>

      {/* Section Content */}
      {isExpanded && (
        <div className="bg-gray-100">
          {children}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// 2. EXPANDABLE SPORT ITEM (With Plus/Minus Toggle)
// ============================================================================

interface ExpandableSportItemProps {
  name: string;
  hasSubItems: boolean;
  isExpanded: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function ExpandableSportItem({ 
  name, 
  hasSubItems, 
  isExpanded, 
  onToggle, 
  children,
  onMouseEnter,
  onMouseLeave 
}: ExpandableSportItemProps) {
  return (
    <div>
      {/* Sport/Item Row */}
      <div
        className="flex items-center border-b border-gray-200 hover:bg-gray-200 transition-colors"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {hasSubItems && (
          <button
            onClick={onToggle}
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
          {name}
        </button>
      </div>

      {/* Sub-items */}
      {hasSubItems && isExpanded && (
        <div className="bg-gray-100">
          {children}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// 3. HORSE RACING HOVER DROPDOWN (Flyout Menu)
// ============================================================================

interface HorseRacingDropdownProps {
  isOpen: boolean;
  events: Array<{ time: string; location: string }>;
}

export function HorseRacingDropdown({ isOpen, events }: HorseRacingDropdownProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute left-full top-0 ml-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-[9999]">
      {/* Header */}
      <div className="px-5 py-3 border-b border-gray-200 bg-gradient-to-r from-violet-50/50 to-purple-50/50">
        <h3 className="font-semibold text-sm text-gray-900">All Horse Racing</h3>
      </div>
      
      {/* Events List */}
      <div className="max-h-[400px] overflow-y-auto">
        {events.map((event, idx) => (
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
  );
}

// ============================================================================
// 4. LEAGUE/TOURNAMENT DROPDOWN (Nested Level)
// ============================================================================

interface LeagueItemProps {
  name: string;
  hasMatches: boolean;
  isExpanded: boolean;
  onToggle: () => void;
  matches?: string[];
  indentLevel?: number; // For nested indentation
}

export function LeagueItem({ 
  name, 
  hasMatches, 
  isExpanded, 
  onToggle, 
  matches = [],
  indentLevel = 1 
}: LeagueItemProps) {
  const indentClass = indentLevel === 1 ? 'ml-8' : `ml-${indentLevel * 8}`;
  
  return (
    <div>
      {/* League Row */}
      <div className="flex items-center border-b border-gray-200 hover:bg-gray-200 transition-colors">
        {hasMatches && (
          <button
            onClick={onToggle}
            className={`flex items-center justify-center w-8 h-10 hover:bg-gray-300 transition-colors ${indentClass}`}
          >
            {isExpanded ? (
              <Minus className="w-4 h-4 text-gray-700" strokeWidth={2.5} />
            ) : (
              <Plus className="w-4 h-4 text-gray-700" strokeWidth={2.5} />
            )}
          </button>
        )}
        {!hasMatches && <div className={`w-8 ${indentClass}`}></div>}
        <button className="flex-1 px-4 py-2.5 text-left text-xs font-semibold text-gray-800 uppercase">
          {name}
        </button>
      </div>

      {/* Matches (nested level 3) */}
      {hasMatches && isExpanded && (
        <div className="bg-gray-100">
          {matches.map((match, idx) => (
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
}

// ============================================================================
// 5. USER MENU DROPDOWN (Top Right User Avatar)
// ============================================================================

interface UserMenuDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  username?: string;
}

export function UserMenuDropdown({ isOpen, onClose, username = "Demo User" }: UserMenuDropdownProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-[200]">
      <a 
        href="#" 
        className="block px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-900 transition-colors"
        onClick={onClose}
      >
        Account Statement
      </a>
      <a 
        href="#" 
        className="block px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-900 transition-colors"
        onClick={onClose}
      >
        Current Bet
      </a>
      <a 
        href="#" 
        className="block px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-900 transition-colors"
        onClick={onClose}
      >
        Casino Results
      </a>
      <a 
        href="#" 
        className="block px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-900 transition-colors"
        onClick={onClose}
      >
        Set Button Values
      </a>
      <hr className="my-2 border-gray-200" />
      <a 
        href="/login" 
        className="block px-4 py-2.5 hover:bg-red-50 text-sm font-medium text-gray-900 transition-colors"
        onClick={onClose}
      >
        SignOut
      </a>
    </div>
  );
}

// ============================================================================
// 6. SIMPLE DROPDOWN MENU (Generic Reusable)
// ============================================================================

interface DropdownMenuItem {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  isDivider?: boolean;
  isDestructive?: boolean;
}

interface SimpleDropdownProps {
  isOpen: boolean;
  items: DropdownMenuItem[];
  position?: 'left' | 'right';
  width?: string;
}

export function SimpleDropdown({ 
  isOpen, 
  items, 
  position = 'right',
  width = 'w-56' 
}: SimpleDropdownProps) {
  if (!isOpen) return null;

  const positionClass = position === 'left' ? 'left-0' : 'right-0';

  return (
    <div className={`absolute ${positionClass} mt-2 ${width} bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-[200]`}>
      {items.map((item, index) => {
        if (item.isDivider) {
          return <hr key={index} className="my-2 border-gray-200" />;
        }

        return (
          <a
            key={index}
            href={item.href || '#'}
            onClick={item.onClick}
            className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${
              item.isDestructive 
                ? 'hover:bg-red-50 text-red-600' 
                : 'hover:bg-gray-50 text-gray-900'
            }`}
          >
            {item.icon && <span className="w-5 h-5">{item.icon}</span>}
            <span>{item.label}</span>
          </a>
        );
      })}
    </div>
  );
}

// ============================================================================
// EXAMPLE USAGE COMPONENT
// ============================================================================

export function DropdownExamples() {
  const [section1Open, setSection1Open] = useState(true);
  const [sport1Expanded, setSport1Expanded] = useState(false);
  const [horseRacingOpen, setHorseRacingOpen] = useState(false);
  const [league1Expanded, setLeague1Expanded] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [simpleMenuOpen, setSimpleMenuOpen] = useState(false);

  const horseRacingEvents = [
    { time: '15:50', location: 'Gloucester Park (AU)' },
    { time: '16:10', location: 'Junee (AU)' },
    { time: '16:10', location: 'Vaal (ZA)' },
  ];

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">Dropdown Components Examples</h1>

      {/* Example 1: Collapsible Section */}
      <div className="border rounded-lg overflow-hidden">
        <h2 className="text-lg font-semibold p-4 bg-gray-100">1. Collapsible Section</h2>
        <CollapsibleSection
          title="Racing Sports"
          isExpanded={section1Open}
          onToggle={() => setSection1Open(!section1Open)}
        >
          <div className="p-4">Content goes here</div>
        </CollapsibleSection>
      </div>

      {/* Example 2: Expandable Sport Item */}
      <div className="border rounded-lg overflow-hidden">
        <h2 className="text-lg font-semibold p-4 bg-gray-100">2. Expandable Sport Item</h2>
        <ExpandableSportItem
          name="Cricket"
          hasSubItems={true}
          isExpanded={sport1Expanded}
          onToggle={() => setSport1Expanded(!sport1Expanded)}
        >
          <div className="p-4">Leagues and tournaments</div>
        </ExpandableSportItem>
      </div>

      {/* Example 3: Horse Racing Dropdown */}
      <div className="border rounded-lg overflow-hidden">
        <h2 className="text-lg font-semibold p-4 bg-gray-100">3. Horse Racing Hover Dropdown</h2>
        <div className="p-4 relative">
          <button
            className="px-4 py-2 bg-purple-600 text-white rounded-lg"
            onMouseEnter={() => setHorseRacingOpen(true)}
            onMouseLeave={() => setHorseRacingOpen(false)}
          >
            Hover for Horse Racing Events
          </button>
          <div className="relative inline-block">
            <HorseRacingDropdown isOpen={horseRacingOpen} events={horseRacingEvents} />
          </div>
        </div>
      </div>

      {/* Example 4: League Item */}
      <div className="border rounded-lg overflow-hidden">
        <h2 className="text-lg font-semibold p-4 bg-gray-100">4. League/Tournament Item</h2>
        <LeagueItem
          name="Premier League"
          hasMatches={true}
          isExpanded={league1Expanded}
          onToggle={() => setLeague1Expanded(!league1Expanded)}
          matches={['Manchester United v Liverpool', 'Chelsea v Arsenal']}
        />
      </div>

      {/* Example 5: User Menu */}
      <div className="border rounded-lg overflow-hidden">
        <h2 className="text-lg font-semibold p-4 bg-gray-100">5. User Menu Dropdown</h2>
        <div className="p-4 relative">
          <button
            className="px-4 py-2 bg-purple-600 text-white rounded-lg"
            onClick={() => setUserMenuOpen(!userMenuOpen)}
          >
            User Menu
          </button>
          <UserMenuDropdown
            isOpen={userMenuOpen}
            onClose={() => setUserMenuOpen(false)}
          />
        </div>
      </div>

      {/* Example 6: Simple Dropdown */}
      <div className="border rounded-lg overflow-hidden">
        <h2 className="text-lg font-semibold p-4 bg-gray-100">6. Simple Dropdown Menu</h2>
        <div className="p-4 relative">
          <button
            className="px-4 py-2 bg-purple-600 text-white rounded-lg"
            onClick={() => setSimpleMenuOpen(!simpleMenuOpen)}
          >
            Options Menu
          </button>
          <SimpleDropdown
            isOpen={simpleMenuOpen}
            items={[
              { label: 'Profile', href: '#' },
              { label: 'Settings', href: '#' },
              { isDivider: true },
              { label: 'Logout', href: '#', isDestructive: true },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
