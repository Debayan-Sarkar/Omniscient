'use client'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger);

function Dribble() {
  useEffect(() => {
    const Settings = {
      trigger: ".triggerCont",
      start: "top 25%",
      toggleActions: "play reverse play reverse",
    }
    const leftXValues = [-800, -900, -400];
    const rightXValues = [800, 900, 400];
    const leftRotateValues = [-30, -20, -35];
    const rightRotateValues = [30, 20, 35];
    const yValues = [100, -150, -400];
    for (let i = 1; i <= 6; i++) {
      const el = document.querySelector(`.imgPosts${i}`);
      if (!el) continue;
  
      let x = 0, y = 0, rotate = 0;
  
      if (i % 2 === 1) { 
        // odd posts: 1, 3, 5
        x = -0.2 * i; // -0.4, -0.6, -0.15 (customize if you want more precision)
        rotate = -15 * i; // -45, -35, -30 (close enough, or adjust manually)
        y = (i === 5) ? -0.3 : (i === 1 ? 0.5 : 0);
      } else { 
        // even posts: 2, 4, 6
        x = 0.2 * i; // 0.4, 0.6, 0.15
        rotate = 15 * i; // 45, 35, 30
        y = (i === 6) ? -0.3 : (i === 2 ? 0.5 : 0);
      }
  
      gsap.timeline({
        scrollTrigger: {
          trigger: ".dribble_post",
          start: "top center",
          end: y === 0 ? "bottom -100%" : "bottom center",
          scrub: true,
          markers: false,
          invalidateOnRefresh: true
        }
      }).to(el, {
        x: () => x * window.innerWidth,
        y: () => y * window.innerHeight,
        rotate: () => rotate
      });
    }
  
  })
  const generaTeRows = () => {
    const rows = [];
    for (let i = 1; i <= 6; i++) {
      rows.push(
        <div className={`imgPosts${i}`} key={i}>
          <Image src={`/assets/dribble${i}.jpeg`} className="w-full rounded-2xl" width={100} height={100} alt="Work Images" />
        </div>
      )
    }
    return rows;

  }

  return (
    <section className="triggerCont !pr-24 !pl-24 !pb-48 !mt-50 overflow-hidden flex justify-center items-center text-white">
      <div className="cont w-full">
        <div className="dribwrap w-full flex justify-center items-center absolute left-0 bottom-[10%] flex-col">
          <div className="img">
            <Image src={'/assets/dribble.webp'} className="dribbleImg" width={100} height={100} alt="Dribble" />
          </div>
          <div className="right flex flex-col items-center justify-center text-center">
            <p className="dribbleText text-2xl syne">In the creative wilderness, clients find our work truly beloved.</p>
            <button className="snakeBorder syne heroBtn !p-4 w-43 rounded-full transition-all duration-300 ease-linear cursor-pointer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Explore Work
            </button>
          </div>
        </div>
        <div className="dribble_post grid grid-cols-2 !gap-10">
          {generaTeRows()}
        </div>
      </div>
    </section>
  )
}

export default Dribble;