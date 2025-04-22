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
          <section className="!mt-65 !pr-24 !pl-24 text-white">
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
                <Image src={'/assets/work.webp'} className="w-full" width={100} height={100} alt="Work Images" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="img w-[50%]">
                <Image src={'/assets/work2.webp'} className="w-full" width={100} height={100} alt="Work Images" />
              </div>
              <div className="text-end w-[50%]">
                <h1 className="text-7xl">imusic</h1>
                <h4 className="syne text-xl">Research,UX,UI Design</h4>
                <button className="w-45">explore work</button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="left w-[50%]">
                <h1 className="text-7xl">technis</h1>
                <h4 className="syne text-xl"> UX,UI Design, Development</h4>
                <button className="w-45">explore work</button>
              </div>
              <div className="img w-[50%]">
                <Image src={'/assets/work3.webp'} className="w-full" width={100} height={100} alt="Work Images" />
              </div>
            </div>
          </section>
          <section className="!pr-24 !pl-24 text-white">
            <div className="flex flex-col">
              <div className="top">
                <span className="text-[218px] leading-40 block">who</span>
                <span className="text-[218px] leading-40 block">we are</span>
              </div>
              <div className="bottom">
                <span className="block syne text-3xl">As an award-winning agency </span>
                <span className="block syne text-3xl">within the digital jungle, TRIONN</span>
                <span className="block syne text-3xl"> <sup>®</sup> transcends aesthetics, crafting </span>
                <span className="block syne text-3xl">your vision into a legacy that </span>
                <span className="block syne text-3xl">endures.</span>
              </div>
            </div>
            <div className="ml-auto w-full">
              <span className="syne">We roar with creativity, staying updated with the latest tech to make your brand a formidable force in the digital wilderness and deliver exceptional website and app experiences.</span>
           <button className="syne">About Us</button>
            </div>
          </section>
          <section className="!pr-24 !pl-24">
            recent work
          </section>
          <section className="!pr-24 !pl-24">
            recent work
          </section>
          <section className="!pr-24 !pl-24">
            recent work
          </section>
          <section className="!pr-24 !pl-24">
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
