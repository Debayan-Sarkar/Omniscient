'use client';

import { useEffect, useRef } from 'react';

export default function FluidEffect() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;

    if (typeof window.initFluid === 'function') {
        window.initFluid(canvas, '#fff'); // use your preferred color here
      }
      canvas.addEventListener('contextmenu', (e) => e.preventDefault());

      return () => {
        canvas.removeEventListener('contextmenu', (e) => e.preventDefault());
      };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen mix-blend-lighten z-10 pointer-events-none"
      id='tr__fluid__anim'
    />
  );
}
