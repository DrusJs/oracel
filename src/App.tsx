import './assets/scss/main.scss'
import { Route, Routes } from "react-router-dom"

import Header from './components/layout/Header';
import MainPage from './components/pages/MainPage';
import LegalPage from './components/pages/LegalPage';
import AuthPage from './components/pages/AuthPage';
import AccountPage from './components/pages/AccountPage';
import BalancePage from './components/pages/BalancePage';
import SignInPage from './components/pages/SignInPage';
import MessagePage from './components/pages/MessagePage';
import BalanceAwaitPage from './components/pages/BalanceAwaitPage';
import SignOutSuccessPage from './components/pages/SignOutSuccessPage';
import SiteMap from './components/pages/SiteMap';
import Footer from './components/layout/Footer';

// lang temp
import TRMainPage from './components/pages/TRMainPage';
import TRAccountPage from './components/pages/TRAccountPage';
import TRBalancePage from './components/pages/TRBalancePage';
import DTMainPage from './components/pages/DTMainPage';
import DTAccountPage from './components/pages/DTAccountPage';
import DTBalancePage from './components/pages/DTBalancePage';
import LogoutPage from './components/pages/logoutPage'

function App() {
  return (
    <div className='flex flex-col min-h-dvh'>
      <Header />
      <Routes>
        <Route path="/OracleBet/dist/pages" element={<MainPage />} />
        <Route path="/OracleBet/dist/legal" element={<LegalPage />} />
        <Route path="/OracleBet/dist/auth" element={<AuthPage />} />
        <Route path="/OracleBet/dist/signin" element={<SignInPage />} />
        <Route path="/OracleBet/dist/account" element={<AccountPage />} />
        <Route path="/OracleBet/dist/balance" element={<BalancePage />} />
        <Route path="/OracleBet/dist/balance-await" element={<BalanceAwaitPage />} />
        <Route path="/OracleBet/dist/oops" element={<MessagePage />} />
        <Route path="/OracleBet/dist/signout" element={<SignOutSuccessPage />} />
        <Route path="/OracleBet/dist" element={<SiteMap />} />
      
        <Route path="/OracleBet/dist/trMainPage" element={<TRMainPage />} />
        <Route path="/OracleBet/dist/trAccountPage" element={<TRAccountPage />} />
        <Route path="/OracleBet/dist/trBalancePage" element={<TRBalancePage />} />
        <Route path="/OracleBet/dist/dtMainPage" element={<DTMainPage />} />
        <Route path="/OracleBet/dist/dtAccountPage" element={<DTAccountPage />} />
        <Route path="/OracleBet/dist/dtBalancePage" element={<DTBalancePage />} />
        <Route path="/OracleBet/dist/logout" element={<LogoutPage />} />
      </Routes>     
      <Footer />
    </div>
  )
}

export default App
