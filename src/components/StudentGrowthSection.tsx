"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, Eye, UserCheck, ClipboardCheck, Mail, Users2, CheckCircle2, Search, X, Heart } from 'lucide-react';
import { studentStoryService, StudentStoryItem } from '@/services/studentStoryService';

interface StudentGrowthSectionProps {
  onOpenStories?: () => void;
  onOpenConsultation?: () => void;
}

export const StudentGrowthSection: React.FC<StudentGrowthSectionProps> = () => {
  const [stories, setStories] = useState<StudentStoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await studentStoryService.getStories();
      setStories(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const pinnedStory = stories.find(s => s.isPinned) || stories[0];

  const filteredStories = stories.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const steps = [
    { icon: Eye, label: 'Guru Mengamati' },
    { icon: UserCheck, label: 'Guru Mendampingi' },
    { icon: ClipboardCheck, label: 'Sekolah Mengevaluasi' },
    { icon: Mail, label: 'Orang Tua Update' },
    { icon: Users2, label: 'Bersama Tindak Lanjut' },
  ];

  const supportPoints = [
    'Pertemuan Rutin',
    'Konsultasi Orang Tua',
    'Layanan Psikologi',
    'Laporan Perkembangan',
    'Parenting Workshop',
    'Dokter & Klinik Sekolah',
  ];

  return (
    <>
      <section id="growth" className="py-12 sm:py-16 bg-[#fcf9f2]">
        <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <div className="lg:col-span-7 bg-[#0a3622] rounded-2xl overflow-hidden border border-[#001f11] shadow-md text-white p-6 sm:p-8 flex flex-col justify-between relative">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                
                <div className="sm:col-span-7 space-y-4">
                  <h3 className="font-manrope font-extrabold text-xl sm:text-2xl text-[#fdaa3d] flex items-center gap-1.5">
                    <span>Cerita Pertumbuhan Siswa Kami</span>
                    <Heart className="w-5 h-5 fill-[#fdaa3d] text-[#fdaa3d]" />
                  </h3>

                  {loading ? (
                    <p className="text-gray-300 italic text-sm">Memuat cerita...</p>
                  ) : pinnedStory ? (
                    <>
                      <div 
                        className="font-worksans italic text-sm sm:text-[15px] leading-relaxed text-[#e0e8e3] line-clamp-4"
                        dangerouslySetInnerHTML={{ __html: pinnedStory.content }}
                      />
                      <div className="pt-2">
                        <p className="font-manrope font-bold text-sm sm:text-base text-white">
                          {pinnedStory.title}
                        </p>
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-300 italic text-sm">Belum ada cerita siswa.</p>
                  )}

                  <div className="pt-2">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#fdaa3d]/60 text-xs sm:text-sm font-manrope font-semibold text-white hover:bg-[#fdaa3d] hover:text-[#001f11] transition-all cursor-pointer"
                    >
                      <span>Baca Cerita Lainnya</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="sm:col-span-5 flex justify-center sm:justify-end">
                  <div className="w-48 h-60 sm:w-full sm:h-64 rounded-xl overflow-hidden border-2 border-white/20 shadow-md bg-white/5">
                    <img
                      src={pinnedStory?.thumbnail || "/images/student_growth_custom.jpg"}
                      alt={pinnedStory?.title || "Siswa Berprestasi"}
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/student_growth_custom.jpg";
                      }}
                    />
                  </div>
                </div>

              </div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#e8e4dc] shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="font-manrope font-extrabold text-xl sm:text-2xl text-[#001f11] text-center mb-6">
                  Anak Bertumbuh, Kami Mendampingi
                </h3>

                <div className="grid grid-cols-5 gap-1 mb-8">
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={index} className="flex flex-col items-center text-center group">
                        <div className="w-9 h-9 rounded-full bg-[#fcf9f2] border border-[#dcdad3] flex items-center justify-center text-[#0a3622] mb-1.5 group-hover:bg-[#0a3622] group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-manrope font-semibold text-[#414943] leading-tight max-w-13.75">
                          {step.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-3.5 pt-4 border-t border-[#f0eee7]">
                  {supportPoints.map((point, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#fdaa3d]/20 text-[#c87a1e] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c87a1e]" />
                      </div>
                      <span className="font-worksans text-xs sm:text-[13px] text-[#1c1c18] font-medium">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-xs">
          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
            
            <div className="bg-[#0a3622] text-white p-5 flex justify-between items-center">
              <div>
                <h3 className="font-manrope font-bold text-lg">Arsip Cerita Pertumbuhan Siswa</h3>
                <p className="text-xs text-gray-300">Kumpulan kisah inspiratif perjalanan belajar siswa</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1 bg-[#faf8f5]">
              <div className="mb-6 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="text"
                  placeholder="Cari nama siswa atau kata kunci cerita..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-[#e8e4dc] rounded-xl pl-11 pr-4 py-3 text-sm text-[#001f11] focus:outline-none focus:border-[#0a3622]"
                />
              </div>

              <div className="space-y-4">
                {filteredStories.map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-white border border-[#e8e4dc] rounded-xl p-4 shadow-xs flex flex-col sm:flex-row gap-4 items-center"
                  >
                    <img 
                      src={item.thumbnail} 
                      alt={item.title} 
                      className="w-20 h-20 object-cover rounded-lg bg-gray-100 shrink-0"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/student_growth_custom.jpg";
                      }}
                    />
                    <div className="flex-1 text-left">
                      <h4 className="font-manrope font-bold text-sm text-[#001f11] mb-1">
                        {item.title} {item.isPinned && <span className="text-xs bg-[#fdaa3d]/25 text-[#9a5b0f] px-2 py-0.5 rounded-full ml-2 font-semibold">Pinned</span>}
                      </h4>
                      <div className="font-worksans text-xs text-gray-600 line-clamp-2" dangerouslySetInnerHTML={{ __html: item.content }} />
                    </div>
                  </div>
                ))}

                {filteredStories.length === 0 && (
                  <div className="text-center py-10 text-gray-500 text-sm">
                    Cerita siswa tidak ditemukan.
                  </div>
                )}
              </div>
            </div>

            <div className="p-4 bg-white border-t border-[#e8e4dc] flex justify-end">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 bg-gray-100 hover:bg-gray-200 text-[#001f11] font-semibold text-xs rounded-lg transition-colors cursor-pointer"
              >
                Tutup
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};