'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { MdLightMode, MdMenu } from "react-icons/md"
import Preloader from '../Loader/loader'
const Header = () => {
    const preloaderRef = useRef();
    useEffect(() => {
        preloaderRef.current?.startAnimation();
    }, [])
    return (
        <>
            <header className='flex w-full'>
                <nav className="w-full !pt-10 !pl-20 !pr-20">
                    <ul className='flex items-center justify-between'>
                        <li><Link href={'#'}><Image src={'/assets/logo.svg'} width={200} height={200} alt='Logo' /></Link></li>
                        <div className='flex gap-2.5 items-center justify-center !mr-[140px]'>
                            <li className='cursor-pointer bg-[#242527] !p-1.5 rounded-full'><MdLightMode className='text-[18px] text-white' /></li>
                        </div>
                        <div className='flex gap-2.5'>
                            <li className='flex items-center justify-between gap-1.5 text-gray-200 font-semibold cursor-pointer' onClick={() => preloaderRef.current?.startAnimation()}>menu <Link href={'#'}><MdMenu className='text-3xl text-white' /></Link></li>
                        </div>
                    </ul>
                </nav>
            </header>
            <Preloader ref={preloaderRef} />
        </>
    )
}

export default Header