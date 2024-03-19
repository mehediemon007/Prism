'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AuthFooter from '../../components/AuthFooter';

// ** Import Icons
import { BsEye, BsEyeSlash} from "react-icons/bs";
import { IoMdAlert } from "react-icons/io";
import Selector from "../../elements/Selector";

export default function Register() {

    const [showPass, setShowPass] = useState(false);

    return(
        <>
            <div className="pri-auth">
                <div className='flex justify-between items-center py-4'>
                    <Link href="/" className="logo space-x-3 text-center">
                        <Image
                            src='/assets/imgs/logo.png'
                            alt="Prism"
                            width={100}
                            height={25}
                        />
                    </Link>
                    <div className="space-x-4">
                        <span className='text-base font-normal font-text'>Already a member</span>
                        <Link href="/login" className='text-base font-normal font-text text-black px-4 py-2 bg-white rounded-lg inline-flex justify-center items-center'>Sign In</Link>
                    </div>
                </div>
                <div className="heading text-center space-y-2">
                    <Image src="/assets/imgs/user.svg" alt="user" width={88} height={88} className="mb-2"/>
                    <h2 className="text-2xl font-title">Register your account</h2>
                    <p className="text-base font-text">Enter your details to Register.</p>
                </div>
                <form action="#" className="grid grid-cols-2 gap-4">
                    <p className="col-span-2 text-sm font-text text-primary flex items-center gap-2 my-4"><IoMdAlert/> Please use your real information as this will need to be confirmed.</p>
                    <div className="input-grp required relative">
                        <label htmlFor="user">Username</label>
                        <input type="text" id="user" placeholder="hello@alignui.com"/>
                    </div>
                    <div className="input-grp required relative">
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" placeholder="hello@alignui.com"/>
                    </div>
                    <div className="input-grp required relative">
                        <label htmlFor="password">Password</label>
                        <input type={showPass ? 'text' : 'password'} id="password" placeholder={showPass ? 'Password' : '.........'}/>
                        <div className="icon" onClick={()=> setShowPass(!showPass)}>{showPass ? <BsEye size={20}/> : <BsEyeSlash size={20}/>}</div>
                    </div>
                    <div className="input-grp required relative">
                        <label htmlFor="con-password">Confirm password</label>
                        <input type={showPass ? 'text' : 'password'} id="con-password" placeholder={showPass ? 'Confirm Password' : '.........'}/>
                        <div className="icon" onClick={()=> setShowPass(!showPass)}>{showPass ? <BsEye size={20}/> : <BsEyeSlash size={20}/>}</div>
                    </div>
                    <div className="input-grp required relative">
                        <label htmlFor="tel">Phone number</label>
                        <input type="phone" id="phone" placeholder="hello@alignui.com"/>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="input-grp required relative col-span-2">
                            <label htmlFor="dob">Date of birth</label>
                            <input type="text" id="email" placeholder="hello@alignui.com"/>
                        </div>
                        <div className="input-grp required relative col-span-1">
                            <label htmlFor="gender">Gender</label>
                            <Selector/>
                        </div>
                    </div>
                    <p className="col-span-2 text-sm font-text text-primary flex items-center gap-2 my-4"><IoMdAlert/> Please use your real information as this will need to be confirmed.</p>
                    <div className="grid grid-cols-3 col-span-2 gap-4">
                        <div className="input-grp required relative col-span-1">
                            <label htmlFor="country">Country</label>
                            <input type="text" id="country" placeholder="hello@alignui.com"/>
                        </div>
                        <div className="input-grp required relative col-span-2">
                            <label htmlFor="address">Street address</label>
                            <input type="text" id="address" placeholder="hello@alignui.com" required/>
                        </div>
                    </div>
                    <div className="input-grp required relative">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" placeholder="hello@alignui.com"/>
                    </div>
                    <div className="input-grp required relative">
                        <label htmlFor="state">State/Province</label>
                        <input type="text" id="state" placeholder="hello@alignui.com" required/>
                    </div>
                    <div className="input-grp required relative">
                        <label htmlFor="zip">ZIP/Postal code</label>
                        <input type="number" id="zip" placeholder="hello@alignui.com"/>
                    </div>
                    <div className="input-grp required relative">
                        <label htmlFor="code">Referral code</label>
                        <input type="text" id="code" placeholder="hello@alignui.com" required/>
                    </div>
                    <button type="reset">Cancel</button>
                    <button type="submit" className="bg-primary">Register</button>
                </form>
            </div>
            <AuthFooter/>
        </>
    )
}