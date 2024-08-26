// import React, { useState } from 'react';
import { Link } from "react-router-dom"
export default function BalanceAwaitPage() {

    return (
        <main className="main flex flex-col flex-1">
            <div className="container relative container-sm md:px-8 px-4 pt-20">
                <div className="flex justify-center gap-10 mb-10">
                    <img className="lg:absolute static left-0 sm:w-auto w-28" src="img/arrow-to-bottom.png" alt="arrow" />
                    <img className="lg:absolute static right-0 sm:w-auto w-28" src="img/arrow-to-top.png" alt="arrow" />
                </div>
                <div className="flex flex-col gap-10 items-center">
                    <div className="flex items-center md:gap-10 gap-4">
                        <p className="font-display text-white md:text-3xl text-xl font-bold">Top Up</p>
                        <svg width="42" height="30" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M41.4142 16.4142C42.1953 15.6332 42.1953 14.3668 41.4142 13.5858L28.6863 0.857864C27.9052 0.0768156 26.6389 0.0768156 25.8579 0.857864C25.0768 1.63891 25.0768 2.90524 25.8579 3.68629L37.1716 15L25.8579 26.3137C25.0768 27.0948 25.0768 28.3611 25.8579 29.1421C26.6389 29.9232 27.9052 29.9232 28.6863 29.1421L41.4142 16.4142ZM40 13L0 13V17L40 17V13Z" fill="white"/>
                        </svg>
                        <div className="bg-green rounded-[20px] py-4 md:px-10 px-8 font-body md:text-3xl text-xl font-semibold">In progress</div>
                    </div>
                    <div className="flex items-center md:gap-10 gap-4">
                        <p className="font-display text-white md:text-3xl text-xl font-bold md:w-auto w-20 text-center">Top Up Amount</p>
                        <svg width="42" height="30" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M41.4142 16.4142C42.1953 15.6332 42.1953 14.3668 41.4142 13.5858L28.6863 0.857864C27.9052 0.0768156 26.6389 0.0768156 25.8579 0.857864C25.0768 1.63891 25.0768 2.90524 25.8579 3.68629L37.1716 15L25.8579 26.3137C25.0768 27.0948 25.0768 28.3611 25.8579 29.1421C26.6389 29.9232 27.9052 29.9232 28.6863 29.1421L41.4142 16.4142ZM40 13L0 13V17L40 17V13Z" fill="white"/>
                        </svg>
                        <div className="bg-green rounded-[20px] py-4 md:px-10 px-8 font-body md:text-3xl text-xl font-semibold">20.00 EUR</div>
                    </div>
                    <p className="font-display md:text-3xl text-xl text-secondary text-center md:mt-20 mt-10">You are returning on the website.<br/>If anything goes wrong, please <Link to="/"><i>click</i></Link> here</p>
                </div>
            </div> 
        </main>
    );
}
