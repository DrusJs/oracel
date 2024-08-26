import { Link } from "react-router-dom"

export default function LegalPage() {

    return (
        <main className="main flex flex-col flex-1">
            <div className="container container-sm mt-36">
                <div className="flex md:flex-nowrap flex-wrap md:gap-32 gap-20">
                    <div className="flex flex-col font-display text-white w-full max-w-xl">
                        <Link to="#" className="text-4xl font-bold md:mb-8 mb-6">Company name</Link>
                        <Link to="/auth" className="text-4xl font-bold md:mb-8 mb-6">Regestration</Link>
                        <Link to="#" className="text-4xl font-bold md:mb-8 mb-6">Country</Link>
                        <Link to="#" className="text-4xl font-bold md:mb-36 mb-16">Address</Link>
                        <Link to="#" className="max-w-[350px] text-2xl mb-6 border-b-2 border-white flex items-center justify-between">
                            Terms and Conditions
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.29289 0.692796C7.68342 0.302271 8.31658 0.302271 8.70711 0.692796L15.7071 7.6928C16.0976 8.08332 16.0976 8.71649 15.7071 9.10701L8.70711 16.107C8.31658 16.4975 7.68342 16.4975 7.29289 16.107C6.90237 15.7165 6.90237 15.0833 7.29289 14.6928L12.5858 9.3999H1C0.447715 9.3999 0 8.95219 0 8.3999C0 7.84762 0.447715 7.3999 1 7.3999H12.5858L7.29289 2.10701C6.90237 1.71648 6.90237 1.08332 7.29289 0.692796Z" fill="#D1D1D1"/>
                            </svg>
                        </Link>
                        <Link to="#" className="max-w-[350px] text-2xl mb-6 border-b-2 border-white flex items-center justify-between">
                            Privacy Policy
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.29289 0.692796C7.68342 0.302271 8.31658 0.302271 8.70711 0.692796L15.7071 7.6928C16.0976 8.08332 16.0976 8.71649 15.7071 9.10701L8.70711 16.107C8.31658 16.4975 7.68342 16.4975 7.29289 16.107C6.90237 15.7165 6.90237 15.0833 7.29289 14.6928L12.5858 9.3999H1C0.447715 9.3999 0 8.95219 0 8.3999C0 7.84762 0.447715 7.3999 1 7.3999H12.5858L7.29289 2.10701C6.90237 1.71648 6.90237 1.08332 7.29289 0.692796Z" fill="#D1D1D1"/>
                            </svg>
                        </Link>
                        <Link to="#" className="max-w-[350px] text-2xl mb-6 border-b-2 border-white flex items-center justify-between">
                            Responsible gaming
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.29289 0.692796C7.68342 0.302271 8.31658 0.302271 8.70711 0.692796L15.7071 7.6928C16.0976 8.08332 16.0976 8.71649 15.7071 9.10701L8.70711 16.107C8.31658 16.4975 7.68342 16.4975 7.29289 16.107C6.90237 15.7165 6.90237 15.0833 7.29289 14.6928L12.5858 9.3999H1C0.447715 9.3999 0 8.95219 0 8.3999C0 7.84762 0.447715 7.3999 1 7.3999H12.5858L7.29289 2.10701C6.90237 1.71648 6.90237 1.08332 7.29289 0.692796Z" fill="#D1D1D1"/>
                            </svg>
                        </Link>
                        <Link to="#" className="max-w-[350px] text-2xl border-b-2 border-white flex items-center justify-between">
                            No warranties
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.29289 0.692796C7.68342 0.302271 8.31658 0.302271 8.70711 0.692796L15.7071 7.6928C16.0976 8.08332 16.0976 8.71649 15.7071 9.10701L8.70711 16.107C8.31658 16.4975 7.68342 16.4975 7.29289 16.107C6.90237 15.7165 6.90237 15.0833 7.29289 14.6928L12.5858 9.3999H1C0.447715 9.3999 0 8.95219 0 8.3999C0 7.84762 0.447715 7.3999 1 7.3999H12.5858L7.29289 2.10701C6.90237 1.71648 6.90237 1.08332 7.29289 0.692796Z" fill="#D1D1D1"/>
                            </svg>
                        </Link>
                    </div>
                    <form className="flex flex-col w-full max-w-2xl">
                        <input type="email" name="email-input" id="email-input" className="outline-transparent w-full text-xl text-white py-6 px-10 bg-input rounded-full mb-6" placeholder="What’s your e-mail?" />
                        <input type="text" name="topic-input" id="topic-input" className="outline-transparent w-full text-xl text-white py-6 px-10 bg-input rounded-full mb-6" placeholder="What’s the topic?" />
                        <textarea name="message" id=" message" placeholder="What’s your message?" className="outline-transparent h-60 resize-none w-full text-xl text-white py-6 px-10 bg-input mb-14"></textarea>
                        <button className="w-full bg-green text-dark text-2xl py-10 flex items-center justify-center font-bold rounded-full gap-6 uppercase">
                            send an e-mail
                            <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3218 1.1549C12.9727 0.50403 14.028 0.50403 14.6788 1.1549L26.3455 12.8216C26.9964 13.4724 26.9964 14.5277 26.3455 15.1786L14.6788 26.8453C14.028 27.4961 12.9727 27.4961 12.3218 26.8453C11.6709 26.1944 11.6709 25.1391 12.3218 24.4882L21.1433 15.6667H1.83366C0.913184 15.6667 0.166992 14.9206 0.166992 14.0001C0.166992 13.0796 0.913184 12.3334 1.83366 12.3334H21.1433L12.3218 3.51193C11.6709 2.86105 11.6709 1.80578 12.3218 1.1549Z" fill="#1C1B23"/>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>    
        
        </main>
    );
}
