import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react';

function AboutComp() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    useGSAP(() => {
        const lines = document.querySelectorAll(".Weare h3 > span");
        const xOffsets = [500, -200];

        lines.forEach((line, index) => {
            const offset = xOffsets[index % xOffsets.length];
            gsap.fromTo(
                line,
                { x: offset, backgroundPositionX: "100%" },
                {
                    x: 0,
                    backgroundPositionX: "0%",
                    scrollTrigger: {
                        trigger: line,
                        start: () => isIOS ? "-1000% center" : "-1000% center",
                        end: () => "95% center",
                        scrub: 1,
                        markers: true,
                        invalidateOnRefresh: true,
                    },
                }
            );
        });
    }, [])
    return (
        <section className="!pr-24 !pl-24 max-md:!pr-[2rem] max-md:!pl-[2rem] text-white !mt-90 max-md:!mt-[50%] weARETrigg">
            <div className="flex flex-col !mt-[2rem]">
                <div className="top Weare">
                    <h3>
                        <span className="fill-text text-[218px] max-md:!text-[51px] max-md:!h-10 max-md:!leading-[50px] leading-50 block">who</span>
                        <span className="fill-text text-[218px] max-md:!text-[51px] max-md:!h-10 max-md:!leading-[50px] leading-50 block">we are</span>
                    </h3>
                </div>
                <div className="bottom !mt-[10px] w-[560px] max-md:!w-full FloatUp">
                    <span className="block syne text-3xl max-md:text-[18px]">Omniscient Ltd is a premier</span>
                    <span className="block syne text-3xl max-md:text-[18px]"> marketing agency dedicated to transforming your business</span>
                    <span className="block syne text-3xl max-md:text-[18px]">into a lasting brand legacy</span>
                    <span className="block syne text-3xl max-md:text-[18px]">through strategic marketing</span>
                    <span className="block syne text-3xl max-md:text-[18px]">and Creative Excellence.</span>
                </div>
                <p className="syne text-[13px] !mt-2 text-gray-200 w-[315px] max-md:!w-full FloatUp">At Omniscent.Ltd, with innovation—harnessing the latest technology to transform your brand into a dominant force in the digital world. From standout portfolios to seamless marketings, we craft solutions that leave a lasting impact</p>
            </div>
            {/* <Button innerTxt={'About Us'}/> */}
        </section>
    )
}

export default AboutComp