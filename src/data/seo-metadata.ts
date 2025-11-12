export interface SEOData {
  [key: string]: {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
  };
}

export const seoMetadata: SEOData = {
  '/': {
    title: 'Koray Çetintaş | Dijital Dönüşüm Mimarı & ERP Danışmanı',
    description: 'Koray Çetintaş - 15+ yıl deneyimli dijital dönüşüm mimarı ve ERP danışmanı. Türkiye ve KKTC\'de kurumsal dijitalleşme, ERP projeleri ve teknoloji danışmanlığı hizmetleri.',
    keywords: 'dijital dönüşüm, ERP danışmanı, kurumsal danışmanlık, Koray Çetintaş, ERP projeleri, dijital mimari, teknoloji danışmanlığı'
  },
  '/about': {
    title: 'Hakkımda | Koray Çetintaş - 15+ Yıl Deneyim',
    description: 'Koray Çetintaş hakkında detaylı bilgi. Dijital dönüşüm mimarisi, ERP danışmanlığı, yönetim kurulu üyeliği ve 15+ yıllık teknoloji deneyimi.',
    keywords: 'Koray Çetintaş hakkımda, dijital dönüşüm uzmanı, ERP danışmanı, teknoloji danışmanı, yönetim kurulu üyesi'
  },
  '/sectors': {
    title: 'Sektörler | ERP Çözümleri ve Dijital Dönüşüm',
    description: 'Farklı sektörlere özel ERP ve dijital dönüşüm çözümleri. Üretim, lojistik, perakende, sağlık ve profesyonel hizmetler sektörlerindeki başarı hikayeleri.',
    keywords: 'ERP sektörel çözümler, dijital dönüşüm sektörler, üretim ERP, lojistik ERP, perakende dijitalleşme'
  },
  '/blog': {
    title: 'İçgörüler & Yazılar | ERP ve Dijital Dönüşüm',
    description: 'ERP, dijital dönüşüm, savunma sanayi ve üretim odaklı seçimlerinizde yol göstermesi için hazırladığım içerikler ve makaleler.',
    keywords: 'ERP blog, dijital dönüşüm yazıları, teknoloji makaleleri, ERP danışmanlığı içerikleri'
  },
  '/contact': {
    title: 'İletişim | Koray Çetintaş - ERP Danışmanlığı',
    description: 'Koray Çetintaş ile iletişime geçin. ERP danışmanlığı, dijital dönüşüm projeleri ve teknoloji danışmanlığı için profesyonel destek.',
    keywords: 'Koray Çetintaş iletişim, ERP danışmanlığı, dijital dönüşüm danışmanı, teknoloji danışmanlığı iletişim'
  },
  '/map': {
    title: 'Proje Haritası | Türkiye ve KKTC\'deki Projeler',
    description: 'Koray Çetintaş\'ın Türkiye ve Kuzey Kıbrıs\'ta tamamladığı dijital dönüşüm ve ERP projelerinin coğrafi dağılımı.',
    keywords: 'proje haritası, Türkiye ERP projeleri, KKTC dijital dönüşüm, coğrafi proje dağılımı'
  }
};

// Dinamik sayfalar için meta veri fonksiyonları
export const getSectorSEO = (_sectorId: string, sectorTitle: string) => ({
  title: `${sectorTitle} | Sektör Detayı`,
  description: `${sectorTitle} sektöründeki dijital dönüşüm ve ERP çözümleri. Başarı hikayeleri, uygulanan teknolojiler ve elde edilen sonuçlar.`,
  keywords: `${sectorTitle.toLowerCase()}, ${sectorTitle.toLowerCase()} ERP, ${sectorTitle.toLowerCase()} dijital dönüşüm`
});

export const getCaseStudySEO = (caseStudy: any) => ({
  title: `${caseStudy.title} | Vaka Analizi`,
  description: `${caseStudy.subtitle}. ${caseStudy.challenge.description.substring(0, 150)}...`,
  keywords: `${caseStudy.title.toLowerCase()}, vaka analizi, başarı hikayesi, ERP proje sonuçları`
});