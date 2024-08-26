import React, { useState } from 'react';
import Modal from '../features/Modal';


export default function BalancePage() {
    const [inputValue, setInputValue] = useState<string>('20.00');
    const [isReadOnly, setIsReadOnly] = useState<boolean>(true);
    const [isModalOpen, setModalOpen] = useState(false);

    function toggleModal() { setModalOpen(!isModalOpen); } 

    function setActiveItem(e: React.MouseEvent<HTMLElement>) {
        const currentTarget = e.currentTarget as HTMLElement;
    
        if (!currentTarget.classList.contains('active_item')) {
            const value = currentTarget.innerText.trim().replace(' EUR', '') + '.00';

            setInputValue(value);
            setIsReadOnly(true);
        } else {
            setInputValue('0');
            setIsReadOnly(false);
        }
    }

    function changeItem(e: React.MouseEvent<HTMLElement>) {
        const currentTarget = e.currentTarget as HTMLElement;

        if (!currentTarget.classList.contains('active_item')) {
            const parentElement = currentTarget.parentElement as HTMLElement;
            const active = parentElement.querySelector('.active_item') as HTMLElement;

            if (active) {
                active.classList.remove('active_item');
            }

            currentTarget.classList.add('active_item');
        } else {
            currentTarget.classList.remove('active_item');
        }
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;

        if (/^\d*\.?\d*$/.test(value)) {
          setInputValue(value);
        }
    }

    function hideMessage(e: React.MouseEvent<HTMLElement>) {
        const currentTarget = e.currentTarget.parentElement as HTMLElement;

        currentTarget.classList.remove('flex')  
        currentTarget.classList.add('hidden')  
    }
    


    return (
        <main className="main flex flex-col flex-1">
            <div className="container container-sm md:overflow-auto overflow-hidden pt-20 md:px-8 px-4">                
                <h1 className="font-body md:text-5xl text-3xl text-white uppercase font-semibold">Balance top up</h1>
                <div className="bg-blue rounded-3xl py-6 md:md:px-8 px-4 flex gap-10 mt-8">
                    <p className="font-display font-bold md:text-2xl text-base text-white">Something went wrong, and we are fixing it. Please wait a little bit or try another payment option. 
                    If you see this message too often, please contact our support team via the form herein.
                    </p>
                    <button className="bg-transparent border-none cursor-pointer" onClick={hideMessage}>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.82348 1.13195L8.99948 7.30795L15.1435 1.16395C15.2792 1.0195 15.4427 0.903943 15.6241 0.824211C15.8056 0.744479 16.0013 0.702214 16.1995 0.699951C16.6238 0.699951 17.0308 0.868522 17.3309 1.16858C17.6309 1.46864 17.7995 1.8756 17.7995 2.29995C17.8032 2.49611 17.7668 2.69097 17.6925 2.87256C17.6182 3.05415 17.5076 3.21865 17.3675 3.35595L11.1435 9.49995L17.3675 15.724C17.6312 15.9819 17.7858 16.3313 17.7995 16.7C17.7995 17.1243 17.6309 17.5313 17.3309 17.8313C17.0308 18.1314 16.6238 18.3 16.1995 18.3C15.9956 18.3084 15.7921 18.2744 15.6021 18.2C15.412 18.1256 15.2395 18.0126 15.0955 17.868L8.99948 11.692L2.83948 17.852C2.70429 17.9916 2.54278 18.1031 2.36428 18.18C2.18578 18.2569 1.99382 18.2976 1.79948 18.3C1.37513 18.3 0.968166 18.1314 0.668108 17.8313C0.36805 17.5313 0.199479 17.1243 0.199479 16.7C0.195749 16.5038 0.232144 16.3089 0.306431 16.1273C0.380718 15.9458 0.491331 15.7813 0.631479 15.644L6.85548 9.49995L0.631479 3.27595C0.367775 3.01797 0.213142 2.66861 0.199479 2.29995C0.199479 1.8756 0.36805 1.46864 0.668108 1.16858C0.968166 0.868522 1.37513 0.699951 1.79948 0.699951C2.18348 0.704751 2.55148 0.859951 2.82348 1.13195Z" fill="white"/>
                        </svg>
                    </button>
                </div>
                <div className="flex lg:flex-row flex-col mt-10 gap-10 items-start">
                    <div className="bg-green md:rounded-3xl rounded-[30px] md:p-12 px-6 py-8 gap-4 flex flex-col w-full max-w-[440px] relative">
                        <p className="font-body text-2xl mb-3">Your current balance</p>
                        <p className="font-body md:text-6xl text-5xl font-semibold">150.20 EUR</p>
                        <img className="absolute lg:-left-14 lg:top-40 -top-10 -right-48 lg:h-auto h-[270px] w-auto" src="img/bank.png" alt="Balance image" width="626"/>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="bg-gray-secondary rounded-3xl md:p-11 p-6 py-8 flex flex-col gap-10">
                            <p className="text-3xl text-white font-bodt font-semibold uppercase">Balance Top Up</p>
                            <div className="grid xl:grid-cols-5 grid-cols-6 gap-4 text-center text-nowrap">
                                <div className="font-body font-bold md:text-xl text-base text-white py-4 px-2 bg-dark rounded-2xl cursor-pointer xl:col-span-1 col-span-2" onClick={(e) => (setActiveItem(e), changeItem(e))}>10 EUR</div>
                                <div className="font-body font-bold md:text-xl text-base text-white py-4 px-2 bg-dark rounded-2xl cursor-pointer xl:col-span-1 col-span-2" onClick={(e) => (setActiveItem(e), changeItem(e))}>15 EUR</div>
                                <div className="font-body font-bold md:text-xl text-base text-white py-4 px-2 bg-dark rounded-2xl cursor-pointer xl:col-span-1 col-span-2 active_item" onClick={(e) => (setActiveItem(e), changeItem(e))}>20 EUR</div>
                                <div className="font-body font-bold md:text-xl text-base text-white py-4 px-2 bg-dark rounded-2xl cursor-pointer xl:col-span-1 col-span-3" onClick={(e) => (setActiveItem(e), changeItem(e))}>50 EUR</div>
                                <div className="font-body font-bold md:text-xl text-base text-white py-4 px-2 bg-dark rounded-2xl cursor-pointer xl:col-span-1 col-span-3" onClick={(e) => (setActiveItem(e), changeItem(e))}>100 EUR</div>
                            </div>
                            <div className="flex items-center gap-6">
                            <input id="topUpBalanceInput" type="text" className="outline-transparent md:text-[40px] text-3xl font-body font-bold text-center text-white w-60 py-2 md:px-10 px-4 md:w-60 w-full bg-dark rounded-2xl" placeholder="0.00"
                                value={inputValue}
                                onChange={handleInputChange}
                                readOnly={isReadOnly}
                                inputMode="decimal"
                                pattern="[0-9]*"
                                />
                                <p className="font-body font-bold md:text-5xl text-[40px] text-white">EUR</p>
                            </div>
                            <div className="grid xl:grid-cols-3 grid-cols-2 gap-4 text-center text-nowrap">
                                <div className="font-body font-bold md:text-xl text-base text-white py-4 px-2 bg-dark rounded-2xl cursor-pointer" onClick={changeItem}>Visa</div>
                                <div className="font-body font-bold md:text-xl text-base text-white py-4 px-2 bg-dark rounded-2xl cursor-pointer" onClick={changeItem}>MasterCard</div>
                                <div className="font-body font-bold md:text-xl text-base text-white py-4 px-2 bg-dark rounded-2xl cursor-pointer active_item" onClick={changeItem}>USDT TRC</div>
                                <div className="font-body font-bold md:text-xl text-base text-white py-4 px-2 bg-dark rounded-2xl cursor-pointer" onClick={changeItem}>USDT ERC</div>
                                <div className="font-body font-bold md:text-xl text-base text-white py-4 px-2 bg-dark rounded-2xl cursor-pointer" onClick={changeItem}>USDC</div>
                                <div className="font-body font-bold md:text-xl text-base text-white py-4 px-2 bg-dark rounded-2xl cursor-pointer" onClick={changeItem}>BTC</div>
                            </div>
                            <input className="hidden" type="checkbox" name="" id="privacy" />
                            <label className="font-body text-white" htmlFor="privacy">I have read and accepted «Terms and Conditions», «Responsible gaming», «No warranties»</label>
                            <button className="w-fit px-16 bg-green text-dark text-xl py-6 flex items-center justify-center font-bold rounded-full gap-4 hover:opacity-80">
                                Top Up
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893L15.7071 7.29289C16.0976 7.68342 16.0976 8.31658 15.7071 8.70711L8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071C6.90237 15.3166 6.90237 14.6834 7.29289 14.2929L12.5858 9H1C0.447715 9 0 8.55229 0 8C0 7.44772 0.447715 7 1 7H12.5858L7.29289 1.70711C6.90237 1.31658 6.90237 0.683417 7.29289 0.292893Z" fill="#1C1B23"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>        
            <div className="container container-sm md:mt-40 mt-20" id="message">
                <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-20 gap-10">
                    <div className="flex flex-col">                        
                        <h2 className="font-body text-3xl text-white uppercase font-semibold mb-10">Is something bothering you?</h2>
                        <p className="font-display text-[22px] font-bold text-white md:mb-20 mb-10">I want to report a...</p>
                        <div className="grid sm:grid-cols-2 grid-cols-1 text-center gap-4">
                            <div className="font-display font-bold md:text-xl text-base text-white py-6 px-2 bg-gray-secondary rounded-full cursor-pointer" onClick={setActiveItem}>Compliant</div>
                            <div className="font-display font-bold md:text-xl text-base text-white py-6 px-2 bg-gray-secondary rounded-full cursor-pointer active_item" onClick={setActiveItem}>Technical issue</div>
                        </div>
                        <img src="img/sad-square.png" alt="" className="mt-12  hidden lg:block" />
                    </div>
                    <div className="flex flex-col">
                        <textarea name="message" id=" message" placeholder="What’s your message?" className="outline-transparent lg:h-full h-[400px] resize-none w-full font-display text-[22px] text-white py-6 px-10 bg-input"></textarea>
                        <button className="w-full bg-green text-dark md:text-3xl text-lg font-display md:py-10 py-7 mt-14 flex items-center justify-center font-bold rounded-full md:gap-6 gap-3 uppercase hover:opacity-80" onClick={toggleModal}>
                            send
                            <svg className='md:w-auto w-4' width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3218 1.1549C12.9727 0.50403 14.028 0.50403 14.6788 1.1549L26.3455 12.8216C26.9964 13.4724 26.9964 14.5277 26.3455 15.1786L14.6788 26.8453C14.028 27.4961 12.9727 27.4961 12.3218 26.8453C11.6709 26.1944 11.6709 25.1391 12.3218 24.4882L21.1433 15.6667H1.83366C0.913184 15.6667 0.166992 14.9206 0.166992 14.0001C0.166992 13.0796 0.913184 12.3334 1.83366 12.3334H21.1433L12.3218 3.51193C11.6709 2.86105 11.6709 1.80578 12.3218 1.1549Z" fill="#1C1B23"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>       
            <Modal isOpen={isModalOpen} onClose={toggleModal}>
                <div className="flex flex-col items-center">
                    <h2 className="font-head md:text-[42px] text-[34px] uppercase mb-5">
                        Thank you!
                    </h2>
                    <p className='font-body font-medium text-center px-4 md:text-2xl text-[22px]'>Your message has been sent!</p>
                </div>
            </Modal>
        </main>
    );
}
