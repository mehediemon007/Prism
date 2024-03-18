import Image from 'next/image';
import Link from 'next/link';

// ** Import Icons
import { LiaAngleRightSolid } from "react-icons/lia";
import MentorSlider from './MentorSlider';

const Mentors = () => {
    
    return (
        <>  
            <div className="sec-heading">
                <h2 className='sec-title max-w-[50%]'>What People <span className='text-primary'>says</span></h2>
            </div>
            <MentorSlider/>
        </>
    )
}

export default Mentors;