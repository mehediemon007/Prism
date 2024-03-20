import React from 'react'
import DebitCard from './Payment';
import Link from 'next/link';

// ** Icons
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
    return (
        <>
            <div className="sec-heading">
                <h2 className='sec-title'>FUELING <span className='text-primary'>INNOVATION</span> GROWTH</h2>
            </div>
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 bg-gradient border border-border">
                <div className='bg-gradient border border-b-0 border-border m-6 my-0 xl:ms-8 xl:mt-14 pt-6 xl:pt-10'>
                    <DebitCard/>
                </div>
                <div className="about-us flex flex-col justify-between p-6 xl:p-14">
                    <div className="content">
                        <h2 className='text-2xl xl:text-[40px]/[50px] font-title font-bold tracking-wide'>Global Spending with Prism Card</h2>
                        <p className='text-base xl:text-2xl/[40px] font-title font-bold tracking-[1px] mt-4 xl:mt-6'>Your Prism Card lets you freely spend your cryptocurrency at any location and time across the globe, providing a seamless way to use digital currencies in everyday transactions.</p>
                    </div>
                    <Link href="#" className='w-max xl:w-[75%] flex items-center justify-between gap-4 text-[20px]/[32px] xl:text-4xl 2xl:text-[72px]/[60px] font-sans font-normal tracking-tight text-primary border-b-2 border-primary rounded-sm mt-4 mb-3 xl:mt-0 xl:mb-6'>Get Started <HiOutlineArrowRight/></Link>
                </div>
            </div>
        </>
    )
}

export default About;