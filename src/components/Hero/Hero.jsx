import gsap from 'gsap';
import React, { useEffect } from 'react'
import { MdArrowCircleDown } from 'react-icons/md'
import Video from '../VideoSec/Video';

const Hero = () => {
    useEffect(() => {
        const about = document.querySelector(".about");
        if (about) {
            const spans = about.querySelectorAll("span");
            spans.forEach((span, index) => {
                gsap.from(span, {
                    autoAlpha: 0,
                    yPercent: 100,
                    stagger: .2,
                    rotationX: 75,
                    skewX: -30,
                    autoAlpha: 0,
                    ease: "power4",
                    duration: 1.5,

                    filter: "blur(20px)"
                });
            })
        }
    }, [])

    return (
        <section className="hero flex flex-col items-center justify-center h-[90vh] gap-5">
            <h1 className='flex anton uppercase text-[80px] about w-full items-center justify-center relative left-[46px] max-md:flex-col'>
                <div className='flex gap-10'>
                    <div className="flex flex-col items-start justify-start leading-[1]">
                        <span className='text-center text-[#dad3cf] max-md:text-[26px] text-[35px]'>transforming</span>
                        <span className='text-[#ffc846] text-[48px] max-md:text-[34px] tracking-[4.5px]'>business</span>
                    </div>
                    <span className='rotate-[270deg] max-md:text-[26px] text-[#fff] text-[43px] relative leading-1 left-[-23px] bottom-[5px] tracking-[4.5px]'>into</span>
                </div>
                <span className='text-[#ffc846] relative text-[92px] left-[-85px] max-md:text-[61px] tracking-[3px] max-md:left-[-33px] bottom-[20px] h-[100px] max-md:bottom-[14px]'>brands</span>
            </h1>

            <p className="syne block text-[#dad3cf]  text-[15px]  max-md:text-[12px] max-md:relative max-md:bottom-5">
                <span className="block text-center leading-4 ">At Omniscient.ltd,  we specialize in crafting </span>
                <span className="block text-center leading-4 ">compelling brand identities,</span>
                <span className="block text-center leading-4 ">delivering innovative marketing strategies,  </span>
                <span className="block text-center leading-4 ">and creating creative designs </span>
                <span className="block text-center leading-4 ">to elevate your business.</span></p>

            {/* <div className="flex items-center justify-between w-full text-white !pl-20 !pr-20 absolute top-[80vh]">
           
              
               
            </div> */}
            <Video />
        </section>
    )
}

export default Hero