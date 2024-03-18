import Image from 'next/image';
import Link from 'next/link';

// ** Import Icons
import { LiaAngleRightSolid } from "react-icons/lia";
import MentorSlider from './MentorSlider';

const Mentors = () => {
    
    return (
        <>  
            <div className="sec-heading flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-4 sm:p-0">
                <h2 className='max-w-xs text-3xl sm:text-[54px]/[64px] font-title font-bold text-white tracking-tighter'>Our Team Members</h2>
            </div>
            <MentorSlider/>
        </>
    )
}

export default Mentors;