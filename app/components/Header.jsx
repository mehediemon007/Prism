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
        
        if(scrollY > 80 ){
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

        <header className='pri-header fixed w-full top-0 left-0 py-6 sm:relative sm:top-auto sm:left-auto transition-all duration-300 ease-in-out shadow-none'>
            <div className='container'>
                <div className='header-wrap flex justify-between items-center relative'>
                    <Link href="/" className="logo w-max">
                        <Image
                            src='/assets/imgs/logo.png'
                            alt="Prism"
                            width={100}
                            height={25}
                        />
                        <span className='text-lg sm:text-[22px] font-medium font-text text-white sm:text-black'>Premium academy</span>
                    </Link>
                    <div className="nav-menu hidden items-center gap-x-8 lg:flex">
                        <a href="/#services">Features</a>
                        <a href="/#mentors">Pricing</a>
                        <a href='/#'>FAQ</a>
                        <a href='/#'>Support</a>
                    </div>
                    <div>
                        <button type='button' className="nav-icon lg:hidden" aria-label='Main Menu Icon' onClick={()=> setOpen(!isOpen)}>
                            {isOpen ? <RxCross1 size={28} className='text-white sm:text-black'/> : <RxHamburgerMenu size={28} className='text-white sm:text-black'/>}
                        </button>
                        <div className={`nav-actions ${ isOpen ? 'block' : 'hidden'} lg:!flex items-center gap-x-12`}>
                            <div className="mobile-nav lg:hidden space-y-2">
                                <a href="/#services" onClick={()=> setOpen(!isOpen)}>Features</a>
                                <a href="/#services" onClick={()=> setOpen(!isOpen)}>Pricing</a>
                                <a href="/#services" onClick={()=> setOpen(!isOpen)}>FAQ</a>
                                <a href="/#mentors" onClick={()=> setOpen(!isOpen)}>Support</a>
                            </div>
                            <Link href="/login" onClick={()=> setOpen(!isOpen)}>Log in</Link>
                            <Link href="/register" onClick={()=> setOpen(!isOpen)}>Sign up for free</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header;