import React from 'react';
import Link from 'next/link';
import Image from 'next/image';



const Footer = () => {
    return (
        <>
            <footer className="pri-footer bg-gradient">
            <div className="container">
            <div className="footer-top py-12 lg:py-16">
                <div className="grid grid-col-1 lg:grid-cols-6">
                    <div className="lg:col-span-2">
                        <div className="footer-content">
                            <Link href="/" className="logo w-max">
                                <Image
                                    src='/assets/imgs/logo.png'
                                    alt="Prism"
                                    width={100}
                                    height={25}
                                    style={{width:'100px', height: '25px'}}
                                />
                            </Link>
                            <p className="lg:max-w-60 font-text text-xl/[32px] font-normal text-slate tracking-tighter my-6 lg:mt-10 lg:mb-0">Mi auctor sagittis habitasse elit. In orci lorem sodales sem enim fusce.</p> 
                        </div>
                    </div>
                    <div className="lg:col-span-4">
                        <div className="grid grid-cols-2 gap-6 lg:gap-0 lg:flex lg:justify-between">
                            <div className="footer-widget">
                                <h2>Company</h2>
                                <ul className="footer-menu">
                                    <li><Link href="#">About Us</Link></li>
                                    <li><Link href="#">Our Teams</Link></li>
                                    <li><Link href="#">Careers</Link></li>
                                    <li><Link href="#">Blog</Link></li>
                                </ul>
                            </div>
                            <div className="footer-widget">
                                <h2>Resources</h2>
                                <ul className="footer-menu">
                                    <li><Link href="#">Knowlwdge Base</Link></li>
                                    <li><Link href="#">FAQs</Link></li>
                                    <li><Link href="#">Support Center</Link></li>
                                    <li><Link href="#">Terms of Service</Link></li>
                                    <li><Link href="#">Privacy Policy</Link></li>
                                </ul>
                            </div>
                            <div className="footer-widget">
                                <h2>Get Started</h2>
                                <ul className="footer-menu">
                                    <li><Link href="#">Get Started</Link></li>
                                    <li><Link href="#">Sign Up</Link></li>
                                    <li><Link href="#">Free Trail</Link></li>
                                    <li><Link href="#">Request Demo</Link></li>
                                </ul>
                            </div>
                            <div className="footer-widget">
                                <h2 className="ps-sm-4">Connect</h2>
                                <ul className="footer-menu ps-sm-4">
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
            <div className="border-t border-[#a5a9b633] py-8">
                <p className='font-poppins text-sm font-normal text-slate  text-center'>Copywrite &copy;Prism 2024. All rights reserved.</p>
            </div>
        </div>
        </footer>
        </>
    )
}

export default Footer;