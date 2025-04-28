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
    const container = document.querySelector(".dribble_post");

    const posts = [
      { selector: ".imgPosts1", x: -0.4, y: 0.5, rotate: -45 },
      { selector: ".imgPosts2", x: 0.4, y: 0.5, rotate: 45 },
      { selector: ".imgPosts3", x: -0.6, y: 0, rotate: -35 },
      { selector: ".imgPosts4", x: 0.6, y: 0, rotate: 35 },
      { selector: ".imgPosts5", x: -0.15, y: -0.1, rotate: -30 },
      { selector: ".imgPosts6", x: 0.15, y: -0.1, rotate: 30 }
    ];
  
    posts.forEach(({ selector, x, y, rotate }) => {
      const el = document.querySelector(selector);
      if (!el) return;
  
      gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "100% center",
          scrub: true,
          markers: true,
          invalidateOnRefresh: true
        }
      }).to(el, {
        x: () => x * window.innerWidth,
        y: () => y * window.innerHeight,
        rotate: () => rotate
      });
    });
  
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