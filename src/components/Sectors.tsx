import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import AnimatedContent from '@/animations/AnimatedContent';
import FadeContent from '@/animations/FadeContent';

const Sectors = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const navigate = useNavigate();

  const sectors = [
    {
      id: 'uretim-sektoru',
      title: 'Üretim Sektörü',
      description: 'Dağınık stok yönetiminden gerçek zamanlı üretim kontrolüne geçiş.',
      features: ['Uçtan uca ERP entegrasyonu', 'Gerçek zamanlı veri girişi', 'Stok doğruluğu %99.2'],
      backgroundImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200'
    },
    {
      id: 'lojistik-dagitim',
      title: 'Lojistik ve Dağıtım',
      description: 'Manuel raporlamadan veriye dayalı rota optimizasyonuna.',
      features: ['İş Zekası platformu', 'Rota optimizasyonu', 'Yakıt maliyetlerinde %15 tasarruf'],
      backgroundImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200'
    },
    {
      id: 'perakende-eticaret',
      title: 'Perakende ve E-Ticaret',
      description: 'Ayrık kanallardan bütünleşik müşteri deneyimine (Omni-Channel).',
      features: ['Omni-channel stok yönetimi', 'Merkezi CRM platformu', 'Müşteri sadakati %25 arttı'],
      backgroundImage: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=1200'
    },
    {
      id: 'profesyonel-hizmetler',
      title: 'Profesyonel Hizmetler',
      description: 'Proje kaosundan kârlılık analizine geçiş.',
      features: ['Proje yönetim sistemi', 'Otomatik faturalama', 'Faturalama 7 günden 1 güne indi'],
      backgroundImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200'
    },
    {
      id: 'saglik-hizmetleri',
      title: 'Sağlık Hizmetleri',
      description: 'Manuel randevudan dijital klinik yönetimine.',
      features: ['Online hasta portalı', 'Elektronik Medikal Kayıt (EMR)', 'Randevu trafiği %70 azaldı'],
      backgroundImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200'
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
                    <div 
                      className="sector-card"
                      onClick={() => navigate(`/sector/${sector.id}`)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div
                        className="sector-bg"
                        style={{ backgroundImage: `url(${sector.backgroundImage})` }}
                      />
                      <div className="sector-overlay">
                        <h3 className="sector-title sector-title-white">{sector.title}</h3>
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
