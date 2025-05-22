import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MdArrowCircleDown } from 'react-icons/md';
import { ScrollSmoother } from 'gsap/ScrollSmoother';


const Video = () => {
    const videoRef = useRef(null);
    const wrapperRef = useRef(null);

    useGSAP(() => {
        const video = videoRef.current;
        const wrapper = wrapperRef.current;

        if (!video || !wrapper) return;

        let breakPoint = 769;
        let mm = gsap.matchMedia();
        setTimeout(() => {
            ScrollTrigger.refresh(false);
            ScrollSmoother.refresh(false);
        }, 500);
        mm.add({
            isDesktop: `(min-width: ${breakPoint}px)`, // <- when ANY of these are true, the function below gets invoked
            isMobile: `(max-width: ${breakPoint - 1}px)`
        }, (context) => {
            let { isDesktop, isMobile } = context.conditions;

            const e = 0.14 * video.clientHeight;
            const yStart = -2 * wrapper.offsetTop - window.innerHeight + e + 20;
            const yEnd = isMobile ? 2 * wrapper.offsetTop - window.innerHeight + e + 50 : 3 * wrapper.offsetTop - window.innerHeight + e + 20;

            // Initial set
            gsap.set(video, {
                width: isMobile ? "40%" : "",
                borderRadius: "100px",
            });

            // Scroll animation
            gsap.to(video, {
                scrollTrigger: {
                    trigger: video,
                    start: "0% center",
                    end: "bottom center",
                    scrub: 0.8,
                    markers: false,
                    invalidateOnRefresh: true,
                },
                y: yEnd,
                scale: isMobile ? 1 : 1.1,
                width: isMobile ? "100%" : "60%",
                height: "100%",
                paddingLeft: isMobile ? "5px" : "0px",
                paddingRight: isMobile ? "5px" : "0px",
                marginBottom: isMobile ? "" : "25rem",
                borderRadius: isMobile ? "20px" : "100px",
                ease: "power1.in",
            });

            ScrollTrigger.refresh();

            return () => {
                ScrollTrigger.killAll(false);
            };
        });
    }, []);

    return (
        <div
            ref={wrapperRef}
            id="video"
            className="pointer-events-none flex flex-col items-center justify-end w-full z-0 rounded-full"
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
