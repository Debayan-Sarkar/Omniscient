import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MouseEffect = () => {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const buttons = document.querySelectorAll("button");


    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);


    const handleHoverStart = () => {
      gsap.to(dot, {
        width: 60,
        height: 60,
        duration: 0.3,
        ease: "power3.out",
        borderRadius: "50px",
      });
    };

    const handleHoverEnd = () => {
      gsap.to(dot, {
        width: 24,
        height: 24,
        duration: 0.3,
        ease: "power3.out",
        borderRadius: "999px",
      });
    };
    const hoverables = document.querySelectorAll("a, button, img, span, li,p,h1,h2,h3,h4,h5,h6");

    hoverables.forEach(el => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    const moveCursor = (e) => {
      mouse.x = e.clientX - 15;
      mouse.y = e.clientY - 10;

      gsap.to(dot, {
        x: mouse.x,
        y: mouse.y,
        duration: 0.2,
        ease: "power3.out",
      });

    };

    window.addEventListener("mousemove", moveCursor);


    const hoverStarts = new Map();
    const hoverEnds = new Map();
    const follows = new Map();
    const resets = new Map();

    buttons.forEach((button) => {
      const handleHoverStart = () => {
        gsap.to(dot, {
          width: 60,
          height: 60,
          duration: 0.3,
          ease: "power3.out",
          borderRadius: "50px",
        });
      };

      const handleHoverEnd = () => {
        gsap.to(dot, {
          width: 24,
          height: 24,
          duration: 0.3,
          ease: "power3.out",
          borderRadius: "999px",
        });
      };

      const follow = (e) => {
        const rect = button.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;
        const moveX = (relX - rect.width / 2) * 0.3;
        const moveY = (relY - rect.height / 2) * 0.3;
        button.querySelector(".btnBack").classList.add("!bg-[#C5FCFC]")
        button.querySelector(".btnBack").classList.add("!blur-[24px]")
        gsap.to(button, {
          x: moveX,
          y: moveY,
          ease: "power3.out",
          duration: 0.3,
        });
      };

      const reset = () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          ease: "power3.out",
          duration: 0.3,
        });
      };

      // Save for cleanup
      hoverStarts.set(button, handleHoverStart);
      hoverEnds.set(button, handleHoverEnd);
      follows.set(button, follow);
      resets.set(button, reset);

      // Add event listeners
      button.addEventListener("mouseenter", handleHoverStart);
      button.addEventListener("mouseleave", handleHoverEnd);
      button.addEventListener("mousemove", follow);
      button.addEventListener("mouseleave", reset);
    });




    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverables.forEach(el => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", hoverStarts.get(button));
        button.removeEventListener("mouseleave", hoverEnds.get(button));
        button.removeEventListener("mousemove", follows.get(button));
        button.removeEventListener("mouseleave", resets.get(button));
      });
    };
  }, []);

  return (
    <div
      id="cursor-dot"
      className="fixed top-0 left-0 w-6 h-6 bg-white rounded-full mix-blend-difference pointer-events-none z-[5000000000000000]"
    ></div>
  );
};

export default MouseEffect;
