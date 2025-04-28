import gsap from 'gsap';
import React, { useEffect } from 'react'
import { MdArrowCircleDown } from 'react-icons/md'

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
        <section className="hero flex flex-col items-center justify-center h-[90vh] ">
            <h1 className='block text-center text-[160px] leading-[8.5rem] text-white about'>
                <span className='block text-center text-5xl tracking-wide'>transforming your</span>
                <span className='block text-center tracking-widest'>business</span>
                <span className='block text-center tracking-widest'>into brand</span>
            </h1>
            {/*   */}
            <p className="syne block text-gray-200 uppercase text-[15px]">
                <span className='block text-center leading-4 '>At Omniscient.ltd, we specialize in crafting compelling</span>
                <span className='block text-center leading-4'>brand identities, delivering innovative marketing strategies, and </span>
                <span className='block text-center leading-4'>creating creative designs to elevate your business.</span>
            </p>

            {/* <div className="flex items-center justify-between w-full text-white !pl-20 !pr-20 absolute top-[80vh]">
           
              
               
            </div> */}
        </section>
    )
}

export default Hero