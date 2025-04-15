'use client'
import FluidEffect from "@/components/Fluid/Fluid";
import FluidDispatcher from "@/components/Fluid/FluidDispatcher";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Preloader from "@/components/Loader/loader";
import ReactLenis from "lenis/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function bringFluidForwardOnHover(selector = 'button') {
  const targets = document.querySelectorAll(selector);

  targets.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      // Store the original z-index safely
      el.dataset.prevZIndex = el.style.zIndex;

      // Drop z-index to go under canvas (make sure canvas is z-[10] or more)
      el.style.zIndex = '0'; // ensure stacking context
    });

    el.addEventListener('mouseleave', () => {
      el.style.zIndex = el.dataset.prevZIndex;
    });
  });
}

export default function Home() {
  const preloaderRef = useRef();
  useEffect(() => {
    preloaderRef.current?.startAnimation();
    // bringFluidForwardOnHover('*');
  }, [])

  return (
    <ReactLenis root>
      <div className="container z-1 relative" id="smooth-wrapper">
        <Preloader ref={preloaderRef} />
        <Header />
        <main>
          <Hero />
        </main>
      </div>
      <FluidDispatcher />
      <FluidEffect />
    </ReactLenis>
  );
}
