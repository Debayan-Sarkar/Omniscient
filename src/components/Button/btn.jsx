import React from 'react';
import styled from 'styled-components';

const Button = ({ innerTxt, className="" }) => {
  return (
    <StyledWrapper className='syne !select-none'>
      <div>
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter width="300%" x="-100%" height="300%" y="-100%" id="unopaq">
            <feColorMatrix values="1 0 0 0 0 
            0 1 0 0 0 
            0 0 1 0 0 
            0 0 0 9 0" />
          </filter>
          <filter width="300%" x="-100%" height="300%" y="-100%" id="unopaq2">
            <feColorMatrix values="1 0 0 0 0 
            0 1 0 0 0 
            0 0 1 0 0 
            0 0 0 3 0" />
          </filter>
          <filter width="300%" x="-100%" height="300%" y="-100%" id="unopaq3">
            <feColorMatrix values="1 0 0 0.2 0 
            0 1 0 0.2 0 
            0 0 1 0.2 0 
            0 0 0 2 0" />
          </filter>
        </svg>
        <button className="real-button" />
        <div className="backdrop" />
        <div className={`button-container ${className}`}>
          <div className="spin spin-blur" />
          <div className="spin spin-intense" />
          <div className="backdrop" />
          <div className="button-border">
            <div className="spin spin-inside" />
            <div className="button">{innerTxt}</div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button-container {
    position: relative;
    margin: 0 2em;
  }

  .button-border {
    padding: 3px;
    inset: 0;
    background: #0005;
    border-radius: inherit;
    clip-path: path(
      "M 90 0 C 121 0 126 5 126 33 C 126 61 121 66 90 66 L 33 66 C 5 66 0 61 0 33 C 0 5 5 0 33 0 Z"
    );
  }

  .button {
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 0.875em;
    clip-path: path(
      "M 90 0 C 115 0 120 5 120 30 C 120 55 115 60 90 60 L 30 60 C 5 60 0 55 0 30 C 0 5 5 0 30 0 Z"
    );
    width: 120px;
    height: 60px;
    background: #111215;
    display: flex;
    flex-direction: column;
    color: #fff;
    overflow: hidden;
  }

  .real-button {
    position: absolute;
    width: 120px;
    height: 60px;
    z-index: 1;
    outline: none;
    border: none;
    border-radius: 17px;
    cursor: pointer;
    opacity: 0;
  }



  .spin {
    position: absolute;
    inset: 0;
    z-index: -2;
    opacity: 0.5;
    overflow: hidden;
    transition: 0.3s;
  }

  .real-button:active ~ div .spin {
    opacity: 1;
  }

  .spin-blur {
    filter: blur(2em) url(#unopaq);
  }

  .spin-intense {
    inset: -0.125em;
    filter: blur(0.25em) url(#unopaq2);
    border-radius: 0.75em;
  }

  .spin-inside {
    inset: -2px;
    border-radius: inherit;
    filter: blur(2px) url(#unopaq3);
    z-index: 0;
  }

  .spin::before {
    content: "";
    position: absolute;
    inset: -150%;
    animation:
      speen 8s cubic-bezier(0.56, 0.15, 0.28, 0.86) infinite,
      woah 4s infinite;
    animation-play-state: running;
  }

  .real-button:hover ~ div .spin::before {
    animation-play-state: running;
  }

  .spin-blur::before {
    background: linear-gradient(90deg, #f50 30%, #0000 50%, #05f 70%);
  }

  .spin-intense::before {
    background: linear-gradient(90deg, #f95 20%, #0000 45% 55%, #59f 80%);
  }

  .spin-inside::before {
    background: linear-gradient(90deg, #fc9 30%, #0000 45% 55%, #9cf 70%);
  }

  @keyframes speen {
    0% {
      rotate: 10deg;
    }
    50% {
      rotate: 190deg;
    }
    to {
      rotate: 370deg;
    }
  }

  @keyframes woah {
    0%. to {
      scale: 1;
    }
    50% {
      scale: 0.75;
    }
  }`;

export default Button;
