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
import AboutComp from "@/components/AboutCom/AboutComp";
import { SplitText } from "gsap/SplitText";
import Acheved from "@/components/Acheved/Acheved";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP, SplitText);


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
    ScrollTrigger.clearScrollMemory();
    window.addEventListener('resize', handleResize);
    ScrollTrigger.addEventListener("refreshInit", () => window.scrollTo(0, 0));
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
      gsap.to(floats, {
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
          <AboutComp />
          <Acheved />
          <section className="!pr-24 !pl-24 max-md:!pr-[2rem] max-md:!pl-[2rem]">
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
              <AutoSlider
            items={[
              { txt: "Modern Creative Studio" },
              { txt: "Modern Creative Studio" },
              { txt: "Modern Creative Studio" },
              { txt: "Modern Creative Studio" },
              { txt: "Modern Creative Studio" }
            ]}
            rtl={true}
            mt={40}
          />
          <AutoSlider
            items={[
              { txt: "Modern Creative Studio" },
              { txt: "Modern Creative Studio" },
              { txt: "Modern Creative Studio" },
              { txt: "Modern Creative Studio" },
              { txt: "Modern Creative Studio" }
            ]}
            mt={5}
          />
          <TextSlider />
          {/* <AutoSlider items={["Client A", "Client B", "Client C", "Client D", "Client E"]} speed={10} />*/}
      



          <Dribble />
          <section className="!pr-24 !pl-24 max-md:!pr-[2rem] max-md:!pl-[2rem] flex items-center justify-center min-h-screen ">
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
