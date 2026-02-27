import { createBrowserRouter } from 'react-router';
import { LoginPage } from './pages/LoginPage';
import { DashboardLayout } from './pages/DashboardLayout';
import { HomePage } from './pages/HomePage';
import { DropdownShowcase } from './pages/DropdownShowcase';
import { BettingPage } from './pages/BettingPage';
import { T20WorldCupPage } from './pages/T20WorldCupPage';
import { IndiaZimbabwePage } from './pages/IndiaZimbabwePage';
import { CurrentBetsPage } from './pages/CurrentBetsPage';
import { AccountStatementPage } from './pages/AccountStatementPage';
import { CasinoResultsPage } from './pages/CasinoResultsPage';
import { CurrentBetsEmptyPage } from './pages/CurrentBetsEmptyPage';
import { AccountStatementEmptyPage } from './pages/AccountStatementEmptyPage';
import { CasinoResultsEmptyPage } from './pages/CasinoResultsEmptyPage';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/dropdowns',
    element: <DropdownShowcase />,
  },
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'match/:id',
        element: <BettingPage />,
      },
      {
        path: 'fancy1',
        element: <BettingPage initialTab="fancy1" />,
      },
      {
        path: 'super-over2',
        element: <BettingPage initialTab="super-over2" />,
      },
      {
        path: 't20-world-cup',
        element: <T20WorldCupPage />,
      },
      {
        path: 'india-zimbabwe',
        element: <IndiaZimbabwePage />,
      },
      {
        path: 'current-bets',
        element: <CurrentBetsPage />,
      },
      {
        path: 'account-statement',
        element: <AccountStatementPage />,
      },
      {
        path: 'casino-results',
        element: <CasinoResultsPage />,
      },
      {
        path: 'current-bets-empty',
        element: <CurrentBetsEmptyPage />,
      },
      {
        path: 'account-statement-empty',
        element: <AccountStatementEmptyPage />,
      },
      {
        path: 'casino-results-empty',
        element: <CasinoResultsEmptyPage />,
      },
    ],
  },
]);
