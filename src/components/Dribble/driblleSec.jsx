'use client'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.clearScrollMemory();

function Dribble() {


  useEffect(() => {
    const Settings = {
      trigger: ".main",
      start: "top top",
      end: "50% center",
      invalidateOnRefresh: true,
      scrub: true,
      markers: false,
      toggleActions: "play reverse play reverse",
    };

    const leftXValues = [-600, -400, -300];
    const rightXValues = [600, 400, 300];
    const leftRotateValues = [-45, -20, -35];
    const rightRotateValues = [45, 20, 35];
    const yValues = [150, -200, -400];

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

    gsap.to(".logo", {
      scale: 3,
      duration: 0.5,
      ease: "power1.out",
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
    return () => {
      ScrollTrigger.killAll(false);
    };
  }, []);
  const generaTeRows = () => {
    const rows = [];
    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div className="row relative !mt-4 !mb-4 w-[100vw] !ml-0 !mr-0 !gap-8 flex justify-center pointer-events-none" key={i}>
          <div className="card-left w-[38%]  relative  rounded-md overflow-hidden will-change-transform">
            <div className="img ">
              <Image src={`/assets/dribbble${2 * i - 1}.webp`} className="!w-full !h-full rounded-4xl" width={100} height={100} alt="Work Images" />
            </div>
          </div>
          <div className="card-right w-[38%]   relative rounded-md overflow-hidden will-change-transform">
            <div className="img ">
              <Image src={`/assets/dribbble${2 * i}.webp`} className="!w-full !h-full rounded-4xl" width={100} height={100} alt="Work Images" />
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
          <Image src={'/assets/dribble.webp'} className="dribbleImg " width={100} height={100} alt="Dribble" />
        </div>
        <div className="copy syne !mt-8 !mb-8 !ml-0 !mr-0 flex flex-col items-center justify-center">
          <div className="line">
            <p>Delve into coding without clutter.</p>
          </div>
          <div className="line"><p>One subscription</p></div>
          <div className="line"><p>take the fast lane to mastery</p></div>
        </div>
        <div className="btn">
          <button className="snakeBorder syne heroBtn !p-4 w-43 rounded-full transition-all duration-300 ease-linear cursor-pointer">
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