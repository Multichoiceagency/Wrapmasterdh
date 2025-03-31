"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

interface SmoothScrollingProps {
  children: ReactNode;
}

const options = {
  lerp: 0.1,
  duration: 1.9,
  smoothTouch: true,
} as any;

const SmoothScrolling = ({ children }: SmoothScrollingProps) => {
  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
