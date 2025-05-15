'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger, useGSAP);
ScrollTrigger.clearScrollMemory();

function Dribble() {


  useGSAP(() => {
    const leftXValues = [-600, -400, -300];
    const rightXValues = [600, 400, 300];
    const leftRotateValues = [-45, -20, -35];
    const rightRotateValues = [45, 20, 35];
    const yValues = [150, -200, -400];
    let breakPoint = 769;
    let mm = gsap.matchMedia();
    mm.add({
      isDesktop: `(min-width: ${breakPoint}px)`, // <- when ANY of these are true, the function below gets invoked
      isMobile: `(max-width: ${breakPoint - 1}px)`
    }, (context) => {
      let { isDesktop, isMobile } = context.conditions;
      const Settings = {
        trigger: ".main",
        start: "top center",
        end: () => isMobile ? "25% center" : "50% center",
        invalidateOnRefresh: true,
        scrub: true,
        markers: true,
        toggleActions: "play reverse play reverse",
      };
      gsap.utils.toArray(".row").forEach((r, i) => {
        const cardLeft = r.querySelector(".card-left");
        const cardRight = r.querySelector(".card-right");

        if (!cardLeft || !cardRight) return;

        gsap.to(cardLeft, {
          scrollTrigger: {
            trigger: ".main",
            start: "top center",
            invalidateOnRefresh: true,
            end: "150% bottom",
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;

              cardLeft.style.transform = `
              translateX(${leftXValues[i] * progress}px) 
              translateY(${yValues[i] * progress}px) 
              rotate(${leftRotateValues[i] * progress}deg)
            `.trim();

              cardRight.style.transform = `
              translateX(${rightXValues[i] * progress}px) 
              translateY(${yValues[i] * progress}px) 
              rotate(${rightRotateValues[i] * progress}deg)
            `.trim();
            }
          }
        });
      });

      gsap.fromTo(".logo", {
        scale: 0,
        visibility: false,
      }, {
        scale: isMobile ? 2 : 3,
        duration: 0.5,
        ease: "power1.out",
        visibility: true,
        scrollTrigger: Settings,
      });

      gsap.to(".line p", {
        y: 0,
        stagger: 0.5,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: Settings,
      });

      gsap.to(".btn button", {
        y: 0,
        opacity: 1,
        delay: 0.25,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: Settings,
      });

      ScrollTrigger.refresh();
    });
    return () => {
      ScrollTrigger.killAll(false);
    };
  }, []);
  const generaTeRows = () => {
    const rows = [];
    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div className="row relative !mt-4 max-md:!mb-3 !mb-4 w-[100vw] !ml-0 !mr-0 max-md:!gap-1 !gap-8 flex justify-center pointer-events-none" key={i}>
          <div className="card-left w-[38%] max-md:w-[50%] relative rounded-md overflow-hidden will-change-transform">
            <div className="img ">
              <Image src={`/assets/dribble${2 * i - 1}.jpeg`} className="!w-full !h-full rounded-4xl max-md:rounded-xl" width={100} height={100} alt="Work Images" />
            </div>
          </div>
          <div className="card-right w-[38%]  max-md:w-[50%] relative rounded-md overflow-hidden will-change-transform">
            <div className="img ">
              <Image src={`/assets/dribble${2 * i}.jpeg`} className="!w-full !h-full rounded-4xl max-md:rounded-xl" width={100} height={100} alt="Work Images" />
            </div>
          </div>
        </div>
      )
    }
    return rows;
  }



  return (
    <section className="main !pr-24 !pl-24 !pb-48 !mt-100 flex-col !w-[100vw] h-[150vh] relative flex justify-center items-center text-white">
      <div className="mainCont absolute flex items-center top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex-col">
        <div className="logo">
          <Image src={'/assets/behance.png'} className="dribbleImg " width={100} height={100} alt="Dribble" />
        </div>
        <div className="copy syne !mt-8 !mb-8 !ml-0 !mr-0 flex flex-col items-center justify-center">
          <div className="line">
            <p className='max-md:!text-[20px]'>See what design</p>
          </div>
          <div className="line">
            <p className='max-md:!text-[20px]'>mastery looks</p>
          </div>
          <div className="line">
            <p className='max-md:!text-[20px]'>like.</p>
          </div>
        </div>
        <div className="btn">
          <button className="snakeBorder syne heroBtn !p-4 max-md:w-30 max-md:!text-[14px] w-43 rounded-full transition-all duration-300 ease-linear cursor-pointer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Explore Work
          </button>
        </div>
      </div>
      {generaTeRows()}
    </section>
  )
}

export default Dribble