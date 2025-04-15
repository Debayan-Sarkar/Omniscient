"use client"
import gsap from 'gsap'
import React, { useEffect } from 'react'

const About = () => {
    useEffect(() => {
        gsap.from(".about", {
            skewX: '-90deg',
            skewY: "-2deg",
            duration: 0.8,
        });
    }, [])
    return (
        <div className='text-5xl text-amber-100 h-full !p-10'>
            <p className="about relative">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, tempore voluptatibus, explicabo necessitatibus ut ducimus quo nemo reprehenderit iusto ratione, ab eveniet expedita impedit fugit nostrum a soluta maxime veritatis!</p>
        </div>
    )
}

export default About