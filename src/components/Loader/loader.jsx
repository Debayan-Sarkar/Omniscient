'use client';

import { useRef, forwardRef, useImperativeHandle } from 'react';
import gsap from 'gsap';

const Preloader = forwardRef((props, ref) => {
  const preloaderRef = useRef();

  useImperativeHandle(ref, () => ({
    startAnimation() {
      const tl = gsap.timeline();

      tl.set(preloaderRef.current, {
        y: '100%',
      });

      tl.fromTo(
        preloaderRef.current,
        { y: '100%' },
        {
          y: '0%',
          scale: 2,
          duration: 1,
          ease: 'power3.in',
          onStart: () => {
            preloaderRef.current.classList.remove('invisible', 'opacity-0');
            preloaderRef.current.classList.add('!rounded-t-full');
            preloaderRef.current.classList.remove('!rounded-b-full');
          },
          
        }
      ).to(preloaderRef.current, {
        y: '-100%',
        scale: 0,
        duration: 1,
        ease: 'power2.inOut',
        onStart: () => {
          preloaderRef.current.classList.remove('!rounded-t-full');
          preloaderRef.current.classList.add('!rounded-b-full');
        },
        onComplete: () => {
          preloaderRef.current.classList.add('invisible', 'opacity-0');
        },
      });
    },
  }));

  return (
    <div
      ref={preloaderRef}
      className="preloader bg-[#333] fixed top-0 left-0 right-0 h-full z-50 !rounded-t-full invisible opacity-0"
    />
  );
});

export default Preloader;
