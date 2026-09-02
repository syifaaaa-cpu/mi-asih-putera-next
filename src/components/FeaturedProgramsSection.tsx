"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpenCheck, X, Search, Calendar } from 'lucide-react';
import { programService, ProgramItem } from '../services/programService';

interface FeaturedProgramsSectionProps {
  onViewAllPrograms?: () => void;
  onSelectProgram?: (title: string) => void;
}

export default function FeaturedProgramsSection({
  onViewAllPrograms,
  onSelectProgram,
}: FeaturedProgramsSectionProps) {
  const [programs, setPrograms] = useState<ProgramItem[]>([]);
  const [loading, setLoading] = useState(true);
  
  // State untuk mengontrol pop-up modal "Lihat Semua"
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPrograms = async () => {
      setLoading(true);
      const data = await programService.getPrograms();
      setPrograms(data);
      setLoading(false);
    };

    fetchPrograms();
  }, []);

  // 4 item pertama untuk ditampilkan di halaman depan
  const displayedPrograms = programs.slice(0, 4);

  // Filter program di dalam modal berdasarkan pencarian user
  const filteredPrograms = programs.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpenModal = () => {
    setIsModalOpen(true);
    if (onViewAllPrograms) onViewAllPrograms();
  };

  return (
    <>
      <section id="programs" className="py-16 sm:py-20 bg-islamic-girih relative">
        <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-manrope font-extrabold text-2xl sm:text-3xl lg:text-[34px] text-[#001f11] tracking-tight">
              Program Unggulan yang Menghidupkan Nilai
            </h2>
          </div>

          {loading ? (
            <div className="text-center py-10 text-[#001f11] font-medium">Memuat program unggulan...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {displayedPrograms.map((program) => (
                <div
                  key={program.id}
                  onClick={() => onSelectProgram && onSelectProgram(program.title)}
                  className="bg-white rounded-xl overflow-hidden border border-[#e8e4dc] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer group"
                >
                  <div className="aspect-4/3 w-full overflow-hidden bg-[#f0eee7]">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=500";
                      }}
                    />
                  </div>

                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-manrope font-bold text-base text-[#001f11] mb-2 leading-snug group-hover:text-[#c87a1e] transition-colors">
                        {program.title}
                      </h3>
                      <p className="font-worksans text-xs sm:text-[13px] text-[#414943] leading-relaxed line-clamp-3">
                        {program.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* 5th Card: Solid Dark Green "Lihat Semua Pendidikan" Card (Memicu Pop-up) */}
              <div
                onClick={handleOpenModal}
                className="bg-[#0a3622] hover:bg-[#001f11] rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 shadow-md group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#fdaa3d] mb-4 group-hover:scale-110 transition-transform">
                  <BookOpenCheck className="w-6 h-6 stroke-current" />
                </div>

                <h3 className="font-manrope font-bold text-base text-white mb-3">
                  Lihat Semua Pendidikan
                </h3>

                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#fdaa3d] group-hover:bg-[#fdaa3d] group-hover:text-[#001f11] transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Pop-up Modal Arsip Semua Program Unggulan (Mirip Contoh Berita) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col border border-[#e8e4dc]">
            
            {/* Modal Header */}
            <div className="bg-[#0a3622] text-white p-5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#fdaa3d]">
                  <BookOpenCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-manrope font-bold text-lg">Pusat Arsip Program Unggulan</h3>
                  <p className="text-xs text-gray-300">Menampilkan seluruh daftar program pendidikan madrasah</p>
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body / Filter & Search */}
            <div className="p-6 overflow-y-auto flex-1 bg-[#faf8f5]">
              <div className="mb-6 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="text"
                  placeholder="Cari program unggulan atau kata kunci..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-[#e8e4dc] rounded-xl pl-11 pr-4 py-3 text-sm text-[#001f11] focus:outline-none focus:border-[#0a3622]"
                />
              </div>

              <div className="mb-4 text-xs font-medium text-gray-500">
                Menampilkan {filteredPrograms.length} dari {programs.length} program
              </div>

              {/* Grid List Program di dalam Pop-up */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredPrograms.map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-white border border-[#e8e4dc] rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="flex p-4 gap-4">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-24 h-24 object-cover rounded-lg bg-gray-100 shrink-0"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=500";
                        }}
                      />
                      <div className="flex-1">
                        <span className="inline-block px-2 py-0.5 bg-[#0a3622]/10 text-[#0a3622] text-[10px] font-bold rounded-md mb-1">
                          Program Unggulan
                        </span>
                        <h4 className="font-manrope font-bold text-sm text-[#001f11] mb-1 leading-snug">
                          {item.title}
                        </h4>
                        <p className="font-worksans text-xs text-gray-600 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {filteredPrograms.length === 0 && (
                  <div className="col-span-2 text-center py-12 text-gray-500 text-sm">
                    Program yang Anda cari tidak ditemukan.
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-white border-t border-[#e8e4dc] flex justify-between items-center text-xs text-gray-500">
              <span>MI Asih Putera • Sistem Informasi Pendidikan</span>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-[#001f11] font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Tutup Arsip
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}