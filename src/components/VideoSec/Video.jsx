import React from 'react'
import { MdArrowCircleDown } from 'react-icons/md'

const Video = () => {
    return (
        <section className="hero flex flex-col items-center justify-end h-[90vh] w-full !pl-24 !pr-24 absolute top-0 left-0 z-0">
            <video width={'100%'} height={'100%'} controls={false} autoPlay loop muted playsInline preload="auto" className='w-[170px] rounded-full'>
                <source src="/assets/intro-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    )
}

export default Video