'use client'

import { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import Image from "next/image";
import Link from "next/link";


import AuthFooter from "@/app/components/AuthFooter";

// ** Import Icons
import { BsEye, BsEyeSlash} from "react-icons/bs";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { PiLockKey } from "react-icons/pi";

export default function Login() {

    const { register, handleSubmit, reset, formState, formState: { errors, isSubmitSuccessful }} = useForm();

    const [showPass, setShowPass] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
    };

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
          reset();
        }
    }, [formState, isSubmitSuccessful, reset]);

    return(
        <>  
            <div className="auth-layout-wrapper grid grid-cols-2 min-h-screen">
                <div className="pri-auth flex flex-col justify-between flex-1">
                    <div className='flex justify-between items-center py-4'>
                        <Link href="/" className="logo space-x-3 text-center">
                            <Image
                                src='/assets/imgs/logo.png'
                                alt="Prism"
                                width={100}
                                height={25}
                                className="w-auto h-auto"
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
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-5">
                            <div className="input-grp relative">
                                <div className="icon left-2 !right-auto"><HiOutlineEnvelope size={20}/></div>
                                <label htmlFor="email">Email address</label>
                                <input type="email" id="email" name="email" {...register("email")} placeholder="hello@gmail.com" className="!ps-10"/>
                            </div>
                            <div className="input-grp relative">
                                <div className="icon left-2 !right-auto"><PiLockKey size={20}/></div>
                                <label htmlFor="password">Password</label>
                                <input type={showPass ? 'text' : 'password'} id="password" name="password" {...register("password")} placeholder={showPass ? 'Password' : '.........'} className="!ps-10"/>
                                <div className="icon" onClick={()=> setShowPass(!showPass)}>{showPass ? <BsEye size={20}/> : <BsEyeSlash size={20}/>}</div>
                            </div>
                            <button type="submit" className="bg-primary">Register</button>
                            <Link href="#" className="underline decoration-slate">Forget password?</Link>
                        </form>
                    </div>
                    <AuthFooter/>
                </div>
                <div className="auth-banner flex flex-col justify-center items-center gap-8 p-8">
                    <div className='relative'>
                        <Image src="/assets/imgs/check.svg" alt='Cards' priority={true} width={0} height={318} sizes="100vw" className="w-full absolute top-[50%] translate-y-[-50%] z-[-1]"/>
                        <Image src="/assets/imgs/cards2.png" alt='Cards' priority={true} width={652} height={480}/>
                    </div>
                    <div className="text-center space-y-2">
                        <h3 className="text-xl font-title text-slate">Global Spending with Prism Card</h3>
                        <p className="text-base font-text text-slate">Your Prism Card lets you freely spend your cryptocurrency at any location and time across the globe, providing a seamless way to use digital currencies in everyday transactions.</p>
                    </div>
                </div>
            </div>
            
        </>
    )
}