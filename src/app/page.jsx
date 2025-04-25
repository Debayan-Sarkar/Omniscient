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
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const preloaderRef = useRef();
  useEffect(() => {
    preloaderRef.current?.startAnimation();
  
    const works = gsap.utils.toArray('.workSec');
  
    works.forEach((work, index) => {
      const image = work.querySelector('.img img');
      const info = work.querySelector('.info');
  
      if (!image || !info) return;
  
      gsap.from(image, {
        x: index % 2 === 0 ? 0.5 * image.clientWidth : -0.5 * image.clientWidth,
        rotate: index % 2 === 0 ? 10 : -10,
        ease: 'power1.in',
        scrollTrigger: {
          trigger: work,
          start: 'top center',
          end: `+=${window.innerHeight}`,
          scrub: true,
          markers: false
        }
      });
  
      gsap.set(info, { yPercent: -5 });
  
      gsap.from(info, {
        yPercent: 55,
        duration: 2,
        ease: 'power2.in',
        scrollTrigger: {
          trigger: info,
          start: 'top center',
          end: `+=${window.innerHeight}`,
          scrub: true,
          markers: false
        }
      });
    });
  }, []);

  return (
    <ReactLenis root options={{ smooth: true, smoothTouch: false, touchMultiplier: 2 }} onScroll={(e) => console.log(e)}>
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
                <span className="text-[218px] !ml-1.5 leading-40 block"> work</span>
              </div>
              <div className="bottom flex w-full justify-between items-center">
                <div className="">
                  <span className="block syne text-3xl">In the creative wilderness, </span>
                  <span className="block syne text-3xl">clients find our work truly  </span>
                  <span className="block syne text-3xl">beloved. </span>
                </div>
                <button className="snakeBorder syne heroBtn !p-4 w-43 rounded-full transition-all duration-300 ease-linear cursor-pointer">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Explore Work
                </button>
              </div>
            </div>
            <div className="workSec flex justify-between items-center !mt-30">
              <div className="info w-[50%]">
                <h1 className="text-7xl">ovrmelt</h1>
                <h4 className="syne text-xl">Social Media Revamp</h4>
                <button className="snakeBorder syne heroBtn !p-4 w-43 rounded-full transition-all duration-300 ease-linear cursor-pointer">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Explore Work
                </button>
              </div>
              <div className="img w-[50%]">
                <Image src={'/assets/work.webp'} className="w-full rounded-2xl" width={100} height={100} alt="Work Images" />
              </div>
            </div>
            <div className="workSec flex justify-between items-center">
              <div className="img w-[50%]">
                <Image src={'/assets/work2.webp'} className="w-full rounded-2xl" width={100} height={100} alt="Work Images" />
              </div>
              <div className="info text-end w-[50%]">
                <h1 className="text-7xl">kothari construction
                  company</h1>
                <h4 className="syne text-xl">Lead Generation Success</h4>
                <button className="snakeBorder syne heroBtn !p-4 w-43 rounded-full transition-all duration-300 ease-linear cursor-pointer">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Explore Work
                </button>
              </div>
            </div>
            <div className="workSec flex justify-between items-center">
              <div className="info w-[50%]">
                <h1 className="text-7xl">vastram</h1>
                <h4 className="syne text-xl">Complete Branding Overhaul</h4>
                <button className="snakeBorder syne heroBtn !p-4 w-43 rounded-full transition-all duration-300 ease-linear cursor-pointer">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Explore Work
                </button>
              </div>
              <div className="img w-[50%]">
                <Image src={'/assets/work3.webp'} className="w-full rounded-2xl" width={100} height={100} alt="Work Images" />
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
                <span className="block syne text-3xl">Omniscient Ltd is a premier marketing agency </span>
                <span className="block syne text-3xl">dedicated to transforming your business vision</span>
                <span className="block syne text-3xl">into a lasting brand legacy through </span>
                <span className="block syne text-3xl"> strategic marketing and creative </span>
                <span className="block syne text-3xl">excellence.</span>
              </div>
            </div>
            <div className="ml-auto w-full flex flex-col">
              <span className="syne text-xl !mt-5">At Omniscient.ltd, we specialize in crafting compelling brand identities, delivering innovative marketing strategies, and creating creative designs to elevate your business.</span>
              <button className="snakeBorder syne heroBtn !p-4 w-43 rounded-full transition-all duration-300 ease-linear cursor-pointer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                About Us
              </button>
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
