// import React, { useState } from 'react';

export default function MessagePage() {

    return (
        <main className="main flex flex-col flex-1">
            <div className="container container-sm my-auto pt-36">
                <h2 className="text-green font-body uppercase font-extrabold text-4xl text-center mb-3">Oops!</h2>
                <p className="text-white font-semibold lg:text-3xl text-xl text-center">It seems your balance is not enough – do you want to top-up it?</p>
                <div className="flex justify-center md:gap-10 gap-4 items-center mt-12">                    
                    <button className="bg-gray-secondary flex items-center justify-center text-white text-lg rounded-3xl font-bold px-10 py-3 md:w-fit w-full">No</button>
                    <button className="bg-green flex items-center justify-center gap-4 te text-lg rounded-3xl font-bold px-10 py-3 md:w-fit w-full">
                        Yes
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.79289 1.1928C8.18342 0.802271 8.81658 0.802271 9.20711 1.1928L16.2071 8.1928C16.5976 8.58332 16.5976 9.21649 16.2071 9.60701L9.20711 16.607C8.81658 16.9975 8.18342 16.9975 7.79289 16.607C7.40237 16.2165 7.40237 15.5833 7.79289 15.1928L13.0858 9.8999H1.5C0.947715 9.8999 0.5 9.45219 0.5 8.8999C0.5 8.34762 0.947715 7.8999 1.5 7.8999H13.0858L7.79289 2.60701C7.40237 2.21648 7.40237 1.58332 7.79289 1.1928Z" fill="#1C1B23"/>
                        </svg>
                    </button>
                </div>
            </div>        
        </main>
    );
}
