'use client'

import React, { useState, useEffect, useCallback } from 'react';
import Link from "next/link";
import Image from "next/image";

//** Import Icons
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";


const Header = () => {

    const [isOpen, setOpen] = useState(false);


    const onScroll = useCallback(event => {
        const { scrollY } = window;
        
        if(scrollY > 50 ){
            document.querySelector('.pri-header').classList.add('sticky')
        }else {
            document.querySelector('.pri-header').classList.remove('sticky')
        }

    }, []);
  
    useEffect(() => {

      window.addEventListener("scroll", onScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", onScroll, { passive: true });
      }

    });

    return (

        <header className='pri-header fixed w-full top-0 left-0 py-4 md:py-6 bg-black sm:relative sm:top-auto sm:left-auto transition-all duration-100 ease-in-out border-b border-transparent shadow-none'>
            <div className='container'>
                <div className='header-wrap flex justify-between items-center relative'>
                    <Link href="/" className="logo w-max">
                        <Image
                            src='/assets/imgs/logo.PNG'
                            alt="Prism"
                            width={100}
                            height={25}
                        />
                    </Link>
                    <div className="nav-menu hidden items-center gap-x-12 xl:gap-x-16 lg:flex">
                        <a href="/#about">Features</a>
                        <a href="/#">Pricing</a>
                        <a href='/#faq'>FAQ</a>
                        <a href='/#'>Support</a>
                    </div>
                    <div>
                        <button type='button' className="nav-icon lg:hidden" aria-label='Main Menu Icon' onClick={()=> setOpen(!isOpen)}>
                            {isOpen ? <RxCross1 size={28}/> : <RxHamburgerMenu size={28}/>}
                        </button>
                        <div className={`nav-actions ${ isOpen ? 'block' : 'hidden'} lg:!flex items-center xl:gap-x-12`}>
                            <div className="mobile-nav lg:hidden space-y-2">
                                <a href="/#about" onClick={()=> setOpen(!isOpen)}>Features</a>
                                <a href="/#" onClick={()=> setOpen(!isOpen)}>Pricing</a>
                                <a href="/#faq" onClick={()=> setOpen(!isOpen)}>FAQ</a>
                                <a href="/#" onClick={()=> setOpen(!isOpen)}>Support</a>
                            </div>
                            <Link href="/login" onClick={()=> setOpen(!isOpen)}>Log in</Link>
                            <Link href="/register" onClick={()=> setOpen(!isOpen)} className='lg:border lg:border-[#a5a9b633] lg:rounded-[28px] lg:w-[192px] lg:h-[50px] lg:text-center lg:!leading-[50px]'>Register -<span className='text-xs lg:text-slate'> It's free</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header;