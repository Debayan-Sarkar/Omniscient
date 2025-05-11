'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { MdLightMode, MdMenu } from "react-icons/md"
import Preloader from '../Loader/loader'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const Header = () => {
    const preloaderRef = useRef();
    useEffect(() => {
        preloaderRef.current?.startAnimation();
        window.addEventListener('load', function () {
            setTimeout(() => {
                ScrollTrigger.refresh();
            }, 200); // 100ms delay
        });
    }, [])
    return (
        <>
            <header className='flex w-full relative z-50'>
                <nav className="w-full !pt-10 !pl-20 !pr-20 max-md:!pt-4 max-md:!pl-[5px] max-md:!pr-[5px] ">
                    <ul className='flex items-center justify-between'>
                        <li><Link href={'#'}><Image src={'/assets/logo1.svg'} width={200} height={200} alt='Logo' className='max-md:!max-w-max max-md:!w-[126px] max-sm:!w-[120x]' /></Link></li>
                        <div className='flex gap-2.5 items-center justify-center !mr-[140px]  max-md:!mr-4'>
                            <li className='cursor-pointer bg-[#242527] !p-1.5 rounded-full'><MdLightMode className='text-[18px] text-white' /></li>
                        </div>
                        <div className='flex gap-2.5'>
                            <li className='flex items-center justify-between gap-1.5 text-gray-200 font-semibold max-sm:text-[12px] cursor-pointer hoverable' onClick={() => preloaderRef.current?.startAnimation()}>menu <Link href={'#'}><MdMenu className='text-3xl text-white' /></Link></li>
                        </div>
                    </ul>
                </nav>
            </header>
            {/* <Preloader ref={preloaderRef} /> */}
        </>
    )
}

export default Header