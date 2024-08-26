// import React, { useState } from 'react';

export default function SignOutSuccessPage() {

    return (
        <main className="main flex flex-col flex-1">
            <div className="container container-sm md:px-8 px-4 my-auto pt-36">
                <div className="flex flex-col items-center rounded-3xl bg-gray-secondary lg:py-24 lg:px-36 py-12 px-6">
                    <h2 className="text-green font-body uppercase font-extrabold lg:text-4xl text-2xl text-center mb-8">You have successfully signed out </h2>
                    <p className="text-white font-semibold lg:text-3xl text-lg text-center">Thank you for visiting our website!  Hope to see you back soon! 
                    </p>
                    <button className="bg-green md:text-xl text-lg rounded-3xl font-bold px-10 py-3 lg:mt-28 mt-14 w-fit ">
                        Return to the main page
                    </button>
                </div>
            </div>        
        </main>
    );
}
