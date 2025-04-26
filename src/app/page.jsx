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
import SplitType from "split-type";
import Dribble from "@/components/Dribble/driblleSec";


gsap.registerPlugin(ScrollTrigger);
function random(min, max, skew = 1) {
  let num = Math.random();
  if (skew !== 1) {
    num = Math.pow(num, skew);
  }
  return Math.floor(min + (max - min) * num);
}
export default function Home() {
  const preloaderRef = useRef();


  useEffect(() => {
    preloaderRef.current?.startAnimation();

    const works = gsap.utils.toArray('.workSec');
    const acheved = gsap.utils.toArray('.acheved');
    const SplitTexts = gsap.utils.toArray('.fill-text');

    const split = new SplitType(".RecWork h3");

    const lines = document.querySelectorAll('.RecWork span');

    lines.forEach((line, index) => {
      gsap.set(line, { display: 'block', position: 'relative', textAlign: 'start' });

      gsap.to(line, {
        backgroundPositionX: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: ".workSec",
          start: "center center",
          end: "bottom center",
          scrub: true,
          markers: true
        }
      });

      gsap.from(line, {
        x: random(300, -300, 40),
        ease: "none",
        scrollTrigger: {
          trigger: ".workSec",
          start: "center center",
          end: "bottom center",
          scrub: true,
          markers: true
        }
      });
    });




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




    let r = document.querySelector(".acheved");
    let r1 = document.querySelector(".acheved1");
    let r2 = document.querySelector(".acheved2");
    let r3 = document.querySelector(".acheved3");

    gsap.from(r, {
      x: "-100%",
      rotate: -45,
      ease: 'power1.in',
      scrollTrigger: {
        trigger: r,
        start: 'top center',
        end: `+=${window.innerHeight}`,
        scrub: true,
        markers: false
      }
    });
    gsap.from(r1, {
      x: "100%",
      rotate: 45,
      ease: 'power1.in',
      scrollTrigger: {
        trigger: r1,
        start: 'top center',
        end: `+=${window.innerHeight}`,
        scrub: true,
        markers: false
      }
    });
    gsap.from(r2, {
      x: "-100%",
      rotate: -45,
      ease: 'power1.in',
      scrollTrigger: {
        trigger: r,
        start: 'top center',
        end: `+=${window.innerHeight}`,
        scrub: true,
        markers: false
      }
    });
    gsap.from(r3, {
      x: "100%",
      rotate: 45,
      ease: 'power1.in',
      scrollTrigger: {
        trigger: r3,
        start: 'top center',
        end: `+=${window.innerHeight}`,
        scrub: true,
        markers: false
      }
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
            <div className="flex flex-col scrfff">
              <div className="RecWork">
                <h3>
                  <span className="fill-text block text-[218px] !leading-48">recent</span>
                  <span className="fill-text block text-[218px] !leading-48 ml-1.5">work</span>
                </h3>
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
            <div className="workSec flex justify-between items-center !mt-28 gap-2.5">
              <div className="info w-[40%]">
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
              <div className="img w-[60%]">
                <Image src={'/assets/ovrmelt.jpeg'} className="w-full rounded-2xl" width={100} height={100} alt="Work Images" />
              </div>
            </div>
            <div className="workSec flex justify-between items-center !mt-28 gap-2.5">
              <div className="img w-[60%]">
                <Image src={'/assets/kcc.jpeg'} className="w-full rounded-2xl" width={100} height={100} alt="Work Images" />
              </div>
              <div className="info text-end w-[40%]">
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
            <div className="workSec flex justify-between items-center !mt-28 gap-2.5">
              <div className="info w-[40%]">
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
              <div className="img w-[60%]">
                <Image src={'/assets/vastram.jpeg'} className="w-full rounded-2xl" width={100} height={100} alt="Work Images" />
              </div>
            </div>
            <div className="workSec flex justify-between items-center !mt-28 gap-3">
              <div className="img w-[60%]">
                <Image src={'/assets/work3.webp'} className="w-full rounded-2xl" width={100} height={100} alt="Work Images" />
              </div>
              <div className="info w-[40%]">
                <h1 className="text-7xl">isha jewellers</h1>
                <h4 className="syne text-xl">Crafted a premium festive campaign strategy, enhancing their brand aura and driving seasonal sales</h4>
                <button className="snakeBorder syne heroBtn !p-4 w-43 rounded-full transition-all duration-300 ease-linear cursor-pointer">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Explore Work
                </button>
              </div>
            </div>
          </section>
          <section className="!pr-24 !pl-24 text-white !mt-90">
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
            <div className="ml-auto w-full flex flex-col gap-2.5">
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
          <section className="!pr-24 !pl-24 !pb-48 !mt-50 overflow-hidden">
            <div className="achvedCont grid grid-cols-2 !gap-6">
              <div className="acheved bg-[#1f202266] rounded-2xl z-0 !p-14 hover:bg-amber-700 text-white transition-all duration-300 ease-linear cursor-pointer">
                <div className="acchheWrap">
                  <div className="nums !mb-16 text-8xl">
                    <span>1</span>
                    <span>0</span>
                    <span>0</span>
                    <span>0</span>
                    <sup>+</sup>
                  </div>
                  <div className="flex items-center justify-end text-5xl">
                    successful <br />
                    campaigns
                  </div>
                </div>
              </div>
              <div className="acheved1 bg-[#1f202266] rounded-2xl z-0 !p-14 !mt-40 !-mb-40 hover:bg-green-500 text-white transition-all duration-300 ease-linear cursor-pointer">
                <div className="acchheWrap">
                  <div className="nums !mb-16 text-8xl">
                    <span>1</span>
                    <span>0</span>
                    <span>0</span>
                    <sup>+</sup>
                  </div>
                  <div className="flex items-center justify-end text-5xl">
                    satisfied<br />
                    clients
                  </div>
                </div>
              </div>
              <div className="acheved2 bg-[#1f202266] rounded-2xl z-0 !p-14 hover:bg-yellow-200 text-white hover:text-black transition-all duration-300 ease-linear cursor-pointer">
                <div className="acchheWrap">
                  <div className="nums !mb-16 text-8xl">
                    <span>2</span>
                    <span>0</span>
                    <sup>+</sup>
                  </div>
                  <div className="flex items-center justify-end text-5xl">
                    creative<br />
                    designs
                  </div>
                </div>
              </div>
              <div className="acheved3 bg-[#1f202266] rounded-2xl z-0 !p-14 !mt-40 !-mb-40 hover:bg-yellow-500 hover:text-black text-white transition-all duration-300 ease-linear cursor-pointer">
                <div className="acchheWrap">
                  <div className="nums !mb-16 text-8xl">
                    <span>2</span>
                    <span>0</span>
                    <sup>+</sup>
                  </div>
                  <div className="flex items-center justify-end text-5xl">
                    creative<br />
                    designs
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="!pr-24 !pl-24">
            <div className="testimonialCont">
              <div className="texths flex justify-between items-end text-white">
                <h1 className=" !leading-24">
                  <span className="block text-start text-[117px] ">partner</span>
                  <span className="block text-start text-[117px] ">love</span>
                </h1>
                <h4 className="syne text-2xl">
                  <div>
                    <div>Take heed, as the </div>
                  </div>
                  <div>
                    <div>lion's roar in our client </div>
                  </div>
                  <div>
                    <div>reviews resounds.</div>
                  </div>
                </h4>
              </div>
            </div>
          </section>
          {/* <Dribble /> */}
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
