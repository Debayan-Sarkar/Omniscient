import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const AutoSlider = ({ items = [], rtl = false, speed = 100 }) => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;

    if (!wrapper || !content) return;

    const distance = content.offsetWidth / 2; // since items are duplicated twice

    // Reset any previous animations
    gsap.set(content, { x: 0 });

    tweenRef.current = gsap.to(content, {
      x: rtl ? `+=${distance}` : `-=${distance}`,
      duration: speed,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % distance),
      },
    });

    return () => tweenRef.current?.kill();
  }, [items, rtl, speed]);

  // Render the items duplicated at least twice for a clean loop
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div ref={wrapperRef} className="overflow-hidden w-full relative">
      <div
        ref={contentRef}
        className="flex gap-8 whitespace-nowrap will-change-transform"
      >
        {repeatedItems.map((item, i) => (
          <div className="flex items-center" key={i}>
            <div className="text-5xl font-bold text-white">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
