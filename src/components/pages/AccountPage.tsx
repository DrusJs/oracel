import React, { useRef } from 'react';

export default function AccountPage() {
    const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;

        if (/^\d$/.test(value)) {
          const nextInput = inputsRef.current[index + 1];
          if (nextInput) {
            nextInput.focus();
          }
        } else {
          e.target.value = '';
        }
      };


    return (
        <main className="main flex flex-col flex-1">
            <div className="container container-sm md:px-8 px-0 pt-20">
                <div className="flex flex-wrap gap-10 items-center justify-between md:px-0 px-4">
                    <h1 className="font-body md:text-5xl text-4xl text-white uppercase font-semibold">Personal account</h1>
                    <p className="font-body font-semibold text-green text-3xl uppercase">user@gmail.com</p>
                </div>
                <div className="flex mt-10 gap-10 items-start flex-wrap lg:flex-nowrap">
                    <div className="bg-green rounded-3xl md:p-12 py-8 px-6 flex flex-col w-full max-w-[480px] md:min-w-[460px]">
                        <p className="text-2xl uppercase font-body font-semibold md:mb-10 mb-6">Referral program</p>
                        <p className="font-display text-xl mb-3">Your code</p>
                        <p className="font-body md:text-5xl text-7xl font-semibold">255 466</p>
                        <button className="bg-white rounded-full font-bold text-xl md:px-16 px-6 py-5 mb-8 mt-12 flex justify-center gap-4 items-center hover:opacity-80">
                            Generate a new code
                            <svg className="min-w-4" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893L15.7071 7.29289C16.0976 7.68342 16.0976 8.31658 15.7071 8.70711L8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071C6.90237 15.3166 6.90237 14.6834 7.29289 14.2929L12.5858 9H1C0.447715 9 0 8.55229 0 8C0 7.44772 0.447715 7 1 7H12.5858L7.29289 1.70711C6.90237 1.31658 6.90237 0.683417 7.29289 0.292893Z" fill="#1C1B23"/>
                            </svg>
                        </button>
                        <p className="flex items-center font-body text-xl gap-4 font-semibold">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893L15.7071 7.29289C16.0976 7.68342 16.0976 8.31658 15.7071 8.70711L8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071C6.90237 15.3166 6.90237 14.6834 7.29289 14.2929L12.5858 9H1C0.447715 9 0 8.55229 0 8C0 7.44772 0.447715 7 1 7H12.5858L7.29289 1.70711C6.90237 1.31658 6.90237 0.683417 7.29289 0.292893Z" fill="#1C1B23"/>
                            </svg>
                            Refferal program Terms and Policy
                        </p>
                    </div>
                    <div className="flex flex-col w-full md:px-0 px-4">
                        <div className="bg-gray-secondary rounded-3xl md:p-11 py-8 px-6 flex flex-col gap-10">
                            <p className="text-3xl text-white font-bodt font-semibold uppercase">Enter a referral code to get your 10 EUR </p>
                            <div className="flex flex-wrap gap-10">
                                <div className="flex gap-2 md:pl-0 pl-3">
                                    {Array.from({ length: 6 }).map((_, index) => (
                                        <input
                                        key={index}
                                        ref={(el) => (inputsRef.current[index] = el)}
                                        className={`bg-transparent text-white text-center text-4xl font-body ${index === 3 ? 'ml-5' : ''} md:w-10 w-8 border-b-4 border-white`}
                                        type="text"
                                        maxLength={1}
                                        onChange={(e) => handleInputChange(e, index)}
                                        />
                                    ))}
                                </div>
                                <button className="bg-green rounded-full font-bold text-xl px-12 py-5 flex justify-center gap-4 items-center text-nowrap hover:opacity-80">
                                    Get your bonus
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893L15.7071 7.29289C16.0976 7.68342 16.0976 8.31658 15.7071 8.70711L8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071C6.90237 15.3166 6.90237 14.6834 7.29289 14.2929L12.5858 9H1C0.447715 9 0 8.55229 0 8C0 7.44772 0.447715 7 1 7H12.5858L7.29289 1.70711C6.90237 1.31658 6.90237 0.683417 7.29289 0.292893Z" fill="#1C1B23"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-wrap md:flex-nowrap gap-8 mt-10">
                            <div className="flex flex-col gap-5 w-full">
                                <p className="text-xl text-white font-body">Change e-mail</p>
                                <input type="text" name="topic-input" id="topic-input" className="outline-transparent w-full text-lg text-white py-4 px-10 bg-input rounded-full" placeholder="New e-mail" />
                                <button className="md:w-fit w-full bg-green text-dark text-lg py-4 px-10 flex items-center justify-center font-bold rounded-full gap-4 hover:opacity-80">
                                    Continue
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.79289 0.492844C8.18342 0.10232 8.81658 0.10232 9.20711 0.492844L16.2071 7.49284C16.5976 7.88337 16.5976 8.51653 16.2071 8.90706L9.20711 15.9071C8.81658 16.2976 8.18342 16.2976 7.79289 15.9071C7.40237 15.5165 7.40237 14.8834 7.79289 14.4928L13.0858 9.19995H1.5C0.947715 9.19995 0.5 8.75224 0.5 8.19995C0.5 7.64767 0.947715 7.19995 1.5 7.19995H13.0858L7.79289 1.90706C7.40237 1.51653 7.40237 0.883369 7.79289 0.492844Z" fill="#1C1B23"/>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex flex-col gap-5 w-full">
                                <p className="text-xl text-white font-body">Change password</p>
                                <input type="text" name="topic-input" id="topic-input" className="outline-transparent w-full text-lg text-white py-4 px-10 bg-input rounded-full" placeholder="Current password" />
                                <input type="text" name="topic-input" id="topic-input" className="outline-transparent w-full text-lg text-white py-4 px-10 bg-input rounded-full" placeholder="New password" />
                                <button className="md:w-fit w-full bg-green text-dark text-lg py-4 px-10 flex items-center justify-center font-bold rounded-full gap-4 hover:opacity-80">
                                    Continue
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.79289 0.492844C8.18342 0.10232 8.81658 0.10232 9.20711 0.492844L16.2071 7.49284C16.5976 7.88337 16.5976 8.51653 16.2071 8.90706L9.20711 15.9071C8.81658 16.2976 8.18342 16.2976 7.79289 15.9071C7.40237 15.5165 7.40237 14.8834 7.79289 14.4928L13.0858 9.19995H1.5C0.947715 9.19995 0.5 8.75224 0.5 8.19995C0.5 7.64767 0.947715 7.19995 1.5 7.19995H13.0858L7.79289 1.90706C7.40237 1.51653 7.40237 0.883369 7.79289 0.492844Z" fill="#1C1B23"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
            <div className="container container-sm pt-20 md:px-8 px-4" id="history">
                <h2 className="font-body md:text-5xl text-4xl text-white uppercase font-semibold">Order history</h2>
            </div>       
            <div className="xl:container max-w-full pt-20 md:px-8 px-4 flex lg:flex-col flex-row gap-4">
                <div className="lg:flex grid grid-cols-1 rounded-2xl bg-green min-w-28">
                    <div className="lg:text-xl text-lg font-bold font-body py-4 text-center basis-1/6">Date</div>
                    <div className="lg:text-xl text-lg font-bold font-body py-4 text-center basis-1/12">Amount</div>
                    <div className="lg:text-xl text-lg font-bold font-body py-4 text-center basis-1/4">Forecast</div>
                    <div className="lg:text-xl text-lg font-bold font-body py-4 text-center basis-1/6">Winner</div>
                    <div className="lg:text-xl text-lg font-bold font-body py-4 text-center basis-1/12">Score</div>
                    <div className="lg:text-xl text-lg font-bold font-body py-4 text-center basis-1/12">Handicap</div>
                    <div className="lg:text-xl text-lg font-bold font-body py-4 text-center basis-1/6">Total</div>
                </div>
                <div className="flex lg:flex-col flex-row overflow-auto lg:max-h-96 lg:mt-10 gap-4">
                    <div className="lg:flex grid grid-cols-1 gap-2 font-bold font-body text-center text-white min-w-56">
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/6">27.01.2024</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/12">1</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/4">NaVi VS Team Spirit</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/6">Team Spirit</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/12">0-2</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/12">2.20</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/6">5.00</div>
                    </div>
                    <div className="lg:flex grid grid-cols-1 gap-2 font-bold font-body text-center text-white min-w-56">
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/6">27.01.2024</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/12">1</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/4">NaVi VS Team Spirit</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/6">Team Spirit</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/12">0-2</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/12">2.20</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/6">5.00</div>
                    </div>
                    <div className="lg:flex grid grid-cols-1 gap-2 font-bold font-body text-center text-white min-w-56">
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/6">27.01.2024</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/12">1</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/4">NaVi VS Team Spirit</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/6">Team Spirit</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/12">0-2</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/12">2.20</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/6">5.00</div>
                    </div>
                    <div className="lg:flex grid grid-cols-1 gap-2 font-bold font-body text-center text-white min-w-56">
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/6">27.01.2024</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/12">1</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/4">NaVi VS Team Spirit</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/6">Team Spirit</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/12">0-2</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/12">2.20</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/6">5.00</div>
                    </div>
                    <div className="lg:flex grid grid-cols-1 gap-2 font-bold font-body text-center text-white min-w-56">
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/6">27.01.2024</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/12">1</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/4">NaVi VS Team Spirit</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/6">Team Spirit</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/12">0-2</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/12">2.20</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/6">5.00</div>
                    </div>
                    <div className="lg:flex grid grid-cols-1 gap-2 font-bold font-body text-center text-white min-w-56">
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/6">27.01.2024</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/12">1</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/4">NaVi VS Team Spirit</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/6">Team Spirit</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/12">0-2</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/12">2.20</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/6">5.00</div>
                    </div>
                    <div className="lg:flex grid grid-cols-1 gap-2 font-bold font-body text-center text-white min-w-56">
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/6">27.01.2024</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/12">1</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/4">NaVi VS Team Spirit</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/6">Team Spirit</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/12">0-2</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/12">2.20</div>
                        <div className="lg:text-2xl text-lg rounded-2xl bg-gray-secondary py-4 basis-1/6">5.00</div>
                    </div>
                </div>
            </div> 
        </main>
    );
}
