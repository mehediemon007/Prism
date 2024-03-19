'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// ** Import Icons
import { BsCheck, BsEye, BsEyeSlash} from "react-icons/bs";

export default function Login() {

    const [showPass, setShowPass] = useState(false);

    return(
        <>  
            {/* <div className="auth-layout-wrapper flex flex-col lg:flex-row min-h-screen">
            <div className="auth-banner hidden sm:flex flex-col flex-1 dark:bg-blue-400">
                <div className='hidden lg:block max-h-[480px] 2xl:max-h-[580px]'>
                    <Image src="/assets/imgs/login.webp" alt='Login' priority={true} width={0} height={0} sizes='auto' className='object-cover'/>
                </div>
                <div className="content px-16 lg:px-8 xl:px-10 py-12 lg:py-8 2xl:py-12 border-t-8 border-primary">
                    <Link href="/" className="logo w-max">
                        <Image
                            src='/assets/imgs/logo.png'
                            alt="Premuim Academy"
                            width={38}
                            height={28}
                            style={{width:'38px', height: '28px'}}
                        />
                        <span className='text-[22px] font-medium font-text text-black dark:text-white'>Premium academy</span>
                    </Link>
                    <h2 className="max-w-xl text-5xl font-bold font-mrope my-6 2xl:my-10">Let’s empower your employees today.</h2>
                    <p className="text-lg fobt-mrope">We help to complete all your conveyancing needs easily</p>
                </div>
            </div>
            <div className="auth-content relative flex-1 p-8 sm:p-16 xl:p-20 2xl:p-28">
                <Link href="/" className="logo !block sm:!hidden space-x-3 text-center">
                    <Image
                        src='/assets/imgs/logo.png'
                        alt="Premuim Academy"
                        width={38}
                        height={28}
                        style={{width:'38px', height: '28px'}}
                    />
                    <span className='text-[22px] font-medium font-text text-black dark:text-white'>Premium academy</span>
                </Link>
                {children}
                <div className="relative sm:absolute bottom-0 left-0 w-full flex flex-col sm:flex-row justify-center items-start sm:items-center gap-2 pt-6 sm:py-6">
                    <p className="copyright text-sm font-medium font-mrope text-slate-400 text-center">© 2023 Premium Academy Allrights reserved.</p>
                    <div className="nav-menu flex items-center gap-2">
                        <Link href="#" className="!text-sm !font-mrope !text-blue-500 dark:!text-white">Terms and Conditions</Link>
                        <Link href="#" className="!text-sm !font-mrope !text-blue-500 dark:!text-white">Policies & Privacy</Link>
                    </div>
                </div>
            </div>
        </div> */}
            <div className="flex-1 max-w-full lg:max-w-[480px] mx-auto">
                <h3 className="my-6 text-2xl font-bold font-mrope text-blue-500 text-center dark:text-white">Login first to your account</h3>
                <form action="#" className="flex flex-col space-y-5">
                    <div className="input-grp required relative">
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" placeholder="hello@gmail.com" required/>
                        <div className="icon"><BsCheck size={24}/></div>
                    </div>
                    <div className="input-grp required relative">
                        <label htmlFor="password">Password</label>
                        <input type={showPass ? 'text' : 'password'} id="password" placeholder={showPass ? 'Password' : '.........'} required/>
                        <div className="icon" onClick={()=> setShowPass(!showPass)}>{showPass ? <BsEye size={20}/> : <BsEyeSlash size={20}/>}</div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="input-grp flex items-center space-x-2">
                            <input type="checkbox" id="remember" className="w-4 !h-4 transition duration-300 rounded focus:outline-none"/>
                            <label htmlFor="remember" className="!text-slate-500 !mb-0 dark:!text-white">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-slate-500 dark:!text-white hover:underline focus:text-blue-500">Forgot Password?</a>
                    </div>
                    <div>
                        <button type="submit" className="w-full btn bg-btn-bg text-white">Login</button>
                    </div>
                </form>
                <div className="flex flex-col space-y-6 sm:space-y-8 mt-8 2xl:space-y-10">
                    <span className="flex items-center justify-center space-x-2">
                        <span className="h-px bg-slate-400 w-14"></span>
                        <span className="font-normal text-slate-400 font-mrope">or login with</span>
                        <span className="h-px bg-slate-400 w-14"></span>
                    </span>
                    <div className="flex space-x-4">
                        <a href="#" className="flex-1 flex items-center justify-center px-4 py-4 space-x-2 rounded-md dark:bg-[#242D41]">
                            <span><Image src="/assets/imgs/icons/google.png" alt="Login Google" width={0} height={0} sizes="auto" className="w-6 h-6"/></span>
                            <span className="text-base font-medium font-mrope text-blue-500 dark:text-white">Google</span>
                        </a>
                        <a href="#" className="flex-1 flex items-center justify-center px-4 py-4 space-x-2 rounded-md dark:bg-[#242D41]">
                            <span><Image src="/assets/imgs/icons/apple.png" alt="Login Apple" width={0} height={0} sizes="auto" className="w-6 h-6 dark:invert"/></span>
                            <span className="text-base font-medium font-mrope text-blue-500 dark:text-white">Apple</span>
                        </a>
                    </div>
                    <p className="text-sm font-medium font-mrope text-slate-400 text-center">You’re new in here? <Link href="/register" className="text-blue-500 dark:!text-white">Create Account</Link></p>
                </div>
            </div>
        </>
    )
}