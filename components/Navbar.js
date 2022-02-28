import Image from 'next/image'
import React from 'react'
import logo from '../images/shared/logo.svg'
import humberger from '../images/shared/icon-hamburger.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'



function Navbar() {
    const router = useRouter()
    const links = [
        {
        path:'/',
        name:'HOME',
        active:router.pathname === '/'
        },
        {
        path:'/Destination',
        name:'DESTINATION',
        active:router.pathname === '/Destination'
        },
        {
        path:'/Crew',
        name:'CREW',
        active:router.pathname === '/Crew'
        },
        {
        path:'/Technologie',
        name:'TECHNOLOGIE',
        active:router.pathname === '/Technologie',
        }   
    ]
return (
<div className='w-full bg-transparent fixed  p-6 md:pl-[39px] md:py-0 md:pr-0 lg:py-[40px]'>
    <div className='flex items-center justify-between'>
        <Image src={logo} width={40} height={40} />
        <div className='cursor-pointer md:hidden'>
            <Image src={humberger} width={24} height={21} />
        </div>

        <div className="hidden md:block text-white md:flex lg:opacity-40 lg:backdrop-blur-[50%] bg-[#161A24] lg:bg-white font-Barlow text-[14px] tracking-[2px]  space-x-10 lg:py-[40px] lg:px-[123px] ">
            {links.map((link)=>(
                <Link key={link.name} href={link.path}><a className="links"><span className={link.active ? 'active_under_line':null}>{link.name}</span></a></Link>
            ))}
        </div>
    </div>
</div>
)
}

export default Navbar