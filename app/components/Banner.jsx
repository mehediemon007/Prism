import React from 'react';
import Link from "next/link";
import Image from 'next/image';

// ** Icons

import { HiOutlineArrowRight } from "react-icons/hi";

const Banner = () => {
    return (
        <>
            <div className="pri-banner">
                <div className="container">
                    <div className="banner-content">
                        <h2 className='banner-title !mb-8'>New Era of <span className='text-primary'>banking.</span></h2>
                        <Link href="/register" className='flex justify-center items-center w-64 h-20 rounded-[117px] font-text text-2xl font-bold text-primary bg-btn-bg mx-auto group'>Get Started <HiOutlineArrowRight size={26} className='rotate-[-45deg] ms-4 transition-all duration-100 ease-linear group-hover:rotate-0'/></Link>
                    </div>
                    <div className="banner-info grid grid-cols-4 items-start gap-8">
                        <div>
                            <span className='relative block w-24 h-[2px] rounded-sm bg-primary before:content-[""] before:absolute before:right-[-48px] before:w-8 before:h-[2px] before:bg-primary before:rounded-sm'></span>
                            <p className='font-text text-xl font-normal text-slate mt-4 tracking-tighter py-1'>Mi auctor sagittis habitasse elit. In orci lorem sodales sem enim fusce. At sem amet lacus eu aliquet venenatis tell bibendum sapien.</p>
                            <div className='relative flex flex-col items-start justify-center w-72 h-20 bg-[#1F1F1F] rounded-[80px] px-12 mt-8'>
                                <p className='text-2xl font-medium font-text text-white tracking-[-2px]'>How Prism works</p>
                                <p className='text-[17px] font-normal font-text text-slate'>In 3 simple steps</p>
                                <Image src="/assets/imgs/react-icon.png" alt='Icon' width={64} height={64} className='absolute right-[-24px] top-2'/>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <img src="./assets/imgs/cards.png" alt="Prism Debit Card" />
                        </div>
                        <div className="callout border-[1.5px] border-primary rounded-[10px] p-8 mt-[50%]">
                            <h3 className='text-5xl font-bold font-title text-primary'>NO!</h3>
                            <p className='max-w-4 font-text text-4xl font-normal text-primary tracking-tighter'>Hidden Charges</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;