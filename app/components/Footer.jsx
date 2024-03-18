import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


// ** Import Icons
import { PiYoutubeLogoLight, PiInstagramLogoThin, PiWhatsappLogoThin } from "react-icons/pi";
import { LiaAngleRightSolid } from "react-icons/lia";

const Footer = () => {
    return (
        <>
            <footer class="pri-footer bg-gradient">
            <div class="container">
            <div class="footer-top py-16">
                <div class="grid grid-cols-6">
                    <div class="col-span-2">
                        <div class="footer-content">
                            <Link href="/" className="logo w-max">
                                <Image
                                    src='/assets/imgs/logo.png'
                                    alt="Prism"
                                    width={100}
                                    height={25}
                                    // style={{width:'38px', height: '28px'}}
                                />
                            </Link>
                            <p class="max-w-60 font-text text-xl/[32px] font-normal text-slate tracking-tighter mt-10">Mi auctor sagittis habitasse elit. In orci lorem sodales sem enim fusce.</p> 
                        </div>
                    </div>
                    <div class="col-span-4">
                        <div class="flex justify-between">
                            <div class="footer-widget">
                                <h5>Company</h5>
                                <ul class="footer-menu">
                                    <li><Link href="#">About Us</Link></li>
                                    <li><Link href="#">Our Teams</Link></li>
                                    <li><Link href="#">Careers</Link></li>
                                    <li><Link href="#">Blog</Link></li>
                                </ul>
                            </div>
                            <div class="footer-widget">
                                <h5>Resources</h5>
                                <ul class="footer-menu">
                                    <li><Link href="#">Knowlwdge Base</Link></li>
                                    <li><Link href="#">FAQs</Link></li>
                                    <li><Link href="#">Support Center</Link></li>
                                    <li><Link href="#">Terms of Service</Link></li>
                                    <li><Link href="#">Privacy Policy</Link></li>
                                </ul>
                            </div>
                            <div class="footer-widget">
                                <h5>Get Started</h5>
                                <ul class="footer-menu">
                                    <li><Link href="#">Get Started</Link></li>
                                    <li><Link href="#">Sign Up</Link></li>
                                    <li><Link href="#">Free Trail</Link></li>
                                    <li><Link href="#">Request Demo</Link></li>
                                </ul>
                            </div>
                            <div class="footer-widget">
                                <h5 class="ps-sm-4">Connect</h5>
                                <ul class="footer-menu ps-sm-4">
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">LinkedIn</a></li>
                                    <li><a href="#">Instagram</a></li> 
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t border-[#a5a9b633] py-8">
                <p className='font-poppins text-sm font-normal text-slate  text-center'>Copywrite &copy;Prism 2024. All rights reserved.</p>
            </div>
        </div>
        </footer>
        </>
    )
}

export default Footer;