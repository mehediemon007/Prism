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
            <div className="grid grid-col-1 lg:grid-cols-2 bg-gradient border border-border">
                <div className='bg-gradient border border-b-0 border-border ms-8 mt-14 pt-10'>
                    <DebitCard/>
                </div>
                <div className="about-us flex flex-col justify-between p-14">
                    <div className="content">
                        <h2 className='text-[40px]/[50px] font-title font-bold tracking-wide'>Global Spending with Prism Card</h2>
                        <p className='text-2xl/[40px] font-title font-bold tracking-[1px] mt-6'>Your Prism Card lets you freely spend your cryptocurrency at any location and time across the globe, providing a seamless way to use digital currencies in everyday transactions.</p>
                    </div>
                    <Link href="#" className='w-[75%] flex items-center justify-between gap-4 text-[72px]/[60px] font-sans font-normal tracking-tight text-primary border-b-2 border-primary rounded-sm mb-6'>Get Started <HiOutlineArrowRight/></Link>
                </div>
            </div>
        </>
    )
}

export default About;