import React from 'react'

const PayCard = () => {
    return (
        <>
            <div className='flex flex-col justify-between gap-14 bg-primary rounded-3xl p-8'>
                <h2 className='text-2xl font-poppins text-semibold text-black'>Beby Jovanca</h2>
                <div>
                    <h2 className='text-3xl font-poppins text-medium text-black mb-6'>0192  1245  9129  4533</h2>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <p className='text-lg/[18px] font-text font-[300] text-black'>VALID<br/>THRU</p>
                            <p className='text-[21px] font-poppins text-bold text-black'>00 / 000</p>
                        </div>
                        <img src="/assets/imgs/visa.png" alt="Visa" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PayCard;