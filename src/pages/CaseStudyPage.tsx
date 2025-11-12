import { useParams, Navigate } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import AnimatedContent from '@/animations/AnimatedContent';
import FadeContent from '@/animations/FadeContent';
import caseStudiesData from '@/data/case-studies.json';
import { CaseStudy } from '@/types';

const CaseStudyPage = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudies = caseStudiesData as CaseStudy[];
  const caseStudy = caseStudies.find(cs => cs.id === id);

  if (!caseStudy) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Breadcrumb
        title={caseStudy.title}
        breadcrumb={[
          { label: 'Sektörler', path: '/#sectors' },
          { label: caseStudy.title }
        ]}
        image={caseStudy.heroImage}
      />

      <section className="case-study-section">
        <div className="container">
          {/* Subtitle */}
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            threshold={0.2}
            delay={0}
          >
            <div className="case-study-intro">
              <p className="case-study-subtitle">{caseStudy.subtitle}</p>
            </div>
          </AnimatedContent>

          {/* Challenge & Solution Section - Side by Side */}
          <div className="case-study-dual-block">
            {/* Challenge Section */}
            <div className="case-study-block">
              <AnimatedContent
                distance={150}
                direction="horizontal"
                reverse={true}
                duration={1.2}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1.05}
                threshold={0.2}
                delay={0}
              >
                <div className="case-study-header">
                  <div className="case-study-icon challenge-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="12" cy="16" r="1" fill="currentColor" />
                    </svg>
                  </div>
                  <h2 className="case-study-title">{caseStudy.challenge.title}</h2>
                </div>
              </AnimatedContent>

              <FadeContent blur duration={1000} easing="ease-out" delay={100} threshold={0.1} initialOpacity={0}>
                <div className="case-study-content">
                  <p className="case-study-description">{caseStudy.challenge.description}</p>
                  <ul className="case-study-list">
                    {caseStudy.challenge.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </FadeContent>
            </div>

            {/* Solution Section */}
            <div className="case-study-block">
              <AnimatedContent
                distance={150}
                direction="horizontal"
                reverse={false}
                duration={1.2}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1.05}
                threshold={0.2}
                delay={0}
              >
                <div className="case-study-header">
                  <div className="case-study-icon solution-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.76489 14.1003 1.98232 16.07 2.86" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h2 className="case-study-title">{caseStudy.solution.title}</h2>
                </div>
              </AnimatedContent>

              <FadeContent blur duration={1000} easing="ease-out" delay={100} threshold={0.1} initialOpacity={0}>
                <div className="case-study-content">
                  <p className="case-study-description">{caseStudy.solution.description}</p>
                  <ul className="case-study-list">
                    {caseStudy.solution.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </FadeContent>
            </div>
          </div>

          {/* Result Section */}
          <div className="case-study-block">
            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={true}
              duration={1.2}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1.05}
              threshold={0.2}
              delay={0}
            >
              <div className="case-study-header">
                <div className="case-study-icon result-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="12" y1="20" x2="12" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="18" y1="20" x2="18" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="6" y1="20" x2="6" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="case-study-title">{caseStudy.result.title}</h2>
              </div>
            </AnimatedContent>

            <FadeContent blur duration={1000} easing="ease-out" delay={100} threshold={0.1} initialOpacity={0}>
              <div className="case-study-content">
                <p className="case-study-description">{caseStudy.result.description}</p>
                
                {/* Metrics Grid */}
                <div className="metrics-grid">
                  {caseStudy.result.metrics.map((metric, index) => (
                    <div key={index} className="metric-card">
                      <div className="metric-value">{metric.value}</div>
                      <div className="metric-label">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Additional Benefits */}
                <div className="additional-benefits">
                  <h3>Ek Faydalar</h3>
                  <ul className="case-study-list">
                    {caseStudy.result.additionalBenefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeContent>
          </div>

          {/* Architecture Section - Only show if architecture data exists */}
          {caseStudy.architecture && (
            <div className="case-study-block">
              <AnimatedContent
                distance={150}
                direction="horizontal"
                reverse={false}
                duration={1.2}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1.05}
                threshold={0.2}
                delay={0}
              >
                <div className="case-study-header">
                  <div className="case-study-icon architecture-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h2 className="case-study-title">{caseStudy.architecture.title}</h2>
                </div>
              </AnimatedContent>

              <FadeContent blur duration={1000} easing="ease-out" delay={100} threshold={0.1} initialOpacity={0}>
                <div className="case-study-content">
                  <p className="case-study-description">{caseStudy.architecture.description}</p>

                  {/* Architecture Components */}
                  {caseStudy.architecture.components && (
                    <div className="architecture-grid">
                      {caseStudy.architecture.components.map((component, index) => (
                        <div key={index} className="architecture-card">
                          <h4 className="architecture-name">{component.name}</h4>
                          <p className="architecture-description">{component.description}</p>
                          <div className="architecture-tech">
                            {component.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="tech-badge">{tech}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Integrations */}
                  {caseStudy.architecture.integrations && (
                    <div className="integrations-section">
                      <h3>Entegrasyonlar</h3>
                      <div className="integrations-list">
                        {caseStudy.architecture.integrations.map((integration, index) => (
                          <span key={index} className="integration-badge">{integration}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </FadeContent>
            </div>
          )}

          {/* CTA Section */}
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1.02}
            threshold={0.2}
            delay={0}
          >
            <div className="case-study-cta">
              <h2>Benzer Bir Proje mi Düşünüyorsunuz?</h2>
              <p>Sektörünüze özel dijital dönüşüm ve ERP çözümleri hakkında detaylı bilgi almak için benimle iletişime geçin.</p>
              <a href="/contact" className="btn btn-primary">İletişime Geçin</a>
            </div>
          </AnimatedContent>
        </div>
      </section>
    </>
  );
};

export default CaseStudyPage;
