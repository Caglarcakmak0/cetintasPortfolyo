import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import AnimatedContent from '@/animations/AnimatedContent';
import FadeContent from '@/animations/FadeContent';

const Sectors = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const sectors = [
    {
      id: '1',
      title: 'Savunma Sanayi',
      description: 'Yüksek regülasyonlu, kalite ve izlenebilirlik gerektiren yapılarda ERP ve dijital dönüşüm projeleri.',
      features: ['Ürün ağaçları ve üretim izlenebilirliği', 'Kalite, dokümantasyon ve iç denetim entegrasyonu', 'Tedarik zinciri ve sözleşme yönetimi'],
      backgroundImage: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1200'
    },
    {
      id: '2',
      title: 'Üretim Sektörü',
      description: 'Makine parkı, IoT ve üretim verisini ERP ile aynı çatı altında birleştiren projeler.',
      features: ['MRP, kapasite planlama ve çizelgeleme', 'OEE ve üretim verimliliği takibi', 'IoT & saha verisi entegrasyonu'],
      backgroundImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200'
    },
    {
      id: '3',
      title: 'Gıda ve Hızlı Tüketim (FMCG)',
      description: 'Son kullanma tarihi, parti takibi ve hızlı dağıtım gerektiren FMCG sektörüne özel ERP çözümleri.',
      features: ['Parti ve seri numarası takibi', 'Depo yönetimi ve raf ömrü kontrolü', 'Hızlı sipariş ve dağıtım entegrasyonu'],
      backgroundImage: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=1200'
    },
    {
      id: '4',
      title: 'Profesyonel Hizmetler',
      description: 'Danışmanlık, hukuk, muhasebe ve mühendislik firmalarına özel proje ve kaynak yönetimi çözümleri.',
      features: ['Proje bazlı maliyet ve zaman takibi', 'Kaynak planlama ve kapasite yönetimi', 'Müşteri portföyü ve CRM entegrasyonu'],
      backgroundImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200'
    },
    {
      id: '5',
      title: 'Sağlık Hizmetleri',
      description: 'Hasta yönetimi, medikal stok takibi ve uyumluluk gereksinimlerini karşılayan sağlık sektörü çözümleri.',
      features: ['Hasta kayıt ve randevu yönetimi', 'Medikal cihaz ve ilaç stok takibi', 'KVKK ve sağlık regülasyonları uyumu'],
      backgroundImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200'
    },
    {
      id: '6',
      title: 'Lojistik ve Dağıtım',
      description: 'Depo, filo ve sevkiyat süreçlerini tek platformda yöneten lojistik operasyon çözümleri.',
      features: ['Araç ve rota optimizasyonu', 'Depo yönetimi ve barkod sistemi', 'Gerçek zamanlı sevkiyat takibi'],
      backgroundImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200'
    }
  ];

  return (
    <section id="sectors" className="sectors-section">
      <div className="container">
        <div className="sectors-wrapper">
          <div className="sectors-content">
            <AnimatedContent distance={150} direction="horizontal" reverse={true} duration={1.2} ease="power3.out" initialOpacity={0} animateOpacity scale={1.1} threshold={0.2} delay={0}>
              <span className="sectors-label">Sektörler & Öne Çıkan Proje Türleri</span>
            </AnimatedContent>
            <AnimatedContent distance={150} direction="horizontal" reverse={true} duration={1.2} ease="power3.out" initialOpacity={0} animateOpacity scale={1.1} threshold={0.2} delay={0.3}>
              <h2 className="sectors-main-title">SİZE ÖZEL DİJİTAL ÇÖZÜMLER</h2>
            </AnimatedContent>
            <AnimatedContent distance={150} direction="horizontal" reverse={true} duration={1.2} ease="power3.out" initialOpacity={0} animateOpacity scale={1.1} threshold={0.2} delay={0.6}>
              <p className="sectors-description">
                Farklı sektörlerde yürüttüğüm projelerin ortak noktası; karmaşık sistemleri sadeleştirmek ve kurumun gerçek ihtiyacına uygun dijital çözümler tasarlamaktır.
              </p>
            </AnimatedContent>
            <AnimatedContent distance={150} direction="horizontal" reverse={true} duration={1.2} ease="power3.out" initialOpacity={0} animateOpacity scale={1.1} threshold={0.2} delay={0.9}>
              <div className="sectors-navigation">
                <button
                  className="sectors-nav-btn sectors-nav-prev"
                  onClick={() => swiperRef.current?.slidePrev()}
                  aria-label="Önceki"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  className="sectors-nav-btn sectors-nav-next"
                  onClick={() => swiperRef.current?.slideNext()}
                  aria-label="Sonraki"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </AnimatedContent>
          </div>

          <div className="sectors-swiper-container">
            <FadeContent blur duration={1000} easing="ease-out" delay={0} threshold={0.1} initialOpacity={0}>
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 7000,
                  disableOnInteraction: true
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  }

                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                className="sectors-swiper"
              >
                {sectors.map((sector) => (
                  <SwiperSlide key={sector.id}>
                    <div className="sector-card">
                      <div
                        className="sector-bg"
                        style={{ backgroundImage: `url(${sector.backgroundImage})` }}
                      />
                      <div className="sector-overlay">
                        <h3 className="sector-title">{sector.title}</h3>
                        <div className="sector-details">
                          <p className="sector-description">{sector.description}</p>
                          <ul className="sector-features">
                            {sector.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </FadeContent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectors;