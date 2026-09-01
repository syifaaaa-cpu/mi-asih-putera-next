import React from 'react';
import { Clock, Users, UserCheck, Scale, Award } from 'lucide-react';
import { STATS_DATA } from '../data';

export const StatsBar: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'clock':
        return <Clock className="w-5 h-5 text-[#001f11]" />;
      case 'users':
        return <Users className="w-5 h-5 text-[#001f11]" />;
      case 'user-check':
        return <UserCheck className="w-5 h-5 text-[#001f11]" />;
      case 'scale':
        return <Scale className="w-5 h-5 text-[#001f11]" />;
      case 'shield-check':
        return <Award className="w-5 h-5 text-[#001f11]" />;
      default:
        return null;
    }
  };

  return (
    <section className="bg-[#fbf7ee] bg-islamic-stars border-y border-[#e8e4dc] py-9 sm:py-10 relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 divide-y md:divide-y-0 lg:divide-x divide-[#e2dad0]/70">
          {STATS_DATA.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center ${index > 0 ? 'pt-4 md:pt-0 lg:pl-6' : ''} ${index === 4 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <div className="text-[#0a3622] p-1 rounded-md bg-[#0a3622]/5">
                  {getIcon(item.icon)}
                </div>
                <span className="font-manrope font-extrabold text-2xl sm:text-3xl text-[#001f11] tracking-tight">
                  {item.value}
                </span>
              </div>
              <p className="font-manrope font-bold text-xs sm:text-[13px] text-[#1c1c18] leading-tight">
                {item.label}
              </p>
              {item.sublabel && (
                <p className="font-worksans text-xs text-[#616a64] mt-0.5 font-normal">
                  {item.sublabel}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
