import { Link } from "react-router-dom"

export default function SiteMap() {

    return (
        <main className="main flex flex-col flex-1 font-display">
            <div className="container flex flex-col pt-20 gap-5 text-white">
            <Link to="/pages" className="max-w-[350px] text-2xl font-bold border-b-2 border-white flex items-center justify-between">
                Main
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.29289 0.692796C7.68342 0.302271 8.31658 0.302271 8.70711 0.692796L15.7071 7.6928C16.0976 8.08332 16.0976 8.71649 15.7071 9.10701L8.70711 16.107C8.31658 16.4975 7.68342 16.4975 7.29289 16.107C6.90237 15.7165 6.90237 15.0833 7.29289 14.6928L12.5858 9.3999H1C0.447715 9.3999 0 8.95219 0 8.3999C0 7.84762 0.447715 7.3999 1 7.3999H12.5858L7.29289 2.10701C6.90237 1.71648 6.90237 1.08332 7.29289 0.692796Z" fill="#D1D1D1"/>
                </svg>
            </Link>
            <Link to="/logout" className="max-w-[350px] text-2xl font-bold border-b-2 border-white flex items-center justify-between">
                Main Logout
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.29289 0.692796C7.68342 0.302271 8.31658 0.302271 8.70711 0.692796L15.7071 7.6928C16.0976 8.08332 16.0976 8.71649 15.7071 9.10701L8.70711 16.107C8.31658 16.4975 7.68342 16.4975 7.29289 16.107C6.90237 15.7165 6.90237 15.0833 7.29289 14.6928L12.5858 9.3999H1C0.447715 9.3999 0 8.95219 0 8.3999C0 7.84762 0.447715 7.3999 1 7.3999H12.5858L7.29289 2.10701C6.90237 1.71648 6.90237 1.08332 7.29289 0.692796Z" fill="#D1D1D1"/>
                </svg>
            </Link>
            <Link to="/legal" className="max-w-[350px] text-2xl font-bold border-b-2 border-white flex items-center justify-between">
                Legal
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.29289 0.692796C7.68342 0.302271 8.31658 0.302271 8.70711 0.692796L15.7071 7.6928C16.0976 8.08332 16.0976 8.71649 15.7071 9.10701L8.70711 16.107C8.31658 16.4975 7.68342 16.4975 7.29289 16.107C6.90237 15.7165 6.90237 15.0833 7.29289 14.6928L12.5858 9.3999H1C0.447715 9.3999 0 8.95219 0 8.3999C0 7.84762 0.447715 7.3999 1 7.3999H12.5858L7.29289 2.10701C6.90237 1.71648 6.90237 1.08332 7.29289 0.692796Z" fill="#D1D1D1"/>
                </svg>
            </Link>
            <Link to="/auth" className="max-w-[350px] text-2xl font-bold border-b-2 border-white flex items-center justify-between">
                Auth
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.29289 0.692796C7.68342 0.302271 8.31658 0.302271 8.70711 0.692796L15.7071 7.6928C16.0976 8.08332 16.0976 8.71649 15.7071 9.10701L8.70711 16.107C8.31658 16.4975 7.68342 16.4975 7.29289 16.107C6.90237 15.7165 6.90237 15.0833 7.29289 14.6928L12.5858 9.3999H1C0.447715 9.3999 0 8.95219 0 8.3999C0 7.84762 0.447715 7.3999 1 7.3999H12.5858L7.29289 2.10701C6.90237 1.71648 6.90237 1.08332 7.29289 0.692796Z" fill="#D1D1D1"/>
                </svg>
            </Link>
            <Link to="/signin" className="max-w-[350px] text-2xl font-bold border-b-2 border-white flex items-center justify-between">
                SignIn
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.29289 0.692796C7.68342 0.302271 8.31658 0.302271 8.70711 0.692796L15.7071 7.6928C16.0976 8.08332 16.0976 8.71649 15.7071 9.10701L8.70711 16.107C8.31658 16.4975 7.68342 16.4975 7.29289 16.107C6.90237 15.7165 6.90237 15.0833 7.29289 14.6928L12.5858 9.3999H1C0.447715 9.3999 0 8.95219 0 8.3999C0 7.84762 0.447715 7.3999 1 7.3999H12.5858L7.29289 2.10701C6.90237 1.71648 6.90237 1.08332 7.29289 0.692796Z" fill="#D1D1D1"/>
                </svg>
            </Link>
            <Link to="/account" className="max-w-[350px] text-2xl font-bold border-b-2 border-white flex items-center justify-between">
                Personal Account
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.29289 0.692796C7.68342 0.302271 8.31658 0.302271 8.70711 0.692796L15.7071 7.6928C16.0976 8.08332 16.0976 8.71649 15.7071 9.10701L8.70711 16.107C8.31658 16.4975 7.68342 16.4975 7.29289 16.107C6.90237 15.7165 6.90237 15.0833 7.29289 14.6928L12.5858 9.3999H1C0.447715 9.3999 0 8.95219 0 8.3999C0 7.84762 0.447715 7.3999 1 7.3999H12.5858L7.29289 2.10701C6.90237 1.71648 6.90237 1.08332 7.29289 0.692796Z" fill="#D1D1D1"/>
                </svg>
            </Link>
            <Link to="/balance" className="max-w-[350px] text-2xl font-bold border-b-2 border-white flex items-center justify-between">
                Balance Top Up
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.29289 0.692796C7.68342 0.302271 8.31658 0.302271 8.70711 0.692796L15.7071 7.6928C16.0976 8.08332 16.0976 8.71649 15.7071 9.10701L8.70711 16.107C8.31658 16.4975 7.68342 16.4975 7.29289 16.107C6.90237 15.7165 6.90237 15.0833 7.29289 14.6928L12.5858 9.3999H1C0.447715 9.3999 0 8.95219 0 8.3999C0 7.84762 0.447715 7.3999 1 7.3999H12.5858L7.29289 2.10701C6.90237 1.71648 6.90237 1.08332 7.29289 0.692796Z" fill="#D1D1D1"/>
                </svg>
            </Link>
            <Link to="/balance-await" className="max-w-[350px] text-2xl font-bold border-b-2 border-white flex items-center justify-between">
                Balance Await
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.29289 0.692796C7.68342 0.302271 8.31658 0.302271 8.70711 0.692796L15.7071 7.6928C16.0976 8.08332 16.0976 8.71649 15.7071 9.10701L8.70711 16.107C8.31658 16.4975 7.68342 16.4975 7.29289 16.107C6.90237 15.7165 6.90237 15.0833 7.29289 14.6928L12.5858 9.3999H1C0.447715 9.3999 0 8.95219 0 8.3999C0 7.84762 0.447715 7.3999 1 7.3999H12.5858L7.29289 2.10701C6.90237 1.71648 6.90237 1.08332 7.29289 0.692796Z" fill="#D1D1D1"/>
                </svg>
            </Link>
            <Link to="/oops" className="max-w-[350px] text-2xl font-bold border-b-2 border-white flex items-center justify-between">
                Balance Out
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.29289 0.692796C7.68342 0.302271 8.31658 0.302271 8.70711 0.692796L15.7071 7.6928C16.0976 8.08332 16.0976 8.71649 15.7071 9.10701L8.70711 16.107C8.31658 16.4975 7.68342 16.4975 7.29289 16.107C6.90237 15.7165 6.90237 15.0833 7.29289 14.6928L12.5858 9.3999H1C0.447715 9.3999 0 8.95219 0 8.3999C0 7.84762 0.447715 7.3999 1 7.3999H12.5858L7.29289 2.10701C6.90237 1.71648 6.90237 1.08332 7.29289 0.692796Z" fill="#D1D1D1"/>
                </svg>
            </Link>
            <Link to="/signout" className="max-w-[350px] text-2xl font-bold border-b-2 border-white flex items-center justify-between">
                Sign Out Success
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.29289 0.692796C7.68342 0.302271 8.31658 0.302271 8.70711 0.692796L15.7071 7.6928C16.0976 8.08332 16.0976 8.71649 15.7071 9.10701L8.70711 16.107C8.31658 16.4975 7.68342 16.4975 7.29289 16.107C6.90237 15.7165 6.90237 15.0833 7.29289 14.6928L12.5858 9.3999H1C0.447715 9.3999 0 8.95219 0 8.3999C0 7.84762 0.447715 7.3999 1 7.3999H12.5858L7.29289 2.10701C6.90237 1.71648 6.90237 1.08332 7.29289 0.692796Z" fill="#D1D1D1"/>
                </svg>
            </Link>

            <Link to="/trMainPage" className="max-w-[350px] text-2xl font-bold border-b-2 border-white flex items-center justify-between">
                TR Home
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.29289 0.692796C7.68342 0.302271 8.31658 0.302271 8.70711 0.692796L15.7071 7.6928C16.0976 8.08332 16.0976 8.71649 15.7071 9.10701L8.70711 16.107C8.31658 16.4975 7.68342 16.4975 7.29289 16.107C6.90237 15.7165 6.90237 15.0833 7.29289 14.6928L12.5858 9.3999H1C0.447715 9.3999 0 8.95219 0 8.3999C0 7.84762 0.447715 7.3999 1 7.3999H12.5858L7.29289 2.10701C6.90237 1.71648 6.90237 1.08332 7.29289 0.692796Z" fill="#D1D1D1"/>
                </svg>
            </Link>
            <Link to="/trAccountPage" className="max-w-[350px] text-2xl font-bold border-b-2 border-white flex items-center justify-between">
                TR Account
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.29289 0.692796C7.68342 0.302271 8.31658 0.302271 8.70711 0.692796L15.7071 7.6928C16.0976 8.08332 16.0976 8.71649 15.7071 9.10701L8.70711 16.107C8.31658 16.4975 7.68342 16.4975 7.29289 16.107C6.90237 15.7165 6.90237 15.0833 7.29289 14.6928L12.5858 9.3999H1C0.447715 9.3999 0 8.95219 0 8.3999C0 7.84762 0.447715 7.3999 1 7.3999H12.5858L7.29289 2.10701C6.90237 1.71648 6.90237 1.08332 7.29289 0.692796Z" fill="#D1D1D1"/>
                </svg>
            </Link>
            <Link to="/trBalancePage" className="max-w-[350px] text-2xl font-bold border-b-2 border-white flex items-center justify-between">
                TR Balance
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.29289 0.692796C7.68342 0.302271 8.31658 0.302271 8.70711 0.692796L15.7071 7.6928C16.0976 8.08332 16.0976 8.71649 15.7071 9.10701L8.70711 16.107C8.31658 16.4975 7.68342 16.4975 7.29289 16.107C6.90237 15.7165 6.90237 15.0833 7.29289 14.6928L12.5858 9.3999H1C0.447715 9.3999 0 8.95219 0 8.3999C0 7.84762 0.447715 7.3999 1 7.3999H12.5858L7.29289 2.10701C6.90237 1.71648 6.90237 1.08332 7.29289 0.692796Z" fill="#D1D1D1"/>
                </svg>
            </Link>
            
            <Link to="/dtMainPage" className="max-w-[350px] text-2xl font-bold border-b-2 border-white flex items-center justify-between">
                DT Home
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.29289 0.692796C7.68342 0.302271 8.31658 0.302271 8.70711 0.692796L15.7071 7.6928C16.0976 8.08332 16.0976 8.71649 15.7071 9.10701L8.70711 16.107C8.31658 16.4975 7.68342 16.4975 7.29289 16.107C6.90237 15.7165 6.90237 15.0833 7.29289 14.6928L12.5858 9.3999H1C0.447715 9.3999 0 8.95219 0 8.3999C0 7.84762 0.447715 7.3999 1 7.3999H12.5858L7.29289 2.10701C6.90237 1.71648 6.90237 1.08332 7.29289 0.692796Z" fill="#D1D1D1"/>
                </svg>
            </Link>
            <Link to="/dtAccountPage" className="max-w-[350px] text-2xl font-bold border-b-2 border-white flex items-center justify-between">
                DT Account
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.29289 0.692796C7.68342 0.302271 8.31658 0.302271 8.70711 0.692796L15.7071 7.6928C16.0976 8.08332 16.0976 8.71649 15.7071 9.10701L8.70711 16.107C8.31658 16.4975 7.68342 16.4975 7.29289 16.107C6.90237 15.7165 6.90237 15.0833 7.29289 14.6928L12.5858 9.3999H1C0.447715 9.3999 0 8.95219 0 8.3999C0 7.84762 0.447715 7.3999 1 7.3999H12.5858L7.29289 2.10701C6.90237 1.71648 6.90237 1.08332 7.29289 0.692796Z" fill="#D1D1D1"/>
                </svg>
            </Link>
            <Link to="/dtBalancePage" className="max-w-[350px] text-2xl font-bold border-b-2 border-white flex items-center justify-between">
                DT Balance
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.29289 0.692796C7.68342 0.302271 8.31658 0.302271 8.70711 0.692796L15.7071 7.6928C16.0976 8.08332 16.0976 8.71649 15.7071 9.10701L8.70711 16.107C8.31658 16.4975 7.68342 16.4975 7.29289 16.107C6.90237 15.7165 6.90237 15.0833 7.29289 14.6928L12.5858 9.3999H1C0.447715 9.3999 0 8.95219 0 8.3999C0 7.84762 0.447715 7.3999 1 7.3999H12.5858L7.29289 2.10701C6.90237 1.71648 6.90237 1.08332 7.29289 0.692796Z" fill="#D1D1D1"/>
                </svg>
            </Link>

            </div>   
        
        </main>
    );
}
