import React from 'react';

// ** Import Icons
import { HiPlus } from "react-icons/hi";

const PlusButton = () => {
    return (
        <>
            <span className='inline-flex justify-center min-w-8 min-h-8 lg:min-w-14 lg:min-h-14 items-center xl:w-[72px] xl:h-[72px] rounded-full  bg-primary'><HiPlus size={24} className='text-white'/></span>
        </>
    )
}

export default PlusButton;