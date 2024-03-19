import React from 'react';

// ** Import Icons
import { HiPlus } from "react-icons/hi";

const PlusButton = () => {
    return (
        <>
            <span className='inline-flex justify-center items-center w-[72px] h-[72px] rounded-full  bg-primary'><HiPlus size={24} className='text-white'/></span>
        </>
    )
}

export default PlusButton;