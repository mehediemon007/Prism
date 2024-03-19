import React from 'react';
import Image from 'next/image';

// ** Import Icons
import { HiPlus } from "react-icons/hi";

const Features = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-6">
                <div className="card border border-border bg-gradient p-6">
                    <div className="flex gap-6">
                        <Image src="/assets/imgs/help.png" priority={true} width={0} height={0} sizes='100vw' className='w-full'/>
                        <Image src="/assets/imgs/ques.png" priority={true} width={0} height={0} sizes='100vw' className='w-full'/>
                    </div>
                    <div className="card-content">
                        <div>
                            <h3>24/7 Customer Support</h3>
                            <span>HiPlus</span>
                        </div>
                        <p>We offer round-the-clock customer service, ensuring you have continuous support and assistance for any issues or inquiries, no matter the time or day.</p>
                    </div>
                </div>
                <div className="card border border-border bg-gradient">
                    <div className="card-content p-6">
                        <div>
                            <h3>Transparent Pricing</h3>
                            <span>HiPlus</span>
                        </div>
                        <p>Our pricing policy is straightforward with one simple rate. We ensure transparency by eliminating hidden margins or unexpected fees in our pricing structure.</p>
                    </div>
                    <div className="gap-6 px-6">
                        <Image src="/assets/imgs/wise.png" priority={true} width={0} height={0} sizes='100vw' className='w-full rounded-lg'/>
                        <Image src="/assets/imgs/map.png" priority={true} width={0} height={0} sizes='100vw' className='w-full'/>
                    </div>
                </div>
                <div className="card border border-border bg-gradient">
                    <div className="card-content p-6">
                        <div>
                            <h3>TUnlimited Top-up and Spending</h3>
                            <span>HiPlus</span>
                        </div>
                        <p>Enjoy the freedom of no limits on how much you can top up your Prism Card or spend, giving you complete control over your finances without the worry of hitting any caps or restrictions.</p>
                    </div>
                    <div className="gap-6 px-6">
                        <Image src="/assets/imgs/outflow.png" priority={true} width={0} height={0} sizes='100vw' className='w-full'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features;