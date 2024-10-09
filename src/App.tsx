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
import ResetPassPage from './components/pages/ResetPassPage'
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
        <Route path="/pages" element={<MainPage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/balance" element={<BalancePage />} />
        <Route path="/balance-await" element={<BalanceAwaitPage />} />
        <Route path="/oops" element={<MessagePage />} />
        <Route path="/signout" element={<SignOutSuccessPage />} />
        <Route path="/resetpass" element={<ResetPassPage />} />
        <Route path="/" element={<SiteMap />} />
      
        <Route path="/trMainPage" element={<TRMainPage />} />
        <Route path="/trAccountPage" element={<TRAccountPage />} />
        <Route path="/trBalancePage" element={<TRBalancePage />} />
        <Route path="/dtMainPage" element={<DTMainPage />} />
        <Route path="/dtAccountPage" element={<DTAccountPage />} />
        <Route path="/dtBalancePage" element={<DTBalancePage />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>     
      <Footer />
    </div>
  )
}

export default App
