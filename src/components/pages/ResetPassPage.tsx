export default function ResetPassPage() {

    return (
        <main className="main flex flex-col">
            <div className="container container-sm lg:px-8 px-4 md:mt-36 mt-10">
                <div className="flex gap-36">
                    <div className="flex flex-col w-full items-center">
                        <h1 className="title md:text-3xl text-2xl font-body font-semibold uppercase text-white">Create new passward / change your passward</h1>
                        <form className="flex flex-col w-full lg:max-w-2xl md:mt-16 mt-10">
                            <input type="text" name="password-input" id="password-input" className="outline-transparent w-full font-display md:text-[22px] text-base text-white py-6 md:px-10 px-6 bg-input rounded-full" placeholder="Your passward" />
                            <p className="font-body text-xl italic text-disabled ps-5 mt-2 mb-6">Must be at least 8 characters</p>
                            <input type="text" name="password-input" id="password-input" className="outline-transparent w-full font-display md:text-[22px] text-base text-white py-6 md:px-10 px-6 bg-input rounded-full mb-6" placeholder="Confirm Passward" />
                            <button className="w-full bg-green text-dark md:text-2xl text-lg font-display md:py-10 py-6 mt-10 flex items-center justify-center font-bold rounded-full gap-6 uppercase">
                                Reset password
                                <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.3218 1.1549C12.9727 0.50403 14.028 0.50403 14.6788 1.1549L26.3455 12.8216C26.9964 13.4724 26.9964 14.5277 26.3455 15.1786L14.6788 26.8453C14.028 27.4961 12.9727 27.4961 12.3218 26.8453C11.6709 26.1944 11.6709 25.1391 12.3218 24.4882L21.1433 15.6667H1.83366C0.913184 15.6667 0.166992 14.9206 0.166992 14.0001C0.166992 13.0796 0.913184 12.3334 1.83366 12.3334H21.1433L12.3218 3.51193C11.6709 2.86105 11.6709 1.80578 12.3218 1.1549Z" fill="#1C1B23"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>        
        </main>
    );
}
