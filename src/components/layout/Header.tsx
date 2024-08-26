import { Link } from "react-router-dom"
import React, { useEffect } from 'react';
import { useAuth } from '../../AuthContext';

export default function Header() {
    const { isAuthenticated, login, logout } = useAuth();

    function toggleLangSelect(e: React.MouseEvent<HTMLElement>) {
        const currentTarget = e.currentTarget.querySelector('.language-select') as HTMLElement;

        currentTarget.classList.toggle('flex')  
        currentTarget.classList.toggle('hidden')  
    }

    function toggleNav() {
        document.querySelector('.navigation')?.classList.toggle('active') 
    }

    const handleClickOutside = (event: MouseEvent) => {
        const nav = document.querySelector('.navigation');
        const button = document.querySelector('.navigation-toggle-button');
    
        if (nav && !nav.contains(event.target as Node) && !button?.contains(event.target as Node)) {
          nav.classList.remove('active');
        }
      };
    
      useEffect(() => {
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);
    
    return (
        <header className="header">
            {isAuthenticated ? (
            <div className="container max-w-full md:px-8 px-4 py-4 flex max-h-20 items-center justify-between">
                <div className="px-10 py-3 bg-green rounded-full font-bold">
                    Oracle BET
                </div>
                <nav className="navigation flex flex-col gap-6 lg:mt-0 mt-3">
                    <button className="bg-transparent border-none cursor-pointer flex lg:hidden cursor-pointer" onClick={toggleNav}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.82446 0.632012L9.00045 6.80801L15.1445 0.664012C15.2802 0.51956 15.4437 0.404004 15.6251 0.324272C15.8066 0.24454 16.0023 0.202275 16.2005 0.200012C16.6248 0.200012 17.0318 0.368583 17.3318 0.668641C17.6319 0.9687 17.8005 1.37567 17.8005 1.80001C17.8042 1.99618 17.7678 2.19103 17.6935 2.37262C17.6192 2.55421 17.5086 2.71871 17.3685 2.85601L11.1445 9.00001L17.3685 15.224C17.6322 15.482 17.7868 15.8314 17.8005 16.2C17.8005 16.6244 17.6319 17.0313 17.3318 17.3314C17.0318 17.6314 16.6248 17.8 16.2005 17.8C15.9965 17.8085 15.7931 17.7744 15.603 17.7001C15.413 17.6257 15.2405 17.5126 15.0965 17.368L9.00045 11.192L2.84046 17.352C2.70526 17.4916 2.54376 17.6031 2.36526 17.68C2.18676 17.7569 1.9948 17.7977 1.80046 17.8C1.37611 17.8 0.969143 17.6314 0.669085 17.3314C0.369027 17.0313 0.200456 16.6244 0.200456 16.2C0.196725 16.0038 0.23312 15.809 0.307408 15.6274C0.381695 15.4458 0.492307 15.2813 0.632456 15.144L6.85645 9.00001L0.632456 2.77601C0.368752 2.51803 0.214119 2.16867 0.200456 1.80001C0.200456 1.37567 0.369027 0.9687 0.669085 0.668641C0.969143 0.368583 1.37611 0.200012 1.80046 0.200012C2.18446 0.204812 2.55246 0.360012 2.82446 0.632012Z" fill="white"/>
                        </svg>
                    </button>
                    <ul className="flex lg:flex-row flex-col lg:items-center gap-10  lg:mt-2 mt-20 text-nowrap lg:w-auto w-fulls font-display lg:text-lg text-2xl">
                        <li className="flex lg:text-secondary text-white font-bold poi">
                            <Link className="lg:border-b-0 border-b-[1px] border-white flex items-center justify-between lg:w-auto w-full hover:text-green" 
                                to="/"
                                onClick={toggleNav}
                                >
                                Main page
                                <svg className="lg:hidden" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.29289 0.692918C7.68342 0.302393 8.31658 0.302393 8.70711 0.692918L15.7071 7.69292C16.0976 8.08344 16.0976 8.71661 15.7071 9.10713L8.70711 16.1071C8.31658 16.4977 7.68342 16.4977 7.29289 16.1071C6.90237 15.7166 6.90237 15.0834 7.29289 14.6929L12.5858 9.40002H1C0.447715 9.40002 0 8.95231 0 8.40002C0 7.84774 0.447715 7.40002 1 7.40002H12.5858L7.29289 2.10713C6.90237 1.71661 6.90237 1.08344 7.29289 0.692918Z" fill="#FFFFFF"/>
                                </svg>
                            </Link>
                        </li>
                        <li className="flex lg:text-secondary text-white font-bold">
                            <Link className="lg:border-b-0 border-b-[1px] border-white flex items-center justify-between lg:w-auto w-full hover:text-green" 
                            to="/legal"
                            onClick={toggleNav}
                            >
                                Legal
                                <svg className="lg:hidden" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.29289 0.692918C7.68342 0.302393 8.31658 0.302393 8.70711 0.692918L15.7071 7.69292C16.0976 8.08344 16.0976 8.71661 15.7071 9.10713L8.70711 16.1071C8.31658 16.4977 7.68342 16.4977 7.29289 16.1071C6.90237 15.7166 6.90237 15.0834 7.29289 14.6929L12.5858 9.40002H1C0.447715 9.40002 0 8.95231 0 8.40002C0 7.84774 0.447715 7.40002 1 7.40002H12.5858L7.29289 2.10713C6.90237 1.71661 6.90237 1.08344 7.29289 0.692918Z" fill="#FFFFFF"/>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-start gap-4">
                <div className="language-select flex flex-col gap-3 border-2 border-green rounded-3xl px-5 py-2 mt-1 cursor-pointer relative z-10 bg-dark" onClick={toggleLangSelect}>
                        <div className="flex gap-1 items-center" >
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 3H8M6 1V3C6 7.418 3.761 11 1 11" stroke="#B8FF72" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M2 7C2 9.144 4.952 10.908 8.7 11M9 18L13 9L17 18M16.1 16H9.9" stroke="#B8FF72" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="text-green font-bold">EN</span>
                        </div>
                        <div className="language-select hidden flex-col gap-3">
                            <div className="flex gap-1 items-center">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.79289 0.292893C8.18342 -0.0976311 8.81658 -0.0976311 9.20711 0.292893L16.2071 7.29289C16.5976 7.68342 16.5976 8.31658 16.2071 8.70711L9.20711 15.7071C8.81658 16.0976 8.18342 16.0976 7.79289 15.7071C7.40237 15.3166 7.40237 14.6834 7.79289 14.2929L13.0858 9H1.5C0.947715 9 0.5 8.55229 0.5 8C0.5 7.44772 0.947715 7 1.5 7H13.0858L7.79289 1.70711C7.40237 1.31658 7.40237 0.683417 7.79289 0.292893Z" fill="white"/>
                                </svg>
                                <span className="text-white font-bold">TR</span>
                            </div>
                            <div className="flex gap-1 items-center">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.79289 0.292893C8.18342 -0.0976311 8.81658 -0.0976311 9.20711 0.292893L16.2071 7.29289C16.5976 7.68342 16.5976 8.31658 16.2071 8.70711L9.20711 15.7071C8.81658 16.0976 8.18342 16.0976 7.79289 15.7071C7.40237 15.3166 7.40237 14.6834 7.79289 14.2929L13.0858 9H1.5C0.947715 9 0.5 8.55229 0.5 8C0.5 7.44772 0.947715 7 1.5 7H13.0858L7.79289 1.70711C7.40237 1.31658 7.40237 0.683417 7.79289 0.292893Z" fill="white"/>
                                </svg>
                                <span className="text-white font-bold">DE</span>
                            </div>
                        </div>
                    </div>
                    <button className="bg-white rounded-3xl font-bold px-10 py-3 hover:opacity-80 hidden lg:flex" onClick={login}>Sign In</button>
                    <button className="bg-green rounded-3xl font-bold px-10 py-3 hover:opacity-80 hidden lg:flex" onClick={login}>Sign Up</button>
                    <button className="navigation-toggle-button bg-transparent border-none cursor-pointer flex lg:hidden mt-4" onClick={toggleNav}>
                        <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.9474 14.8235C24.4745 14.8237 24.9813 14.9808 25.3628 15.2623C25.7443 15.5438 25.9713 15.928 25.9966 16.3354C26.0219 16.7428 25.8437 17.1422 25.4989 17.4507C25.1541 17.7592 24.6691 17.9532 24.1444 17.9926L23.9474 18H2.05263C1.52549 17.9998 1.01866 17.8427 0.637155 17.5612C0.25565 17.2797 0.0287204 16.8955 0.00338785 16.4881C-0.0219447 16.0807 0.156262 15.6814 0.501082 15.3728C0.845902 15.0643 1.3309 14.8703 1.85558 14.8309L2.05263 14.8235H23.9474ZM23.9474 7.41177C24.4918 7.41177 25.0139 7.5791 25.3988 7.87695C25.7837 8.1748 26 8.57877 26 9C26 9.42123 25.7837 9.8252 25.3988 10.1231C25.0139 10.4209 24.4918 10.5882 23.9474 10.5882H2.05263C1.50824 10.5882 0.986145 10.4209 0.601202 10.1231C0.216259 9.8252 0 9.42123 0 9C0 8.57877 0.216259 8.1748 0.601202 7.87695C0.986145 7.5791 1.50824 7.41177 2.05263 7.41177H23.9474ZM23.9474 0C24.4918 0 25.0139 0.167332 25.3988 0.465183C25.7837 0.763035 26 1.16701 26 1.58824C26 2.00946 25.7837 2.41344 25.3988 2.71129C25.0139 3.00914 24.4918 3.17647 23.9474 3.17647H2.05263C1.50824 3.17647 0.986145 3.00914 0.601202 2.71129C0.216259 2.41344 0 2.00946 0 1.58824C0 1.16701 0.216259 0.763035 0.601202 0.465183C0.986145 0.167332 1.50824 0 2.05263 0H23.9474Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            </div>
            ) : (
            <div className="2xl:container max-w-full md:px-8 px-4 py-4 flex max-h-20 items-start justify-between">
                <div className="px-10 py-3 bg-green rounded-full font-bold">
                    Oracle BET
                </div>
                <nav className="navigation flex flex-col gap-6 lg:mt-0 mt-3">
                    <button className="bg-transparent border-none cursor-pointer flex lg:hidden cursor-pointer" onClick={toggleNav}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.82446 0.632012L9.00045 6.80801L15.1445 0.664012C15.2802 0.51956 15.4437 0.404004 15.6251 0.324272C15.8066 0.24454 16.0023 0.202275 16.2005 0.200012C16.6248 0.200012 17.0318 0.368583 17.3318 0.668641C17.6319 0.9687 17.8005 1.37567 17.8005 1.80001C17.8042 1.99618 17.7678 2.19103 17.6935 2.37262C17.6192 2.55421 17.5086 2.71871 17.3685 2.85601L11.1445 9.00001L17.3685 15.224C17.6322 15.482 17.7868 15.8314 17.8005 16.2C17.8005 16.6244 17.6319 17.0313 17.3318 17.3314C17.0318 17.6314 16.6248 17.8 16.2005 17.8C15.9965 17.8085 15.7931 17.7744 15.603 17.7001C15.413 17.6257 15.2405 17.5126 15.0965 17.368L9.00045 11.192L2.84046 17.352C2.70526 17.4916 2.54376 17.6031 2.36526 17.68C2.18676 17.7569 1.9948 17.7977 1.80046 17.8C1.37611 17.8 0.969143 17.6314 0.669085 17.3314C0.369027 17.0313 0.200456 16.6244 0.200456 16.2C0.196725 16.0038 0.23312 15.809 0.307408 15.6274C0.381695 15.4458 0.492307 15.2813 0.632456 15.144L6.85645 9.00001L0.632456 2.77601C0.368752 2.51803 0.214119 2.16867 0.200456 1.80001C0.200456 1.37567 0.369027 0.9687 0.669085 0.668641C0.969143 0.368583 1.37611 0.200012 1.80046 0.200012C2.18446 0.204812 2.55246 0.360012 2.82446 0.632012Z" fill="white"/>
                        </svg>
                    </button>
                    <ul className="flex lg:flex-row flex-col lg:items-center gap-10 lg:mt-2 mt-20 text-nowrap lg:w-auto w-full list-none font-display lg:text-lg text-2xl">
                        <li className="flex lg:text-secondary text-white font-bold lg:w-auto w-full">
                            <Link className="lg:border-b-0 border-b-[1px] border-white flex items-center justify-between lg:w-auto w-full hover:text-green" 
                                to="/"
                                onClick={toggleNav}
                                >
                                Home
                                <svg className="lg:hidden" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.29289 0.692918C7.68342 0.302393 8.31658 0.302393 8.70711 0.692918L15.7071 7.69292C16.0976 8.08344 16.0976 8.71661 15.7071 9.10713L8.70711 16.1071C8.31658 16.4977 7.68342 16.4977 7.29289 16.1071C6.90237 15.7166 6.90237 15.0834 7.29289 14.6929L12.5858 9.40002H1C0.447715 9.40002 0 8.95231 0 8.40002C0 7.84774 0.447715 7.40002 1 7.40002H12.5858L7.29289 2.10713C6.90237 1.71661 6.90237 1.08344 7.29289 0.692918Z" fill="#FFFFFF"/>
                                </svg>
                            </Link>
                        </li>
                        <li className="flex lg:text-secondary text-white font-bold lg:w-auto w-full">
                            <Link className="lg:border-b-0 border-b-[1px] border-white flex items-center justify-between lg:w-auto w-full hover:text-green" 
                                to="/account#history"
                                onClick={toggleNav}
                                >
                                Order history
                                <svg className="lg:hidden" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.29289 0.692918C7.68342 0.302393 8.31658 0.302393 8.70711 0.692918L15.7071 7.69292C16.0976 8.08344 16.0976 8.71661 15.7071 9.10713L8.70711 16.1071C8.31658 16.4977 7.68342 16.4977 7.29289 16.1071C6.90237 15.7166 6.90237 15.0834 7.29289 14.6929L12.5858 9.40002H1C0.447715 9.40002 0 8.95231 0 8.40002C0 7.84774 0.447715 7.40002 1 7.40002H12.5858L7.29289 2.10713C6.90237 1.71661 6.90237 1.08344 7.29289 0.692918Z" fill="#FFFFFF"/>
                                </svg>
                            </Link>
                        </li>
                        <li className="flex lg:text-secondary text-white font-bold">
                            <Link className="lg:border-b-0 border-b-[1px] border-white flex items-center justify-between lg:w-auto w-full hover:text-green" 
                                to="/balance"
                                onClick={toggleNav}
                                >
                                Balance
                                <svg className="lg:hidden" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.29289 0.692918C7.68342 0.302393 8.31658 0.302393 8.70711 0.692918L15.7071 7.69292C16.0976 8.08344 16.0976 8.71661 15.7071 9.10713L8.70711 16.1071C8.31658 16.4977 7.68342 16.4977 7.29289 16.1071C6.90237 15.7166 6.90237 15.0834 7.29289 14.6929L12.5858 9.40002H1C0.447715 9.40002 0 8.95231 0 8.40002C0 7.84774 0.447715 7.40002 1 7.40002H12.5858L7.29289 2.10713C6.90237 1.71661 6.90237 1.08344 7.29289 0.692918Z" fill="#FFFFFF"/>
                                </svg>
                            </Link>
                        </li>
                        <li className="flex lg:text-secondary text-white font-bold">
                            <Link className="lg:border-b-0 border-b-[1px] border-white flex items-center justify-between lg:w-auto w-full hover:text-green" 
                                to="/account"
                                onClick={toggleNav}
                                >
                                Personal Account
                                <svg className="lg:hidden" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.29289 0.692918C7.68342 0.302393 8.31658 0.302393 8.70711 0.692918L15.7071 7.69292C16.0976 8.08344 16.0976 8.71661 15.7071 9.10713L8.70711 16.1071C8.31658 16.4977 7.68342 16.4977 7.29289 16.1071C6.90237 15.7166 6.90237 15.0834 7.29289 14.6929L12.5858 9.40002H1C0.447715 9.40002 0 8.95231 0 8.40002C0 7.84774 0.447715 7.40002 1 7.40002H12.5858L7.29289 2.10713C6.90237 1.71661 6.90237 1.08344 7.29289 0.692918Z" fill="#FFFFFF"/>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-start gap-4">
                    <div className="language-select flex flex-col gap-3 border-2 border-green rounded-3xl px-5 py-2  mt-1 cursor-pointer relative z-10 bg-dark" onClick={toggleLangSelect}>
                        <div className="flex gap-1 items-center" >
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 3H8M6 1V3C6 7.418 3.761 11 1 11" stroke="#B8FF72" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M2 7C2 9.144 4.952 10.908 8.7 11M9 18L13 9L17 18M16.1 16H9.9" stroke="#B8FF72" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="text-green font-bold">EN</span>
                        </div>
                        <div className="language-select hidden flex-col gap-3">
                            <div className="flex gap-1 items-center">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.79289 0.292893C8.18342 -0.0976311 8.81658 -0.0976311 9.20711 0.292893L16.2071 7.29289C16.5976 7.68342 16.5976 8.31658 16.2071 8.70711L9.20711 15.7071C8.81658 16.0976 8.18342 16.0976 7.79289 15.7071C7.40237 15.3166 7.40237 14.6834 7.79289 14.2929L13.0858 9H1.5C0.947715 9 0.5 8.55229 0.5 8C0.5 7.44772 0.947715 7 1.5 7H13.0858L7.79289 1.70711C7.40237 1.31658 7.40237 0.683417 7.79289 0.292893Z" fill="white"/>
                                </svg>
                                <span className="text-white font-bold">TR</span>
                            </div>
                            <div className="flex gap-1 items-center">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.79289 0.292893C8.18342 -0.0976311 8.81658 -0.0976311 9.20711 0.292893L16.2071 7.29289C16.5976 7.68342 16.5976 8.31658 16.2071 8.70711L9.20711 15.7071C8.81658 16.0976 8.18342 16.0976 7.79289 15.7071C7.40237 15.3166 7.40237 14.6834 7.79289 14.2929L13.0858 9H1.5C0.947715 9 0.5 8.55229 0.5 8C0.5 7.44772 0.947715 7 1.5 7H13.0858L7.79289 1.70711C7.40237 1.31658 7.40237 0.683417 7.79289 0.292893Z" fill="white"/>
                                </svg>
                                <span className="text-white font-bold">DE</span>
                            </div>
                        </div>
                    </div>
                    <button className="bg-white rounded-3xl font-bold px-10 py-3 hover:opacity-80 hidden lg:flex" onClick={logout}>Sign Out</button>
                    <button className="navigation-toggle-button bg-transparent border-none cursor-pointer flex lg:hidden mt-4" onClick={toggleNav}>
                        <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.9474 14.8235C24.4745 14.8237 24.9813 14.9808 25.3628 15.2623C25.7443 15.5438 25.9713 15.928 25.9966 16.3354C26.0219 16.7428 25.8437 17.1422 25.4989 17.4507C25.1541 17.7592 24.6691 17.9532 24.1444 17.9926L23.9474 18H2.05263C1.52549 17.9998 1.01866 17.8427 0.637155 17.5612C0.25565 17.2797 0.0287204 16.8955 0.00338785 16.4881C-0.0219447 16.0807 0.156262 15.6814 0.501082 15.3728C0.845902 15.0643 1.3309 14.8703 1.85558 14.8309L2.05263 14.8235H23.9474ZM23.9474 7.41177C24.4918 7.41177 25.0139 7.5791 25.3988 7.87695C25.7837 8.1748 26 8.57877 26 9C26 9.42123 25.7837 9.8252 25.3988 10.1231C25.0139 10.4209 24.4918 10.5882 23.9474 10.5882H2.05263C1.50824 10.5882 0.986145 10.4209 0.601202 10.1231C0.216259 9.8252 0 9.42123 0 9C0 8.57877 0.216259 8.1748 0.601202 7.87695C0.986145 7.5791 1.50824 7.41177 2.05263 7.41177H23.9474ZM23.9474 0C24.4918 0 25.0139 0.167332 25.3988 0.465183C25.7837 0.763035 26 1.16701 26 1.58824C26 2.00946 25.7837 2.41344 25.3988 2.71129C25.0139 3.00914 24.4918 3.17647 23.9474 3.17647H2.05263C1.50824 3.17647 0.986145 3.00914 0.601202 2.71129C0.216259 2.41344 0 2.00946 0 1.58824C0 1.16701 0.216259 0.763035 0.601202 0.465183C0.986145 0.167332 1.50824 0 2.05263 0H23.9474Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            </div>
            )}
        </header>
    );
}