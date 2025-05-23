'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import Button from '../Button/btn';

ScrollTrigger.clearScrollMemory();

function Dribble() {
  const btnCont = useRef(null);

  useGSAP(() => {
    const breakPoint = 769;

    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`
    }, (context) => {
      const { isDesktop, isMobile } = context.conditions;

      // Dynamically set values or use fallback defaults
      const leftXValues = [-600, -400, -300];
      const rightXValues = [600, 400, 300];
      const leftRotateValues = [-45, -20, -35];
      const rightRotateValues = [45, 20, 35];
      const yValues = [150, -200, -400];

      const rows = gsap.utils.toArray(".main .row");

      rows.forEach((r, i) => {
        const cardLeft = r.querySelector(".card-left");
        const cardRight = r.querySelector(".card-right");
        if (!cardLeft || !cardRight) return;

        const xLeft = leftXValues[i] ?? -300;
        const xRight = rightXValues[i] ?? 300;
        const y = yValues[i] ?? 150;
        console.log("y", i);

        const rotLeft = leftRotateValues[i] ?? -30;
        const rotRight = rightRotateValues[i] ?? 30;

        gsap.to(cardLeft, {
          scrollTrigger: {
            trigger: ".main",
            start: "top center",
            end: "150% bottom",
            scrub: true,
            markers: false,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const progress = self.progress;

              cardLeft.style.transform = `
              translateX(${xLeft * progress}px) 
              translateY(${y * progress}px) 
              rotate(${rotLeft * progress}deg)
            `.trim();

              cardRight.style.transform = `
              translateX(${xRight * progress}px) 
              translateY(${y * progress}px) 
              rotate(${rotRight * progress}deg)
            `.trim();
            }
          }
        });
      });

      // Additional scroll-triggered animations
      const Settings = {
        trigger: ".main",
        start: "top center",
        end: isMobile ? "25% center" : "50% center",
        invalidateOnRefresh: true,
        scrub: true,
        markers: true,
        toggleActions: "play reverse play reverse"
      };

      gsap.fromTo(".logo", {
        scale: 0,
        visibility: "hidden"
      }, {
        scale: isMobile ? 2 : 3,
        duration: 0.5,
        ease: "power1.out",
        visibility: "visible",
        scrollTrigger: Settings
      });

      gsap.to(".line p", {
        y: 0,
        stagger: 0.5,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: Settings
      });

      gsap.fromTo(btnCont.current,
        {
          scale: 0,
          opacity: 0,
          visibility: "hidden"
        }, {
        scale:  1,
        visibility: "visible",
        y: 0,
        opacity: 1,
        delay: 0.25,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: Settings
      });

      ScrollTrigger.refresh();

      return () => {
        // ✅ Clean up everything created within matchMedia
        context.revert(); // revert media match context
      };
    });

    return () => {
      ScrollTrigger.killAll(); // extra fallback
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
    <section className="main !pr-24 !pl-24 !pb-48 max-md:!h-[100vh] max-md:!pb-0 max-md:!mt-20 !mt-100 flex-col !w-[100vw] h-[150vh] relative flex justify-center items-center text-white">
      <div className="mainCont absolute flex items-center max-md:!top-[55%] top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex-col">
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
        <div className="btn" ref={btnCont}>
          <Button innerTxt={'Explore Work'} />
        </div>
      </div>
      {generaTeRows()}
      {/* <div className="row relative !mt-4 max-md:!mb-3 !mb-4 w-[100vw] !ml-0 !mr-0 max-md:!gap-1 !gap-8 flex justify-center pointer-events-none" >
        <div className="card-left w-[38%] max-md:w-[50%] relative rounded-md overflow-hidden will-change-transform">
          <div className="img ">
            <Image src={`/assets/dribble1.jpeg`} className="!w-full !h-full rounded-4xl max-md:rounded-xl" width={100} height={100} alt="Work Images" />
          </div>
        </div>
        <div className="card-right w-[38%]  max-md:w-[50%] relative rounded-md overflow-hidden will-change-transform">
          <div className="img ">
            <Image src={`/assets/dribble2.jpeg`} className="!w-full !h-full rounded-4xl max-md:rounded-xl" width={100} height={100} alt="Work Images" />
          </div>
        </div>
      </div>
      <div className="row relative !mt-4 max-md:!mb-3 !mb-4 w-[100vw] !ml-0 !mr-0 max-md:!gap-1 !gap-8 flex justify-center pointer-events-none" >
        <div className="card-left w-[38%] max-md:w-[50%] relative rounded-md overflow-hidden will-change-transform">
          <div className="img ">
            <Image src={`/assets/dribble3.jpeg`} className="!w-full !h-full rounded-4xl max-md:rounded-xl" width={100} height={100} alt="Work Images" />
          </div>
        </div>
        <div className="card-right w-[38%]  max-md:w-[50%] relative rounded-md overflow-hidden will-change-transform">
          <div className="img ">
            <Image src={`/assets/dribble4.jpeg`} className="!w-full !h-full rounded-4xl max-md:rounded-xl" width={100} height={100} alt="Work Images" />
          </div>
        </div>
      </div>
      <div className="row relative !mt-4 max-md:!mb-3 !mb-4 w-[100vw] !ml-0 !mr-0 max-md:!gap-1 !gap-8 flex justify-center pointer-events-none" >
        <div className="card-left w-[38%] max-md:w-[50%] relative rounded-md overflow-hidden will-change-transform">
          <div className="img ">
            <Image src={`/assets/dribble5.jpeg`} className="!w-full !h-full rounded-4xl max-md:rounded-xl" width={100} height={100} alt="Work Images" />
          </div>
        </div>
        <div className="card-right w-[38%]  max-md:w-[50%] relative rounded-md overflow-hidden will-change-transform">
          <div className="img ">
            <Image src={`/assets/dribble6.jpeg`} className="!w-full !h-full rounded-4xl max-md:rounded-xl" width={100} height={100} alt="Work Images" />
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default Dribble