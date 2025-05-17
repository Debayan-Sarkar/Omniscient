'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { MdDarkMode, MdLightMode, MdMenu } from "react-icons/md"
import Preloader from '../Loader/loader'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';
const Header = () => {
  const preloaderRef = useRef();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isChecked) {
      setTimeout(() => {
        body.style.background = "#fff"
      }, 750)
    } else {
      body.style.background = ""
    }

    preloaderRef.current?.startAnimation();
    window.addEventListener('load', function () {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200); // 100ms delay
    });
  }, [isChecked]);
  return (
    <>
      <header className='flex w-full relative z-50'>
        <nav className="w-full !pt-10 !pl-20 !pr-20 max-md:!pt-4 max-md:!pl-[5px] max-md:!pr-[5px] ">
          <ul className='flex items-center justify-between'>
            <li><Link href={'#'}><Image src={'/assets/logo1.svg'} width={200} height={200} alt='Logo' className='max-md:!pl-[12px] max-md:!max-w-max max-md:!w-[126px] max-sm:!w-[120px]' /></Link></li>
            <div className='flex max-md:!ml-[22px] items-center'>
              <label className='flex items-center justofy-center w-full h-[40px] cursor-pointer rounded-4xl'>
                <input
                  type="checkbox"
                  name=""
                  onChange={(e) => setIsChecked(e.target.checked)}
                  id=""
                  className='hidden peer' />
                <MdLightMode className='peer-checked:scale-[1] delay-100 peer-checked:rotate-360 absolute scale-0 transition ease-in duration-1000  notHover !w-10 text-[#666] drop-shadow-[0px_0px_2px_rgba(0,0,0,.5)] z-1' size={20} />
                <MdDarkMode className='delay-100 peer-checked:rotate-360 peer-checked:scale-0 transition ease-in duration-1000  notHover !w-10 text-[#ccc] drop-shadow-[0px_0px_2px_rgba(0,0,0,.5)] z-1' size={20} />
                <span className='peer-checked:bg-[#fff] shadow-[inset_0px_8px_60px_rgba(0,0,0,.1),inset_0px_8px_8px_rgba(0,0,0,.1),inset_0px_-4px_4px_rgba(0,0,0,.1),] absolute w-[40px] h-[40px] block bg-[#2b2b2b] rounded-4xl z-[-1] transition-all duration-1000'></span>
                <span className='rrtrtrttrtrt absolute w-full h-[100vh] -z-[2] bg-[#f8f8f8]'></span>
              </label>
            </div>

            <div className='flex gap-2.5'>
              <li className='flex items-center justify-between max-md:!hidden gap-1.5 text-gray-200 font-semibold max-sm:text-[12px] cursor-pointer hoverable' onClick={() => preloaderRef.current?.startAnimation()}> <Link href={'#'}><MdMenu className='text-3xl text-white' /></Link>menu</li>
              <StyledWrapper className='!select-none hidden max-md:!block'>
                <button className="btn max-md:!w-[110px]">
                  <span className="icon max-md:!justify-end">
                    <svg viewBox="0 0 175 80" width={40} height={40}>
                      <rect width={80} height={15} fill="#f0f0f0" rx={10} />
                      <rect y={30} width={80} height={15} fill="#f0f0f0" rx={10} />
                      <rect y={60} width={80} height={15} fill="#f0f0f0" rx={10} />
                    </svg>
                  </span>
                  <span className="text max-md:text-[16px]">MENU</span>
                </button>
              </StyledWrapper>
            </div>
          </ul>
        </nav>
      </header>
      {/* <Preloader ref={preloaderRef} /> */}
    </>
  )
}


const StyledWrapper = styled.div`
  .btn {
    width: 130px;
    height: 50px;
    border-radius: 5px;
    border: none;
    transition: all 0.5s ease-in-out;
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 600;
    display: flex;
    align-items: center;
    color: #f5f5f5;
  }


  .btn .icon {
    position: absolute;
    height: 40px;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
  }

  .btn .text {
    transform: translateX(55px);
  }

  .btn:hover .icon {
    width: 175px;
  }

  .btn:hover .text {
    transition: all 0.5s;
    opacity: 0;
  }

  .btn:focus {
    outline: none;
  }

  .btn:active .icon {
    transform: scale(0.85);
  }`;
export default Header