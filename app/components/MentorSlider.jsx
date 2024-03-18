'use client'

import React, {useState, useEffect, useCallback} from 'react';
import Image from 'next/image';
import Link from 'next/link';

// ** Import Swiper Slider
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/pagination";

// ** Import Icons
import { LiaAngleRightSolid } from "react-icons/lia";

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
                spaceBetween={24}
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
                    1280: {
                        slidesPerView: 3.30,
                    }
                }}
                className="mentors-slider mt-32"
            >

                <SwiperSlide>
                    <div className="mentor-card flex flex-col justify-between flex-1">
                        <div className="card-content">
                            <div className="image">
                                <Image src="/assets/imgs/mentors/david.jpg" alt='david' priority={true} width={0} height={0} sizes='100vw' className='sm:rounded-3xl'/>
                            </div>
                            <div className="details px-4 sm:p-0">
                                <h3 className='text-xl font-text font-bold text-white my-4'>David Guerrero</h3>
                                <p className='text-base sm:text-lg font-text font-normal text-slate-400 tracking-tighter mb-5 sm:mb-4 lg:pe-6'>Professional trader +3 years of experience and professional ontological coach, with more than 3,000 people</p>
                            </div>
                        </div>
                        <Link href="#" className='btn btn-2 group mx-4 sm:mx-0'>Learn today with me <span className='bg-btn-bg-3 group-hover:bg-none group-hover:bg-black group-hover:animate-toRightFromLeft'><LiaAngleRightSolid size={12} className='text-black align-baseline group-hover:text-slate-400'/></span></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mentor-card flex flex-col justify-between flex-1">
                        <div className="card-content">
                            <div className="image">
                                <Image src="/assets/imgs/mentors/andre.jpg" alt='andre' priority={true} width={0} height={0} sizes='100vw' className='sm:rounded-3xl'/>
                            </div>
                            <div className="details px-4 sm:p-0">
                                <h3 className='text-xl font-text font-bold text-white my-4'>Andrea Torres</h3>
                                <p className='text-base sm:text-lg font-text font-normal text-slate-400 tracking-tighter mb-5 sm:mb-4 lg:pe-6'>Coach with a master’s degree in bioneuroemtion, speaker, leader with experience in guiding communities of more than 3,000 poeple</p>
                            </div>
                        </div>
                        <Link href="#" className='btn btn-2 group mx-4 sm:mx-0'>Learn today with me <span className='bg-btn-bg-3 group-hover:bg-none group-hover:bg-black group-hover:animate-toRightFromLeft'><LiaAngleRightSolid size={12} className='text-black align-baseline group-hover:text-slate-400'/></span></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mentor-card flex flex-col justify-between flex-1">
                        <div className="card-content">
                            <div className="image">
                                <Image src="/assets/imgs/mentors/arango.jpg" alt='arango' priority={true} width={0} height={0} sizes='100vw' className='sm:rounded-3xl'/>
                            </div>
                            <div className="details px-4 sm:p-0">
                                <h3 className='text-xl font-text font-bold text-white my-4'>Carolina Arango</h3>
                                <p className='text-base sm:text-lg font-text font-normal text-slate-400 tracking-tighter mb-5 sm:mb-4 lg:pe-6'>Speaker focused on personal growth, with more than 5 years of experience in leadership of organizations with more than 1,000 people, creator More</p>
                            </div>
                        </div>
                        <Link href="#" className='btn btn-2 group mx-4 sm:mx-0'>Learn today with me <span className='bg-btn-bg-3 group-hover:bg-none group-hover:bg-black group-hover:animate-toRightFromLeft'><LiaAngleRightSolid size={12} className='text-black align-baseline group-hover:text-slate-400'/></span></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mentor-card flex flex-col justify-between flex-1">
                        <div className="card-content">
                            <div className="image">
                                <Image src="/assets/imgs/mentors/cog.jpg" alt='cog' priority={true} width={0} height={0} sizes='100vw' className='sm:rounded-3xl'/>
                            </div>
                            <div className="details px-4 sm:p-0">
                                <h3 className='text-xl font-text font-bold text-white my-4'>Andrés cog</h3>
                                <p className='text-base sm:text-lg font-text font-normal text-slate-400 tracking-tighter mb-5 sm:mb-4 lg:pe-6'>Trader profesional + 4 años de experiencia en el mercado de Forex, Gestor patrimonial y Financiero + 800 Mil usd, con +6 años experiencia en proyección y exposición empresarial.</p>
                            </div>
                        </div>
                        <Link href="#" className='btn btn-2 group mx-4 sm:mx-0'>Learn today with me <span className='bg-btn-bg-3 group-hover:bg-none group-hover:bg-black group-hover:animate-toRightFromLeft'><LiaAngleRightSolid size={12} className='text-black align-baseline group-hover:text-slate-400'/></span></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mentor-card flex flex-col justify-between flex-1">
                        <div className="card-content">
                            <div className="image">
                                <Image src="/assets/imgs/mentors/david.jpg" alt='david' priority={true} width={0} height={0} sizes='100vw' className='sm:rounded-3xl'/>
                            </div>
                            <div className="details px-4 sm:p-0">
                                <h3 className='text-xl font-text font-bold text-white my-4'>David Guerrero</h3>
                                <p className='text-base sm:text-lg font-text font-normal text-slate-400 tracking-tighter mb-5 sm:mb-4 lg:pe-6'>Professional trader +3 years of experience and professional ontological coach, with more than 3,000 people</p>
                            </div>
                        </div>
                        <Link href="#" className='btn btn-2 group mx-4 sm:mx-0'>Learn today with me <span className='bg-btn-bg-3 group-hover:bg-none group-hover:bg-black group-hover:animate-toRightFromLeft'><LiaAngleRightSolid size={12} className='text-black align-baseline group-hover:text-slate-400'/></span></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mentor-card flex flex-col justify-between flex-1">
                        <div className="card-content">
                            <div className="image">
                                <Image src="/assets/imgs/mentors/andre.jpg" alt='andre' priority={true} width={0} height={0} sizes='100vw' className='sm:rounded-3xl'/>
                            </div>
                            <div className="details px-4 sm:p-0">
                                <h3 className='text-xl font-text font-bold text-white my-4'>Andrea Torres</h3>
                                <p className='text-base sm:text-lg font-text font-normal text-slate-400 tracking-tighter mb-5 sm:mb-4 lg:pe-6'>Coach with a master’s degree in bioneuroemtion, speaker, leader with experience in guiding communities of more than 3,000 poeple</p>
                            </div>
                        </div>
                        <Link href="#" className='btn btn-2 group mx-4 sm:mx-0'>Learn today with me <span className='bg-btn-bg-3 group-hover:bg-none group-hover:bg-black group-hover:animate-toRightFromLeft'><LiaAngleRightSolid size={12} className='text-black align-baseline group-hover:text-slate-400'/></span></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mentor-card flex flex-col justify-between flex-1">
                        <div className="card-content">
                            <div className="image">
                                <Image src="/assets/imgs/mentors/arango.jpg" alt='arango' priority={true} width={0} height={0} sizes='100vw' className='sm:rounded-3xl'/>
                            </div>
                            <div className="details px-4 sm:p-0">
                                <h3 className='text-xl font-text font-bold text-white my-4'>Carolina Arango</h3>
                                <p className='text-base sm:text-lg font-text font-normal text-slate-400 tracking-tighter mb-5 sm:mb-4 lg:pe-6'>Speaker focused on personal growth, with more than 5 years of experience in leadership of organizations with more than 1,000 people, creator More</p>
                            </div>
                        </div>
                        <Link href="#" className='btn btn-2 group mx-4 sm:mx-0'>Learn today with me <span className='bg-btn-bg-3 group-hover:bg-none group-hover:bg-black group-hover:animate-toRightFromLeft'><LiaAngleRightSolid size={12} className='text-black align-baseline group-hover:text-slate-400'/></span></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mentor-card flex flex-col justify-between flex-1">
                        <div className="card-content">
                            <div className="image">
                                <Image src="/assets/imgs/mentors/cog.jpg" alt='cog' priority={true} width={0} height={0} sizes='100vw' className='sm:rounded-3xl'/>
                            </div>
                            <div className="details px-4 sm:p-0">
                                <h3 className='text-xl font-text font-bold text-white my-4'>Andrés cog</h3>
                                <p className='text-base sm:text-lg font-text font-normal text-slate-400 tracking-tighter mb-5 sm:mb-4 lg:pe-6'>Trader profesional + 4 años de experiencia en el mercado de Forex, Gestor patrimonial y Financiero + 800 Mil usd, con +6 años experiencia en proyección y exposición empresarial.</p>
                            </div>
                        </div>
                        <Link href="#" className='btn btn-2 group mx-4 sm:mx-0'>Learn today with me <span className='bg-btn-bg-3 group-hover:bg-none group-hover:bg-black group-hover:animate-toRightFromLeft'><LiaAngleRightSolid size={12} className='text-black align-baseline group-hover:text-slate-400'/></span></Link>
                    </div>
                </SwiperSlide>

                <button className='swiper-button-prev'>previous</button>
                <button className='swiper-button-next'>next</button>

            </Swiper>}
        </>
    )
}

export default MentorSlider;