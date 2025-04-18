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
          <section className="work text-white">
            <div className="flex flex-col">
              <div className="top">
                <span className="text-[218px] leading-40 block"> recent </span>
                <span className="text-[218px] leading-40 block"> work</span>
              </div>
              <div className="bottom">
                <span className="block syne text-3xl">In the creative wilderness, </span>
                <span className="block syne text-3xl">clients find our work truly  </span>
                <span className="block syne text-3xl">beloved. </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="left w-[50%]">
                <h1 className="text-7xl">loftloom</h1>
                <h4 className="syne text-xl">UI Design, UX, Wireframe</h4>
                <button className="w-45">explore work</button>
              </div>
              <div className="img w-[50%]">
                <Image src={'/assets/work.webp'} className="w-full" width={100} height={100} alt="Work Images"/>
              </div>
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
