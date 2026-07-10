/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const heightMap = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`} id="brand-logo-container">
      {/* Pixel-perfect high-fidelity vector representation of the user-provided logo */}
      <svg
        id="logo-graphic"
        viewBox="0 0 200 200"
        className={`${heightMap[size]} w-auto rounded shadow-sm`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Deep blue side bars matching the uploaded logo image frame */}
        <rect width="200" height="200" fill="#0F2D54" />
        
        {/* Light central canvas */}
        <rect x="20" y="0" width="160" height="200" fill="#F1F3F5" />
        
        {/* "Software lab" text centered precisely inside the SVG */}
        <text
          x="100"
          y="112"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="23"
          letterSpacing="-0.5px"
        >
          <tspan fill="#0F2D54" fontWeight="800">Software </tspan>
          <tspan fill="#10A5B5" fontWeight="600">lab</tspan>
        </text>
      </svg>
      
      {showText && (
        <div className="flex flex-col justify-center" id="logo-text-brand">
          <span className="font-display font-bold text-[#0F2D54] tracking-tight leading-none text-base md:text-lg">
            Software Labs
          </span>
          <span className="font-sans text-[10px] font-bold text-[#10A5B5] uppercase tracking-widest leading-none mt-1">
            Dehradun
          </span>
        </div>
      )}
    </div>
  );
}
