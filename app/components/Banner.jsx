import React from 'react';
import Link from "next/link";

// ** Icons

import { BsArrowRightShort } from "react-icons/bs";

const Banner = () => {
    return (
        <>
            <div className="pri-banner">
                <div className="container">
                    <div className="banner-content">
                        <h2 className="banner-title">New Era of <span>banking.</span></h2>
                        <Link href="/register" className='btn group'>Sign up for free <BsArrowRightShort size={24} className='group-hover:animate-toRightFromLeft'/></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;