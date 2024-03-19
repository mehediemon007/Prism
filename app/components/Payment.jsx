'use client'

import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import PayCard from '../elements/PayCard';
import Switch from '../elements/Switch';

//** Import Icons
import { HiCheck } from "react-icons/hi2";

const Payment = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const [checked, setChecked] = React.useState(true);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    
    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }

  return (
    <>
        <div className='p-8 border-t border-[#E6E9ED] rounded-sm'>
            <PayCard number={state.number}
                expiry={state.expiry}
                cvc={state.cvc}
                name={state.name}
                focused={state.focus}/>
            <form className='space-y-5 mt-8'>
                <div className="input-grp relative">
                    <label htmlFor="card-number">Card Number</label>
                    <input id="card-number" placeholder='0192 - 1245 - 9129 - 4533'/>
                    <div className="icon absolute right-4 top-[58%] w-6 h-6 rounded-full flex justify-center items-center bg-[#00BF6F]"><HiCheck/></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="input-grp relative">
                        <label htmlFor="card-number">Expire Date</label>
                        <input id="card-number" placeholder='12/22'/>
                        <div className="icon absolute right-4 top-[58%] w-6 h-6 rounded-full flex justify-center items-center bg-[#00BF6F]"><HiCheck/></div>
                    </div>
                    <div className="input-grp relative">
                        <label htmlFor="card-number">CVC/CVV</label>
                        <input id="card-number" placeholder='234'/>
                        <div className="icon absolute right-4 top-[58%] w-6 h-6 rounded-full flex justify-center items-center bg-[#00BF6F]"><HiCheck/></div>
                    </div>
                </div>
                <div className="input-grp flex items-center space-x-3">
                    <Switch isOn={checked} handleToggle={() => setChecked(!checked)}/>
                    <label htmlFor="switch" className="!font-normal !text-slate">Remember my card</label>
                </div>
                
                {/* <input
                type="number"
                name="cvc"
                placeholder="Card Number"
                value={state.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                />
                <input
                type="number"
                name="number"
                placeholder="Card Number"
                value={state.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                /> */}
            </form>
        </div>
    </>
  );
}

export default Payment;