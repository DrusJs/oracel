export default function SignInPage() {

    return (
        <main className="main flex flex-col">
            <div className="container container-sm lg:px-8 px-4 md:mt-36 mt-10">
                <div className="flex gap-36">
                    <div className="flex flex-col w-full">
                        <h1 className="title md:text-8xl text-5xl font-head text-white">WELCOME BACK!</h1>
                        <div className="lg:hidden lg:max-w-auto max-w-[400px] flex my-10 flex-col text-white w-full relative lg:items-end mt-32">
                            <div className="bg-white max-w-[420px] md:px-10 md:py-12 p-6 md:gap-6 gap-2 rounded-[50px] w-fit">
                                <p className="font-head text-[44px] text-gray-secondary uppercase leading-none flex flex-col">you never throw the dice <span className="font-body text-[44px] text-blue font-extrabold italic">with us</span></p>
                            </div>
                            <img src="img/dice1.png" alt="Dice sign in" className="absolute -z-10 left-4 -top-1/3 w-[140px]"/>
                            <img src="img/dice2.png" alt="Dice sign in" className="absolute z-10 -right-0 -top-[120px] w-[140px]"/>
                            <img src="img/dice3.png" alt="Dice sign in" className="absolute -z-10 -left-10 top-1/2 w-[180px]"/>
                        </div>
                        <form className="flex flex-col w-full lg:max-w-2xl mt-12">
                            <input type="email" name="email-input" id="email-input" className="outline-transparent w-full font-display md:text-[22px] text-base text-white py-6 md:px-10 px-6 bg-input rounded-full mb-6" placeholder="What’s your e-mail?" />
                            <input type="text" name="topic-input" id="topic-input" className="outline-transparent w-full font-display md:text-[22px] text-base text-white py-6 md:px-10 px-6 bg-input rounded-full mb-6" placeholder="What’s the topic?" />
                            <button className="w-full bg-green text-dark md:text-2xl text-lg font-display md:py-10 py-6 mt-14 flex items-center justify-center font-bold rounded-full gap-6 uppercase">
                                SIGN IN
                                <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.3218 1.1549C12.9727 0.50403 14.028 0.50403 14.6788 1.1549L26.3455 12.8216C26.9964 13.4724 26.9964 14.5277 26.3455 15.1786L14.6788 26.8453C14.028 27.4961 12.9727 27.4961 12.3218 26.8453C11.6709 26.1944 11.6709 25.1391 12.3218 24.4882L21.1433 15.6667H1.83366C0.913184 15.6667 0.166992 14.9206 0.166992 14.0001C0.166992 13.0796 0.913184 12.3334 1.83366 12.3334H21.1433L12.3218 3.51193C11.6709 2.86105 11.6709 1.80578 12.3218 1.1549Z" fill="#1C1B23"/>
                                </svg>
                            </button>
                        </form>
                        <a href="/resetpass" className="text-center md:text-xl text-base text-tretiary italic mt-8">Forgot your passward?</a>
                    </div>
                    <div className="lg:flex hidden flex-col text-white w-full max-w-xl relative items-end mt-32">
                        <div className="flex items-center max-w-[460px] bg-white md:px-10 md:py-12 p-6 md:gap-6 gap-2 rounded-[50px]">
                            <p className="font-head text-[50px] text-gray-secondary uppercase leading-none flex flex-col">you never throw the dice  <span className="font-body text-[45px] text-blue font-extrabold italic">with us</span></p>
                        </div>
                        <img src="img/dice1.png" alt="Dice sign in" className="absolute -z-10 -left-32 -top-1/3"/>
                        <img src="img/dice2.png" alt="Dice sign in" className="absolute z-10 -right-32 -top-1/2"/>
                        <img src="img/dice3.png" alt="Dice sign in" className="absolute -z-10 -left-10 top-1/4"/>
                    </div>
                </div>
            </div>        
        </main>
    );
}
