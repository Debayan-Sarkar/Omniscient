'use client'
import FluidEffect from "@/components/Fluid/Fluid";
import FluidDispatcher from "@/components/Fluid/FluidDispatcher";
import MouseEffect from "@/components/Fluid/Mouse";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Preloader from "@/components/Loader/loader";
import Video from "@/components/VideoSec/Video";
import ReactLenis from "lenis/react";
import Image from "next/image";
import { useEffect, useRef } from "react";



export default function Home() {
  const preloaderRef = useRef();
  useEffect(() => {
    preloaderRef.current?.startAnimation();
  }, [])

  return (
    <ReactLenis root>
      <div className="container z-1 relative" id="smooth-wrapper">
        <Preloader ref={preloaderRef} />
        <Header />
        <main>
          <Hero />
          <Video />
          <section className="work">
            <div className="flex flex-col">
              <span className="text-4xl"> recent work</span>
              <div className="bottom">
                <span>In the creative wilderness, </span>
                <span>clients find our work truly  </span>
                <span>beloved. </span>
              </div>
            </div>
            <div className="flex justify-between items-center">

            </div>
          </section>
          <section className="work">

          </section>
          <section className="work">
            recent work
          </section>
          <section className="work">
            recent work
          </section>
          <section className="work">
            recent work
          </section>
          <section className="work">
            recent work
          </section>
        </main>
      </div>
      <FluidDispatcher />
      <MouseEffect />
      <FluidEffect />
    </ReactLenis>
  );
}
