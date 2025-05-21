import React from 'react';
import styled from 'styled-components';
import { FaBehance, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
const Socials = () => {
  return (
    <StyledWrapper className='flex items-center justify-center w-full'>
      <div className="card">
        <div className="background">
        </div>
        <div className="logo">
          Socials
        </div>
        <a href="#"><div className="box box1"><span className="icon"><FaInstagram /></span></div></a>
        <a href="##"><div className="box box2"> <span className="icon"><FaLinkedin /></span></div></a>
        <a href="###"><div className="box box3"><span className="icon"><FaBehance/></span></div></a>
        <a href="###"><div className="box box4"><span className="icon"><FaFacebook/></span></div></a>
        <div className="box box5" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`

  .card {
    position: relative;
    width: 100%;
    height: 515px;
    background: lightgrey;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: all 1s ease-in-out;
    border: 2px solid rgb(255, 255, 255);
  }

  .background {
    position: absolute;
    inset: 0;
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
  }

  .logo {
    position: absolute;
    right: 50%;
    bottom: 50%;
    transform: translate(50%, 50%);
    transition: all 0.6s ease-in-out;
    font-size: 1.3em;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: 3px;
  }

  .logo .logo-svg {
    fill: white;
    width: 30px;
    height: 30px;
  }

  .icon {
    display: inline-block;
    width: 50px;
  }

  .icon svg {
    fill: rgba(255, 255, 255, 0.797);
    font-size: 50px;
    transition: all 0.5s ease-in-out;
  }

  .box {
    position: absolute;
    padding: 20px;
    text-align: right;
    background: rgba(255, 255, 255, 0.389);
    border-top: 2px solid rgb(255, 255, 255);
    border-right: 1px solid white;
    border-radius: 10% 13% 42% 0%/10% 12% 75% 0%;
    box-shadow: rgba(100, 100, 111, 0.364) -7px 7px 29px 0px;
    transform-origin: bottom left;
    transition: all 1s ease-in-out;
  }

  .box::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  .box:hover svg {
    fill: white;
  }

  .box1 {
    width: 90%;
    height: 90%;
    bottom: -90%;
    left: -90%;
  }

  .box1::before {
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #ff53d4 60%, #62c2fe 90%);
  }

  .box1:hover::before {
    opacity: 1;
  }

  .box1:hover .icon svg {
    filter: drop-shadow(0 0 5px white);
  }

  .box2 {
    width: 70%;
    height: 70%;
    bottom: -70%;
    left: -70%;
    transition-delay: 0.2s;
  }

  .box2::before {
    background: radial-gradient(circle at 30% 107%, #91e9ff 0%, #00ACEE 90%);
  }

  .box2:hover::before {
    opacity: 1;
  }

  .box2:hover .icon svg {
    filter: drop-shadow(0 0 5px white);
  }

  .box3 {
    width: 52%;
    height: 52%;
    bottom: -52%;
    left: -52%;
    transition-delay: 0.4s;
  }

  .box3::before {
    background: radial-gradient(circle at 30% 107%, #969fff 0%, #b349ff 90%);
  }

  .box3:hover::before {
    opacity: 1;
  }

  .box3:hover .icon svg {
    filter: drop-shadow(0 0 5px white);
  }
  .box4 {
    width: 35%;
    height: 35%;
    bottom: -35%;
    left: -35%;
    transition-delay: 0.4s;
  }

  .box4::before {
    background: radial-gradient(circle at 30% 107%, #969fff 0%, #b349ff 90%);
  }

  .box4:hover::before {
    opacity: 1;
  }

  .box4:hover .icon svg {
    filter: drop-shadow(0 0 5px white);
  }

  .box5 {
    width: 10%;
    height: 10%;
    bottom: -10%;
    left: -10%;
    transition-delay: 0.6s;
  }

  .card:hover {
    transform: scale(1.1);
  }

  .card:hover .box {
    bottom: -1px;
    left: -1px;
  }

  .card:hover .logo {
    transform: translate(70px, -52px);
    letter-spacing: 0px;
  }`;

export default Socials;
