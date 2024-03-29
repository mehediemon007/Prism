import React from 'react'
import LangSwitcher from '../elements/LangSwitcher';

const AuthFooter = () => {
    return (
        <>
            <div className="auth-footer flex justify-between items-center mt-12 lg:mt-[100px] pb-4">
                <div className="flex">
                    <p className='text-sm lg:text-base'>Copyright ©Prism 2024.</p>
                </div>
                <LangSwitcher/>
            </div>
        </>
    )
}

export default AuthFooter;