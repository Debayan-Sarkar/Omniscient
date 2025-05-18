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
import TextSlider from "@/components/TextSlide/Slider";
import Socials from "@/components/SocialSec/Socials";

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
        smooth: 2.2,
        normalizeScroll: true,
        effects: true,
        smoothTouch: isIOS ? 2 : 1,
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
    const xOffsets = [300, -200];
    lines.forEach((line, index) => {
      gsap.set(line, { display: 'block', position: 'relative', textAlign: 'start' });
      gsap.fromTo(
        line,
        {
          x: xOffsets[index % xOffsets.length] || 0,
          scrollTrigger: {
            trigger: line,
            start: "-100% 75%",
            end: "95% center",
            scrub: 1,
            markers: true,
            invalidateOnRefresh: true
          }
        },
        {
          x: 0,
          backgroundPositionX: "0%",
          scrollTrigger: {
            trigger: line,
            start: "-100% 75%",
            end: "95% center",
            scrub: 1,
            markers: true,
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
          trigger: aTriggerRef.current,
          start: "top center",
          end: "100% center",
          scrub: 3,
          invalidateOnRefresh: true,
          markers: true
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
          scrub: 3,
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
        scrub: 3,
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
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
          scrub: 4,
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
          <section className="!pr-24 !pl-24 max-md:!pr-1.5 max-md:!pl-1.5 text-white !mt-90 max-md:!mt-18 weARETrigg">
            <div className="flex flex-col ">
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
            </div>
          </section>
          <TextSlider />
          <Dribble />
          <section className="!pr-24 !pl-24 max-md:!pl-0 max-md:!pr-0 flex items-center justify-center min-h-screen ">
            <Socials />
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
