"use client";
import React, { useState, useMemo, useEffect } from "react";

import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  X,
  Share2,
  Sparkles,
  Search,
  Filter,
  Newspaper,
  ChevronRight,
  UserCheck,
} from "lucide-react";
import { LATEST_NEWS_DATA as FALLBACK_NEWS_DATA } from "../data";
import { NewsItem } from "../types";

export const LatestNewsSection: React.FC = () => {
  const [newsData, setNewsData] = useState<NewsItem[]>(FALLBACK_NEWS_DATA);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isArchiveModalOpen, setIsArchiveModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Fetch data dari API melalui proxy Next.js untuk menghindari CORS
  useEffect(() => {
    fetch("/api/news", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((response) => {
        // Mengambil array dari key 'data' sesuai struktur Cration di Inspect Element
        const rawData =
          response.data || (Array.isArray(response) ? response : []);

        if (rawData.length > 0) {
          const mappedNews: NewsItem[] = rawData.map(
            (item: any, index: number) => {
              const baseUrl =
                process.env.NEXT_PUBLIC_API_URL || "http://localhost:7000";
              return {
                id: item.ContentId || index + 1,
                title: item.Title || "Tanpa Judul",
                category: item.Category || "Berita",
                date: item.TglPublish
                  ? new Date(item.TglPublish).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })
                  : "01 Sep 2026",
                author: item.Author || "Admin",
                readTime: "3 menit baca",
                // Mengambil URL thumbnail jika ada, atau gunakan default gambar Unsplash
                image:
                  item.SignedThumbnail || item.Thumbnail
                    ? `${baseUrl}/resources/asset/${item.Thumbnail}`
                    : "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800",
                summary: item.Content
                  ? item.Content.replace(/<[^>]*>?/gm, "")
                  : "Ringkasan berita tidak tersedia.",
                fullContent: [
                  item.Content
                    ? item.Content.replace(/<[^>]*>?/gm, "")
                    : "Isi berita lengkap...",
                ],
                featured: index === 0,
              };
            },
          );

          setNewsData(mappedNews);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Gagal mengambil data berita dari Cration:", err);
        setIsLoading(false);
      });
  }, []);

  // Extract featured news and supporting news
  const headlineNews = useMemo(() => {
    return newsData.find((item) => item.featured) || newsData[0];
  }, [newsData]);

  const supportingNews = useMemo(() => {
    return newsData.filter((item) => item.id !== headlineNews?.id).slice(0, 4);
  }, [newsData, headlineNews]);

  // Categories list for Archive
  const categories = useMemo(() => {
    const cats = Array.from(new Set(newsData.map((item) => item.category)));
    return ["Semua", ...cats];
  }, [newsData]);

  // Filtered news for Archive modal
  const filteredArchiveNews = useMemo(() => {
    return newsData.filter((item) => {
      const matchCategory =
        selectedCategory === "Semua" || item.category === selectedCategory;
      const matchQuery =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [newsData, selectedCategory, searchQuery]);

  if (!headlineNews) return null;

  return (
    <section
      id="berita"
      className="py-16 sm:py-24 bg-[#fbf7ee] relative overflow-hidden"
    >
      {/* Background Decorative Islamic Lattice Watermark */}
      <div className="absolute inset-0 bg-[#0a3622] opacity-5 pointer-events-none z-0" />

      {/* Soft Ambient Radial Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#c87a1e]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#0a3622]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Top Bar: Title & "Lihat Semua Berita" Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 pb-6 border-b border-[#e5dfd3]">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a3622]/8 border border-[#c87a1e]/25 text-[#0a3622] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#c87a1e]" />
              <span>Kabar & Syiar Madrasah</span>
            </div>

            <h2 className="font-manrope font-extrabold text-2xl sm:text-3xl lg:text-[34px] text-[#001f11] tracking-tight">
              Berita & Kegiatan Terbaru
            </h2>

            <p className="mt-2 font-worksans text-sm sm:text-base text-[#414943] leading-relaxed max-w-xl">
              Ikuti dokumentasi aktivitas pembinaan akhlak, capaian prestasi,
              dan syiar keislaman santri MI Asih Putera.
            </p>
          </div>

          {/* Quick Archive Link Button on Top Right */}
          <div className="shrink-0">
            <button
              onClick={() => setIsArchiveModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white hover:bg-[#0a3622] text-[#0a3622] hover:text-[#fdaa3d] border border-[#d6cfc0] hover:border-[#0a3622] font-manrope font-bold text-sm shadow-xs hover:shadow-md transition-all group cursor-pointer"
            >
              <Newspaper className="w-4 h-4 text-[#c87a1e] group-hover:text-[#fdaa3d]" />
              <span>Lihat Semua Berita</span>
              <span className="px-2 py-0.5 rounded-full bg-[#0a3622]/10 group-hover:bg-white/20 text-xs">
                {newsData.length}
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Dynamic Editorial Grid: 1 Big Headline + Vertical List of Supporting News */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-stretch">
          {/* 1. LEFT: Berita Utama (Featured Headline) - Takes 7 Cols */}
          <div className="lg:col-span-7 flex flex-col">
            <article className="group bg-white rounded-2xl overflow-hidden border border-[#e2dcd0] shadow-md hover:shadow-xl transition-all duration-300 flex-1 flex flex-col justify-between">
              {/* Headline Hero Image Container */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#001f11]/10">
                <img
                  src={headlineNews.image}
                  alt={headlineNews.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Rich Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-manrope font-extrabold tracking-wide bg-[#c87a1e] text-white shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    BERITA UTAMA
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-manrope font-bold tracking-wide bg-[#0a3622]/90 backdrop-blur-md text-[#fdaa3d] border border-[#fdaa3d]/30 shadow-md">
                    {headlineNews.category}
                  </span>
                </div>

                {/* Reading Time Badge */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 text-xs font-medium text-white/95 bg-black/50 backdrop-blur-xs px-3 py-1 rounded-full border border-white/15">
                  <Clock className="w-3.5 h-3.5 text-[#fdaa3d]" />
                  <span>{headlineNews.readTime}</span>
                </div>
              </div>

              {/* Headline Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Meta Bar */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-manrope text-[#717972] mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#c87a1e] shrink-0" />
                      <span>{headlineNews.date}</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-[#d0c9ba]" />
                    <div className="flex items-center gap-1.5 text-[#0a3622] font-semibold">
                      <UserCheck className="w-3.5 h-3.5 text-[#0a3622]" />
                      <span>{headlineNews.author}</span>
                    </div>
                  </div>

                  {/* Headline Title */}
                  <h3
                    onClick={() => setSelectedNews(headlineNews)}
                    className="font-manrope font-extrabold text-xl sm:text-2xl text-[#001f11] leading-snug group-hover:text-[#c87a1e] transition-colors mb-3 cursor-pointer"
                  >
                    {headlineNews.title}
                  </h3>

                  {/* Summary */}
                  <p className="font-worksans text-sm sm:text-[15px] text-[#414943] leading-relaxed mb-6">
                    {headlineNews.summary}
                  </p>
                </div>

                {/* Headline Footer Action */}
                <div className="pt-4 border-t border-[#f0ece1] flex items-center justify-between mt-auto">
                  <button
                    onClick={() => setSelectedNews(headlineNews)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0a3622] hover:bg-[#001f11] text-[#fdaa3d] font-manrope font-bold text-sm transition-all shadow-xs cursor-pointer"
                  >
                    <span>Baca Berita Utama</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => setSelectedNews(headlineNews)}
                    className="w-10 h-10 rounded-xl bg-[#fbf7ee] border border-[#e5dfd3] flex items-center justify-center text-[#c87a1e] group-hover:bg-[#0a3622] group-hover:text-[#fdaa3d] group-hover:border-[#0a3622] transition-all cursor-pointer"
                    title="Baca Selengkapnya"
                  >
                    <BookOpen className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          </div>

          {/* 2. RIGHT: Berita Terkini Lainnya (Supporting News Cards) - Takes 5 Cols */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full gap-2.5">
            <div className="flex items-center justify-between pb-0.5">
              <span className="font-manrope font-bold text-sm sm:text-base text-[#001f11] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c87a1e]" />
                Berita & Agenda Lainnya
              </span>
              <span className="text-xs text-[#717972] font-manrope">
                Terbaru
              </span>
            </div>

            <div className="flex flex-col gap-2.5 flex-1 justify-between">
              {supportingNews.map((news) => (
                <article
                  key={news.id}
                  onClick={() => setSelectedNews(news)}
                  className="group bg-white rounded-2xl p-3 sm:p-3.5 border border-[#e5dfd3] shadow-2xs hover:shadow-md hover:border-[#c87a1e]/40 transition-all duration-300 flex gap-3.5 items-center cursor-pointer flex-1"
                >
                  {/* Thumbnail Image */}
                  <div className="relative w-22 sm:w-26 h-18 sm:h-20 rounded-xl overflow-hidden shrink-0 bg-[#001f11]/10">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-1 left-1">
                      <span className="inline-block text-[8.5px] font-bold px-1.5 py-0.5 rounded bg-[#0a3622]/90 text-[#fdaa3d]">
                        {news.category.split(" ")[0]}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between min-w-0 py-0.5">
                    <div>
                      <div className="flex items-center gap-1 text-[10.5px] font-manrope text-[#717972] mb-0.5">
                        <Calendar className="w-3 h-3 text-[#c87a1e] shrink-0" />
                        <span className="truncate">{news.date}</span>
                      </div>

                      <h4 className="font-manrope font-bold text-[13px] sm:text-sm text-[#001f11] leading-snug group-hover:text-[#c87a1e] transition-colors line-clamp-2">
                        {news.title}
                      </h4>
                    </div>

                    <div className="pt-1.5 flex items-center justify-between text-xs font-manrope font-semibold text-[#0a3622] group-hover:text-[#c87a1e]">
                      <span className="text-[10.5px] text-[#717972] font-normal">
                        {news.readTime}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px]">
                        <span>Baca</span>
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 1. Modal Detail Berita (Single Article View) */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#e8e4dc] animate-in zoom-in-95 my-8">
            {/* Modal Hero Image */}
            <div className="relative aspect-[16/9] w-full bg-[#001f11]/10">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#0a3622] text-[#fdaa3d] border border-[#fdaa3d]/40 shadow-lg">
                  {selectedNews.category}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-4 text-xs font-manrope text-[#717972] mb-3 pb-3 border-b border-[#f0ece1]">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#c87a1e]" />
                  <span>{selectedNews.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#c87a1e]" />
                  <span>{selectedNews.readTime}</span>
                </div>
                <div className="text-[#0a3622] font-semibold">
                  Oleh: {selectedNews.author}
                </div>
              </div>

              <h2 className="font-manrope font-extrabold text-xl sm:text-2xl text-[#001f11] leading-tight mb-4">
                {selectedNews.title}
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base text-[#414943] font-worksans leading-relaxed">
                {selectedNews.fullContent?.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Modal Footer Actions */}
              <div className="mt-8 pt-5 border-t border-[#f0ece1] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-[#717972]">
                  <Share2 className="w-4 h-4 text-[#c87a1e]" />
                  <span>Bagikan informasi kegiatan ini ke grup parenting</span>
                </div>

                <button
                  onClick={() => setSelectedNews(null)}
                  className="px-6 py-2.5 bg-[#0a3622] hover:bg-[#001f11] text-white font-manrope font-semibold text-sm rounded-xl transition-all cursor-pointer"
                >
                  Tutup Berita
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Modal Arsip Seluruh Berita & Kegiatan (Scalable News Archive) */}
      {isArchiveModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#fcfaf5] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#e8e4dc] animate-in zoom-in-95 my-6 flex flex-col">
            {/* Archive Header */}
            <div className="p-6 sm:p-7 bg-[#0a3622] text-white rounded-t-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[#0a3622] opacity-25 pointer-events-none" />
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#fdaa3d] text-xs font-semibold uppercase tracking-wider mb-2">
                    <Newspaper className="w-3.5 h-3.5" />
                    <span>Pusat Informasi & Syiar</span>
                  </div>
                  <h3 className="font-manrope font-extrabold text-2xl sm:text-3xl text-white">
                    Arsip Berita & Kegiatan Sekolah
                  </h3>
                  <p className="font-worksans text-xs sm:text-sm text-[#a4d1b4] mt-1">
                    Koleksi lengkap liputan kegiatan santri, prestasi, dan
                    agenda resmi MI Asih Putera Cimahi.
                  </p>
                </div>

                <button
                  onClick={() => setIsArchiveModalOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Archive Search & Filter Bar */}
            <div className="p-5 sm:p-6 bg-white border-b border-[#e8e4dc] space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                {/* Search Bar */}
                <div className="relative w-full sm:max-w-md">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#717972]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari berita, tema kegiatan, atau kata kunci..."
                    className="w-full pl-10 pr-4 py-2.5 bg-[#fbf7ee] border border-[#d6cfc0] rounded-xl text-sm font-worksans text-[#001f11] placeholder:text-[#8c948e] focus:outline-none focus:border-[#0a3622]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#717972] hover:text-[#001f11]"
                    >
                      Reset
                    </button>
                  )}
                </div>

                {/* Total Counter */}
                <div className="text-xs font-manrope font-semibold text-[#717972] self-end sm:self-center">
                  Menampilkan{" "}
                  <span className="text-[#0a3622] font-bold">
                    {filteredArchiveNews.length}
                  </span>{" "}
                  dari {newsData.length} artikel
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                <Filter className="w-3.5 h-3.5 text-[#717972] shrink-0 mr-1" />
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-manrope font-bold whitespace-nowrap transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-[#0a3622] text-[#fdaa3d] shadow-xs"
                        : "bg-[#fbf7ee] text-[#414943] hover:bg-[#ece5d8] border border-[#e5dfd3]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Archive Items Grid */}
            <div className="p-6 sm:p-7 flex-1 overflow-y-auto max-h-[55vh]">
              {filteredArchiveNews.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-[#d6cfc0]">
                  <Newspaper className="w-10 h-10 text-[#d0c9ba] mx-auto mb-3" />
                  <p className="font-manrope font-bold text-base text-[#001f11]">
                    Tidak ada berita yang sesuai
                  </p>
                  <p className="font-worksans text-xs text-[#717972] mt-1">
                    Coba gunakan kata kunci lain atau pilih kategori Semua.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {filteredArchiveNews.map((news) => (
                    <div
                      key={news.id}
                      onClick={() => {
                        setSelectedNews(news);
                      }}
                      className="group bg-white rounded-2xl overflow-hidden border border-[#e5dfd3] hover:border-[#0a3622] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#001f11]/10">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="inline-block text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#0a3622]/90 text-[#fdaa3d]">
                            {news.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 text-xs text-[#717972] mb-2 font-manrope">
                            <Calendar className="w-3.5 h-3.5 text-[#c87a1e]" />
                            <span>{news.date}</span>
                          </div>

                          <h4 className="font-manrope font-bold text-base text-[#001f11] group-hover:text-[#c87a1e] transition-colors leading-snug line-clamp-2 mb-2">
                            {news.title}
                          </h4>

                          <p className="font-worksans text-xs text-[#414943] leading-relaxed line-clamp-2 mb-4">
                            {news.summary}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-[#f0ece1] flex items-center justify-between text-xs font-bold text-[#0a3622]">
                          <span>{news.readTime}</span>
                          <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            <span>Baca Lengkap</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Archive Footer */}
            <div className="p-4 sm:p-5 bg-white border-t border-[#e8e4dc] rounded-b-2xl flex items-center justify-between">
              <span className="text-xs text-[#717972] font-worksans">
                MI Asih Putera • Berbagi Kebaikan & Inspirasi Pendidikan
              </span>
              <button
                onClick={() => setIsArchiveModalOpen((v) => !v)}
                className="px-5 py-2 rounded-xl bg-[#fbf7ee] hover:bg-[#0a3622] text-[#0a3622] hover:text-white font-manrope font-bold text-xs transition-all border border-[#d6cfc0] cursor-pointer"
              >
                Tutup Arsip
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
