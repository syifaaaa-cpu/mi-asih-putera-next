"use client";
import React, { useState } from 'react';
import { Star, ChevronRight, ArrowRight, X } from 'lucide-react';
import { TESTIMONIALS_DATA, FAQ_DATA } from '../data';
import { FaqItem } from '../types';
const faqIllustrationImg = "/images/faq_custom_image.jpg";

interface TestimonialsAndFaqSectionProps {
  onOpenAllTestimonials: () => void;
  onOpenAllFaqs: () => void;
}

export const TestimonialsAndFaqSection: React.FC<TestimonialsAndFaqSectionProps> = ({
  onOpenAllTestimonials,
  onOpenAllFaqs,
}) => {
  const [selectedFaq, setSelectedFaq] = useState<FaqItem | null>(null);

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-islamic-arabesque relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Card: Suara Orang Tua */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#e8e4dc] shadow-xs flex flex-col justify-between">
            <div>
              {/* Quote Mark & Heading */}
              <div className="flex items-center gap-4 mb-8">
                <div className="font-serif-title font-bold text-4xl text-[#c87a1e] leading-none select-none">
                  “
                </div>
                <h2 className="font-manrope font-extrabold text-2xl sm:text-[28px] text-[#001f11] tracking-tight">
                  Suara Orang Tua
                </h2>
              </div>

              {/* 2 Testimonial Items Side-by-Side or Stacked */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                
                {/* Testimonial 1 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-[#fdaa3d] p-0.5">
                    <img
                      src={TESTIMONIALS_DATA[0].avatar}
                      alt={TESTIMONIALS_DATA[0].name}
                      className="w-full h-full object-cover rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="font-worksans italic text-xs sm:text-[13px] text-[#414943] leading-relaxed mb-3">
                    &ldquo;{TESTIMONIALS_DATA[0].quote}&rdquo;
                  </p>
                  <p className="font-manrope font-bold text-xs sm:text-sm text-[#001f11]">
                    {TESTIMONIALS_DATA[0].name}
                  </p>
                  <p className="font-worksans text-[11px] text-[#717972] mb-1">
                    {TESTIMONIALS_DATA[0].role}
                  </p>
                  <div className="flex items-center text-[#fdaa3d] space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="flex flex-col items-center text-center border-t sm:border-t-0 sm:border-l border-[#f0eee7] pt-4 sm:pt-0 sm:pl-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-[#fdaa3d] p-0.5">
                    <img
                      src={TESTIMONIALS_DATA[1].avatar}
                      alt={TESTIMONIALS_DATA[1].name}
                      className="w-full h-full object-cover rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="font-worksans italic text-xs sm:text-[13px] text-[#414943] leading-relaxed mb-3">
                    &ldquo;{TESTIMONIALS_DATA[1].quote}&rdquo;
                  </p>
                  <p className="font-manrope font-bold text-xs sm:text-sm text-[#001f11]">
                    {TESTIMONIALS_DATA[1].name}
                  </p>
                  <p className="font-worksans text-[11px] text-[#717972] mb-1">
                    {TESTIMONIALS_DATA[1].role}
                  </p>
                  <div className="flex items-center text-[#fdaa3d] space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-4 flex justify-center border-t border-[#f0eee7]">
              <button
                onClick={onOpenAllTestimonials}
                className="px-6 py-2.5 rounded-full border border-[#001f11] text-xs sm:text-sm font-manrope font-semibold text-[#001f11] hover:bg-[#001f11] hover:text-white transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Lihat Semua Testimoni</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Card: Pertanyaan yang Sering Diajukan (FAQ) */}
          <div id="faq" className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#e8e4dc] shadow-xs flex flex-col justify-between">
            <div>
              <h2 className="font-manrope font-extrabold text-2xl sm:text-[28px] text-[#001f11] tracking-tight mb-6">
                Pertanyaan yang Sering Diajukan
              </h2>

              {/* Two sub-columns: Left FAQ buttons grid & Right Prayer/Class Photo */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* FAQ Questions Buttons (6 items in 2 columns) */}
                <div className="md:col-span-8 flex flex-col gap-2.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {FAQ_DATA.map((faq) => (
                      <button
                        key={faq.id}
                        onClick={() => setSelectedFaq(faq)}
                        className="text-left p-3 rounded-xl border border-[#e8e4dc] bg-[#fcf9f2] hover:bg-white hover:border-[#c87a1e] hover:shadow-xs transition-all flex items-center justify-between gap-2 group cursor-pointer"
                      >
                        <span className="font-worksans font-medium text-xs text-[#1c1c18] group-hover:text-[#001f11] leading-snug">
                          {faq.question}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#717972] group-hover:text-[#c87a1e] group-hover:translate-x-0.5 transition-all shrink-0" />
                      </button>
                    ))}
                  </div>

                  {/* Left bottom CTA */}
                  <div className="pt-3">
                    <button
                      onClick={onOpenAllFaqs}
                      className="bg-[#0a3622] hover:bg-[#001f11] text-white font-manrope font-bold text-xs sm:text-[13px] px-5 py-2.5 rounded-lg flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Lihat Semua FAQ</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right Photo Column: Students in Prayer / Halaqah on Carpet */}
                <div className="md:col-span-4 flex justify-center">
                  <div className="w-full h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden border border-[#e8e4dc] shadow-xs">
                    <img
                      src={faqIllustrationImg}
                      alt="Kegiatan Siswa MI Asih Putera"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Interactive FAQ Quick View Modal */}
      {selectedFaq && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#e8e4dc] animate-in zoom-in-95">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="font-manrope font-bold text-lg text-[#001f11]">
                {selectedFaq.question}
              </h3>
              <button
                onClick={() => setSelectedFaq(null)}
                className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="font-worksans text-sm text-[#414943] leading-relaxed mb-6">
              {selectedFaq.answer}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedFaq(null)}
                className="px-4 py-2 bg-[#0a3622] text-white text-xs font-manrope font-bold rounded-lg hover:bg-[#001f11]"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
