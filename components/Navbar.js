import Image from 'next/image'
import React from 'react'
import logo from '../images/shared/logo.svg'
import humberger from '../images/shared/icon-hamburger.svg'
import Link from 'next/link'
function Navbar() {
return (
<div className='w-full bg-transparent fixed  p-6 md:pl-[39px] md:py-0 md:pr-0'>
    <div className='flex items-center justify-between'>
        <Image src={logo} width={40} height={40} />
        <div className='cursor-pointer md:hidden'>
            <Image src={humberger} width={24} height={21} />
        </div>

        <div className='hidden md:block text-white md:flex bg-[#161A24] font-Barlow text-[14px] tracking-[2px] pr-[46px] pl-[46px] py-[39px] space-x-[37px]'>
            <p><Link href='/home'>HOME</Link></p>
            <p><Link href='/destination'> DESTINATION</Link></p>
            <p><Link href='/crew'> CREW</Link></p>
            <p><Link href='/technologie'> TECHNOLOGIE</Link></p>
        </div>
    </div>
</div>
)
}

export default Navbar