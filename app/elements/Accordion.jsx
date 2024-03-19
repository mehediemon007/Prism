'use client'

import React from 'react'
import { useState, useEffect } from 'react';

// ** Import Icons
import { HiOutlinePlus, HiMinus } from "react-icons/hi";

const Accordion = ({ques, ans}) => {

    const [accordionOpen, setAccordionOpen] = useState(false)

    useEffect(() => {
        setAccordionOpen(false)
    }, [])

    return (
        <>
            <div className='border border-border rounded-[20px] px-14 py-8 bg-gradient'>
                <h2>
                    <button className="flex items-center justify-between w-full"
                        onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); }}
                        aria-expanded={accordionOpen}
                        aria-controls={`accordion-text-01`}>
                        <span className='font-title text-[32px]/[42px] font-bold text-left tracking-[2px]'>{ques}</span>
                        <span className="inline-flex justify-center items-center min-w-14 min-h-14 text-black rounded-full bg-white">
                            {accordionOpen ? <HiMinus size={24}/> : <HiOutlinePlus size={24}/>}
                        </span>           
                    </button>        
                </h2>
                <div className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                        <p className="max-w-[90%] font-text text-xl font-normal text-slate mt-6 tracking-tight">{ans}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordion;