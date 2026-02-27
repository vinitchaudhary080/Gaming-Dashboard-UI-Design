# 📦 Dropdown Components Library - Copy & Paste Ready

This document provides all the dropdown components from the left sidebar, ready to copy and use anywhere in your application.

## 📍 Location
All components are available in: `/src/app/components/dropdowns/SidebarDropdowns.tsx`

---

## 🎯 Available Dropdown Components

### 1️⃣ **CollapsibleSection** - Main Category Dropdown
Glassmorphism collapsible section with purple gradient header.

**Props:**
```typescript
{
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}
```

**Usage:**
```tsx
const [isOpen, setIsOpen] = useState(true);

<CollapsibleSection
  title="Racing Sports"
  isExpanded={isOpen}
  onToggle={() => setIsOpen(!isOpen)}
>
  <div>Your content here</div>
</CollapsibleSection>
```

---

### 2️⃣ **ExpandableSportItem** - Sport Item with Plus/Minus Toggle
Expandable list item with hover effects and optional sub-items.

**Props:**
```typescript
{
  name: string;
  hasSubItems: boolean;
  isExpanded: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
```

**Usage:**
```tsx
const [expanded, setExpanded] = useState(false);

<ExpandableSportItem
  name="Cricket"
  hasSubItems={true}
  isExpanded={expanded}
  onToggle={() => setExpanded(!expanded)}
>
  <div>Sub-items go here</div>
</ExpandableSportItem>
```

---

### 3️⃣ **HorseRacingDropdown** - Flyout Hover Menu
Absolute positioned flyout menu that appears on hover with scrollable event list.

**Props:**
```typescript
{
  isOpen: boolean;
  events: Array<{ time: string; location: string }>;
}
```

**Usage:**
```tsx
const [showMenu, setShowMenu] = useState(false);

const events = [
  { time: '15:50', location: 'Gloucester Park (AU)' },
  { time: '16:10', location: 'Junee (AU)' },
];

<div 
  className="relative"
  onMouseEnter={() => setShowMenu(true)}
  onMouseLeave={() => setShowMenu(false)}
>
  <button>Horse Racing</button>
  <HorseRacingDropdown isOpen={showMenu} events={events} />
</div>
```

---

### 4️⃣ **LeagueItem** - Nested League/Tournament Dropdown
Nested dropdown for leagues and matches with customizable indentation.

**Props:**
```typescript
{
  name: string;
  hasMatches: boolean;
  isExpanded: boolean;
  onToggle: () => void;
  matches?: string[];
  indentLevel?: number; // Default: 1
}
```

**Usage:**
```tsx
const [leagueOpen, setLeagueOpen] = useState(false);

<LeagueItem
  name="Premier League"
  hasMatches={true}
  isExpanded={leagueOpen}
  onToggle={() => setLeagueOpen(!leagueOpen)}
  matches={[
    'Manchester United v Liverpool',
    'Chelsea v Arsenal'
  ]}
  indentLevel={1}
/>
```

---

### 5️⃣ **UserMenuDropdown** - User Avatar Menu
Top-right user menu dropdown with sign-out option.

**Props:**
```typescript
{
  isOpen: boolean;
  onClose: () => void;
  username?: string; // Default: "Demo User"
}
```

**Usage:**
```tsx
const [menuOpen, setMenuOpen] = useState(false);

<div className="relative">
  <button onClick={() => setMenuOpen(!menuOpen)}>
    User Avatar
  </button>
  <UserMenuDropdown
    isOpen={menuOpen}
    onClose={() => setMenuOpen(false)}
    username="John Doe"
  />
</div>
```

---

### 6️⃣ **SimpleDropdown** - Generic Dropdown Menu
Fully customizable generic dropdown with icons and dividers.

**Props:**
```typescript
{
  isOpen: boolean;
  items: DropdownMenuItem[];
  position?: 'left' | 'right'; // Default: 'right'
  width?: string; // Default: 'w-56'
}

// DropdownMenuItem:
{
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  isDivider?: boolean;
  isDestructive?: boolean; // Red styling
}
```

**Usage:**
```tsx
import { Settings, User, LogOut } from 'lucide-react';

const [open, setOpen] = useState(false);

<SimpleDropdown
  isOpen={open}
  position="right"
  width="w-64"
  items={[
    { 
      label: 'Profile', 
      icon: <User className="w-4 h-4" />,
      onClick: () => console.log('Profile clicked')
    },
    { 
      label: 'Settings', 
      icon: <Settings className="w-4 h-4" />,
      href: '/settings'
    },
    { isDivider: true },
    { 
      label: 'Logout', 
      icon: <LogOut className="w-4 h-4" />,
      isDestructive: true,
      onClick: () => console.log('Logout')
    },
  ]}
/>
```

---

## 🎨 Design Features

All components include:

✅ **Glassmorphism Effects** - Frosted glass with backdrop blur  
✅ **Purple Gradient Theme** - Consistent violet/purple palette  
✅ **Smooth Transitions** - All hover and toggle animations  
✅ **Hover States** - Interactive feedback on all clickable elements  
✅ **Responsive Design** - Works on all screen sizes  
✅ **High z-index** - Proper layering (z-[9999], z-[200])  
✅ **Accessible** - Semantic HTML and keyboard navigation  

---

## 🚀 Quick Start

### Step 1: Import the component
```tsx
import { CollapsibleSection, UserMenuDropdown } from './components/dropdowns/SidebarDropdowns';
```

### Step 2: Add state management
```tsx
const [isOpen, setIsOpen] = useState(false);
```

### Step 3: Use the component
```tsx
<CollapsibleSection
  title="My Section"
  isExpanded={isOpen}
  onToggle={() => setIsOpen(!isOpen)}
>
  <div>Content</div>
</CollapsibleSection>
```

---

## 📦 Complete Example: Full Sidebar with All Dropdowns

```tsx
import { useState } from 'react';
import {
  CollapsibleSection,
  ExpandableSportItem,
  HorseRacingDropdown,
  LeagueItem,
} from './components/dropdowns/SidebarDropdowns';

export function MySidebar() {
  const [racingSportsOpen, setRacingSportsOpen] = useState(true);
  const [horseRacingExpanded, setHorseRacingExpanded] = useState(false);
  const [horseRacingMenuOpen, setHorseRacingMenuOpen] = useState(false);
  const [premierLeagueOpen, setPremierLeagueOpen] = useState(false);

  const horseRacingEvents = [
    { time: '15:50', location: 'Gloucester Park (AU)' },
    { time: '16:10', location: 'Junee (AU)' },
    { time: '16:10', location: 'Vaal (ZA)' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200">
      {/* Racing Sports Section */}
      <CollapsibleSection
        title="Racing Sports"
        isExpanded={racingSportsOpen}
        onToggle={() => setRacingSportsOpen(!racingSportsOpen)}
      >
        {/* Horse Racing with Flyout */}
        <div className="relative">
          <ExpandableSportItem
            name="Horse Racing"
            hasSubItems={false}
            isExpanded={horseRacingExpanded}
            onToggle={() => setHorseRacingExpanded(!horseRacingExpanded)}
            onMouseEnter={() => setHorseRacingMenuOpen(true)}
            onMouseLeave={() => setHorseRacingMenuOpen(false)}
          />
          <HorseRacingDropdown 
            isOpen={horseRacingMenuOpen} 
            events={horseRacingEvents} 
          />
        </div>

        {/* Greyhound Racing */}
        <ExpandableSportItem
          name="Greyhound Racing"
          hasSubItems={false}
          isExpanded={false}
          onToggle={() => {}}
        />
      </CollapsibleSection>

      {/* All Sports Section with Nested Leagues */}
      <CollapsibleSection
        title="All Sports"
        isExpanded={true}
        onToggle={() => {}}
      >
        <ExpandableSportItem
          name="Football"
          hasSubItems={true}
          isExpanded={true}
          onToggle={() => {}}
        >
          <LeagueItem
            name="Premier League"
            hasMatches={true}
            isExpanded={premierLeagueOpen}
            onToggle={() => setPremierLeagueOpen(!premierLeagueOpen)}
            matches={[
              'Manchester United v Liverpool',
              'Chelsea v Arsenal',
              'Tottenham v Manchester City'
            ]}
          />
          <LeagueItem
            name="La Liga"
            hasMatches={false}
            isExpanded={false}
            onToggle={() => {}}
          />
        </ExpandableSportItem>
      </CollapsibleSection>
    </div>
  );
}
```

---

## 🎯 Real-World Implementation (Current Sidebar)

The actual implementation from your current sidebar can be found in:
- **File**: `/src/app/components/dashboard/Sidebar.tsx`
- **Mock Data**: `/src/app/services/mockData.ts`

This shows how all components work together in a production environment with real data.

---

## 💡 Tips & Best Practices

1. **State Management**: Use `useState` for each dropdown independently
2. **Close on Click Outside**: Add click-outside detection for better UX
3. **Accessibility**: Add `aria-expanded` attributes for screen readers
4. **Mobile**: Consider converting to bottom sheets on mobile
5. **Performance**: Memoize large lists with `React.memo`
6. **Z-Index**: Ensure proper stacking context (current: z-[9999] for flyouts)

---

## 🔧 Customization

### Change Colors
Replace `purple/violet` with your brand colors:
```tsx
// From:
className="bg-gradient-to-r from-purple-500/[0.08] via-violet-500/[0.12]"

// To:
className="bg-gradient-to-r from-blue-500/[0.08] via-cyan-500/[0.12]"
```

### Adjust Spacing
Modify padding/margins:
```tsx
// Compact version:
className="px-3 py-2"

// Spacious version:
className="px-6 py-4"
```

### Animation Speed
Change transition durations:
```tsx
// Faster:
className="transition-all duration-150"

// Slower:
className="transition-all duration-500"
```

---

## 📝 Notes

- All components use **Lucide React** icons (Plus, Minus, ChevronUp)
- Components are **fully typed** with TypeScript interfaces
- **No external dependencies** beyond React and Lucide icons
- Components follow **Tailwind CSS v4** conventions
- All dropdowns include **proper z-index layering** for overlays

---

## 🆘 Support

If you need to modify or extend these components:

1. Check the source file: `/src/app/components/dropdowns/SidebarDropdowns.tsx`
2. Look at the example usage in `DropdownExamples` component
3. Review the current implementation in `/src/app/components/dashboard/Sidebar.tsx`

---

**Created for Gaming Dashboard UI Project**  
All components are production-ready and fully responsive! 🚀
