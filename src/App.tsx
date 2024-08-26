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
        <Route path="/oracel/pages" element={<MainPage />} />
        <Route path="/oracel/legal" element={<LegalPage />} />
        <Route path="/oracel/auth" element={<AuthPage />} />
        <Route path="/oracel/signin" element={<SignInPage />} />
        <Route path="/oracel/account" element={<AccountPage />} />
        <Route path="/oracel/balance" element={<BalancePage />} />
        <Route path="/oracel/balance-await" element={<BalanceAwaitPage />} />
        <Route path="/oracel/oops" element={<MessagePage />} />
        <Route path="/oracel/signout" element={<SignOutSuccessPage />} />
        <Route path="/oracel/build" element={<SiteMap />} />
      
        <Route path="/oracel/trMainPage" element={<TRMainPage />} />
        <Route path="/oracel/trAccountPage" element={<TRAccountPage />} />
        <Route path="/oracel/trBalancePage" element={<TRBalancePage />} />
        <Route path="/oracel/dtMainPage" element={<DTMainPage />} />
        <Route path="/oracel/dtAccountPage" element={<DTAccountPage />} />
        <Route path="/oracel/dtBalancePage" element={<DTBalancePage />} />
        <Route path="/oracel/logout" element={<LogoutPage />} />
      </Routes>     
      <Footer />
    </div>
  )
}

export default App
