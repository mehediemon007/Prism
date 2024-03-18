import React from 'react';
import Image from 'next/image';

const Partners = () => {
    return (
        <>
            <div className="pri-partners">
                <div className="container">
                    <div className="partner-content">
                        <div className="partners">
                            <div className="bnd">
                                <Image src="/assets/imgs/brands/ohmas.svg" alt='Ohmas' priority={true} width={0} height={0} sizes='100vw'/>
                            </div>
                            <div className="bnd">
                                <Image src="/assets/imgs/brands/inc.svg" alt='Inc' priority={true} width={0} height={0} sizes='100vw'/>
                            </div>
                            <div className="bnd">
                                <Image src="/assets/imgs/brands/green.svg" alt='Green' priority={true} width={0} height={0} sizes='100vw'/>
                            </div>
                            <div className="bnd">
                                <Image src="/assets/imgs/brands/nrok.svg" alt='Nork' priority={true} width={0} height={0} sizes='100vw'/>
                            </div>
                            <div className="bnd">
                                <Image src="/assets/imgs/brands/cwbank.svg" alt='Cwbank' priority={true} width={0} height={0} sizes='100vw'/>
                            </div>
                        </div>
                        <div className="partners">
                            <div className="bnd">
                                <Image src="/assets/imgs/brands/ohmas.svg" alt='Ohmas' priority={true} width={0} height={0} sizes='100vw'/>
                            </div>
                            <div className="bnd">
                                <Image src="/assets/imgs/brands/inc.svg" alt='Inc' priority={true} width={0} height={0} sizes='100vw'/>
                            </div>
                            <div className="bnd">
                                <Image src="/assets/imgs/brands/green.svg" alt='Green' priority={true} width={0} height={0} sizes='100vw'/>
                            </div>
                            <div className="bnd">
                                <Image src="/assets/imgs/brands/nrok.svg" alt='Nork' priority={true} width={0} height={0} sizes='100vw'/>
                            </div>
                            <div className="bnd">
                                <Image src="/assets/imgs/brands/cwbank.svg" alt='Cwbank' priority={true} width={0} height={0} sizes='100vw'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partners;