export default function ResetPassPage() {

    return (
        <main className="main flex flex-col">
            <div className="container container-sm lg:px-8 px-4 md:mt-36 mt-10">
                <div className="flex gap-36">
                    <div className="flex flex-col w-full items-center">
                        <h1 className="title md:text-8xl text-5xl font-head text-white">Forgot your password?</h1>
                        <p className="font-body md:text-3xl text-xl md:text-center text-white mt-4 max-w-[1100px]">Don’t worry, resetting your passward is easy!
                        Enter the email associated with your account and we’ll send an email with instructions to reset your passward.</p>
                        <form className="flex flex-col w-full lg:max-w-2xl md:mt-12 mt-6">
                            <input type="email" name="email-input" id="email-input" className="outline-transparent w-full font-display md:text-[22px] text-base text-white py-6 md:px-10 px-6 bg-input rounded-full mt-10" placeholder="Your e-mail" />
                            <button className="w-full bg-green text-dark md:text-2xl text-lg font-display md:py-10 py-6 mt-10 flex items-center justify-center font-bold rounded-full gap-6 uppercase">
                                SEND A CODE 
                            </button>
                        </form>
                        <p className="md:text-xl text-base font-medium text-white mt-8">
                            Remembered your passward? <a href="/signin" className="italic underline text-tretiary">Try logging in</a>
                        </p>
                    </div>
                </div>
            </div>        
        </main>
    );
}
