import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

interface TopBarProps {
  onOpenConsultation?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenConsultation }) => {
  return (
    <div className="bg-[#0a3622] text-white py-2 px-4 text-xs md:text-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Phone size={14} className="text-[#d9822b]" />
            <span>0812-3456-7890</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail size={14} className="text-[#d9822b]" />
            <span>info@miasihputera.sch.id</span>
          </div>
          <div className="hidden md:flex items-center gap-1.5">
            <Clock size={14} className="text-[#d9822b]" />
            <span>Senin - Jumat: 07:15 - 14:30 WIB</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={onOpenConsultation}
            className="bg-[#d9822b] hover:bg-[#c27223] text-white px-3 py-1 rounded-full font-medium transition-colors"
          >
            Konsultasi PPDB
          </button>
        </div>
      </div>
    </div>
  );
};