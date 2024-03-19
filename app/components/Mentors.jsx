import Image from 'next/image';
import Link from 'next/link';

// ** Import Icons
import { FaStar } from "react-icons/fa";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";

import MentorSlider from './MentorSlider';


const Mentors = () => {
    
    return (
        <>  
            <div className="sec-heading">
                <h2 className='sec-title xl:max-w-[50%]'>What People <span className='text-primary'>says</span></h2>
            </div>

            <div className="mentors-wpr flex md:hidden flex-col gap-8 mt-20 sm:mt-28">
                
                <div className="review-card flex flex-col justify-between bg-gradient p-4 border border-border">
                    <div className="rating flex justify-between items-center border-b-2 border-border pb-4">
                        <div className='flex items-center gap-1 text-primary'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                        <img src='/assets/imgs/clutch.png' alt='clutch'/>
                    </div>
                    <p className='text-lg/[36px] font-bold font-title py-6'>Mi auctor sagittis habitasse elit. In orci lorem <b className='text-slate'>sodales sem enim</b> fusce. At sem amet lacus eu aliquet <b className='text-state'>venenatis</b> tell bibendum sapien.</p>
                    <div className="client-info flex items-center gap-4">
                        <div className="image w-14 h-14 border border-border rounded-full text-center leading-[56px]">
                            <Image src="/assets/imgs/avater.png" alt='david' priority={true} width={36} height={36}/>
                        </div>
                        <div className="details px-4 sm:p-0">
                            <h3 className='text-[18px]/[32px] font-title font-bold tracking-[2px]'>Sarah John</h3>
                            <p className='text-sm font-text font-normal text-slate'>CEO of Own Multi Company</p>
                        </div>
                    </div>
                </div>

                <div className="review-card flex flex-col justify-between bg-gradient p-4 border border-border">
                        <div className="rating flex justify-between items-center border-b-2 border-border pb-4">
                            <div className='flex items-center gap-1 text-primary'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                            <img src='/assets/imgs/clutch.png' alt='clutch'/>
                        </div>
                        <p className='text-lg/[36px] font-bold font-title py-6'>Mi auctor sagittis habitasse elit. In orci lorem <b className='text-slate'>sodales sem enim</b> fusce. At sem amet lacus eu aliquet <b className='text-state'>venenatis</b> tell bibendum sapien.</p>
                        <div className="client-info flex items-center gap-4">
                            <div className="image w-14 h-14 border border-border rounded-full text-center leading-[56px]">
                                <Image src="/assets/imgs/avater.png" alt='david' priority={true} width={36} height={36}/>
                            </div>
                            <div className="details px-4 sm:p-0">
                                <h3 className='text-[18px]/[32px] font-title font-bold tracking-[2px]'>Sarah John</h3>
                                <p className='text-sm font-text font-normal text-slate'>CEO of Own Multi Company</p>
                            </div>
                        </div>
                    </div>

                <div className="review-card flex flex-col justify-between bg-gradient p-4 border border-border">
                    <div className="rating flex justify-between items-center border-b-2 border-border pb-4">
                        <div className='flex items-center gap-1 text-primary'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                        <img src='/assets/imgs/clutch.png' alt='clutch'/>
                    </div>
                    <p className='text-lg/[36px] font-bold font-title py-6'>Mi auctor sagittis habitasse elit. In orci lorem <b className='text-slate'>sodales sem enim</b> fusce. At sem amet lacus eu aliquet <b className='text-state'>venenatis</b> tell bibendum sapien.</p>
                    <div className="client-info flex items-center gap-4">
                        <div className="image w-14 h-14 border border-border rounded-full text-center leading-[56px]">
                            <Image src="/assets/imgs/avater.png" alt='david' priority={true} width={36} height={36}/>
                        </div>
                        <div className="details px-4 sm:p-0">
                            <h3 className='text-[18px]/[32px] font-title font-bold tracking-[2px]'>Sarah John</h3>
                            <p className='text-sm font-text font-normal text-slate'>CEO of Own Multi Company</p>
                        </div>
                    </div>
                </div>
            </div>

            <MentorSlider/>
        </>
    )
}

export default Mentors;