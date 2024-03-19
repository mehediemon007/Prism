'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";

// ** Import Iocns
import { PiCaretUpLight, PiCaretDownLight  } from "react-icons/pi";

const Selector = () => {
  const [selected, setSelected] = useState({
    value: "0",
    name: 'Male'
  });
  const [open, setOpen] = useState(false);

  const data = [
    {
        value: '0',
        name: 'Male'
    },
    {
        value: '1',
        name: 'Female'
    },
  ]

  const handleSelect = (item) =>{

    setSelected((prev) => {
        return{
            ...prev,
            img: item.img,
            name: item.name
        }
    })
  }

  useEffect(() => {

  }, []);

  return (
    <div className="">
        <div onClick={() => setOpen(!open)} className={`flex items-center justify-between cursor-pointer p-2 ps-4 bg-[#1F1F1F] rounded-[6px]`}>
            <b className='text-base font-text font-normal'>{selected.name}</b>
            {open ? <PiCaretUpLight size={16} className='text-slate-900'/> : <PiCaretDownLight size={16} className='text-slate-900'/>}
        </div>
        <ul className={` mt-2 overflow-y-auto ${ open ? "max-h-50" : "max-h-0"} transition-all duration-200 ease-linear`}>
            {data?.map((item, indx) => (
                <li key={indx}  onClick={() => {
                    if (item?.name?.toLowerCase() !== selected.name.toLowerCase()) {
                        handleSelect(item)
                        setOpen(false);
                    }
                }}
                >   
                    <div className="cursor-pointer bg-[#1F1F1F] py-2 px-4">
                        <b className='text-sm font-text font-normal'>{item.name}</b>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default Selector;