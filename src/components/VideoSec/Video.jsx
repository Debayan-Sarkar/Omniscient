import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MdArrowCircleDown } from 'react-icons/md';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, useGSAP, ScrollSmoother);

const Video = () => {
    const videoRef = useRef(null);
    const wrapperRef = useRef(null);

    useGSAP(() => {
        const video = videoRef.current;
        const wrapper = wrapperRef.current;

        if (!video || !wrapper) return;

        const e = 0.14 * video.clientHeight;
        const yStart = -2 * wrapper.offsetTop - window.innerHeight + e + 20;
        const yEnd = 3 * wrapper.offsetTop - window.innerHeight + e + 20;
        setTimeout(() => {
            ScrollTrigger.refresh(false);
            ScrollSmoother.refresh(false);
        }, 500);
        // Initial set
        gsap.set(video, {
            borderRadius: "100px",
        });

        // Scroll animation
        gsap.to(video, {
            scrollTrigger: {
                trigger: video,
                start: "center center",
                end: "bottom top",
                scrub: true,
                markers: false,
                invalidateOnRefresh: true,
            },
            y: yEnd,
            scale: 1.1,
            width: "60%",
            height: "100%",
            marginBottom: "25rem",
            borderRadius: "100px",
            ease: "power1.in",
        });

        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.killAll(false);
        };
    }, []);

    return (
        <div
            ref={wrapperRef}
            id="video"
            className="pointer-events-none flex flex-col items-center justify-end w-full px-24 z-0 rounded-full"
        >
            <video
                ref={videoRef}
                className="video relative w-[170px] rounded-full origin-top"
                width="100%"
                height="100%"
                controls={false}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            >
                <source src="/assets/intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Video;
