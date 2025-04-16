import React from 'react'
import { MdArrowCircleDown } from 'react-icons/md'

const Hero = () => {
    return (
        <section className="hero flex flex-col items-center justify-center h-[90vh] ">
            <h1 className='block text-center text-[116px] leading-[5.9rem] text-white '>
                <span className='block text-center'>roar in the</span>
                <span className='block text-center'>digital wilderness.</span>
            </h1>
            <p className="syne block text-gray-200 uppercase text-[12px]">
                <span className='block text-center leading-4'>We roar with success, delivering the TRIONN<sup>®</sup></span>
                <span className='block text-center leading-4'>through versatile design, branding and the latest</span>
                <span className='block text-center leading-4'>tech development to companies.</span>
            </p>
            <div className="flex justify-center items-center">
                <MdArrowCircleDown className='text-gray-600 text-3xl font-semibold !mt-4' />
            </div>
            <div className="flex items-center justify-between w-full text-white !pl-20 !pr-20 absolute !bottom-10">
                <button className='syne !p-4 w-43 rounded-full cursor-pointer'>
                    Explore Work
                    <span className="btnBack absolute rounded-full left-0 top-0 w-full h-full border"></span>
                </button>
                <button className='syne !p-4 w-43 rounded-full cursor-pointer'>
                    Get in touch
                    <span className="btnBack absolute rounded-full left-0 top-0 w-full h-full border"></span>
                </button>
            </div>
        </section>
    )
}

export default Hero