import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const TextSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".slide");
      const slideWidth = 300; // Width of each slide in px (adjust if needed)

      const tl = gsap.timeline({ repeat: -1 });

      slides.forEach((_, i) => {
        tl.to(sliderRef.current, {
          x: -slideWidth * i,
          duration: 0.5,
          ease: "power2.inOut",
        }, `+=0.5`);
      });

      // Reset back to first slide
      tl.to(sliderRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power2.inOut",
      }, "+=0.5");

    }, sliderRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-[300px] overflow-hidden relative bg-black text-white rounded-lg">
      <div
        ref={sliderRef}
        className="flex whitespace-nowrap absolute top-0 left-0"
      >
        <div className="slide w-[300px] h-[100px] flex items-center justify-center text-2xl font-bold">
          Creativity is power.
        </div>
        <div className="slide w-[300px] h-[100px] flex items-center justify-center text-2xl font-bold">
          Design that speaks.
        </div>
        <div className="slide w-[300px] h-[100px] flex items-center justify-center text-2xl font-bold">
          Ideas turned real.
        </div>
        <div className="slide w-[300px] h-[100px] flex items-center justify-center text-2xl font-bold">
          Empower your brand.
        </div>
      </div>
    </div>
  );
};

export default TextSlider;
