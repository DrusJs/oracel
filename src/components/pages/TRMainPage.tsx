import { useAuth } from '../../AuthContext';

export default function TRMainPage() {
    const { isAuthenticated } = useAuth();

    function toggleDropdown(e: React.MouseEvent<HTMLElement>) {
        const currentTarget = e.currentTarget as HTMLElement;
        const dropdown = currentTarget.querySelector('.dropdown-item') as HTMLElement;

        currentTarget.classList.toggle('rounded-3xl')  
        currentTarget.classList.toggle('rounded-full')  

        dropdown.classList.toggle('flex')  
        dropdown.classList.toggle('hidden')  
    }

    function toggleCard(e: React.MouseEvent<HTMLElement>) {
        const currentTarget = e.currentTarget.closest('.bg-gray-secondary') as HTMLElement;

        currentTarget.classList.add('active')    
    }

    return (
        <main className="main flex flex-col flex-1">
            { isAuthenticated ? (
            <>              
                <section className="main-banner w-full relative mx-auto md:px-14 px-4 pt-16 overflow-hidden bg-green rounded-3xl flex flex-col">
                    <h1 className="main-text xl:text-[420px] font-head xl:leading-[320px] lg:text-[320px] lg:leading-[240px] md:text-[220px] md:leading-[140px] text-[124px] leading-[100px] text-center text-dark flex flex-wrap">Oracle<span>Bet</span></h1>
                    <div className="main-flex gap-10">
                        <div className="flex flex-col pb-10 col-span-2">
                            <p className="main-desc md:text-5xl text-[22px] uppercase text-dark font-semibold">making sure your bets win</p>
                            <div className="flex items-center gap-2 mt-8">
                                <div className="rounded-main md:p-10 p-4 flex flex-col bg-white gap-8">
                                    <p className="font-semibold font-body md:text-2xl text-base uppercase">dahil olmak üzere farklı sporlarla çalışıyoruz </p>
                                    <button className="text-white md:text-2xl text-[17px] font-display uppercase bg-dark rounded-full py-6 font-bold">cybersports</button>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <img src="img/logo-pubg.png" alt="PUBG" className='md:w-28 w-20' width="114"/>
                                    <img src="img/logo-dota.png" alt="Dota2" className='md:w-28 w-20' width="114"/>
                                </div>
                            </div>
                        </div>                    
                        <img src="img/hero-image.png" alt="Hero Img" className="main-img -mt-[220px] object-contain" width="593"/>
                        <div className="flex flex-col pb-10">
                            <div className="flex md:items-center items-end md:gap-3 md:justify-start justify-between gap-6">
                                <p className="main-desc md:text-4xl text-xl font-semibold text-dark uppercase">ilk üç tahmininizi almak için </p>
                                <div className="bg-blue rounded-full md:w-40 md:min-w-40 md:h-40 w-32 h-32 min-w-32 text-white text-2xl uppercase font-bold flex justify-center items-center text-center">for<br></br>free</div>
                            </div>
                            <button className="w-full bg-dark font-display text-white md:text-2xl text-lg mt-8 md:py-10 py-6 flex items-center justify-center font-bold rounded-full gap-6 uppercase">
                                şimdi kayıt ol
                                <svg width="27" height="28" className='md:w-[27px] w-4' viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.3218 1.1549C12.9727 0.50403 14.028 0.50403 14.6788 1.1549L26.3455 12.8216C26.9964 13.4724 26.9964 14.5277 26.3455 15.1786L14.6788 26.8453C14.028 27.4961 12.9727 27.4961 12.3218 26.8453C11.6709 26.1944 11.6709 25.1391 12.3218 24.4882L21.1433 15.6667H1.83366C0.913184 15.6667 0.166992 14.9206 0.166992 14.0001C0.166992 13.0796 0.913184 12.3334 1.83366 12.3334H21.1433L12.3218 3.51193C11.6709 2.86105 11.6709 1.80578 12.3218 1.1549Z" fill="#FFFFFF"/>
                                </svg>
                            </button>
                            <div className="flex justify-between md:gap-4 gap-2 mt-10 pr-4">
                                <div className="flex gap-2 items-center">
                                    <img src="img/tabler_category-filled.svg" alt="Hero Img"/>
                                    <p className="font-medium md:text-xl text-base">Tüm tahmin kategorileri</p>                               
                                </div>
                                <div className="flex gap-2 items-center">
                                    <img src="img/ic_round-token.svg" alt="Hero Img"/>    
                                    <p className="font-medium md:text-xl text-base">Kripto ve fiat destekli</p>                              
                                </div>
                            </div>
                        </div>
                    </div>
                </section>    
                <section className="mt-36">
                    <div className="container container-sm mx-auto md:px-8 px-4">
                        <div className="flex xl:flex-row flex-col relative xl:gap-0 gap-10">
                            <div className="flex flex-col xl:gap-2 gap-10">
                                <h2 className="md:text-8xl text-6xl text-white uppercase font-head">Bizimle iletişime geçin</h2>
                                <p className="font-display md:text-3xl text-[22px] text-secondary xl:pr-0 md:pr-40 pr-24">tüm sorularınızı kişisel olarak cevaplayacağız - sadece bizebir e-posta gönderin</p>
                                <button className="w-full bg-green text-dark text-2xl py-10 xl:flex hidden items-center justify-center font-bold rounded-full gap-6 mt-auto uppercase hover:opacity-80">
                                    e-posta gönder
                                    <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.3218 1.1549C12.9727 0.50403 14.028 0.50403 14.6788 1.1549L26.3455 12.8216C26.9964 13.4724 26.9964 14.5277 26.3455 15.1786L14.6788 26.8453C14.028 27.4961 12.9727 27.4961 12.3218 26.8453C11.6709 26.1944 11.6709 25.1391 12.3218 24.4882L21.1433 15.6667H1.83366C0.913184 15.6667 0.166992 14.9206 0.166992 14.0001C0.166992 13.0796 0.913184 12.3334 1.83366 12.3334H21.1433L12.3218 3.51193C11.6709 2.86105 11.6709 1.80578 12.3218 1.1549Z" fill="#1C1B23"/>
                                    </svg>
                                </button>
                            </div>
                            <img className='xl:static absolute object-contain h-auto -z-10 top-20 right-0 md:w-[170px] w-24' src="img/form-arrow.png" alt="Hero Img"/>
                            <form className="flex flex-col w-full max-w-2xl">
                                <input type="email" name="email-input" id="email-input" className="font-display backdrop-blur outline-transparent w-full md:text-[22px] text-base text-white py-6 md:px-10 px-6 bg-input rounded-full mb-6" placeholder="What’s your e-mail?" />
                                <input type="text" name="topic-input" id="topic-input" className="font-display outline-transparent w-full md:text-[22px] text-base text-white py-6 md:px-10 px-6 bg-input rounded-full mb-6" placeholder="What’s the topic?" />
                                <textarea name="message" id=" message" placeholder="What’s your message?" className="font-display outline-transparent flex-1 min-h-60 h-full resize-none w-full md:text-[22px] text-base text-white py-6 md:px-10 px-6 bg-input mb-10"></textarea>
                                <button className="w-full bg-green text-dark text-2xl py-10 flex xl:hidden items-center justify-center font-bold rounded-full gap-6 mt-auto uppercase hover:opacity-80">
                                    send an e-mail
                                    <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.3218 1.1549C12.9727 0.50403 14.028 0.50403 14.6788 1.1549L26.3455 12.8216C26.9964 13.4724 26.9964 14.5277 26.3455 15.1786L14.6788 26.8453C14.028 27.4961 12.9727 27.4961 12.3218 26.8453C11.6709 26.1944 11.6709 25.1391 12.3218 24.4882L21.1433 15.6667H1.83366C0.913184 15.6667 0.166992 14.9206 0.166992 14.0001C0.166992 13.0796 0.913184 12.3334 1.83366 12.3334H21.1433L12.3218 3.51193C11.6709 2.86105 11.6709 1.80578 12.3218 1.1549Z" fill="#1C1B23"/>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </>
            ) : (
            <>
            <section className="pt-8">
                <div className="2xl:container max-w-full mx-auto md:px-8 px-4">
                    <div className="flex xl:flex-nowrap flex-wrap items-start gap-10">
                        <aside className="flex flex-col md:p-10 p-8 xl:gap-20 gap-6 bg-green rounded-3xl xl:max-w-md w-full" onClick={toggleDropdown}>
                            <div className="flex justify-between items-center gap-4 cursor-pointer">
                                <p className="font-body md:text-4xl text-2xl font-semibold uppercase">genel bilgi</p>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="40" y="40" width="40" height="40" rx="20" transform="rotate(-180 40 40)" fill="white"/>
                                    <path d="M28 24L20 16L12 24" stroke="#2D2D32" strokeWidth="3" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <div className="dropdown-item flex flex-col gap-2">
                                <p className="font-body text-xl font-semibold uppercase">Winner</p>
                                <p className="font-body text-lg mb-4">- oyunu kazanan takım veya oyuncu</p>
                                
                                <p className="font-body text-xl font-semibold uppercase">total</p>
                                <p className="font-body text-lg mb-4">– sayısal bir gösterge toplamı / sayısal bir gösterge toplamına dayanan bir etkinlik sonucuna yapılan bahis (örneğin, bir futbol maçındaki toplam gol sayısı).</p>
                                
                                <p className="font-body text-xl font-semibold uppercase">Handicap</p>
                                <p className="font-body text-lg mb-4">– the superiority or inferiority of a team or player, expressed in goals, points, sets,  seconds, etc</p>
                                
                                <p className="font-body text-xl font-semibold uppercase">Score</p>
                                <p className="font-body text-lg mb-10">- bir takımın veya oyuncunun gol, puan, set, saniye vb. Olarak ifade edilen üstünlüğü veya  aşağılığı</p>

                                <p className="font-body text-xl font-semibold uppercase">tahmini Fiyat artacak</p>
                                <div className="flex items-center gap-2">
                                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 0C4.73478 0 4.48043 0.105357 4.29289 0.292893C4.10536 0.48043 4 0.734784 4 1C4 1.26522 4.10536 1.51957 4.29289 1.70711C4.48043 1.89464 4.73478 2 5 2H13C13.2652 2 13.5196 1.89464 13.7071 1.70711C13.8946 1.51957 14 1.26522 14 1C14 0.734784 13.8946 0.48043 13.7071 0.292893C13.5196 0.105357 13.2652 0 13 0L5 0ZM0 13C0 10.6131 0.948211 8.32387 2.63604 6.63604C4.32387 4.94821 6.61305 4 9 4C11.3869 4 13.6761 4.94821 15.364 6.63604C17.0518 8.32387 18 10.6131 18 13C18 15.3869 17.0518 17.6761 15.364 19.364C13.6761 21.0518 11.3869 22 9 22C6.61305 22 4.32387 21.0518 2.63604 19.364C0.948211 17.6761 0 15.3869 0 13ZM8 15C8 15.2652 8.10536 15.5196 8.29289 15.7071C8.48043 15.8946 8.73478 16 9 16C9.26522 16 9.51957 15.8946 9.70711 15.7071C9.89464 15.5196 10 15.2652 10 15V9C10 8.73478 9.89464 8.48043 9.70711 8.29289C9.51957 8.10536 9.26522 8 9 8C8.73478 8 8.48043 8.10536 8.29289 8.29289C8.10536 8.48043 8 8.73478 8 9V15ZM19.708 7.706C19.5207 7.89374 19.2666 7.99941 19.0014 7.99979C18.7362 8.00016 18.4818 7.89521 18.294 7.708L16.29 5.712C16.1944 5.61989 16.118 5.50965 16.0655 5.38772C16.0129 5.26579 15.9851 5.13462 15.9838 5.00184C15.9824 4.86907 16.0076 4.73736 16.0577 4.6144C16.1078 4.49144 16.1819 4.37969 16.2756 4.28566C16.3694 4.19164 16.4809 4.11723 16.6037 4.06678C16.7266 4.01632 16.8582 3.99083 16.991 3.9918C17.1238 3.99276 17.255 4.02015 17.3771 4.07238C17.4992 4.12461 17.6096 4.20063 17.702 4.296L19.706 6.292C19.8937 6.47926 19.9994 6.73342 19.9998 6.99859C20.0002 7.26375 19.8952 7.51821 19.708 7.706Z" fill="#1C1B23"/>
                                    </svg>
                                    <p className="font-body text-lg">maçtan 6 aydan kısa bir süre önce</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.29289 0.292893C4.48043 0.105357 4.73478 0 5 0H13C13.2652 0 13.5196 0.105357 13.7071 0.292893C13.8946 0.48043 14 0.734784 14 1C14 1.26522 13.8946 1.51957 13.7071 1.70711C13.5196 1.89464 13.2652 2 13 2H5C4.73478 2 4.48043 1.89464 4.29289 1.70711C4.10536 1.51957 4 1.26522 4 1C4 0.734784 4.10536 0.48043 4.29289 0.292893Z" fill="#1C1B23"/>
                                        <path d="M2.63604 6.63604C0.948211 8.32387 0 10.6131 0 13C0 15.3869 0.948211 17.6761 2.63604 19.364C4.32387 21.0518 6.61305 22 9 22C11.3869 22 13.6761 21.0518 15.364 19.364C17.0518 17.6761 18 15.3869 18 13C18 10.6131 17.0518 8.32387 15.364 6.63604C13.6761 4.94821 11.3869 4 9 4C6.61305 4 4.32387 4.94821 2.63604 6.63604Z" fill="#1C1B23"/>
                                        <path d="M19.0014 7.99979C19.2666 7.99941 19.5207 7.89374 19.708 7.706C19.8952 7.51821 20.0002 7.26375 19.9998 6.99859C19.9994 6.73342 19.8937 6.47926 19.706 6.292L17.702 4.296C17.6096 4.20063 17.4992 4.12461 17.3771 4.07238C17.255 4.02015 17.1238 3.99276 16.991 3.9918C16.8582 3.99083 16.7266 4.01632 16.6037 4.06678C16.4809 4.11723 16.3694 4.19164 16.2756 4.28566C16.1819 4.37969 16.1078 4.49144 16.0577 4.6144C16.0076 4.73736 15.9824 4.86907 15.9838 5.00184C15.9851 5.13462 16.0129 5.26579 16.0655 5.38772C16.118 5.50965 16.1944 5.61989 16.29 5.712L18.294 7.708C18.4818 7.89521 18.7362 8.00016 19.0014 7.99979Z" fill="#1C1B23"/>
                                        <path d="M8 14.2401V6.92699C8 6.41503 8.41503 6 8.92699 6H9.07762C12.2644 6 15.0422 8.16886 15.8151 11.2605C15.9219 11.6875 15.7048 12.1291 15.3016 12.3055L9.15428 14.995C8.60987 15.2332 8 14.8343 8 14.2401Z" fill="#B8FF72"/>
                                    </svg>
                                    <p className="font-body text-lg">maçtan 1 aydan kısa bir süre önce</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.29289 0.292893C4.48043 0.105357 4.73478 0 5 0H13C13.2652 0 13.5196 0.105357 13.7071 0.292893C13.8946 0.48043 14 0.734784 14 1C14 1.26522 13.8946 1.51957 13.7071 1.70711C13.5196 1.89464 13.2652 2 13 2H5C4.73478 2 4.48043 1.89464 4.29289 1.70711C4.10536 1.51957 4 1.26522 4 1C4 0.734784 4.10536 0.48043 4.29289 0.292893Z" fill="#1C1B23"/>
                                        <path d="M2.63604 6.63604C0.948211 8.32387 0 10.6131 0 13C0 15.3869 0.948211 17.6761 2.63604 19.364C4.32387 21.0518 6.61305 22 9 22C11.3869 22 13.6761 21.0518 15.364 19.364C17.0518 17.6761 18 15.3869 18 13C18 10.6131 17.0518 8.32387 15.364 6.63604C13.6761 4.94821 11.3869 4 9 4C6.61305 4 4.32387 4.94821 2.63604 6.63604Z" fill="#1C1B23"/>
                                        <path d="M19.0014 7.99979C19.2666 7.99941 19.5207 7.89374 19.708 7.706C19.8952 7.51821 20.0002 7.26375 19.9998 6.99859C19.9994 6.73342 19.8937 6.47926 19.706 6.292L17.702 4.296C17.6096 4.20063 17.4992 4.12461 17.3771 4.07238C17.255 4.02015 17.1238 3.99276 16.991 3.9918C16.8582 3.99083 16.7266 4.01632 16.6037 4.06678C16.4809 4.11723 16.3694 4.19164 16.2756 4.28566C16.1819 4.37969 16.1078 4.49144 16.0577 4.6144C16.0076 4.73736 15.9824 4.86907 15.9838 5.00184C15.9851 5.13462 16.0129 5.26579 16.0655 5.38772C16.118 5.50965 16.1944 5.61989 16.29 5.712L18.294 7.708C18.4818 7.89521 18.7362 8.00016 19.0014 7.99979Z" fill="#1C1B23"/>
                                        <path d="M5.39089 18.6446L8.07668 12.3506C8.09434 12.3092 8.10345 12.2647 8.10345 12.2197V7.2294C8.10345 6.32529 8.91701 5.63866 9.80826 5.79055L10.1143 5.84271C12.4157 6.23495 14.3741 7.7404 15.3448 9.86364C17.431 15.0783 13.1406 20.6131 7.57048 19.893L5.98772 19.6883C5.49201 19.6242 5.19471 19.1043 5.39089 18.6446Z" fill="#B8FF72"/>
                                    </svg>
                                    <p className="font-body text-lg">maçtan 1 hafta önce</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.29289 0.292893C4.48043 0.105357 4.73478 0 5 0H13C13.2652 0 13.5196 0.105357 13.7071 0.292893C13.8946 0.48043 14 0.734784 14 1C14 1.26522 13.8946 1.51957 13.7071 1.70711C13.5196 1.89464 13.2652 2 13 2H5C4.73478 2 4.48043 1.89464 4.29289 1.70711C4.10536 1.51957 4 1.26522 4 1C4 0.734784 4.10536 0.48043 4.29289 0.292893Z" fill="#1C1B23"/>
                                        <path d="M2.63604 6.63604C0.948211 8.32387 0 10.6131 0 13C0 15.3869 0.948211 17.6761 2.63604 19.364C4.32387 21.0518 6.61305 22 9 22C11.3869 22 13.6761 21.0518 15.364 19.364C17.0518 17.6761 18 15.3869 18 13C18 10.6131 17.0518 8.32387 15.364 6.63604C13.6761 4.94821 11.3869 4 9 4C6.61305 4 4.32387 4.94821 2.63604 6.63604Z" fill="#1C1B23"/>
                                        <path d="M19.0014 7.99979C19.2666 7.99941 19.5207 7.89374 19.708 7.706C19.8952 7.51821 20.0002 7.26375 19.9998 6.99859C19.9994 6.73342 19.8937 6.47926 19.706 6.292L17.702 4.296C17.6096 4.20063 17.4992 4.12461 17.3771 4.07238C17.255 4.02015 17.1238 3.99276 16.991 3.9918C16.8582 3.99083 16.7266 4.01632 16.6037 4.06678C16.4809 4.11723 16.3694 4.19164 16.2756 4.28566C16.1819 4.37969 16.1078 4.49144 16.0577 4.6144C16.0076 4.73736 15.9824 4.86907 15.9838 5.00184C15.9851 5.13462 16.0129 5.26579 16.0655 5.38772C16.118 5.50965 16.1944 5.61989 16.29 5.712L18.294 7.708C18.4818 7.89521 18.7362 8.00016 19.0014 7.99979Z" fill="#1C1B23"/>
                                        <path d="M16 13C16 16.866 12.866 20 9 20C5.13401 20 2 16.866 2 13C2 11.1666 2.70485 9.4978 3.85837 8.24983C6 5.93284 7.47059 13.8626 9 13C10.4025 12.209 7 6 9 6C12.866 6 16 9.13401 16 13Z" fill="#B8FF72"/>
                                    </svg>
                                    <p className="font-body text-lg">oyun yarın ise en yüksek olacak</p>
                                </div>                                
                                <button className="bg-white rounded-3xl font-bold px-16 py-3 mt-12 flex gap-4 items-center w-fit">
                                Garanti yok
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893L15.7071 7.29289C16.0976 7.68342 16.0976 8.31658 15.7071 8.70711L8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071C6.90237 15.3166 6.90237 14.6834 7.29289 14.2929L12.5858 9H1C0.447715 9 0 8.55229 0 8C0 7.44772 0.447715 7 1 7H12.5858L7.29289 1.70711C6.90237 1.31658 6.90237 0.683417 7.29289 0.292893Z" fill="#1C1B23"/>
                                    </svg>
                                </button>
                            </div>
                        </aside>
                        <div className="flex flex-col w-full">
                            <div className="flex flex-col gap-12">
                                <div className="flex gap-2 md:items-center items-start justify-between md:flex-row flex-col">
                                    <div className="bg-gray-secondary rounded-3xl font-bold px-10 py-3 sm:w-auto w-full">
                                        <input className="hidden" type="checkbox" name="" id="score-check" />
                                        <label className="font-body font-medium text-xl text-secondary gap-4" htmlFor="score-check"><div>Her zaman dahil et <span className='font-extrabold'>Score</span></div></label>
                                    </div>
                                    <div className="bg-gray-secondary rounded-3xl font-bold px-10 py-3 sm:w-auto w-full">
                                        <input className="hidden" type="checkbox" name="" id="handicap-check" />
                                        <label className="font-body font-medium text-xl text-secondary gap-4" htmlFor="handicap-check"><div>Her zaman dahil et <span className='font-extrabold'>Handicap</span></div></label>
                                    </div>
                                    <div className="bg-gray-secondary rounded-3xl font-bold px-10 py-3 sm:w-auto w-full">
                                        <input className="hidden" type="checkbox" name="" id="total-check" />
                                        <label className="font-body font-medium text-xl text-secondary gap-4" htmlFor="total-check"><div>Her zaman dahil et <span className='font-extrabold'>Total</span></div></label>
                                    </div>
                                </div>
                                <p className='text-secondary text-lg font-medium font-body text-right max-w-2xl ml-auto'>Bunlar ana ayarlardır - seçilirse, aşağıdaki her karta uygulanacaktır.<br></br>Bunları seçtiğiniz belirli bir kartta ayrı ayrı değiştirebilirsiniz.
</p>
                                <div className="flex flex-col md:p-8 px-4 py-6 bg-gray-secondary rounded-3xl gap-10">
                                    <div className="card-side gap-10 flex-col">
                                        <div className="flex flex-wrap items-center justify-between gap-3">
                                            <div className="flex gap-2">
                                                <p className='text-secondary md:text-lg text-sm font-medium font-body bg-dark rounded-full py-2 md:px-8 px-2'>Dota 2</p>
                                                <p className='text-secondary md:text-lg text-sm font-medium font-body bg-dark rounded-full py-2 md:px-8 px-2'>18 / 05 / 2025</p>
                                                <p className='text-secondary md:text-lg text-sm font-medium font-body bg-dark rounded-full py-2 md:px-8 px-2'>03:30 GTM</p>
                                            </div>
                                            <div className="flex md:gap-6 gap-4">
                                                <input className="hidden" type="checkbox" name="" id="card-check1" />
                                                <label className="font-body font-semibold text-xl text-secondary gap-4" htmlFor="card-check1">Score</label>
                                                <input className="hidden" type="checkbox" name="" id="card-check2" />
                                                <label className="font-body font-semibold text-xl text-secondary gap-4" htmlFor="card-check2">Handicap</label>
                                                <input className="hidden" type="checkbox" name="" id="card-check3" />
                                                <label className="font-body font-semibold text-xl text-secondary gap-4" htmlFor="card-check3">Total</label>
                                            </div>
                                        </div>
                                        <div className="flex xl:flex-nowrap flex-wrap gap-10">
                                            <div className="flex gap-10 items-center md:w-auto w-full">
                                                <div className="flex flex-col gap-1">
                                                    <svg className='mx-auto' width="41" height="45" viewBox="0 0 41 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.5 0.5C9.96957 0.5 9.46086 0.710714 9.08579 1.08579C8.71071 1.46086 8.5 1.96957 8.5 2.5C8.5 3.03043 8.71071 3.53914 9.08579 3.91421C9.46086 4.28929 9.96957 4.5 10.5 4.5H26.5C27.0304 4.5 27.5391 4.28929 27.9142 3.91421C28.2893 3.53914 28.5 3.03043 28.5 2.5C28.5 1.96957 28.2893 1.46086 27.9142 1.08579C27.5391 0.710714 27.0304 0.5 26.5 0.5H10.5ZM0.5 26.5C0.5 21.7261 2.39642 17.1477 5.77208 13.7721C9.14773 10.3964 13.7261 8.5 18.5 8.5C23.2739 8.5 27.8523 10.3964 31.2279 13.7721C34.6036 17.1477 36.5 21.7261 36.5 26.5C36.5 31.2739 34.6036 35.8523 31.2279 39.2279C27.8523 42.6036 23.2739 44.5 18.5 44.5C13.7261 44.5 9.14773 42.6036 5.77208 39.2279C2.39642 35.8523 0.5 31.2739 0.5 26.5ZM16.5 30.5C16.5 31.0304 16.7107 31.5391 17.0858 31.9142C17.4609 32.2893 17.9696 32.5 18.5 32.5C19.0304 32.5 19.5391 32.2893 19.9142 31.9142C20.2893 31.5391 20.5 31.0304 20.5 30.5V18.5C20.5 17.9696 20.2893 17.4609 19.9142 17.0858C19.5391 16.7107 19.0304 16.5 18.5 16.5C17.9696 16.5 17.4609 16.7107 17.0858 17.0858C16.7107 17.4609 16.5 17.9696 16.5 18.5V30.5ZM39.916 15.912C39.5415 16.2875 39.0332 16.4988 38.5028 16.4996C37.9725 16.5003 37.4636 16.2904 37.088 15.916L33.08 11.924C32.8887 11.7398 32.7361 11.5193 32.6309 11.2754C32.5258 11.0316 32.4702 10.7692 32.4676 10.5037C32.4649 10.2381 32.5151 9.97472 32.6153 9.7288C32.7156 9.48288 32.8637 9.25937 33.0513 9.07133C33.2388 8.88328 33.4619 8.73447 33.7075 8.63356C33.9531 8.53265 34.2164 8.48167 34.482 8.48359C34.7475 8.48552 35.01 8.54031 35.2542 8.64476C35.4983 8.74922 35.7192 8.90126 35.904 9.092L39.912 13.084C40.2875 13.4585 40.4988 13.9668 40.4996 14.4972C40.5003 15.0275 40.2904 15.5364 39.916 15.912Z" fill="#848484"/>
                                                    </svg>
                                                    <span className="font-body text-2xl text-tretiary font-semibold text-nowrap">01 m</span>
                                                    <span className="font-body text-2xl text-tretiary font-semibold text-nowrap">02 d</span>
                                                    <span className="font-body text-2xl text-tretiary font-semibold text-nowrap">18 h</span>
                                                </div>
                                                <div className="flex md:flex-row flex-col items-center md:w-auto w-full">
                                                    <div className="flex md:flex-col flex-col-reverse gap-5">
                                                        <div className="rounded-3xl overflow-hidden">
                                                            <img src="img/team1.png" alt="" width="220"/>
                                                        </div>
                                                        <p className='text-center font-body font-bold text-white text-3xl'>NaVi</p>
                                                    </div>
                                                    <img className='md:-ml-3 md:-mt-12 -mt-4' src="img/VS.svg" alt="VS" width="156" height="100"/>
                                                    <div className="flex flex-col gap-5 relative md:-ml-6 md:mt-0 -mt-4">
                                                        <div className="rounded-3xl overflow-hidden">
                                                            <img src="img/team2.png" alt="" width="220"/>
                                                        </div>
                                                        <p className='text-center font-body font-bold text-white text-3xl'>Team Spirit</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex md:flex-col flex-row items-center gap-6 lg:ml-auto">
                                                <p className="md:text-5xl text-2xl text-white font-body font-bold sm:inline flex flex-col">28.46 <span>EUR</span></p>
                                                <button className="bg-green rounded-full font-bold md:text-2xl text-xl md:px-10 text-nowrap md:py-6 px-2 md:w-fit w-full py-4 hover:opacity-80" onClick={toggleCard}>Sonuçları alın</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-outside flex-col gap-10">
                                        <div className="flex flex-wrap items-center gap-10">
                                            <div className="flex flex-col">
                                                <p className='text-secondary font-medium text-lg'>03:30 GTM</p>
                                                <p className='text-secondary font-medium text-lg'>18 / 05 / 2025</p>
                                            </div>
                                            <div className="flex gap-4 mr-auto md:flex-row flex-col">
                                                <p className='text-white font-bold font-body md:text-3xl text-5xl'>NaVi</p>
                                                <img src="img/VS.svg" alt="VS" className="md:w-auto w-12" width="42" />
                                                <p className='text-white font-bold font-body md:text-3xl text-5xl'>Team Spirit</p>
                                            </div>
                                            <div className="bg-green rounded-2xl py-4 md:px-8 px-6 flex md:gap-5 gap-3 items-center">
                                                <img className='md:w-12 w-8' src="img/winner.svg" alt="winner" />
                                                <div className="flex flex-col">
                                                    <p className='text-gray-secondary font-body font-bold md:text-2xl text-xl'>WINNER</p>
                                                    <p className='text-gray-secondary font-body font-bold md:text-xl text-lg'>Team Spirit</p>
                                                </div>
                                                <p className='text-gray-secondary font-body font-semibold md:text-5xl text-3xl'>1.75</p>
                                            </div>
                                        </div>
                                        <div className="flex md:flex-nowrap flex-wrap gap-4">
                                            <div className="flex flex-col w-full bg-dark rounded-3xl p-4">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-2xl text-tretiary font-body font-semibold">Score</p>
                                                    <button className="bg-blue px-3 py-1 text-white border-0 rounded-xl text-lg font-body font-semibold">Find out</button>
                                                </div>
                                                <div className="flex mt-4">
                                                    <div className="flex flex-col w-full text-center">
                                                        <p className="text-xl text-tretiary font-body font-bold">1</p>
                                                        <p className="text-lg text-white font-body font-bold blur">1.33</p>                                                        
                                                    </div>
                                                    <div className="flex flex-col w-full text-center">
                                                        <p className="text-xl text-tretiary font-body font-bold">X</p>
                                                        <p className="text-lg text-white font-body font-bold blur">2.90</p>                                                        
                                                    </div>
                                                    <div className="flex flex-col w-full text-center">
                                                        <p className="text-xl text-tretiary font-body font-bold">2</p>
                                                        <p className="text-lg text-white font-body font-bold blur">10.00</p>                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col w-full bg-dark rounded-3xl p-4">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-2xl text-white font-body font-semibold">Handicap</p>
                                                </div>
                                                <div className="flex mt-4">
                                                    <div className="flex flex-col w-full text-center">
                                                        <p className="text-xl text-green font-body font-bold">1</p>
                                                        <p className="text-lg text-white font-body font-bold">1.33</p>                                                        
                                                    </div>
                                                    <div className="flex flex-col w-full text-center">
                                                        <p className="text-xl text-green font-body font-bold">X</p>
                                                        <p className="text-lg text-white font-body font-bold">2.90</p>                                                        
                                                    </div>
                                                    <div className="flex flex-col w-full text-center">
                                                        <p className="text-xl text-green font-body font-bold">2</p>
                                                        <p className="text-lg text-white font-body font-bold">10.00</p>                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col w-full bg-dark rounded-3xl p-4">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-2xl text-white font-body font-semibold">Total</p>
                                                </div>
                                                <div className="flex mt-4">
                                                    <div className="flex flex-col w-full text-center">
                                                        <p className="text-xl text-green font-body font-bold">1</p>
                                                        <p className="text-lg text-white font-body font-bold">1.33</p>                                                        
                                                    </div>
                                                    <div className="flex flex-col w-full text-center">
                                                        <p className="text-xl text-green font-body font-bold">X</p>
                                                        <p className="text-lg text-white font-body font-bold">2.90</p>                                                        
                                                    </div>
                                                    <div className="flex flex-col w-full text-center">
                                                        <p className="text-xl text-green font-body font-bold">2</p>
                                                        <p className="text-lg text-white font-body font-bold">10.00</p>                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col md:p-8 px-4 py-6 bg-gray-secondary rounded-3xl gap-10">
                                    <div className="card-side gap-10 flex-col">
                                        <div className="flex flex-wrap items-center justify-between gap-3">
                                            <div className="flex gap-2">
                                                <p className='text-secondary md:text-lg text-sm font-medium font-body bg-dark rounded-full py-2 md:px-8 px-2'>Dota 2</p>
                                                <p className='text-secondary md:text-lg text-sm font-medium font-body bg-dark rounded-full py-2 md:px-8 px-2'>18 / 05 / 2025</p>
                                                <p className='text-secondary md:text-lg text-sm font-medium font-body bg-dark rounded-full py-2 md:px-8 px-2'>03:30 GTM</p>
                                            </div>
                                            <div className="flex md:gap-6 gap-4">
                                                <input className="hidden" type="checkbox" name="" id="card-check4" />
                                                <label className="font-body font-semibold text-xl text-secondary gap-4" htmlFor="card-check4">Score</label>
                                                <input className="hidden" type="checkbox" name="" id="card-check5" />
                                                <label className="font-body font-semibold text-xl text-secondary gap-4" htmlFor="card-check5">Handicap</label>
                                                <input className="hidden" type="checkbox" name="" id="card-check6" />
                                                <label className="font-body font-semibold text-xl text-secondary gap-4" htmlFor="card-check6">Total</label>
                                            </div>
                                        </div>
                                        <div className="flex xl:flex-nowrap flex-wrap gap-10">
                                            <div className="flex gap-10 items-center md:w-auto w-full">
                                                <div className="flex flex-col gap-1">
                                                    <svg className='mx-auto' width="41" height="45" viewBox="0 0 41 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.5 0.5C9.96957 0.5 9.46086 0.710714 9.08579 1.08579C8.71071 1.46086 8.5 1.96957 8.5 2.5C8.5 3.03043 8.71071 3.53914 9.08579 3.91421C9.46086 4.28929 9.96957 4.5 10.5 4.5H26.5C27.0304 4.5 27.5391 4.28929 27.9142 3.91421C28.2893 3.53914 28.5 3.03043 28.5 2.5C28.5 1.96957 28.2893 1.46086 27.9142 1.08579C27.5391 0.710714 27.0304 0.5 26.5 0.5H10.5ZM0.5 26.5C0.5 21.7261 2.39642 17.1477 5.77208 13.7721C9.14773 10.3964 13.7261 8.5 18.5 8.5C23.2739 8.5 27.8523 10.3964 31.2279 13.7721C34.6036 17.1477 36.5 21.7261 36.5 26.5C36.5 31.2739 34.6036 35.8523 31.2279 39.2279C27.8523 42.6036 23.2739 44.5 18.5 44.5C13.7261 44.5 9.14773 42.6036 5.77208 39.2279C2.39642 35.8523 0.5 31.2739 0.5 26.5ZM16.5 30.5C16.5 31.0304 16.7107 31.5391 17.0858 31.9142C17.4609 32.2893 17.9696 32.5 18.5 32.5C19.0304 32.5 19.5391 32.2893 19.9142 31.9142C20.2893 31.5391 20.5 31.0304 20.5 30.5V18.5C20.5 17.9696 20.2893 17.4609 19.9142 17.0858C19.5391 16.7107 19.0304 16.5 18.5 16.5C17.9696 16.5 17.4609 16.7107 17.0858 17.0858C16.7107 17.4609 16.5 17.9696 16.5 18.5V30.5ZM39.916 15.912C39.5415 16.2875 39.0332 16.4988 38.5028 16.4996C37.9725 16.5003 37.4636 16.2904 37.088 15.916L33.08 11.924C32.8887 11.7398 32.7361 11.5193 32.6309 11.2754C32.5258 11.0316 32.4702 10.7692 32.4676 10.5037C32.4649 10.2381 32.5151 9.97472 32.6153 9.7288C32.7156 9.48288 32.8637 9.25937 33.0513 9.07133C33.2388 8.88328 33.4619 8.73447 33.7075 8.63356C33.9531 8.53265 34.2164 8.48167 34.482 8.48359C34.7475 8.48552 35.01 8.54031 35.2542 8.64476C35.4983 8.74922 35.7192 8.90126 35.904 9.092L39.912 13.084C40.2875 13.4585 40.4988 13.9668 40.4996 14.4972C40.5003 15.0275 40.2904 15.5364 39.916 15.912Z" fill="#848484"/>
                                                    </svg>
                                                    <span className="font-body text-2xl text-tretiary font-semibold text-nowrap">01 m</span>
                                                    <span className="font-body text-2xl text-tretiary font-semibold text-nowrap">02 d</span>
                                                    <span className="font-body text-2xl text-tretiary font-semibold text-nowrap">18 h</span>
                                                </div>
                                                <div className="flex md:flex-row flex-col items-center md:w-auto w-full">
                                                    <div className="flex md:flex-col flex-col-reverse gap-5">
                                                        <div className="rounded-3xl overflow-hidden">
                                                            <img src="img/team1.png" alt="" width="220"/>
                                                        </div>
                                                        <p className='text-center font-body font-bold text-white text-3xl'>NaVi</p>
                                                    </div>
                                                    <img className='md:-ml-3 md:-mt-12 -mt-4' src="img/VS.svg" alt="VS" width="156" height="100"/>
                                                    <div className="flex flex-col gap-5 relative md:-ml-6 md:mt-0 -mt-4">
                                                        <div className="rounded-3xl overflow-hidden">
                                                            <img src="img/team2.png" alt="" width="220"/>
                                                        </div>
                                                        <p className='text-center font-body font-bold text-white text-3xl'>Team Spirit</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex md:flex-col flex-row items-center gap-6 lg:ml-auto">
                                                <p className="md:text-5xl text-2xl text-white font-body font-bold sm:inline flex flex-col">28.46 <span>EUR</span></p>
                                                <button className="bg-green rounded-full font-bold md:text-2xl text-xl md:px-10 text-nowrap md:py-6 px-2 md:w-fit w-full py-4 hover:opacity-80" onClick={toggleCard}>Sonuçları alın</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-outside flex-col gap-10">
                                        <div className="flex flex-wrap items-center gap-10">
                                            <div className="flex flex-col">
                                                <p className='text-secondary font-medium text-lg'>03:30 GTM</p>
                                                <p className='text-secondary font-medium text-lg'>18 / 05 / 2025</p>
                                            </div>
                                            <div className="flex gap-4 mr-auto md:flex-row flex-col">
                                                <p className='text-white font-bold font-body md:text-3xl text-5xl'>NaVi</p>
                                                <img src="img/VS.svg" alt="VS" className="md:w-auto w-12" width="42" />
                                                <p className='text-white font-bold font-body md:text-3xl text-5xl'>Team Spirit</p>
                                            </div>
                                            <div className="bg-green rounded-2xl py-4 md:px-8 px-6 flex md:gap-5 gap-3 items-center">
                                                <img className='md:w-12 w-8' src="img/winner.svg" alt="winner" />
                                                <div className="flex flex-col">
                                                    <p className='text-gray-secondary font-body font-bold md:text-2xl text-xl'>WINNER</p>
                                                    <p className='text-gray-secondary font-body font-bold md:text-xl text-lg'>Team Spirit</p>
                                                </div>
                                                <p className='text-gray-secondary font-body font-semibold md:text-5xl text-3xl'>1.75</p>
                                            </div>
                                        </div>
                                        <div className="flex md:flex-nowrap flex-wrap gap-4">
                                            <div className="flex flex-col w-full bg-dark rounded-3xl p-4">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-2xl text-tretiary font-body font-semibold">Score</p>
                                                    <button className="bg-blue px-3 py-1 text-white border-0 rounded-xl text-lg font-body font-semibold">Find out</button>
                                                </div>
                                                <div className="flex mt-4">
                                                    <div className="flex flex-col w-full text-center">
                                                        <p className="text-xl text-tretiary font-body font-bold">1</p>
                                                        <p className="text-lg text-white font-body font-bold blur">1.33</p>                                                        
                                                    </div>
                                                    <div className="flex flex-col w-full text-center">
                                                        <p className="text-xl text-tretiary font-body font-bold">X</p>
                                                        <p className="text-lg text-white font-body font-bold blur">2.90</p>                                                        
                                                    </div>
                                                    <div className="flex flex-col w-full text-center">
                                                        <p className="text-xl text-tretiary font-body font-bold">2</p>
                                                        <p className="text-lg text-white font-body font-bold blur">10.00</p>                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col w-full bg-dark rounded-3xl p-4">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-2xl text-white font-body font-semibold">Handicap</p>
                                                </div>
                                                <div className="flex mt-4">
                                                    <div className="flex flex-col w-full text-center">
                                                        <p className="text-xl text-green font-body font-bold">1</p>
                                                        <p className="text-lg text-white font-body font-bold">1.33</p>                                                        
                                                    </div>
                                                    <div className="flex flex-col w-full text-center">
                                                        <p className="text-xl text-green font-body font-bold">X</p>
                                                        <p className="text-lg text-white font-body font-bold">2.90</p>                                                        
                                                    </div>
                                                    <div className="flex flex-col w-full text-center">
                                                        <p className="text-xl text-green font-body font-bold">2</p>
                                                        <p className="text-lg text-white font-body font-bold">10.00</p>                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col w-full bg-dark rounded-3xl p-4">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-2xl text-white font-body font-semibold">Total</p>
                                                </div>
                                                <div className="flex mt-4">
                                                    <div className="flex flex-col w-full text-center">
                                                        <p className="text-xl text-green font-body font-bold">1</p>
                                                        <p className="text-lg text-white font-body font-bold">1.33</p>                                                        
                                                    </div>
                                                    <div className="flex flex-col w-full text-center">
                                                        <p className="text-xl text-green font-body font-bold">X</p>
                                                        <p className="text-lg text-white font-body font-bold">2.90</p>                                                        
                                                    </div>
                                                    <div className="flex flex-col w-full text-center">
                                                        <p className="text-xl text-green font-body font-bold">2</p>
                                                        <p className="text-lg text-white font-body font-bold">10.00</p>                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col md:p-8 px-4 py-6 bg-gray-secondary rounded-3xl gap-10">
                                    <div className="card-side gap-10 flex-col">
                                        <div className="flex flex-wrap items-center justify-between gap-3">
                                            <div className="flex gap-2">
                                                <p className='text-secondary md:text-lg text-sm font-medium font-body bg-dark rounded-full py-2 md:px-8 px-2'>Dota 2</p>
                                                <p className='text-secondary md:text-lg text-sm font-medium font-body bg-dark rounded-full py-2 md:px-8 px-2'>18 / 05 / 2025</p>
                                                <p className='text-secondary md:text-lg text-sm font-medium font-body bg-dark rounded-full py-2 md:px-8 px-2'>03:30 GTM</p>
                                            </div>
                                            <div className="flex md:gap-6 gap-4">
                                                <input className="hidden" type="checkbox" name="" id="card-check7" />
                                                <label className="font-body font-semibold text-xl text-secondary gap-4" htmlFor="card-check7">Score</label>
                                                <input className="hidden" type="checkbox" name="" id="card-check8" />
                                                <label className="font-body font-semibold text-xl text-secondary gap-4" htmlFor="card-check8">Handicap</label>
                                                <input className="hidden" type="checkbox" name="" id="card-check9" />
                                                <label className="font-body font-semibold text-xl text-secondary gap-4" htmlFor="card-check9">Total</label>
                                            </div>
                                        </div>
                                        <div className="flex xl:flex-nowrap flex-wrap gap-10">
                                            <div className="flex gap-10 items-center md:w-auto w-full">
                                                <div className="flex flex-col gap-1">
                                                    <svg className='mx-auto' width="41" height="45" viewBox="0 0 41 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.5 0.5C9.96957 0.5 9.46086 0.710714 9.08579 1.08579C8.71071 1.46086 8.5 1.96957 8.5 2.5C8.5 3.03043 8.71071 3.53914 9.08579 3.91421C9.46086 4.28929 9.96957 4.5 10.5 4.5H26.5C27.0304 4.5 27.5391 4.28929 27.9142 3.91421C28.2893 3.53914 28.5 3.03043 28.5 2.5C28.5 1.96957 28.2893 1.46086 27.9142 1.08579C27.5391 0.710714 27.0304 0.5 26.5 0.5H10.5ZM0.5 26.5C0.5 21.7261 2.39642 17.1477 5.77208 13.7721C9.14773 10.3964 13.7261 8.5 18.5 8.5C23.2739 8.5 27.8523 10.3964 31.2279 13.7721C34.6036 17.1477 36.5 21.7261 36.5 26.5C36.5 31.2739 34.6036 35.8523 31.2279 39.2279C27.8523 42.6036 23.2739 44.5 18.5 44.5C13.7261 44.5 9.14773 42.6036 5.77208 39.2279C2.39642 35.8523 0.5 31.2739 0.5 26.5ZM16.5 30.5C16.5 31.0304 16.7107 31.5391 17.0858 31.9142C17.4609 32.2893 17.9696 32.5 18.5 32.5C19.0304 32.5 19.5391 32.2893 19.9142 31.9142C20.2893 31.5391 20.5 31.0304 20.5 30.5V18.5C20.5 17.9696 20.2893 17.4609 19.9142 17.0858C19.5391 16.7107 19.0304 16.5 18.5 16.5C17.9696 16.5 17.4609 16.7107 17.0858 17.0858C16.7107 17.4609 16.5 17.9696 16.5 18.5V30.5ZM39.916 15.912C39.5415 16.2875 39.0332 16.4988 38.5028 16.4996C37.9725 16.5003 37.4636 16.2904 37.088 15.916L33.08 11.924C32.8887 11.7398 32.7361 11.5193 32.6309 11.2754C32.5258 11.0316 32.4702 10.7692 32.4676 10.5037C32.4649 10.2381 32.5151 9.97472 32.6153 9.7288C32.7156 9.48288 32.8637 9.25937 33.0513 9.07133C33.2388 8.88328 33.4619 8.73447 33.7075 8.63356C33.9531 8.53265 34.2164 8.48167 34.482 8.48359C34.7475 8.48552 35.01 8.54031 35.2542 8.64476C35.4983 8.74922 35.7192 8.90126 35.904 9.092L39.912 13.084C40.2875 13.4585 40.4988 13.9668 40.4996 14.4972C40.5003 15.0275 40.2904 15.5364 39.916 15.912Z" fill="#848484"/>
                                                    </svg>
                                                    <span className="font-body text-2xl text-tretiary font-semibold text-nowrap">01 m</span>
                                                    <span className="font-body text-2xl text-tretiary font-semibold text-nowrap">02 d</span>
                                                    <span className="font-body text-2xl text-tretiary font-semibold text-nowrap">18 h</span>
                                                </div>
                                                <div className="flex md:flex-row flex-col items-center md:w-auto w-full">
                                                    <div className="flex md:flex-col flex-col-reverse gap-5">
                                                        <div className="rounded-3xl overflow-hidden">
                                                            <img src="img/team1.png" alt="" width="220"/>
                                                        </div>
                                                        <p className='text-center font-body font-bold text-white text-3xl'>NaVi</p>
                                                    </div>
                                                    <img className='md:-ml-3 md:-mt-12 -mt-4' src="img/VS.svg" alt="VS" width="156" height="100"/>
                                                    <div className="flex flex-col gap-5 relative md:-ml-6 md:mt-0 -mt-4">
                                                        <div className="rounded-3xl overflow-hidden">
                                                            <img src="img/team2.png" alt="" width="220"/>
                                                        </div>
                                                        <p className='text-center font-body font-bold text-white text-3xl'>Team Spirit</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex md:flex-col flex-row items-center gap-6 lg:ml-auto">
                                                <p className="md:text-5xl text-2xl text-white font-body font-bold sm:inline flex flex-col">28.46 <span>EUR</span></p>
                                                <button className="bg-green rounded-full font-bold md:text-2xl text-xl md:px-10 text-nowrap md:py-6 px-2 md:w-fit w-full py-4 hover:opacity-80" onClick={toggleCard}>Sonuçları alın</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-outside flex-col gap-10">
                                        <div className="flex flex-wrap items-center gap-10">
                                            <div className="flex flex-col">
                                                <p className='text-secondary font-medium text-lg'>03:30 GTM</p>
                                                <p className='text-secondary font-medium text-lg'>18 / 05 / 2025</p>
                                            </div>
                                            <div className="flex gap-4 mr-auto md:flex-row flex-col">
                                                <p className='text-white font-bold font-body md:text-3xl text-5xl'>NaVi</p>
                                                <img src="img/VS.svg" alt="VS" className="md:w-auto w-12" width="42" />
                                                <p className='text-white font-bold font-body md:text-3xl text-5xl'>Team Spirit</p>
                                            </div>
                                            <div className="bg-green rounded-2xl py-4 md:px-8 px-6 flex md:gap-5 gap-3 items-center">
                                                <img className='md:w-12 w-8' src="img/winner.svg" alt="winner" />
                                                <div className="flex flex-col">
                                                    <p className='text-gray-secondary font-body font-bold md:text-2xl text-xl'>WINNER</p>
                                                    <p className='text-gray-secondary font-body font-bold md:text-xl text-lg'>Team Spirit</p>
                                                </div>
                                                <p className='text-gray-secondary font-body font-semibold md:text-5xl text-3xl'>1.75</p>
                                            </div>
                                        </div>
                                        <div className="flex md:flex-nowrap flex-wrap gap-4">
                                            <div className="flex flex-col w-full bg-dark rounded-3xl p-4">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-2xl text-tretiary font-body font-semibold">Score</p>
                                                    <button className="bg-blue px-3 py-1 text-white border-0 rounded-xl text-lg font-body font-semibold">Find out</button>
                                                </div>
                                                <div className="flex mt-4">
                                                    <div className="flex flex-col w-full text-center">
                                                        <p className="text-xl text-tretiary font-body font-bold">1</p>
                                                        <p className="text-lg text-white font-body font-bold blur">1.33</p>                                                        
                                                    </div>
                                                    <div className="flex flex-col w-full text-center">
                                                        <p className="text-xl text-tretiary font-body font-bold">X</p>
                                                        <p className="text-lg text-white font-body font-bold blur">2.90</p>                                                        
                                                    </div>
                                                    <div className="flex flex-col w-full text-center">
                                                        <p className="text-xl text-tretiary font-body font-bold">2</p>
                                                        <p className="text-lg text-white font-body font-bold blur">10.00</p>                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col w-full bg-dark rounded-3xl p-4">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-2xl text-white font-body font-semibold">Handicap</p>
                                                </div>
                                                <div className="flex mt-4">
                                                    <div className="flex flex-col w-full text-center">
                                                        <p className="text-xl text-green font-body font-bold">1</p>
                                                        <p className="text-lg text-white font-body font-bold">1.33</p>                                                        
                                                    </div>
                                                    <div className="flex flex-col w-full text-center">
                                                        <p className="text-xl text-green font-body font-bold">X</p>
                                                        <p className="text-lg text-white font-body font-bold">2.90</p>                                                        
                                                    </div>
                                                    <div className="flex flex-col w-full text-center">
                                                        <p className="text-xl text-green font-body font-bold">2</p>
                                                        <p className="text-lg text-white font-body font-bold">10.00</p>                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col w-full bg-dark rounded-3xl p-4">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-2xl text-white font-body font-semibold">Total</p>
                                                </div>
                                                <div className="flex mt-4">
                                                    <div className="flex flex-col w-full text-center">
                                                        <p className="text-xl text-green font-body font-bold">1</p>
                                                        <p className="text-lg text-white font-body font-bold">1.33</p>                                                        
                                                    </div>
                                                    <div className="flex flex-col w-full text-center">
                                                        <p className="text-xl text-green font-body font-bold">X</p>
                                                        <p className="text-lg text-white font-body font-bold">2.90</p>                                                        
                                                    </div>
                                                    <div className="flex flex-col w-full text-center">
                                                        <p className="text-xl text-green font-body font-bold">2</p>
                                                        <p className="text-lg text-white font-body font-bold">10.00</p>                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-8 ml-auto">
                                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center font-body font-semibold text-lg">1</div>
                                    <div className="w-14 h-14 rounded-2xl bg-gray-secondary text-white flex items-center justify-center font-body font-semibold text-lg">2</div>
                                    <div className="w-14 h-14 rounded-2xl bg-gray-secondary text-white flex items-center justify-center font-body font-semibold text-lg">3</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
            )}
        </main>
    );
}
