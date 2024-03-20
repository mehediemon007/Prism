import React from 'react';
import Link from "next/link";
import Image from 'next/image';

// ** Icons
import { HiOutlineArrowRight } from "react-icons/hi";

const Banner = () => {
    return (
        <>
            <div className="pri-banner pt-16 xl:pt-20">
                <div className="container space-y-8 xl:space-y-2">
                    <div className="banner-content">
                        <h1 className='banner-title !mb-4 !xl:mb-8'>New Era of <span className='text-primary'>banking.</span></h1>
                        <Link href="/register" className='flex justify-center items-center w-44 xl:w-64 h-14 xl:h-20 rounded-[117px] font-text text-lg xl:text-2xl font-bold text-primary bg-btn-bg mx-auto group'>Get Started <HiOutlineArrowRight className='text-xl xl:text-4xl rotate-[-45deg] ms-2 xl:ms-4 transition-all duration-100 ease-linear group-hover:rotate-0'/></Link>
                    </div>
                    <div className="banner-info grid grid-col-1 lg:grid-cols-2 xl:grid-cols-4 items-start gap-8">
                        <div>
                            <span className='relative block w-24 h-[2px] rounded-sm bg-primary before:content-[""] before:absolute before:right-[-48px] before:w-8 before:h-[2px] before:bg-primary before:rounded-sm'></span>
                            <p className='font-text text-xl font-normal text-slate mt-4 tracking-tighter py-1'>Mi auctor sagittis habitasse elit. In orci lorem sodales sem enim fusce. At sem amet lacus eu aliquet venenatis tell bibendum sapien.</p>
                            <div className='relative flex flex-col items-start justify-center w-[90%] md:w-64 h-20 bg-[#1F1F1F] rounded-[80px] px-8 mt-8'>
                                <p className='text-xl font-medium font-text tracking-[-2px]'>How Prism works</p>
                                <p className='text-[17px] font-normal font-text text-slate'>In 3 simple steps</p>
                                <Image src="/assets/imgs/react-icon.png" alt='Icon' width={64} height={64} className='absolute right-[-24px] top-2 animate-spin-slow'/>
                            </div>
                            <div className="lg:w-72 flex items-center xl:hidden callout border border-primary rounded-lg p-4 mt-8 gap-4">
                                <h2 className='text-4xl font-bold font-title text-primary animate-bounce'>NO!</h2>
                                <p className='font-text text-xl font-normal text-primary tracking-tighter'>Hidden Charges</p>
                            </div>
                        </div>
                        <div className="mb-8 xl:mb-0 xl:col-span-2">
                            <Image src="/assets/imgs/cards2.png" width={0} height={0} priority={true} sizes='100vw' className='w-full xl:hidden' alt="Prism Debit Card" />
                            <Image src="/assets/imgs/cards.png" width={0} height={0} priority={true} sizes='100vw' className='w-full hidden xl:block' alt="Prism Debit Card" />
                        </div>
                        <div className="hidden xl:block callout border-[1.5px] border-primary rounded-[10px] p-8 mt-[50%]">
                            <h2 className='text-5xl font-bold font-title text-primary animate-bounce'>NO!</h2>
                            <p className='max-w-4 font-text text-4xl font-normal text-primary tracking-tighter'>Hidden Charges</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;