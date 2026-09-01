import { StatItem, OutcomeItem, PillarItem, ProgramItem, TestimonialItem, FaqItem, NewsItem } from './types';

const fondasiDiriImg = '/images/fondasi_diri_1787298883886.jpg';
const pblLearningImg = '/images/pbl_learning_1787298858445.jpg';
const tahfidzQuranImg = '/images/tahfidz_quran_1787298838321.jpg';
const citySurvivalImg = '/images/city_survival_1787298899285.jpg';
const heroStudentsImg = '/images/hero_students_1787298787568.jpg';
const outcomeImanAkhlakImg = '/images/outcome_1_custom.jpg';
const outcomeIlmuNalarImg = '/images/outcome_2_custom.jpg';
const outcomeKarakterImg = '/images/outcome_3_custom.jpg';
const outcomeKaryaImg = '/images/outcome_4_custom.jpg';
const pillarFondasiImg = '/images/pillar_1_fondasi.jpg';
const pillarEksplorasiImg = '/images/pillar_2_eksplorasi.jpg';
const pillarKutureImg = '/images/pillar_3_kuture.jpg';
const progTauhidImg = '/images/prog_1_tauhid.jpg';
const progPblImg = '/images/prog_2_pbl.jpg';
const progBaktiImg = '/images/prog_3_bakti.jpg';
const progSurvivalImg = '/images/prog_4_survival.jpg';
const newsHutRiImg = '/images/news_hut_ri.jpg';
const newsPramukaImg = '/images/news_pramuka.jpg';
const newsWisudaTahfidzNewImg = '/images/news_wisuda_tahfidz.jpg';
const newsRamadhanCeriaImg = '/images/news_ramadhan_ceria.jpg';
const newsOlimpiadeSainsImg = '/images/news_olimpiade_sains.jpg';

export const STATS_DATA: StatItem[] = [
  {
    icon: 'clock',
    value: '22+',
    label: 'Tahun Pengalaman',
    sublabel: 'Mendidik Generasi'
  },
  {
    icon: 'users',
    value: '1.200+',
    label: 'Siswa Aktif',
    sublabel: '(Seluruh Yayasan)'
  },
  {
    icon: 'user-check',
    value: '80+',
    label: 'Guru Profesional',
    sublabel: 'dan Berkarakter'
  },
  {
    icon: 'scale',
    value: '18:1',
    label: 'Rasio Guru : Siswa',
    sublabel: 'di MI'
  },
  {
    icon: 'shield-check',
    value: 'A',
    label: 'Akreditasi',
    sublabel: 'MI Asih Putera'
  }
];

export const OUTCOMES_DATA: OutcomeItem[] = [
  {
    id: 'iman-akhlak',
    iconName: 'heart',
    title: 'Iman & Akhlak',
    description: 'Menanamkan nilai Islam dan akhlak mulia sebagai dasar berpikir, bersikap, dan bertindak.',
    color: '#0a3622',
    image: outcomeImanAkhlakImg,
    subtitle: 'Karakter Robbani'
  },
  {
    id: 'ilmu-nalar',
    iconName: 'book',
    title: 'Ilmu & Nalar',
    description: 'Mengembangkan literasi, numerasi, sains, dan teknologi untuk memahami dunia.',
    color: '#d9822b',
    image: outcomeIlmuNalarImg,
    subtitle: 'Literasi & STEM'
  },
  {
    id: 'karakter-kemandirian',
    iconName: 'cap',
    title: 'Karakter & Kemandirian',
    description: 'Membentuk karakter cageur, bageur, bener, pinter, singer, dan kemandirian dalam bertanggung jawab.',
    color: '#0f4c3a',
    image: outcomeKarakterImg,
    subtitle: 'Kepemimpinan'
  },
  {
    id: 'karya-kebermanfaatan',
    iconName: 'handHeart',
    title: 'Karya & Kebermanfaatan',
    description: 'Mendorong anak untuk berkarya, berkolaborasi, dan memberi manfaat bagi lingkungan dan masyarakat.',
    color: '#1a5336',
    image: outcomeKaryaImg,
    subtitle: 'Aksi Nyata'
  }
];

export const PILLARS_DATA: PillarItem[] = [
  {
    grade: 'Kelas 1-2',
    gradeBadge: 'Kelas 1-2',
    title: 'Fondasi Diri',
    image: pillarFondasiImg,
    bullets: [
      'Adab & kebiasaan baik',
      'Literasi & numerasi dasar',
      'Kemandirian & percaya diri'
    ]
  },
  {
    grade: 'Kelas 3-4',
    gradeBadge: 'Kelas 3-4',
    title: 'Eksplorasi',
    image: pillarEksplorasiImg,
    bullets: [
      'Berpikir kritis & kreatif',
      'Kolaborasi & komunikasi',
      'Public speaking',
      'Proyek & pengalaman nyata'
    ]
  },
  {
    grade: 'Kelas 5-6',
    gradeBadge: 'Kelas 5-6',
    title: 'Kuture-Reusi',
    image: pillarKutureImg,
    bullets: [
      'Kepemimpinan & tanggung jawab',
      'Life skills & problem solving',
      'Karya, inovasi & kebermanfaatan'
    ]
  }
];

export const FEATURED_PROGRAMS: ProgramItem[] = [
  {
    id: 'tauhid',
    title: 'Tauhid & Akhlak',
    description: 'Tahfidz Al-Qur\'an terintegrasi nilai Islam sebagai adab dan ibadah sehari-hari.',
    image: progTauhidImg,
    category: 'Religi'
  },
  {
    id: 'pbl',
    title: 'Project-Based Learning',
    description: 'Belajar melalui proyek kontekstual yang menumbuhkan nalar, kreativitas, dan kolaborasi.',
    image: progPblImg,
    category: 'Akademik'
  },
  {
    id: 'bakti',
    title: 'Bakti & Kepedulian',
    description: 'Membentuk empati dan aksi melalui kegiatan berbagi dan menghormati orang tua serta sesama.',
    image: progBaktiImg,
    category: 'Karakter'
  },
  {
    id: 'survival',
    title: 'City Survival & Life Skills',
    description: 'Eksplorasi, teknologi, kebersihan, pemecahan masalah, dan kesiapan menghadapi kehidupan nyata.',
    image: progSurvivalImg,
    category: 'Life Skills'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    name: 'Ibu Rina Septiani',
    role: 'Orang Tua Siswa',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    quote: 'Anak saya lebih mandiri, ceria, dan berakhlak baik. Pengajarannya hangat, programnya lengkap.',
    rating: 5
  },
  {
    id: '2',
    name: 'Bapak Dimas Pratama',
    role: 'Orang Tua Siswa',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'Sekolahnya bagus, guru-gurunya peduli. Kami merasa tenang menitipkan anak di MI Asih Putera.',
    rating: 5
  },
  {
    id: '3',
    name: 'Ibu Hj. Sarah Wulandari',
    role: 'Orang Tua Alumni MI',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    quote: 'Fondasi adab dan kemampuan hafalan Al-Qur\'an yang ditanamkan di MI Asih Putera sangat terasa dampaknya hingga ke jenjang SMP & SMA.',
    rating: 5
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Jam belajar dan kegiatan sekolah?',
    answer: 'Kegiatan belajar mengajar (KBM) berlangsung dari hari Senin hingga Jumat, mulai pukul 07.15 WIB (diawali dengan sholat dhuha dan tadarus) hingga pukul 14.30 WIB (setelah sholat ashar berjamaah).'
  },
  {
    id: 'faq-2',
    question: 'Bagaimana program Bahasa Inggris?',
    answer: 'Program Bahasa Inggris kami menggunakan pendekatan komunikatif kontekstual dan integrasi bilingual pada subjek sains dasar, dilengkapi dengan Native Speaker session dan English Day setiap minggunya.'
  },
  {
    id: 'faq-3',
    question: 'Apakah ada program tahfiz?',
    answer: 'Ya, MI Asih Putera memiliki program unggulan Tahfidz & Tahsin Al-Qur\'an dengan metode terstruktur di mana target lulusan minimal menghafal Juz 30 dan Juz 29 bersanad mutqin.'
  },
  {
    id: 'faq-4',
    question: 'Bagaimana proses pendaftaran?',
    answer: 'Pendaftaran PPDB dilakukan secara online melalui website ini atau langsung ke sekretariat PPDB sekolah. Proses meliputi registrasi, observasi kesiapan belajar anak, dan sesi wawancara orang tua.'
  },
  {
    id: 'faq-5',
    question: 'Bagaimana sistem makan siang?',
    answer: 'Sekolah menyediakan fasilitas katering sehat halal berstandar gizi anak atau siswa dapat membawa bekal dari rumah yang dimakan bersama dengan adab makan Islami yang dibimbing para guru.'
  },
  {
    id: 'faq-6',
    question: 'Berapa biaya masuk dan SPP?',
    answer: 'Rincian biaya investasi pendidikan (dana pengembangan, seragam, buku kegiatan, dan SPP bulanan) dapat diakses melalui formulir PPDB 2026/2027 atau berkonsultasi langsung dengan tim humas kami.'
  }
];

export const LATEST_NEWS_DATA: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Siswa-Siswi MI Asih Putera Mengikuti Kegiatan Merayakan HUT RI',
    category: 'Kegiatan Keislaman',
    date: '18 Ramadhan 1447 H / 12 Maret 2026',
    image: newsHutRiImg,
    summary: 'Suasana meriah menyelimuti MI Asih Putera dalam rangka memperingati HUT RI. Kegiatan diawali dengan upacara bendera yang khidmat, dilanjutkan dengan berbagai lomba tradisional seru seperti tarik tambang, balap karung, dan estafet kelereng yang diikuti antusias oleh seluruh siswa.',
    readTime: '4 menit baca',
    author: 'Humas MI Asih Putera',
    featured: true,
    fullContent: [
      'Suasana meriah menyelimuti MI Asih Putera dalam rangka memperingati HUT RI. Kegiatan diawali dengan upacara bendera yang khidmat, dilanjutkan dengan berbagai lomba tradisional seru seperti tarik tambang, balap karung, dan estafet kelereng yang diikuti antusias oleh seluruh siswa.',
      'Selain perlombaan, acara juga dimeriahkan dengan pentas seni kreatif bertema nasionalisme. Kepala sekolah menyampaikan bahwa kegiatan ini bertujuan menanamkan jiwa patriotisme serta mempererat kebersamaan antar-siswa. Rangkaian acara ditutup dengan penyerahan hadiah bagi para pemenang lomba.'
    ]
  },
  {
    id: 'news-2',
    title: 'Keseruan Siswa Siswi Memperingati HUT Pramuka',
    category: 'Prestasi & Syiar',
    date: '27 Rajab 1447 H / 16 Februari 2026',
    image: newsPramukaImg,
    summary: 'Dalam rangka memperingati Hari Pramuka siswa siswi menggelar upacara dan berbagai kegiatan kepramukaan yang melatih kemandirian, disiplin, dan kecintaan pada tanah air.',
    readTime: '3 menit baca',
    author: 'Tim Kesiswaan',
    fullContent: [
      'Dalam rangka memperingati Hari Pramuka siswa siswi menggelar upacara dan berbagai kegiatan kepramukaan. Kegiatan berlangsung khidmat dengan pembina upacara yang membacakan amanat penting tentang pentingnya menanamkan nilai-nilai Dasa Dharma dalam kehidupan sehari-hari.',
      'Usai upacara, acara dilanjutkan dengan kegiatan seru seperti perkemahan satu hari (persami), penjelajahan alam (Wide Game), serta atraksi keterampilan pionering dan semaphore oleh para anggota pramuka. Pihak sekolah berharap kegiatan ini dapat membentuk karakter siswa yang mandiri, disiplin, dan cinta tanah air.'
    ]
  },
  {
    id: 'news-3',
    title: 'Kegiatan Wisuda Tahfidz MI Asih Putera',
    category: 'Edukasi Lapangan',
    date: '10 Dzulqa\'dah 1447 H / 28 Mei 2026',
    image: newsWisudaTahfidzNewImg,
    summary: 'MI Asih Putera Gelar Wisuda Tahfidz Qur\'an, Cetak Generasi Muda yang Religius dan Berakhlak Mulia. Puluhan siswa-siswi resmi diwisuda setelah menyelesaikan hafalan Al-Qur\'an.',
    readTime: '5 menit baca',
    author: 'Tim Kurikulum PAI',
    fullContent: [
      'MI Asih Putera Gelar Wisuda Tahfidz Qur\'an, Cetak Generasi Muda yang Religius dan Berakhlak Mulia.',
      'Suasana penuh haru dan kebahagiaan menyelimuti acara Wisuda Tahfidz Al-Qur\'an MI Asih Putera yang diselenggarakan pada hari ini. Puluhan siswa-siswi resmi diwisuda setelah berhasil menyelesaikan hafalan Al-Qur\'an mulai dari kategori juz pendek hingga beberapa juz.',
      'Acara diawali dengan prosesi khidmat, dilanjutkan dengan sesi munaqosyah (pengujian hafalan) singkat di atas panggung, di mana para siswa membacakan ayat suci pilihan secara lancar di hadapan para guru dan orang tua. Kepala sekolah menyampaikan apresiasi yang mendalam serta berharap para siswa dapat terus menjaga dan mengamalkan nilai-nilai Al-Qur\'an dalam kehidupan sehari-hari. Acara ditutup dengan prosesi pengalungan medali dan penyerahan syahadah (sertifikat) yang diwarnai rasa bangga dari orang tua wali murid.'
    ]
  },
  {
    id: 'news-4',
    title: 'Kegiatan Ramadhan Ceria MI Asih Putera',
    category: 'Karakter & Karya',
    date: '5 Syawal 1447 H / 24 April 2026',
    image: newsRamadhanCeriaImg,
    summary: 'MI Asih Putera Gelar "Ramadhan Ceria", Semarakkan Bulan Suci dengan Berbagai Kegiatan Islami seperti pesantren kilat, tadarus bersama, pildacil, hingga berbagi santunan.',
    readTime: '4 menit baca',
    author: 'Koordinator PBL',
    fullContent: [
      'MI Asih Putera Gelar "Ramadhan Ceria", Semarakkan Bulan Suci dengan Berbagai Kegiatan Islami.',
      'Suasana penuh berkah dan keceriaan tampak menyelimuti MI Asih Putera selama penyelenggaraan kegiatan Ramadhan Ceria. Acara ini diisi dengan berbagai rangkaian kegiatan positif yang bertujuan untuk meningkatkan keimanan, ketakwaan, serta kreativitas para siswa-siswi di bulan suci.',
      'Berbagai agenda menarik mewarnai jalannya acara, mulai dari pesantren kilat, tadarus Al-Qur\'an bersama, lomba keagamaan seperti pildacil dan hafalan surat pendek, hingga kegiatan berbagi takjil dan santunan untuk sesama. Pihak madrasah berharap melalui kegiatan ini para siswa dapat mengisi bulan Ramadhan dengan pengalaman yang bermakna, mempererat ukhuwah Islamiyah, serta menanamkan nilai-nilai kepedulian sosial sejak dini.'
    ]
  },
  {
    id: 'news-5',
    title: 'Gelar Kegiatan Olimpiade Sains MI Asih Putera',
    category: 'Capaian Qur\'ani',
    date: '2 Dzulhijjah 1447 H / 18 Juni 2026',
    image: newsOlimpiadeSainsImg,
    summary: 'MI Asih Putera Gelar Olimpiade Sains, Jaring Bibit Unggul Ilmu Pengetahuan Sejak Dini guna mengasah kemampuan berpikir kritis, logika, dan analisis siswa.',
    readTime: '4 menit baca',
    author: 'Koordinator Tahfidz',
    fullContent: [
      'MI Asih Putera Gelar Olimpiade Sains, Jaring Bibit Unggul Ilmu Pengetahuan Sejak Dini.',
      'Suasana kompetitif namun tetap sportif tampak di MI Asih Putera saat pelaksanaan ajang Olimpiade Sains. Kegiatan ini diselenggarakan untuk mengasah kemampuan berpikir kritis, logika, serta minat para siswa-siswi terhadap bidang ilmu pengetahuan alam dan matematika.',
      'Para peserta tampak antusias dan serius mengerjakan berbagai soal menantang yang menguji kemampuan analisis serta pemecahan masalah. Pihak madrasah berharap ajang ini tidak hanya menjadi wadah kompetisi untuk meraih prestasi, tetapi juga mampu menumbuhkan budaya ilmiah, rasa ingin tahu yang tinggi, serta melahirkan generasi muda yang cerdas dan inovatif di bidang sains. Acara ditutup dengan pengumuman peraih medali serta penyerahan penghargaan kepada siswa berprestasi.'
    ]
  }
];

