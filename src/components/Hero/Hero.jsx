import React from 'react'
import { MdArrowCircleDown } from 'react-icons/md'

const Hero = () => {
    return (
        <section className="hero flex flex-col items-center justify-center h-[90vh] ">
            <h1 className='block text-center text-[90px] leading-[5.9rem] text-white '>
                <span className='block text-center'>transforming your businesses</span>
                <span className='block text-center'>into brands.</span>
            </h1>
            {/*   */}
            <p className="syne block text-gray-200 uppercase text-[12px]">
                <span className='block text-center leading-4'>At Omniscient.ltd, we specialize in crafting compelling</span>
                <span className='block text-center leading-4'>brand identities, delivering innovative marketing strategies, and </span>
                <span className='block text-center leading-4'>creating creative designs to elevate your business.</span>
            </p>
           
            {/* <div className="flex items-center justify-between w-full text-white !pl-20 !pr-20 absolute top-[80vh]">
           
              
               
            </div> */}
        </section>
    )
}

export default Hero