import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Calendar, Clock, MapPin, Search, Star, Send, ShieldCheck, Heart } from 'lucide-react';
import { FAQ_DATA, TESTIMONIALS_DATA, FEATURED_PROGRAMS } from '../data';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

/* 1. PPDB 2026/2027 Registration Modal */
export const PPDBModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    childName: '',
    parentName: '',
    phone: '',
    gradeTarget: 'Kelas 1',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#e8e4dc] relative animate-in zoom-in-95 my-8">
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-[#0a3622] rounded-full flex items-center justify-center text-[#fdaa3d] mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-manrope font-extrabold text-2xl text-[#001f11]">
              Pendaftaran Berhasil Dikirim!
            </h3>
            <p className="font-worksans text-sm text-[#414943] max-w-sm mx-auto leading-relaxed">
              Terima kasih Ayah/Bunda <strong>{formData.parentName}</strong>. Tim Humas & PPDB MI Asih Putera akan segera menghubungi melalui WhatsApp (<strong>{formData.phone}</strong>) untuk jadwal observasi <strong>{formData.childName}</strong>.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="w-full bg-[#0a3622] hover:bg-[#001f11] text-white font-manrope font-bold py-3 rounded-xl transition-colors cursor-pointer"
              >
                Selesai
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-manrope font-bold uppercase tracking-wider text-[#c87a1e] bg-[#fdf2e4] px-2.5 py-1 rounded-full">
                Tahun Ajaran 2026/2027
              </span>
              <h3 className="font-manrope font-extrabold text-2xl text-[#001f11] mt-2">
                Pendaftaran Siswa Baru (PPDB)
              </h3>
              <p className="font-worksans text-xs text-[#717972] mt-1">
                Lengkapi formulir singkat ini untuk memulai proses seleksi & observasi calon santri.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-manrope text-xs font-bold text-[#1c1c18] mb-1">
                  Nama Lengkap Calon Siswa *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Muhammad Raffi Pratama"
                  value={formData.childName}
                  onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#fcf9f2] border border-[#dcdad3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a3622]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-manrope text-xs font-bold text-[#1c1c18] mb-1">
                    Nama Ayah / Bunda *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Ibu Rina"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#fcf9f2] border border-[#dcdad3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a3622]"
                  />
                </div>
                <div>
                  <label className="block font-manrope text-xs font-bold text-[#1c1c18] mb-1">
                    Nomor WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="08123456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#fcf9f2] border border-[#dcdad3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a3622]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-manrope text-xs font-bold text-[#1c1c18] mb-1">
                  Pilihan Tingkat Masuk
                </label>
                <select
                  value={formData.gradeTarget}
                  onChange={(e) => setFormData({ ...formData, gradeTarget: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#fcf9f2] border border-[#dcdad3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a3622]"
                >
                  <option value="Kelas 1 (Siswa Baru)">Kelas 1 (Siswa Baru)</option>
                  <option value="Pindahan Kelas 2">Pindahan Kelas 2</option>
                  <option value="Pindahan Kelas 3">Pindahan Kelas 3</option>
                  <option value="Pindahan Kelas 4">Pindahan Kelas 4</option>
                  <option value="Pindahan Kelas 5">Pindahan Kelas 5</option>
                </select>
              </div>

              <div>
                <label className="block font-manrope text-xs font-bold text-[#1c1c18] mb-1">
                  Catatan / Pertanyaan Tambahan
                </label>
                <textarea
                  rows={2}
                  placeholder="Ceritakan minat atau kebutuhan khusus ananda jika ada..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-[#fcf9f2] border border-[#dcdad3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a3622]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#c87a1e] hover:bg-[#b56b15] active:scale-98 text-white font-manrope font-bold py-3.5 rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Kirim Formulir Pendaftaran</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

/* 2. Kunjungi Sekolah (School Tour Modal) */
export const SchoolVisitModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [booked, setBooked] = useState(false);
  const [visitorName, setVisitorName] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [visitTime, setVisitTime] = useState('09:00 WIB');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#e8e4dc] relative animate-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {booked ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-[#0a3622] rounded-full flex items-center justify-center text-[#fdaa3d] mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-manrope font-extrabold text-2xl text-[#001f11]">
              Jadwal Kunjungan Dikonfirmasi!
            </h3>
            <p className="font-worksans text-sm text-[#414943] leading-relaxed">
              Kami menunggu kehadiran Bapak/Ibu <strong>{visitorName}</strong> pada tanggal <strong>{visitDate || 'yang dipilih'}</strong> pukul <strong>{visitTime}</strong> di Kampus MI Asih Putera, Cimahi.
            </p>
            <div className="p-3 bg-[#fcf9f2] rounded-xl text-left text-xs font-worksans text-[#414943] flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#c87a1e] shrink-0 mt-0.5" />
              <span>Jl. P. Cibebat No. 33, Kec. Cimahi Utara, Kota Cimahi, Jawa Barat 40513</span>
            </div>
            <button
              onClick={onClose}
              className="w-full bg-[#0a3622] text-white font-manrope font-bold py-3 rounded-xl hover:bg-[#001f11]"
            >
              Tutup
            </button>
          </div>
        ) : (
          <div>
            <h3 className="font-manrope font-extrabold text-2xl text-[#001f11] mb-2">
              Jadwalkan Kunjungan Sekolah
            </h3>
            <p className="font-worksans text-xs text-[#717972] mb-6">
              Lihat langsung proses pembelajaran ramah anak, sarana prasarana, serta berbincang dengan kepala sekolah dan ustadz/ustadzah.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-manrope text-xs font-bold text-[#1c1c18] mb-1">
                  Nama Ayah / Bunda *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nama Anda"
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#fcf9f2] border border-[#dcdad3] rounded-lg focus:ring-2 focus:ring-[#0a3622]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-manrope text-xs font-bold text-[#1c1c18] mb-1">
                    Pilih Tanggal *
                  </label>
                  <input
                    type="date"
                    required
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#fcf9f2] border border-[#dcdad3] rounded-lg focus:ring-2 focus:ring-[#0a3622]"
                  />
                </div>
                <div>
                  <label className="block font-manrope text-xs font-bold text-[#1c1c18] mb-1">
                    Waktu Kunjungan
                  </label>
                  <select
                    value={visitTime}
                    onChange={(e) => setVisitTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#fcf9f2] border border-[#dcdad3] rounded-lg focus:ring-2 focus:ring-[#0a3622]"
                  >
                    <option value="09:00 WIB">09:00 WIB (Pagi)</option>
                    <option value="11:00 WIB">11:00 WIB (Siang)</option>
                    <option value="13:30 WIB">13:30 WIB (Sore)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0a3622] hover:bg-[#001f11] text-white font-manrope font-bold py-3.5 rounded-xl shadow-md transition-colors cursor-pointer mt-4"
              >
                Konfirmasi Jadwal Kunjungan
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

/* 3. Konsultasi PPDB Chat / WhatsApp Modal */
export const ConsultationModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#e8e4dc] relative animate-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-full bg-[#fdf2e4] text-[#c87a1e] flex items-center justify-center mx-auto mb-3">
            <Phone className="w-7 h-7" />
          </div>
          <h3 className="font-manrope font-extrabold text-xl text-[#001f11]">
            Konsultasi Langsung PPDB
          </h3>
          <p className="font-worksans text-xs text-[#717972] mt-1">
            Hubungi staf penerimaan siswa baru MI Asih Putera untuk pertanyaan seputar biaya, kurikulum, dan observasi.
          </p>
        </div>

        <div className="space-y-3">
          <a
            href="https://wa.me/6281122334455?text=Assalamu%27alaikum,%20saya%20ingin%20konsultasi%20mengenai%20PPDB%20MI%20Asih%20Putera%202026/2027"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-3.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 rounded-xl text-[#128C7E] font-manrope font-bold text-sm transition-colors"
          >
            <span>Hubungi via WhatsApp</span>
            <span className="text-xs bg-[#25D366] text-white px-2 py-0.5 rounded-full">Online</span>
          </a>

          <a
            href="tel:081122334455"
            className="flex items-center justify-between p-3.5 bg-[#fcf9f2] hover:bg-[#f0eee7] border border-[#dcdad3] rounded-xl text-[#001f11] font-manrope font-semibold text-sm transition-colors"
          >
            <span>Telepon Hotline (0811 2233 4455)</span>
            <Phone className="w-4 h-4 text-[#c87a1e]" />
          </a>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 text-center text-xs text-[#717972]">
          Jam Operasional Humas: Senin - Jumat (07.30 - 15.30 WIB)
        </div>
      </div>
    </div>
  );
};

/* 4. All FAQ Search Modal */
export const AllFaqModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openId, setOpenId] = useState<string | null>(null);

  if (!isOpen) return null;

  const filteredFaqs = FAQ_DATA.filter((item) =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#e8e4dc] relative animate-in zoom-in-95 my-8 max-h-[90vh] flex flex-col">
        <div className="flex items-start justify-between pb-4 border-b border-gray-100">
          <div>
            <h3 className="font-manrope font-extrabold text-2xl text-[#001f11]">
              Pusat Bantuan & FAQ
            </h3>
            <p className="font-worksans text-xs text-[#717972] mt-1">
              Temukan jawaban lengkap seputar kegiatan belajar, biaya, dan fasilitas.
            </p>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Box */}
        <div className="my-4 relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            placeholder="Cari pertanyaan... (contoh: tahfiz, biaya, seragam)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#fcf9f2] border border-[#dcdad3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a3622]"
          />
        </div>

        {/* FAQ List */}
        <div className="overflow-y-auto space-y-3 flex-1 pr-1">
          {filteredFaqs.map((faq) => {
            const isOpenAccordion = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-[#e8e4dc] rounded-xl overflow-hidden bg-[#fcf9f2]"
              >
                <button
                  onClick={() => setOpenId(isOpenAccordion ? null : faq.id)}
                  className="w-full p-4 text-left font-manrope font-bold text-sm text-[#001f11] flex items-center justify-between gap-3 hover:bg-[#f6f3ec] transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="text-lg text-[#c87a1e] leading-none">
                    {isOpenAccordion ? '−' : '+'}
                  </span>
                </button>
                {isOpenAccordion && (
                  <div className="p-4 pt-0 font-worksans text-xs sm:text-sm text-[#414943] leading-relaxed border-t border-[#e8e4dc] bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* 5. All Testimonials Modal */
export const AllTestimonialsModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#e8e4dc] relative animate-in zoom-in-95 my-8 max-h-[90vh] flex flex-col">
        <div className="flex items-start justify-between pb-4 border-b border-gray-100">
          <div>
            <h3 className="font-manrope font-extrabold text-2xl text-[#001f11]">
              Suara & Testimoni Orang Tua
            </h3>
            <p className="font-worksans text-xs text-[#717972] mt-1">
              Pengalaman nyata para orang tua mempercayakan putra-putrinya di MI Asih Putera.
            </p>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto space-y-4 py-4 pr-1">
          {TESTIMONIALS_DATA.map((t) => (
            <div key={t.id} className="p-5 rounded-xl border border-[#e8e4dc] bg-[#fcf9f2]">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#fdaa3d]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-manrope font-bold text-sm text-[#001f11]">{t.name}</h4>
                  <p className="font-worksans text-xs text-[#717972]">{t.role}</p>
                </div>
                <div className="ml-auto flex text-[#fdaa3d]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="font-worksans italic text-xs sm:text-sm text-[#414943] leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
