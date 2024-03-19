import React from 'react'

const PayCard = () => {
    return (
        <>
            <div className='flex flex-col justify-between gap-8 xl:gap-14 bg-primary rounded-lg xl:rounded-3xl p-4 xl:p-8'>
                <h2 className='text-xs xl:text-2xl font-poppins font-bold xl:text-semibold text-black'>Beby Jovanca</h2>
                <div>
                    <h2 className='text-base xl:text-3xl font-poppins text-medium text-black mb-0 xl:mb-6'>0192  1245  9129  4533</h2>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2 xl:gap-3'>
                            <p className='text-xs xl:text-lg/[18px] font-text font-[300] text-black'>VALID<br/>THRU</p>
                            <p className='text-base xl:text-[21px] font-poppins text-bold text-black'>00 / 000</p>
                        </div>
                        <img src="/assets/imgs/visa.png" alt="Visa" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PayCard;