import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { random } from '../Functions/Functions';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Button from '../Button/btn';
import { SplitText } from 'gsap/SplitText';

ScrollTrigger.clearScrollMemory();
function Work({ TriggRef }) {
    const TriggerRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            try {
                ScrollTrigger.refresh(false);
            } catch (error) {
                console.error("Error in useEffect:", error);

            }
        }, 500);
    }, []);
    useGSAP(() => {
        requestAnimationFrame(() => {
            const works = gsap.utils.toArray('.workSec');
            const headings = document.querySelectorAll(".RecWork h3");

            if (!headings.length || !works.length) return; // Safety check

            const split = new SplitText(".RecWork h3", {
                type: "lines",
                tag: "span"
            });

            const lines = document.querySelectorAll('.RecWork h3 span');
            const xOffsets = [300, -200];
            let breakPoint = 769;

            let mm = gsap.matchMedia();
            mm.add({
                isDesktop: `(min-width: ${breakPoint}px)`,
                isMobile: `(max-width: ${breakPoint - 1}px)`
            }, (context) => {
                let { isDesktop, isMobile } = context.conditions;

                lines.forEach((line, index) => {
                    gsap.set(line, { display: 'block', position: 'relative', textAlign: 'start' });
                    gsap.fromTo(
                        line,
                        {
                            x: xOffsets[index % xOffsets.length] || 0,
                        },
                        {
                            x: 0,
                            backgroundPositionX: "0%",
                            scrollTrigger: {
                                trigger: line,
                                start: "-100% 75%",
                                end: "95% center",
                                scrub: 1,
                                markers: false,
                                invalidateOnRefresh: true
                            }
                        }
                    );
                });

                const floatUps = gsap.utils.toArray(".FloatUp");
                floatUps.forEach((floats) => {
                    gsap.fromTo(floats,
                        {
                            y: () => window.innerHeight * 0.5
                        }, {
                        y: 10,
                        duration: 10,
                        ease: "slow(0.5,0.7,true)",
                        scrollTrigger: {
                            trigger: ".triggerRec",
                            start: "top center",
                            end: "20% center",
                            scrub: 1,
                            markers: false,
                            invalidateOnRefresh: true
                        }
                    });
                });

                works.forEach((work, index) => {
                    const image = work.querySelector('.img img');
                    const info = work.querySelector('.info');

                    if (!image || !info) return;

                    const isLast = index === works.length - 1;

                    const startPosition = isLast ? 'top 80%' : 'top center';
                    const endPosition = isLast ? '+=200' : '+=20';

                    gsap.from(image, {
                        x: () => index % 2 === 0 ? 0.5 * image.clientWidth : -0.5 * image.clientWidth,
                        rotate: index % 2 === 0 ? 10 : -10,
                        ease: 'power1.in',
                        autoAlpha: 0,
                        scrollTrigger: {
                            trigger: work,
                            start: startPosition,
                            end: endPosition,
                            invalidateOnRefresh: true,
                            scrub: 2,
                            // markers: false,,
                        }
                    });

                    gsap.set(info, { yPercent: -1 });

                    gsap.from(info, {
                        yPercent: 55,
                        ease: 'power1.in',
                        scrollTrigger: {
                            trigger: image,
                            start: startPosition,
                            end: isLast ? '+=100' : '+=50',
                            scrub: true,
                            invalidateOnRefresh: true,
                            // markers: false,
                        }
                    });
                });


                return () => {
                    ScrollTrigger.killAll(false);
                };
            });
        });
    });

    return (
        <section className="!mt-[30rem] max-md:!mt-[0.5rem] !pr-24 !pl-24 max-md:!pr-[2rem] max-md:!pl-[2rem] text-white triggerRec">
            <div className="flex flex-col scrfff">
                <div className="RecWork !mt-[25rem] flex max-md:flex-col ">
                    <h3>
                        <span className="fill-text block text-[218px] max-md:!text-[51px] max-md:!h-10 max-md:!leading-[50px] !leading-48 !h-40">recent</span>
                        <span className="fill-text block text-[218px] max-md:!text-[51px] !leading-48 max-md:!leading-[50px]">work</span>
                    </h3>
                    <div className="bottomW flex FloatUp flex-col justify-between items-start w-1/4 h-72 max-md:flex-row max-md:w-full">
                        <div className="">
                            <span className="block syne text-3xl max-md:text-[21px]">Our work isn’t just seen it’s</span>
                            <span className="block syne text-3xl"> Remembered and Admired. </span>
                        </div>
                        <Button innerTxt={'Explore Work'} className={'!m-0'} />
                    </div>
                </div>


            </div>
            <div className="workSec flex justify-between items-center max-md:!mt-[-5rem] !mt-[10rem] gap-2.5 max-md:flex-col-reverse">
                <div className="info  max-md:w-full w-[40%] max-md:!p-2.5 max-md:flex max-md:items-start max-md:flex-col max-md:gap-[5px]">
                    <h1 className="text-7xl max-md:text-[33px] !m-[0_2rem]">ovrmelt</h1>
                    <h4 className="syne text-xl !m-[0_2rem]">Social Media Revamp</h4>
                    <Button innerTxt={'Explore Work'} />
                </div>
                <div className="img w-[60%] max-md:w-full">
                    <Image src={'/assets/ovrmelt.jpeg'} priority={false} className="w-full rounded-2xl" width={100} height={100} alt="Work Images" />
                </div>
            </div>
            <div className="workSec flex justify-between items-center max-md:!mt-[25px] !mt-28 gap-2.5 max-md:flex-col">
                <div className="img w-[60%] max-md:w-full">
                    <Image src={'/assets/kcc.jpeg'} priority={false} className="w-full rounded-2xl" width={100} height={100} alt="Work Images" />
                </div>
                <div className="info max-md:w-full text-end w-[40%] max-md:!p-2.5 max-md:flex max-md:items-end max-md:flex-col max-md:gap-[5px]">
                    <h1 className="text-7xl max-md:text-[33px]">kothari construction
                        company</h1>
                    <h4 className="syne text-xl">Lead Generation Success</h4>
                    <Button innerTxt={'Explore Work'} />
                </div>
            </div>
            <div className="workSec flex justify-between items-center max-md:!mt-[25px] !mt-28 gap-2.5 max-md:flex-col-reverse">
                <div className="info max-md:w-full w-[40%] max-md:!p-2.5 max-md:flex max-md:items-start max-md:flex-col max-md:gap-[5px]">
                    <h1 className="text-7xl max-md:text-[33px] !m-[0_2rem]">vastram</h1>
                    <h4 className="syne text-xl !m-[0_2rem]">Complete Branding Overhaul</h4>
                    <Button innerTxt={'Explore Work'} />
                </div>
                <div className="img w-[60%] max-md:w-full">
                    <Image src={'/assets/vastram.jpeg'} priority={false} className="w-full rounded-2xl" width={100} height={100} alt="Work Images" />
                </div>
            </div>
            <div ref={TriggerRef} className="workSec flex justify-between items-center max-md:!mt-[25px] !mt-28 !gap-3 max-md:flex-col">
                <div className="img w-[60%] max-md:w-full">
                    <Image src={'/assets/work4.jpeg'} priority={false} className="w-full rounded-2xl" width={100} height={100} alt="Work Images" />
                </div>
                <div className="info max-md:w-full w-[40%] text-end max-md:!p-2.5 max-md:flex max-md:items-end max-md:flex-col max-md:gap-[5px]">
                    <h1 className="text-7xl max-md:text-[33px]">isha jewellers</h1>
                    <h4 className="syne text-xl">Crafted a Premium Brand</h4>
                    <Button innerTxt={'Explore Work'} />
                </div>
            </div>
        </section>
    )
}

export default Work;

