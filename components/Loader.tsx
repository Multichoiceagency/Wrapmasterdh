import React, { useEffect, useRef } from 'react';
import { ReactSVG } from 'react-svg';

const Loader = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll('path') as NodeListOf<SVGPathElement>;
      paths.forEach((path: SVGPathElement, index: number) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
        path.style.animation = `drawSignature 2s ${index * 0.5}s forwards ease-in-out`;
      });
    }
  }, []);

  return (
    <div className="flex justify-center items-center w-screen h-screen fixed top-0 left-0 bg-white z-50">
      <ReactSVG
        src="/logos/Wrapmaster-handtekening-zwart-ai.svg" // Adjust the path to your SVG file
      />
      <style jsx>{`
        @keyframes drawSignature {
          to {
            stroke-dashoffset: 1;
          }
        }
        svg path {
          fill: none;
          stroke: black;
          stroke-width: 2;
        }
      `}</style>
    </div>
  );
};

export default Loader;
