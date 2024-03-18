import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


// ** Import Icons
import { PiYoutubeLogoLight, PiInstagramLogoThin, PiWhatsappLogoThin } from "react-icons/pi";
import { LiaAngleRightSolid } from "react-icons/lia";

const Footer = () => {
    return (
        <>
            <footer class="kt-footer footer-2">
            <div class="container">
            <div class="footer-top">
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
                            <p class="des wow fadeInUp">Mi auctor sagittis habitasse elit. In orci lorem sodales sem enim fusce.</p> 
                        </div>
                    </div>
                    <div class="col-span-4">
                        <div class="flex justify-between">
                            <div class="footer-widget">
                                <h5>Company</h5>
                                <ul class="footer-menu">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Our Teams</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Blog</a></li>
                                </ul>
                            </div>
                            <div class="footer-widget">
                                <h5>Resources</h5>
                                <ul class="footer-menu">
                                    <li><a href="#">Knowlwdge Base</a></li>
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Support Center</a></li>
                                    <li><a href="#">Terms of Service</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                            <div class="footer-widget">
                                <h5>Get Started</h5>
                                <ul class="footer-menu">
                                    <li><a href="#">Get Started</a></li>
                                    <li><a href="#">Sign Up</a></li>
                                    <li><a href="#">Free Trail</a></li>
                                    <li><a href="#">Request Demo</a></li>
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
            <div class="footer-bottom">
                <p>Copywrite &copy;Prism 2024. All rights reserved.</p>
            </div>
        </div>
        </footer>
        </>
    )
}

export default Footer;