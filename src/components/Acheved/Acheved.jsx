import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'

function Acheved() {
    useGSAP(() => {
        gsap.utils.toArray('.acheved').forEach((el, index) => {
            gsap.from(el, {
                x: index % 2 === 0 ? '-100%' : '100%',
                rotate: index % 2 === 0 ? -45 : 45,
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: '-20% 80%',
                    end: 'top 50%',
                    toggleActions: 'play none none reverse',
                    scrub: 1,
                    markers: true, // turn on for debugging if needed
                },
            });
        });
    }, [])
    return (
        <section className="!pr-24 !pl-24  max-md:!pr-[2rem] max-md:!pl-[2rem] !pb-48 !mt-50">
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
    )
}

export default Acheved