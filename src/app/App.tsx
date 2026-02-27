import { RouterProvider } from 'react-router';
import { router } from './routes';

// Gaming Dashboard - Version 20
// Built with React 19, Vite, Tailwind CSS v4, React Router
// 
// Features:
// - Complete glassmorphism login page with modern gaming design
// - Full dashboard layout with sidebar navigation and header
// - Popular Games section with 42 casino game thumbnails using sprite sheet extraction
// - Match list table with proper odds display and live indicators  
// - Responsive grid layout with proper spacing
// - Maintained rounded corners (rounded-xl) and aspect-[3/4] ratio
// - All 42 games with colorful Unsplash images (slots, roulette, poker, baccarat)
// - NEW/HOT badges and play button hover effects
// - Purple/violet gradient color scheme throughout the platform

export default function App() {
  return <RouterProvider router={router} />;
}