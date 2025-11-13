import { useNavigate } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import AnimatedContent from '@/animations/AnimatedContent';

const SectorsListPage = () => {
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

  const breadcrumbItems = [
    { label: 'Sektörler' }
  ];

  return (
    <div className="sectors-list-page">
      <Breadcrumb 
        title="Sektörler" 
        breadcrumb={breadcrumbItems} 
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1920"
      />

      <section className="sectors-content">
        <div className="container">
            <AnimatedContent distance={80} direction="vertical" duration={0.8} ease="power2.out" initialOpacity={0} animateOpacity>
              <div className="sectors-intro">
                <h2 className="sectors-intro-title">Farklı Sektörlerde Dijital Dönüşüm</h2>
                <p className="sectors-intro-text">
                  Her sektörün kendine özgü ihtiyaçları ve zorlukları vardır. Farklı sektörlerde yürüttüğüm projelerin 
                  ortak noktası; karmaşık sistemleri sadeleştirmek ve kurumun gerçek ihtiyacına uygun dijital çözümler tasarlamaktır.
                </p>
              </div>
            </AnimatedContent>

            <div className="sectors-grid">
              {sectors.map((sector, index) => (
                <AnimatedContent
                  key={sector.id}
                  distance={80}
                  direction="vertical"
                  duration={0.8}
                  ease="power2.out"
                  initialOpacity={0}
                  animateOpacity
                  delay={(3 % index) * 0.15}
                >
                  <div
                    className="sector-card"
                    onClick={() => navigate(`/sector/${sector.id}`)}
                  >
                    <div 
                      className="sector-bg"
                      style={{ backgroundImage: `url(${sector.backgroundImage})` }}
                    />
                    <div className="sector-overlay">
                      <h3 className="sector-title">{sector.title} </h3>
                      <div className="sector-details">
                        <p className="sector-description">{sector.description}</p>
                        <ul className="sector-features">
                          {sector.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </AnimatedContent>
              ))}
          </div>
        </div>
      </section>

      <style>{`
        .sectors-list-page {
          min-height: 100vh;
        }

        .sectors-content {
          padding: 80px 0;
          background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
        }

        .sectors-custom-container {
          width: 100%;
          padding: 0 2rem;
        }

        .sectors-intro {
          text-align: center;
          margin-bottom: 4rem;
        }

        .sectors-intro-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: -text-primary;        }

        .sectors-intro-text {
          font-size: 1.125rem;
          color: #666;
          line-height: 1.8;
        }

        .sectors-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        /* Ana sayfadaki sector-card stilleri */
        .sector-card {
          position: relative;
          width: 100%;
          height: 500px;
          border-radius: 0.75rem;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .sector-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        .sector-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease;
        }

        .sector-card:hover .sector-bg {
          transform: scale(1.05);
        }

        .sector-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2rem;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3), transparent);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          min-height: 50%;
          transition: all 0.3s ease;
        }

        .sector-card:hover .sector-overlay {
          background: linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.4), transparent);
        }

        .sector-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          margin: 0 0 1rem 0;
          font-family: 'Montserrat', sans-serif;
        }

        .sector-details {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.3s ease;
          max-height: 500px;
          overflow: visible;
        }

        .sector-description {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-weight: 500;
          margin-top: 0;
        }

        .sector-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .sector-features li {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.85);
          padding: 0.5rem 0;
          padding-left: 2rem;
          position: relative;
          line-height: 1.5;
        }

        .sector-features li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #06b6d4;
          font-weight: 700;
        }

        @media (max-width: 1400px) {
          .sectors-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 1024px) {
          .sectors-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .sectors-intro-title {
            font-size: 2rem;
          }

          .sectors-intro-text {
            font-size: 1rem;
          }

          .sectors-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .sector-card {
            height: 400px;
          }
        }
      `}</style>
    </div>
  );
};

export default SectorsListPage;
