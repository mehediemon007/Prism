'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// ** Import Icons
import { BsCheck, BsEye, BsEyeSlash} from "react-icons/bs";
import AuthFooter from "@/app/components/AuthFooter";

export default function Login() {

    const [showPass, setShowPass] = useState(false);

    return(
        <>  
            <div className="auth-layout-wrapper grid grid-cols-2 min-h-screen">
                <div className="pri-auth flex flex-col justify-between flex-1">
                    <div className='flex justify-between items-center'>
                        <Link href="/" className="logo space-x-3 text-center">
                            <Image
                                src='/assets/imgs/logo.png'
                                alt="Prism"
                                width={100}
                                height={25}
                            />
                        </Link>
                        <div className="space-x-4">
                            <span className='text-base font-normal font-text'>Not a member</span>
                            <Link href="/register" className='text-base font-normal font-text text-black px-4 py-2 bg-white rounded-lg inline-flex justify-center items-center'>Register here</Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-[80%] mx-auto">
                        <div className="heading text-center mb-10 space-y-2">
                            <Image src="/assets/imgs/user.svg" alt="user" width={88} height={88} className="mb-2"/>
                            <h2 className="text-2xl font-title">Sign in to your account</h2>
                            <p className="text-base font-text">Enter your details to login.</p>
                        </div>
                        <form action="#" className="flex flex-col space-y-5">
                            <div className="input-grp required relative">
                                <label htmlFor="email">Email address</label>
                                <input type="email" id="email" placeholder="hello@gmail.com" required/>
                            </div>
                            <div className="input-grp required relative">
                                <label htmlFor="password">Password</label>
                                <input type={showPass ? 'text' : 'password'} id="password" placeholder={showPass ? 'Password' : '.........'} required/>
                                <div className="icon" onClick={()=> setShowPass(!showPass)}>{showPass ? <BsEye size={20}/> : <BsEyeSlash size={20}/>}</div>
                            </div>
                            <button type="submit" className="bg-primary">Register</button>
                            <Link href="#" className="underline decoration-slate">Forget password?</Link>
                        </form>
                    </div>
                    <AuthFooter/>
                </div>
                <div className="auth-banner flex justify-center items-center">
                    <div className=''>
                        <Image src="/assets/imgs/cards.png" alt='Cards' priority={true} width={0} height={0} sizes='100vw' className='w-full'/>
                    </div>
                </div>
            </div>
            
        </>
    )
}