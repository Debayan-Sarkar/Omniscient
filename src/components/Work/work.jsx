import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import SplitType from 'split-type';
import { random } from '../Functions/Functions';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, useGSAP, ScrollSmoother);
ScrollTrigger.clearScrollMemory();
function Work() {
    const TriggerRef = useRef();
    useGSAP(() => {
        const works = gsap.utils.toArray('.workSec');
        const split = new SplitType(".RecWork h3");
        setTimeout(() => {
            ScrollTrigger.refresh(false);
        }, 500);
        const lines = document.querySelectorAll('.RecWork h3 span');
        const xOffsets = [100, -20];
        lines.forEach((line, index) => {
            gsap.set(line, { display: 'block', position: 'relative', textAlign: 'start' });
            gsap.fromTo(
                line,
                {
                    x: xOffsets[index]
                },
                {
                    x: 0,
                    backgroundPositionX: "0%",
                    scrollTrigger: {
                        trigger: ".triggerRec",
                        start: "top center",
                        end: "30% center",
                        scrub: 3,
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
                    y: 1000
                }, {
                y: 10,
                duration: 10,
                ease: "slow(0.5,0.7,true)",
                scrollTrigger: {
                    trigger: ".triggerRec",
                    start: "top center",
                    end: "20% center",
                    scrub: true,
                    markers: false,
                    invalidateOnRefresh: true
                }
            });
        })

        works.forEach((work, index) => {
            const image = work.querySelector('.img img');
            const info = work.querySelector('.info');

            if (!image || !info) return;

            gsap.from(image, {
                x: index % 2 === 0 ? 0.5 * image.clientWidth : -0.5 * image.clientWidth,
                rotate: index % 2 === 0 ? 10 : -10,
                duration: 2,
                ease: 'power1.in',
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: work,
                    start: 'top center',
                    end: `+=${image.clientHeight / 20}%`,
                    invalidateOnRefresh: true,
                    scrub: 2,
                    markers: true
                }
            });

            gsap.set(info, { yPercent: -1 });

            gsap.from(info, {
                yPercent: 55,
                ease: 'power1.in',
                scrollTrigger: {
                    trigger: info,
                    start: 'top center',
                    end: `+=${window.innerHeight}`,
                    scrub: true,
                    invalidateOnRefresh: true,
                    // markers: false
                }
            });
        });
        ScrollTrigger.refresh(false);
        return () => {
            ScrollTrigger.killAll(false);
        };
    }, []);

    return (
        <section className="!mt-[30rem] !pr-24 !pl-24 text-white triggerRec">
            <div className="flex flex-col scrfff">
                <div className="RecWork !mt-[25rem] flex">
                    <h3>
                        <span className="fill-text block  text-[218px] !leading-48 !h-40">recent</span>
                        <span className="fill-text block text-[218px] !leading-48 !ml-1.5">work</span>
                    </h3>
                    <div className="bottomW flex FloatUp flex-col justify-between items-start w-1/4 h-72">
                        <div className="">
                            <span className="block syne text-3xl">In the creative wilderness, </span>
                            <span className="block syne text-3xl">clients find our work truly  </span>
                            <span className="block syne text-3xl">beloved. </span>
                        </div>
                        <button className="snakeBorder syne heroBtn !p-4 w-43 rounded-full transition-all duration-300 ease-linear cursor-pointer">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Explore Work
                        </button>
                    </div>
                </div>


            </div>
            <div className="workSec flex justify-between items-center !mt-[10rem] gap-2.5" ref={TriggerRef}>
                <div className="info w-[40%]">
                    <h1 className="text-7xl">ovrmelt</h1>
                    <h4 className="syne text-xl">Social Media Revamp</h4>
                    <button className="snakeBorder syne heroBtn !p-4 w-43 rounded-full transition-all duration-300 ease-linear cursor-pointer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Explore Work
                    </button>
                </div>
                <div className="img w-[60%]">
                    <Image src={'/assets/ovrmelt.jpeg'} className="w-full rounded-2xl" width={100} height={100} alt="Work Images" />
                </div>
            </div>
            <div className="workSec flex justify-between items-center !mt-28 gap-2.5">
                <div className="img w-[60%]">
                    <Image src={'/assets/kcc.jpeg'} className="w-full rounded-2xl" width={100} height={100} alt="Work Images" />
                </div>
                <div className="info text-end w-[40%]">
                    <h1 className="text-7xl">kothari construction
                        company</h1>
                    <h4 className="syne text-xl">Lead Generation Success</h4>
                    <button className="snakeBorder syne heroBtn !p-4 w-43 rounded-full transition-all duration-300 ease-linear cursor-pointer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Explore Work
                    </button>
                </div>
            </div>
            <div className="workSec flex justify-between items-center !mt-28 gap-2.5">
                <div className="info w-[40%]">
                    <h1 className="text-7xl">vastram</h1>
                    <h4 className="syne text-xl">Complete Branding Overhaul</h4>
                    <button className="snakeBorder syne heroBtn !p-4 w-43 rounded-full transition-all duration-300 ease-linear cursor-pointer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Explore Work
                    </button>
                </div>
                <div className="img w-[60%]">
                    <Image src={'/assets/vastram.jpeg'} className="w-full rounded-2xl" width={100} height={100} alt="Work Images" />
                </div>
            </div>
            <div className="workSec flex justify-between items-center !mt-28 !gap-3">
                <div className="img w-[60%]">
                    <Image src={'/assets/work4.jpeg'} className="w-full rounded-2xl" width={100} height={100} alt="Work Images" />
                </div>
                <div className="info w-[40%]">
                    <h1 className="text-7xl">isha jewellers</h1>
                    <h4 className="syne text-xl">Crafted a premium {/*festive campaign strategy, enhancing their brand aura and driving seasonal sales*/}</h4>
                    <button className="snakeBorder syne heroBtn !p-4 w-43 rounded-full transition-all duration-300 ease-linear cursor-pointer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Explore Work
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Work;

