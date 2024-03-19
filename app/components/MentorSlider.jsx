'use client'

import React, {useState, useEffect, useCallback} from 'react';
import Image from 'next/image';
import Link from 'next/link';

// ** Import Swiper Slider
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/pagination";

// ** Import Icons
import { FaStar } from "react-icons/fa";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";

const MentorSlider = () => {

    const [isMobile, setIsMobile] = useState(false);

    const checkDevice = useCallback(() =>{

        if(window.matchMedia("(max-width:767px)").matches){
            setIsMobile(true)
        }else {
            setIsMobile(false)
        }

    },[])

    useEffect(()=> {

        window.addEventListener("resize", checkDevice, { passive: true });

        return () => {
            window.removeEventListener("resize", checkDevice, { passive: true });
        }

    },[checkDevice])

    return (
        <>
            {!isMobile && <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={2.5}
                slidesPerGroupSkip={1}
                spaceBetween={32}
                loop={true}
                grabCursor={true}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                }}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                speed={2000}
                breakpoints={{
                    // when window width is >= 1280
                    1600: {
                        slidesPerView: 3,
                    }
                }}
                className="mentors-slider mt-24"
            >

                <SwiperSlide>
                    <div className="review-card flex flex-col justify-between bg-gradient p-10 border border-border">
                        <div className="rating flex justify-between items-center border-b-2 border-border pb-8">
                            <div className='flex items-center gap-1 text-primary'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                            <img src='/assets/imgs/clutch.png' alt='clutch'/>
                        </div>
                        <p className='text-2xl/[40px] font-bold font-title py-8'>Mi auctor sagittis habitasse elit. In orci lorem <b className='text-slate'>sodales sem enim</b> fusce. At sem amet lacus eu aliquet <b className='text-state'>venenatis</b> tell bibendum sapien.</p>
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
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review-card flex flex-col justify-between bg-gradient p-10 border border-border">
                        <div className="rating flex justify-between items-center border-b-2 border-border pb-8">
                            <div className='flex items-center gap-1 text-primary'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                            <img src='/assets/imgs/clutch.png' alt='clutch'/>
                        </div>
                        <p className='text-2xl/[40px] font-bold font-title py-8'>Mi auctor sagittis habitasse elit. In orci lorem <b className='text-slate'>sodales sem enim</b> fusce. At sem amet lacus eu aliquet <b className='text-state'>venenatis</b> tell bibendum sapien.</p>
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
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review-card flex flex-col justify-between bg-gradient p-10 border border-border">
                        <div className="rating flex justify-between items-center border-b-2 border-border pb-8">
                            <div className='flex items-center gap-1 text-primary'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                            <img src='/assets/imgs/clutch.png' alt='clutch'/>
                        </div>
                        <p className='text-2xl/[40px] font-bold font-title py-8'>Mi auctor sagittis habitasse elit. In orci lorem <b className='text-slate'>sodales sem enim</b> fusce. At sem amet lacus eu aliquet <b className='text-state'>venenatis</b> tell bibendum sapien.</p>
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
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review-card flex flex-col justify-between bg-gradient p-10 border border-border">
                        <div className="rating flex justify-between items-center border-b-2 border-border pb-8">
                            <div className='flex items-center gap-1 text-primary'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                            <img src='/assets/imgs/clutch.png' alt='clutch'/>
                        </div>
                        <p className='text-2xl/[40px] font-bold font-title py-8'>Mi auctor sagittis habitasse elit. In orci lorem <b className='text-slate'>sodales sem enim</b> fusce. At sem amet lacus eu aliquet <b className='text-state'>venenatis</b> tell bibendum sapien.</p>
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
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review-card flex flex-col justify-between bg-gradient p-10 border border-border">
                        <div className="rating flex justify-between items-center border-b-2 border-border pb-8">
                            <div className='flex items-center gap-1 text-primary'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                            <img src='/assets/imgs/clutch.png' alt='clutch'/>
                        </div>
                        <p className='text-2xl/[40px] font-bold font-title py-8'>Mi auctor sagittis habitasse elit. In orci lorem <b className='text-slate'>sodales sem enim</b> fusce. At sem amet lacus eu aliquet <b className='text-state'>venenatis</b> tell bibendum sapien.</p>
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
                </SwiperSlide>

                <div className='text-center space-x-4 mt-16'>
                    <button className='swiper-button-prev w-[58px] h-[58px] inline-flex justify-center items-center border border-border rounded-full group transition-all duration-100 ease-linear hover:bg-white' aria-label='swipernav'><HiChevronLeft size={24} className='text-white group-hover:text-primary'/></button>
                    <button className='swiper-button-prev w-[58px] h-[58px] inline-flex justify-center items-center border border-border rounded-full group transition-all duration-100 ease-linear hover:bg-white' aria-label='swipernav'><HiChevronRight size={24} className='text-white group-hover:text-primary'/></button>
                </div>

            </Swiper>}
        </>
    )
}

export default MentorSlider;