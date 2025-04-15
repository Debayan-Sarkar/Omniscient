import { useEffect } from 'react';

export default function FluidDispatcher() {
  useEffect(() => {
    const wrapper = document.querySelector('#smooth-wrapper');
    const fluidCanvas = document.getElementById('tr__fluid__anim');

    if (!wrapper || !fluidCanvas) return;

    const forwardMouseEvent = (ts) => {
      const copiedEvent = new ts.constructor(ts.type, ts);
      fluidCanvas.dispatchEvent(copiedEvent);
    };

    wrapper.addEventListener('mousemove', forwardMouseEvent);

    // 🧹 Clean up when component unmounts
    return () => {
      wrapper.removeEventListener('mousemove', forwardMouseEvent);
    };
  }, []);

  return null;
}
