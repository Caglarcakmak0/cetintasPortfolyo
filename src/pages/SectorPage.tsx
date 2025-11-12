import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import AnimatedContent from '@/animations/AnimatedContent';
import caseStudiesData from '@/data/case-studies.json';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  date: string;
  author: string;
}

const SectorPage = () => {
  const { sectorId } = useParams<{ sectorId: string }>();
  const navigate = useNavigate();
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [sectorTitle, setSectorTitle] = useState('');
  const [heroImage, setHeroImage] = useState('');

  const sectorTitles: Record<string, string> = {
    'uretim-sektoru': 'Üretim Sektörü',
    'lojistik-dagitim': 'Lojistik ve Dağıtım',
    'perakende-eticaret': 'Perakende ve E-Ticaret',
    'profesyonel-hizmetler': 'Profesyonel Hizmetler',
    'saglik-hizmetleri': 'Sağlık Hizmetleri'
  };

  const sectorImages: Record<string, string> = {
    'uretim-sektoru': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920',
    'lojistik-dagitim': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1920',
    'perakende-eticaret': 'https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=1920',
    'profesyonel-hizmetler': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920',
    'saglik-hizmetleri': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1920'
  };

  useEffect(() => {
    if (sectorId) {
      // Sektöre ait case study'leri filtrele
      const filtered = caseStudiesData.filter(study => study.id === sectorId);
      setCaseStudies(filtered as any);
      setSectorTitle(sectorTitles[sectorId] || 'Sektör');
      setHeroImage(sectorImages[sectorId] || '');
    }
  }, [sectorId]);

  const breadcrumbItems = [
    { label: 'Sektörler', path: '/#sectors' },
    { label: sectorTitle }
  ];

  return (
    <div className="sector-page">
      <Breadcrumb 
        title={sectorTitle} 
        breadcrumb={breadcrumbItems} 
        image={heroImage}
      />

      <section className="case-studies-list">
        <div className="container">
          <div className="sector-intro">
            <AnimatedContent distance={80} direction="vertical" duration={0.8} ease="power2.out" initialOpacity={0} animateOpacity>
              <p className="sector-intro-text">
                {sectorTitle} alanında gerçekleştirdiğim projeler ve başarı hikayeleri
              </p>
            </AnimatedContent>
          </div>
          
          {caseStudies.length === 0 ? (
            <div className="no-cases">
              <p>Bu sektör için henüz case study bulunmamaktadır.</p>
              <button onClick={() => navigate('/')} className="btn-primary">
                Ana Sayfaya Dön
              </button>
            </div>
          ) : (
            <div className="cases-grid">
              {caseStudies.map((caseStudy, index) => (
                <AnimatedContent
                  key={caseStudy.id}
                  distance={80}
                  direction="vertical"
                  duration={0.8}
                  ease="power2.out"
                  initialOpacity={0}
                  animateOpacity
                  delay={index * 0.2}
                >
                  <div
                    className="case-card"
                    onClick={() => navigate(`/case-study/${caseStudy.id}`)}
                  >
                    <div className="case-card-image">
                      <img src={caseStudy.heroImage} alt={caseStudy.title} />
                    </div>
                    <div className="case-card-content">
                      <h3 className="case-card-title">{caseStudy.title}</h3>
                      <p className="case-card-subtitle">{caseStudy.subtitle}</p>
                      <button className="case-card-btn">
                        Detayları İncele
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </AnimatedContent>
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        .sector-page {
          min-height: 100vh;
        }

        .case-studies-list {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .sector-intro {
          text-align: center;
          margin-bottom: 3rem;
        }

        .sector-intro-text {
          font-size: 1.25rem;
          color: #666;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .cases-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .case-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .case-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .case-card-image {
          width: 100%;
          height: 250px;
          overflow: hidden;
        }

        .case-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .case-card:hover .case-card-image img {
          transform: scale(1.1);
        }

        .case-card-content {
          padding: 1.5rem;
        }

        .case-card-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          font-size: 0.875rem;
          color: #666;
        }

        .case-card-date,
        .case-card-author {
          display: flex;
          align-items: center;
        }

        .case-card-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #1a1a1a;
        }

        .case-card-subtitle {
          font-size: 1rem;
          color: #666;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .case-card-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }

        .case-card-btn:hover {
          opacity: 0.9;
        }

        .case-card-btn svg {
          transition: transform 0.3s ease;
        }

        .case-card:hover .case-card-btn svg {
          transform: translateX(4px);
        }

        .no-cases {
          text-align: center;
          padding: 60px 20px;
        }

        .no-cases p {
          font-size: 1.25rem;
          color: #666;
          margin-bottom: 2rem;
        }

        .btn-primary {
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }

        .btn-primary:hover {
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .cases-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .case-card-image {
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default SectorPage;
