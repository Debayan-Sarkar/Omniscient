'use client'
import FluidEffect from "@/components/Fluid/Fluid";
import FluidDispatcher from "@/components/Fluid/FluidDispatcher";
import MouseEffect from "@/components/Fluid/Mouse";
import Header from "@/components/Header/Header";
import { Swiper, SwiperSlide } from 'swiper/react';
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
import TextSlider from "@/components/TextSlide/Slider";
import Socials from "@/components/SocialSec/Socials";
import Image from "next/image";
import Button from "@/components/Button/btn";
import AutoSlider from "@/components/Slider/Slider";
import { MdArrowRight } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);


export default function Home() {
  const preloaderRef = useRef();
  const contnt = useRef();
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);
  const wrapper = useRef();
  const TriggerRef = useRef();
  const aTriggerRef = useRef();

  useGSAP(() => {
    const handleResize = () => ScrollTrigger.refresh(false);
    window.addEventListener('resize', handleResize);
    const ctx = gsap.context(() => {
      ScrollTrigger.clearScrollMemory();
      let smoother = ScrollSmoother.create({
        wrapper: wrapper.current,
        content: contnt.current,
        smooth: 1,
        normalizeScroll: true,
        effects: true,
        smoothTouch: 1,
      });
      setTimeout(() => {
        ScrollTrigger.refresh(false);
        smoother.refresh(false);
      }, 500);
    }, wrapper);


    return () => { ctx.revert(); window.removeEventListener('resize', handleResize); }
  }, []);


  useGSAP(() => {
    window.scrollTo(0, 0);
    const split = new SplitType(".Weare h3");
    const lines = document.querySelectorAll('.Weare span');
    const xOffsets = [500, -200];
    lines.forEach((line, index) => {
      gsap.set(line, {
        display: 'block',
        position: 'relative',
        textAlign: 'start',
      });

      const offset = xOffsets[index % xOffsets.length] || 0;

      gsap.fromTo(
        line,
        { x: offset, backgroundPositionX: "100%" },
        {
          x: 0,
          backgroundPositionX: "0%",
          scrollTrigger: {
            trigger: ".weARETrigg",
            start: () => isIOS ? "-2000% center" : "-1050% 75%",
            end: () => "90% center",
            scrub: 1,
            markers: true, // Set to true for debugging
            invalidateOnRefresh: true
          }
        }
      );
  
    });


    const alines = document.querySelectorAll('.texths h3 span');
    alines.forEach((line, index) => {
      gsap.set(line, { display: 'block', position: 'relative', textAlign: 'start' });

      gsap.to(line, {
        backgroundPositionX: "0%",
        ease: "power1",
        scrollTrigger: {
          trigger: line,
          start: isIOS ? "-120% center" : "-100% 75%",
          end: "95% center",
          scrub: 1,
          invalidateOnRefresh: true,
          markers: false
        }
      });

      gsap.from(line, {
        x: random(300, -300, 80),
        ease: "power1",
        scrollTrigger: {
          trigger: line,
          start: isIOS ? "-120% center" : "-100% 75%",
          end: "95% center",
          scrub: true,
          invalidateOnRefresh: true,
          markers: false
        }
      });
    });
    const floatUps = gsap.utils.toArray(".FloatUp");
    floatUps.forEach((floats) => {
      gsap.fromTo(floats,
        {
          y: () => window.innerHeight * 0.5
        }, {
        y: 10,
        duration: 10,
        ease: "slow(0.5,0.7,true)",
        scrollTrigger: {
          trigger: ".weARETrigg",
          start: "top center",
          end: "20% center",
          scrub: 1,
          markers: false,
          invalidateOnRefresh: true
        }
      });
    });
    gsap.utils.toArray('.count').forEach((el) => {
      const target = +el.dataset.target;

      ScrollTrigger.create({
        trigger: el,
        start: 'top 80%',
        once: false,
        scrub: 1,
        onEnter: () => {
          gsap.fromTo(el,
            { innerText: 0 },
            {
              innerText: target,
              duration: 2,
              ease: 'power1.out',
              snap: { innerText: 1 },
              onUpdate: function () {
                el.innerText = Math.floor(el.innerText).toLocaleString();
              }
            }
          );
        }
      });
    });
    gsap.utils.toArray('.acheved').forEach((el, index) => {
      gsap.from(el, {
        x: index % 2 === 0 ? '-100%' : '100%',
        rotate: index % 2 === 0 ? -45 : 45,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
          scrub: 1,
          markers: false, // turn on for debugging if needed
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
      <div className="container z-1 relative !overflow-hidden !will-change-transform" id="smooth-wrapper" ref={wrapper}>

        <Header />
        <main ref={contnt} className="!will-change-transform">
          <Hero />

          <Work TriggRef={TriggerRef} />
          <section className="!pr-24 !pl-24 max-md:!pr-1.5 max-md:!pl-1.5 text-white !mt-90 max-md:!mt-[50%] weARETrigg">
            <div className="flex flex-col !mt-[2rem]">
              <div className="top Weare">
                <h3>
                  <span className="fill-text text-[218px] max-md:!text-[51px] max-md:!h-10 max-md:!leading-[50px] leading-50 block">who</span>
                  <span className="fill-text text-[218px] max-md:!text-[51px] max-md:!h-10 max-md:!leading-[50px] leading-50 block">we are</span>
                </h3>
              </div>
              <div className="bottom !mt-[10px] w-[560px] max-md:!w-full FloatUp">
                <span className="block syne text-3xl max-md:text-[18px]">Omniscient Ltd is a premier</span>
                <span className="block syne text-3xl max-md:text-[18px]"> marketing agency dedicated to transforming your business</span>
                <span className="block syne text-3xl max-md:text-[18px]">into a lasting brand legacy</span>
                <span className="block syne text-3xl max-md:text-[18px]">through strategic marketing</span>
                <span className="block syne text-3xl max-md:text-[18px]">and Creative Excellence.</span>
              </div>
              <p className="syne text-[13px] !mt-2 text-gray-200 w-[315px] max-md:!w-full FloatUp">At Omniscent.Ltd, with innovation—harnessing the latest technology to transform your brand into a dominant force in the digital world. From standout portfolios to seamless marketings, we craft solutions that leave a lasting impact</p>
            </div>
            {/* <Button innerTxt={'About Us'}/> */}
          </section>
          <section className="!pr-24 !pl-24  max-md:!pr-1.5 max-md:!pl-1.5 !pb-48 !mt-50">
            <div className="achvedCont grid grid-cols-2 max-md:grid-cols-1 !gap-6">
              <div className="acheved max-md:!pl-[31px] max-md:!pr-[31px] max-md:!pt-[6px] max-md:!pb-[6px] bg-[#1f202266] rounded-2xl z-0 !p-14 max-md:bg-amber-700  hover:bg-amber-700 text-white transition-all duration-300 ease-linear cursor-pointer">
                <div className="acchheWrap">
                  <div className="nums !mb-16 text-8xl max-md:text-[70px] max-sm:text-[50px]">
                    <span className="count" data-target="1000">0</span><sup>+</sup>
                  </div>
                  <div className="flex items-center justify-end text-5xl max-md:text-[35px] max-sm:text-[30px]">
                    successful <br />
                    campaigns
                  </div>
                </div>
              </div>
              <div className="acheved max-md:!pl-[31px] max-md:!pr-[31px] max-md:!pt-[6px] max-md:!pb-[6px] bg-[#1f202266] rounded-2xl z-0 !p-14 max-md:!mt-0 max-md:!mb-0 !mt-40 !-mb-40 max-md:bg-green-500  hover:bg-green-500 text-white transition-all duration-300 ease-linear cursor-pointer">
                <div className="acchheWrap">
                  <div className="nums !mb-16 text-8xl max-md:text-[70px] max-sm:text-[50px]">
                    <span className="count" data-target="100">0</span><sup>+</sup>
                  </div>
                  <div className="flex items-center justify-end text-5xl max-md:text-[35px] max-sm:text-[30px]">
                    satisfied<br />
                    clients
                  </div>
                </div>
              </div>
              <div className="acheved max-md:!pl-[31px] max-md:!pr-[31px] max-md:!pt-[6px] max-md:!pb-[6px] bg-[#1f202266] rounded-2xl z-0 !p-14 max-md:bg-yellow-200 max-md:text-black hover:bg-yellow-200 text-white hover:text-black transition-all duration-300 ease-linear cursor-pointer">
                <div className="acchheWrap">
                  <div className="nums !mb-16 text-8xl max-md:text-[70px] max-sm:text-[50px]">
                    <span className="count" data-target="20">0</span><sup>+</sup>
                  </div>
                  <div className="flex items-center justify-end text-5xl max-md:text-[35px] max-sm:text-[30px]">
                    creative<br />
                    designs
                  </div>
                </div>
              </div>
              <div className="acheved max-md:!pl-[31px] max-md:!pr-[31px] max-md:!pt-[6px] max-md:!pb-[6px] bg-[#1f202266] rounded-2xl z-0 !p-14 !mt-40 !-mb-40 max-md:!mt-0 max-md:!mb-0 max-md:bg-yellow-500 max-md:text-black  hover:bg-yellow-500 hover:text-black text-white transition-all duration-300 ease-linear cursor-pointer">
                <div className="acchheWrap">
                  <div className="nums !mb-16 text-8xl max-md:text-[70px] max-sm:text-[50px]">
                    <span className="count" data-target="10">0</span><sup>+</sup>
                  </div>
                  <div className="flex items-center justify-end text-5xl max-md:text-[35px] max-sm:text-[30px]">
                    creative<br />
                    designs
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="!pr-24 !pl-24 max-md:!pr-1.5 max-md:!pl-1.5">
            <div className="testimonialCont">
              <div className="texths flex justify-between items-end text-white max-md:items-start flex-col">
                <h3>
                  <span className="fill-text text-[218px] max-md:!text-[51px] max-md:!h-10 max-md:!leading-[50px] leading-50 block">partner</span>
                  <span className="fill-text text-[218px] max-md:!text-[51px] max-md:!h-10 max-md:!leading-[50px] leading-50 block" ref={aTriggerRef}>love</span>
                </h3>

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
              <Swiper
                spaceBetween={10}
                className="flex !mt-8"
                slidesPerView={1}
                loop={true}
              >
                <SwiperSlide className="!w-[80%] flex flex-wrap border-2 !p-5 border-white rounded-2xl">
                  <div className="up text-white syne">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloremque dolor fuga eaque, cupiditate veritatis, facere, numquam officia rerum nisi eius asperiores! Mollitia quas suscipit id dolor non tempora iste.</div>
                  <div className="down text-white flex flex-col items-center justify-center syne !mt-10">
                    <Image src='/assets/logo.svg' width={100} height={100} alt="Demo" />
                    <span>User Name</span>
                    <span>Alskdj JJSjjs</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="!w-[80%] flex flex-wrap border-2 !p-5 border-white rounded-2xl">
                  <div className="up text-white syne">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloremque dolor fuga eaque, cupiditate veritatis, facere, numquam officia rerum nisi eius asperiores! Mollitia quas suscipit id dolor non tempora iste.</div>
                  <div className="down text-white flex flex-col items-center justify-center syne !mt-10">
                    <Image src='/assets/logo.svg' width={100} height={100} alt="Demo" />
                    <span>User Name</span>
                    <span>Alskdj JJSjjs</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="!w-[80%] flex flex-wrap border-2 !p-5 border-white rounded-2xl">
                  <div className="up text-white syne">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloremque dolor fuga eaque, cupiditate veritatis, facere, numquam officia rerum nisi eius asperiores! Mollitia quas suscipit id dolor non tempora iste.</div>
                  <div className="down text-white flex flex-col items-center justify-center syne !mt-10">
                    <Image src='/assets/logo.svg' width={100} height={100} alt="Demo" />
                    <span>User Name</span>
                    <span>Alskdj JJSjjs</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="!w-[80%] flex flex-wrap border-2 !p-5 border-white rounded-2xl">
                  <div className="up text-white syne">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloremque dolor fuga eaque, cupiditate veritatis, facere, numquam officia rerum nisi eius asperiores! Mollitia quas suscipit id dolor non tempora iste.</div>
                  <div className="down text-white flex flex-col items-center justify-center syne !mt-10">
                    <Image src='/assets/logo.svg' width={100} height={100} alt="Demo" />
                    <span>User Name</span>
                    <span>Alskdj JJSjjs</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="!w-[80%] flex flex-wrap border-2 !p-5 border-white rounded-2xl">
                  <div className="up text-white syne">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloremque dolor fuga eaque, cupiditate veritatis, facere, numquam officia rerum nisi eius asperiores! Mollitia quas suscipit id dolor non tempora iste.</div>
                  <div className="down text-white flex flex-col items-center justify-center syne !mt-10">
                    <Image src='/assets/logo.svg' width={100} height={100} alt="Demo" />
                    <span>User Name</span>
                    <span>Alskdj JJSjjs</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="!w-[80%] flex flex-wrap border-2 !p-5 border-white rounded-2xl">
                  <div className="up text-white syne">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloremque dolor fuga eaque, cupiditate veritatis, facere, numquam officia rerum nisi eius asperiores! Mollitia quas suscipit id dolor non tempora iste.</div>
                  <div className="down text-white flex flex-col items-center justify-center syne !mt-10">
                    <Image src='/assets/logo.svg' width={100} height={100} alt="Demo" />
                    <span>User Name</span>
                    <span>Alskdj JJSjjs</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="!w-[80%] flex flex-wrap border-2 !p-5 border-white rounded-2xl">
                  <div className="up text-white syne">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloremque dolor fuga eaque, cupiditate veritatis, facere, numquam officia rerum nisi eius asperiores! Mollitia quas suscipit id dolor non tempora iste.</div>
                  <div className="down text-white flex flex-col items-center justify-center syne !mt-10">
                    <Image src='/assets/logo.svg' width={100} height={100} alt="Demo" />
                    <span>User Name</span>
                    <span>Alskdj JJSjjs</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="!w-[80%] flex flex-wrap border-2 !p-5 border-white rounded-2xl">
                  <div className="up text-white syne">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloremque dolor fuga eaque, cupiditate veritatis, facere, numquam officia rerum nisi eius asperiores! Mollitia quas suscipit id dolor non tempora iste.</div>
                  <div className="down text-white flex flex-col items-center justify-center syne !mt-10">
                    <Image src='/assets/logo.svg' width={100} height={100} alt="Demo" />
                    <span>User Name</span>
                    <span>Alskdj JJSjjs</span>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </section>
          <TextSlider />
          <section className="!pr-24 !pl-24 max-md:!pl-2 max-md:!pr-2 !mt-40">
            {/* <AutoSlider items={["Client A", "Client B", "Client C", "Client D", "Client E"]} speed={10} />
            <AutoSlider
              items={["Google", "Facebook", "Netflix", "Amazon", "Apple", "Apple"]}
              rtl={true} // or false
              speed={10} // increase for slower scroll, lower for faster
            /> */}

            <section className="marquee relative overflow-hidden bg-[#0f0f0f] text-white !p-[30px_0px] uppercase text-4xl">
              <div className="marquee_inner flex w-fit flex-auto row">
                <div className="marquee_part syne flex items-center flex-shrink-0 p-[0px_4px]">
                  Modern Creative Studio
                  <div className="arrow w-[60px] h-[80px] m-[0_1rem] rotate-90 transition-all duration-1000  ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                    <MdArrowRight size={20} />
                  </div>
                </div>
              </div>
            </section>
          </section>

          <Dribble />
          <section className="!pr-24 !pl-24 max-md:!pl-2 max-md:!pr-2 flex items-center justify-center min-h-screen ">
            <Socials />
          </section>
        </main>
      </div>
      <FluidDispatcher />
      <MouseEffect />
      <FluidEffect />
    </>
  );
}
