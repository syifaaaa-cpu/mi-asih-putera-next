import React from 'react';
import { ArrowRight, Eye, UserCheck, ClipboardCheck, Mail, Users2, CheckCircle2 } from 'lucide-react';
const studentGrowthImg = "/images/student_growth_custom.jpg";

interface StudentGrowthSectionProps {
  onOpenStories: () => void;
  onOpenConsultation: () => void;
}

export const StudentGrowthSection: React.FC<StudentGrowthSectionProps> = ({
  onOpenStories,
}) => {
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
    <section id="growth" className="py-12 sm:py-16 bg-[#fcf9f2]">
      <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Card: Cerita Pertumbuhan Siswa Kami (Dark Green with Student Image) */}
          <div className="lg:col-span-7 bg-[#0a3622] rounded-2xl overflow-hidden border border-[#001f11] shadow-md text-white p-6 sm:p-8 flex flex-col justify-between relative">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              
              {/* Text column */}
              <div className="sm:col-span-7 space-y-4">
                <h3 className="font-manrope font-extrabold text-xl sm:text-2xl text-[#fdaa3d] flex items-center gap-1.5">
                  <span>Cerita Pertumbuhan Siswa Kami</span>
                  <span className="text-[#fdaa3d]">♥</span>
                </h3>

                <p className="font-worksans italic text-sm sm:text-[15px] leading-relaxed text-[#e0e8e3]">
                  &ldquo;Dulu pemalu dan takut berbicara di depan kelas. Sekarang berani
                  presentasi, memimpin kelompok, dan menjadi inspirasi bagi teman-temannya.&rdquo;
                </p>

                <div className="pt-2">
                  <p className="font-manrope font-bold text-sm sm:text-base text-white">
                    Siti Aisyah – Kelas 5
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenStories}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#fdaa3d]/60 text-xs sm:text-sm font-manrope font-semibold text-white hover:bg-[#fdaa3d] hover:text-[#001f11] transition-all cursor-pointer"
                  >
                    <span>Baca Cerita Lainnya</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Student Photo Column */}
              <div className="sm:col-span-5 flex justify-center sm:justify-end">
                <div className="w-48 h-60 sm:w-full sm:h-64 rounded-xl overflow-hidden border-2 border-white/20 shadow-md">
                  <img
                    src={studentGrowthImg}
                    alt="Siti Aisyah Siswa Berprestasi MI Asih Putera"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Right Card: Anak Bertumbuh, Kami Mendampingi (White Card) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#e8e4dc] shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="font-manrope font-extrabold text-xl sm:text-2xl text-[#001f11] text-center mb-6">
                Anak Bertumbuh, Kami Mendampingi
              </h3>

              {/* 5 Process Steps Flow */}
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

              {/* 2-Column Support Points */}
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
  );
};
