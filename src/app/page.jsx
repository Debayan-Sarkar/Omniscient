'use client'
import FluidEffect from "@/components/Fluid/Fluid";
import FluidDispatcher from "@/components/Fluid/FluidDispatcher";
import MouseEffect from "@/components/Fluid/Mouse";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Preloader from "@/components/Loader/loader";
import { useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from "split-type";
import Dribble from "@/components/Dribble/driblleSec";
import Work from "@/components/Work/work";
import { random } from "@/components/Functions/Functions";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);


export default function Home() {
  const preloaderRef = useRef();
  const contnt = useRef();
  const wrapper = useRef();
  const TriggerRef = useRef();
  const aTriggerRef = useRef();
  setTimeout(() => {
    ScrollTrigger.refresh(false);
    ScrollSmoother.refresh(false);
  }, 500);
  useGSAP(() => {
    const handleResize = () => ScrollTrigger.refresh(false);
    window.addEventListener('resize', handleResize);
    const ctx = gsap.context(() => {
      ScrollTrigger.clearScrollMemory();
      ScrollSmoother.create({
        wrapper: wrapper.current,
        content: contnt.current,
        smooth: 2.2,
        effects: true,
        smoothTouch: 0.8
      });
    }, wrapper);


    return () => { ctx.revert(); window.removeEventListener('resize', handleResize); }
  }, []);


  useGSAP(() => {
    window.scrollTo(0, 0);
    const split = new SplitType(".Weare h3");
    const lines = document.querySelectorAll('.Weare span');
    lines.forEach((line, index) => {
      gsap.set(line, { display: 'block', position: 'relative', textAlign: 'start' });

      gsap.to(line, {
        backgroundPositionX: "0%",
        ease: "power1",
        scrollTrigger: {
          trigger: TriggerRef.current,
          start: "top center",
          end: "95% center",
          scrub: true,
          invalidateOnRefresh: true,
          markers: true
        }
      });

      gsap.from(line, {
        x: random(300, -300, 80),
        ease: "power1",
        scrollTrigger: {
          trigger: TriggerRef.current,
          start: "top center",
          end: "95% center",
          scrub: true,
          invalidateOnRefresh: true,
          markers: false
        }
      });
    });
    const alines = document.querySelectorAll('.texths h3 span');
    alines.forEach((line, index) => {
      gsap.set(line, { display: 'block', position: 'relative', textAlign: 'start' });

      gsap.to(line, {
        backgroundPositionX: "0%",
        ease: "power1",
        scrollTrigger: {
          trigger: aTriggerRef.current,
          start: "top center",
          end: "100% center",
          scrub: true,
          invalidateOnRefresh: true,
          markers: false
        }
      });

      gsap.from(line, {
        x: random(300, -300, 80),
        ease: "power1",
        scrollTrigger: {
          trigger: aTriggerRef.current,
          start: "top center",
          end: "100% center",
          scrub: true,
          invalidateOnRefresh: true,
          markers: false
        }
      });
    });
    ['acheved', 'acheved1', 'acheved2', 'acheved3'].forEach((cls, index) => {
      const el = document.querySelector(`.${cls}`);
      if (!el) return;

      gsap.from(el, {
        x: index % 2 === 0 ? '-100%' : '100%',
        rotate: index % 2 === 0 ? -45 : 45,
        ease: 'power1.in',
        scrollTrigger: {
          trigger: el,
          start: 'top center',
          end: '95% center',
          scrub: true,
        },
      });
    });
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.killAll(false);
    };

  }, []);

  return (
    <>
      <div className="container z-1 relative !overflow-hidden" id="smooth-wrapper" ref={wrapper}>

        <Header />
        <main ref={contnt}>
          <Hero />

          <Work />
          <section className="!pr-24 !pl-24 max-md:!pr-1.5 max-md:!pl-1.5 text-white !mt-90 max-md:!mt-40" ref={TriggerRef}>
            <div className="flex flex-col">
              <div className="top Weare">
                <h3>
                  <span className="fill-text text-[218px] max-md:!text-[51px] max-md:!h-10 max-md:!leading-[50px] leading-50 block">who</span>
                  <span className="fill-text text-[218px] max-md:!text-[51px] max-md:!h-10 max-md:!leading-[50px] leading-50 block">we are</span>
                </h3>
              </div>
              <div className="bottom !mt-[10px] w-[560px] max-md:!w-full" >
                <span className="block syne text-3xl max-md:text-[18px]">Omniscient Ltd is a premier</span>
                <span className="block syne text-3xl max-md:text-[18px]"> marketing agency dedicated to transforming your business</span>
                <span className="block syne text-3xl max-md:text-[18px]">into a lasting brand legacy</span>
                <span className="block syne text-3xl max-md:text-[18px]">through strategic marketing</span>
                <span className="block syne text-3xl max-md:text-[18px]">and Creative Excellence.</span>
              </div>
              <p className="syne text-[13px] !mt-2 text-gray-200 w-[315px] max-md:!w-full">At Omniscent.Ltd, with innovation—harnessing the latest technology to transform your brand into a dominant force in the digital world. From standout portfolios to seamless marketings, we craft solutions that leave a lasting impact</p>
            </div>
            <div className="ml-auto w-full flex flex-col gap-2.5 !mt-2">
              <button className="snakeBorder syne heroBtn !p-4 w-43 rounded-full transition-all duration-300 ease-linear cursor-pointer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                About Us
              </button>
            </div>
          </section>
          <section className="!pr-24 !pl-24  max-md:!pr-0 max-md:!pl-0 !pb-48 !mt-50 overflow-hidden">
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
                <h3>
                  <span className="fill-text text-[218px] max-md:!text-[51px] max-md:!h-10 max-md:!leading-[50px] leading-50 block">partner</span>
                  <span className="fill-text text-[218px] max-md:!text-[51px] max-md:!h-10 max-md:!leading-[50px] leading-50 block" ref={aTriggerRef}>love</span>
                </h3>

                <h4 className=" syne text-2xl" >
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
          <Dribble />
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
    </>
  );
}
