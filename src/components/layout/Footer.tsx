import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="footer bg-gray-dark md:mt-36 mt-20">
            <div className="2xl:container max-w-full md:py-28 py-10 md:px-8 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col justify-between">
                        <div className="px-10 py-3 bg-black text-white rounded-full font-bold w-fit">
                            Logo
                        </div>
                        <p className="text-white fonr-body lg:block hidden">Copyright 2024 Company Name.</p>
                    </div>
                    <div className="flex flex-col gap-2 justify-end text-white text-xl">
                        <Link className="hover:text-green" to='#'>Address</Link>
                        <Link className="hover:text-green" to='#'>Country</Link>
                        <Link className="hover:text-green" to='#'>Info</Link>
                    </div>
                    <div className="flex flex-col gap-2 justify-end text-white md:text-2xl text-xl">
                        <Link className="hover:text-green" to='#'>Terms and Conditions</Link>
                        <Link className="hover:text-green" to='#'>Privacy Policy</Link>
                        <Link className="hover:text-green" to='#'>Responsible gaming</Link>
                        <Link className="hover:text-green" to='#'>No warranties</Link>
                    </div>
                    <p className="text-white fonr-body lg:hidden block">Copyright 2024 Company Name.</p>
                </div>
            </div>
        </footer>
    );
}