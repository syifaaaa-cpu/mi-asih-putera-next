import React from 'react';

interface IslamicDividerProps {
  className?: string;
  variant?: 'gold' | 'green' | 'dark';
}

export const IslamicDivider: React.FC<IslamicDividerProps> = ({
  className = '',
  variant = 'gold',
}) => {
  const isDark = variant === 'dark';
  const isGreen = variant === 'green';

  const lineColor = isDark
    ? 'from-transparent via-[#fdaa3d]/25 to-transparent'
    : isGreen
    ? 'from-transparent via-[#0a3622]/20 to-transparent'
    : 'from-transparent via-[#c87a1e]/30 to-transparent';

  const starFill = isDark ? '#fdaa3d' : isGreen ? '#0a3622' : '#c87a1e';
  const innerFill = isDark ? '#001f11' : '#fcf9f2';

  return (
    <div className={`w-full flex items-center justify-center my-6 sm:my-8 px-4 select-none pointer-events-none ${className}`}>
      {/* Left Hairline Gradient Line */}
      <div className={`flex-1 h-[1px] bg-gradient-to-r ${lineColor} max-w-xs sm:max-w-md`} />

      {/* Center Rub el Hizb (8-Pointed Islamic Star) & Arabesque Flourish */}
      <div className="mx-3 sm:mx-4 flex items-center gap-1.5 shrink-0 opacity-70">
        <svg
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c87a1e]"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer 8-pointed star */}
          <rect
            x="5"
            y="5"
            width="14"
            height="14"
            fill={starFill}
            fillOpacity={isDark ? "0.9" : "0.85"}
            rx="1"
          />
          <rect
            x="5"
            y="5"
            width="14"
            height="14"
            transform="rotate(45 12 12)"
            fill={starFill}
            fillOpacity={isDark ? "0.9" : "0.85"}
            rx="1"
          />
          {/* Inner circle cut */}
          <circle cx="12" cy="12" r="4.5" fill={innerFill} />
          {/* Center core dot */}
          <circle cx="12" cy="12" r="1.8" fill={starFill} />
        </svg>
      </div>

      {/* Right Hairline Gradient Line */}
      <div className={`flex-1 h-[1px] bg-gradient-to-r ${lineColor} max-w-xs sm:max-w-md`} />
    </div>
  );
};
