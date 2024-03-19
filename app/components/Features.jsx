import React from 'react';
import Image from 'next/image';

// ** Import Icons
import { HiPlus } from "react-icons/hi";

//** Import Elements
import PlusButton from '../elements/PlusButton';

const Features = () => {
    return (
        <>
            <div className="features grid grid-cols-2 gap-6 mt-6">
                <div className="card border border-border bg-gradient">
                    <div className="relative overflow-hidden pb-16">
                        <Image src="/assets/imgs/help.svg" priority={true} width={0} height={0} sizes='100vw' className='w-[55%] m-6'/>
                        <Image src="/assets/imgs/ques.svg" priority={true} width={0} height={0} sizes="100vw" className='w-[44%] absolute top-[120px] right-[-40px]'/>
                    </div>
                    <div className="card-content p-6 pt-0">
                        <div className='flex justify-between items-center'>
                            <h2>24/7 Customer Support</h2>
                            <PlusButton/>
                        </div>
                        <p>We offer round-the-clock customer service, ensuring you have continuous support and assistance for any issues or inquiries, no matter the time or day.</p>
                    </div>
                </div>
                <div className="card border border-border bg-gradient">
                    <div className="card-content p-6">
                        <div className='flex justify-between items-center'>
                            <h2>Transparent Pricing</h2>
                            <PlusButton/>
                        </div>
                        <p>Our pricing policy is straightforward with one simple rate. We ensure transparency by eliminating hidden margins or unexpected fees in our pricing structure.</p>
                    </div>
                    <div className="gap-6 px-6">
                        <Image src="/assets/imgs/wise.svg" priority={true} width={0} height={0} sizes='100vw' className='w-full rounded-lg'/>
                        <Image src="/assets/imgs/map.svg" priority={true} width={0} height={0} sizes='100vw' className='w-full'/>
                    </div>
                </div>
                <div className="card border border-border bg-gradient">
                    <div className="card-content p-6">
                        <div className='flex justify-between items-center'>
                            <h2>TUnlimited Top-up and Spending</h2>
                            <PlusButton/>
                        </div>
                        <p>Enjoy the freedom of no limits on how much you can top up your Prism Card or spend, giving you complete control over your finances without the worry of hitting any caps or restrictions.</p>
                    </div>
                    <div className="gap-6 px-6">
                        <Image src="/assets/imgs/outflow.svg" priority={true} width={0} height={0} sizes='100vw' className='w-full'/>
                    </div>
                </div>
                <div className="card border border-border bg-gradient p-6">
                    <div className="max-w-[80%] rounded-[16px]">
                        <div className="client-info flex items-center gap-4 bg-[#2E2E2E] py-8 px-6 rounded-[16px]">
                            <Image src="/assets/imgs/jassica.png" alt='Jassica' priority={true} width={58} height={58}/>
                            <div className="details">
                                <h3 className='text-[18px]/[32px] font-poppins font-semibold'>Sarah John</h3>
                                <p className='text-base font-poppins font-normal text-slate m-0'>CEO of Own Multi Company</p>
                            </div>
                        </div>
                    </div>
                    <div className="calculaotr">
                        <div className='flex justify-end items-center gap-2 mt-8'>
                            <span className='inline-block px-1 py-0 rounded-sm bg-[#F9A80A] text-sm font-poppins font-semibold'>USD</span>
                            <h2 className='w-[60%] text-6xl font-poppins font-normal border-b-2 border-border pb-2'><sup className='text-2xl top-[-32px]'>$</sup>560.00</h2>
                        </div>
                        <div className='flex gap-3 items-center justify-end mt-6'>
                            <span className='text-2xl font-poppins font-normal text-[#D93C3C]'>+ Fee $100</span>
                            <div className='space-x-3'>
                                <span className='pill'>100</span>
                                <span className='pill'>500</span>
                                <span className='pill'>1,000</span>
                            </div>
                        </div>
                        <button type='submit' className='w-[80%] h-[68px] rounded-lg text-lg font-poppins font-semibold bg-primary text-black my-6'>Continue</button>
                    </div>
                    <div className="card-content">
                        <div className='flex justify-between items-center'>
                            <h2>Diverse Deposit Options</h2>
                            <PlusButton/>
                        </div>
                        <p>YYou can conveniently deposit funds into your Prism Card using a variety of cryptocurrencies, including ETH, USDT-ERC, USDC-ERC, BTC, LTC, and USDT-TRC, offering flexibility and choice in how you manage your digital assets.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features;