import { useState } from 'react';
import Modal from '../features/Modal';

export default function SignInPage() {
    const [isModalOpen, setModalOpen] = useState(false);

    function toggleModal() { setModalOpen(!isModalOpen); } 

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
                            <input type="email" name="email-input" id="email-input" className="outline-transparent w-full font-display md:text-[22px] text-base text-white py-6 md:px-10 px-6 bg-input rounded-full mb-6" placeholder="Your e-mail" />
                            <input type="text" name="password-input" id="password-input" className="outline-transparent w-full font-display md:text-[22px] text-base text-white py-6 md:px-10 px-6 bg-input rounded-full mb-6" placeholder="Your passward" />
                            <button className="w-full bg-green text-dark md:text-2xl text-lg font-display md:py-10 py-6 mt-14 flex items-center justify-center font-bold rounded-full gap-6 uppercase">
                                SIGN IN
                                <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.3218 1.1549C12.9727 0.50403 14.028 0.50403 14.6788 1.1549L26.3455 12.8216C26.9964 13.4724 26.9964 14.5277 26.3455 15.1786L14.6788 26.8453C14.028 27.4961 12.9727 27.4961 12.3218 26.8453C11.6709 26.1944 11.6709 25.1391 12.3218 24.4882L21.1433 15.6667H1.83366C0.913184 15.6667 0.166992 14.9206 0.166992 14.0001C0.166992 13.0796 0.913184 12.3334 1.83366 12.3334H21.1433L12.3218 3.51193C11.6709 2.86105 11.6709 1.80578 12.3218 1.1549Z" fill="#1C1B23"/>
                                </svg>
                            </button>
                        </form>
                        <p onClick={toggleModal} className="text-center cursor-pointer md:text-xl text-base text-tretiary italic mt-8">Forgot your passward?</p>
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
            <Modal isOpen={isModalOpen} onClose={toggleModal}>
                <div className="flex flex-col w-full items-center">
                    <h1 className="title md:text-3xl text-2xl font-body font-semibold text-gray-secondary">Forgot your password?</h1>
                    <p className="font-body md:text-2xl text-base font-medium md:text-center text-gray-secondary mt-4 max-w-[700px]">Don’t worry, resetting your passward is easy!
                    Enter the email associated with your account and we’ll send an email with instructions to reset your passward.</p>
                    <form className="flex flex-col w-full lg:max-w-2xl md:mt-12 mt-8">                        
                        <input type="email" name="email-input" id="email-input" className="outline-transparent w-full font-display md:text-[22px] text-base text-white py-6 md:px-10 px-6 bg-input rounded-full mt-10" placeholder="Your e-mail" />
                        <button className="w-full bg-green text-dark md:text-2xl text-lg font-display md:py-6 py-6 mt-10 flex items-center justify-center font-bold rounded-full uppercase">
                            SEND A CODE 
                        </button>
                    </form>
                    <p className="md:text-xl text-base font-medium font-body text-gray-secondary mt-12">
                        Remembered your passward? <a href="/signin" className="italic underline text-gray-secondary text-opacity-55">Try logging in</a>
                    </p>
                </div>
            </Modal>      
        </main>
    );
}
