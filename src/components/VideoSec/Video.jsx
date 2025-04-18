import React from 'react'
import { MdArrowCircleDown } from 'react-icons/md'

const Video = () => {
    return (
        <section className="hero flex flex-col items-center justify-center h-[90vh] !pl-24 !pr-24">
            <video width={'100%'} height={'100%'} controls={false} autoPlay loop>
                <source src="/assets/intro-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    )
}

export default Video