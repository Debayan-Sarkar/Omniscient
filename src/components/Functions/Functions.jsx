
// export const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

import gsap from "gsap";

export const random = (min, max, snap = "") => gsap.utils.random(min, max, snap);