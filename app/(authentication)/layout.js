
import Image from 'next/image';
import Link from 'next/link';

export default function AuthLayout({children}) {
    return (
        <div className='container'>
            {children}
        </div>
    )
}
