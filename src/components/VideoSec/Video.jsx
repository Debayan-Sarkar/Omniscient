import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react'
import { MdArrowCircleDown } from 'react-icons/md'

gsap.registerPlugin(ScrollTrigger);
const Video = () => {
    const videoRef = React.useRef(null);
    useEffect(() => {
        let e = .14 * document.querySelector("#video video").clientHeight;
        gsap.set(videoRef.current, {
            y: -1 * (document.querySelector("#video").offsetTop - window.innerHeight + e + 100),
            borderRadius: "100rem"
        })
        gsap.to(videoRef.current, {
            scrollTrigger: {
                trigger: videoRef.current,
                start: "top center",
                end: "bottom top",
                scrub: true,
            },
            y: 1 * (document.querySelector("#video").offsetTop - window.innerHeight + e),
            scale: 1.2,
            width: "70%",
            height: "70%",
            marginBottom: "200px",
            borderRadius: "50px",
            ease: "power1.in",
        });
    }, [])
    return (
        <div id="video" className="pointer-events-none flex flex-col items-center justify-end  w-full !pl-24 !pr-24 z-0">
            <video width={'100%'} ref={videoRef} height={'100%'} controls={false} autoPlay loop muted playsInline preload="auto" className='video w-[170px] rounded-full origin-top '>
                <source src="/assets/intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default Video