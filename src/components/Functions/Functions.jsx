import React from 'react'

export function random(min, max, skew = 1) {
  let num = Math.random();
  if (skew !== 1) {
    num = Math.pow(num, skew);
  }
  return Math.floor(min + (max - min) * num);
}