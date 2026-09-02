import React from 'react';

interface MIAsihPuteraLogoProps {
  className?: string;
  variant?: 'full' | 'emblem';
  textColor?: string;
}

export const MIAsihPuteraLogo: React.FC<MIAsihPuteraLogoProps> = ({
  className = 'h-10',
}) => {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
     <img 
  src="/images/logo-baru.png" 
  alt="Logo MI Asih Putera" 
  className="h-9 sm:h-11 w-auto max-w-50 sm:max-w-60 object-contain" // Tambahkan max-w-... di sini
/>
    </div>
  );
};