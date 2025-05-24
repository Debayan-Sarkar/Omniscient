import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { BsDashLg } from "react-icons/bs";
import { useGSAP } from '@gsap/react';

const AutoSlider = ({ items, rtl = false, mt = 40 }) => {
  const marqueeRef = useRef(null);

  useGSAP(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const marquee_parts = marquee.querySelectorAll(".marquee_part");
    const marquee_inner = marquee.querySelector(".marquee_inner");

    let currentScroll = 0;
    let scrollingDown = true;

    const tween = gsap.to(marquee_parts, {
      xPercent: rtl ? -100 : 100,
      duration: 5,
      repeat: -1,
      ease: "linear"
    }).totalProgress(0.5);

    gsap.set(marquee_inner, { xPercent: -50 });

    const onScroll = () => {
      const newScroll = window.pageYOffset;
      scrollingDown = newScroll > currentScroll;
      gsap.to(tween, {
        timeScale: scrollingDown ? 1 : -1,
        overwrite: true
      });
      currentScroll = newScroll;
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      tween.kill();
    };
  }, [rtl]);

  return (
    <section
      ref={marqueeRef}
      className={`relative overflow-hidden text-white marquee !h-fit !pr-24 !pl-24 max-md:!pr-[0rem] max-md:!pl-[0rem]  uppercase !mt-${mt === 40 ? "40" : mt} text-6xl`}
    >
      <div className="marquee_inner flex w-fit flex-auto row">
        {items.map((item, index) => (
          <div
            key={index}
            className="marquee_part syne flex items-center flex-shrink-0 "
          >
            {item.txt}
            <div className="arrow w-[60px] h-[80px] !m-[0_2rem] !mr-[3rem] transition-all duration-1000 ease-[cubic-bezier(0.075,0.82,0.165,1)]">
              <BsDashLg size={80} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AutoSlider;
