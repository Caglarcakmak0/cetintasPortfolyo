import AnimatedContent from '@/animations/AnimatedContent';
import FadeContent from '@/animations/FadeContent';
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about-preview">
      <div className="container" style={{ position: 'relative' }}>
        <div className="about-main">
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={true}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0}
          >
            <div className="about-image-area">
              <img src="/assets/koray2.png" alt="Koray Çetintaş" />
              <div className="background"></div>
            </div>
          </AnimatedContent>
          <div className="about-content-area">
            <FadeContent blur={true} duration={1000} easing="ease-out" delay={0} threshold={0.1} initialOpacity={0}>
              <div className="sectors-label">Ben Kimim?</div>
            </FadeContent>
            <FadeContent blur={true} duration={1000} easing="ease-out" delay={0.3} threshold={0.1} initialOpacity={0}>
              <h2 className="sectors-main-title">Hakkımda</h2>
            </FadeContent>
            <FadeContent blur={true} duration={1000} easing="ease-out" delay={0.6} threshold={0.1} initialOpacity={0}>
              <div className="role-badges" style={{ marginTop: '1rem' }}>
                <span className="role-badge">Dijital Dönüşüm Mimarı</span>
                <span className="role-badge">ERP Danışmanı</span>
                <span className="role-badge">Bağımsız YK Üyesi</span>
              </div>
            </FadeContent>
            <FadeContent blur={true} duration={1000} easing="ease-out" delay={0.9} threshold={0.1} initialOpacity={0}>
              <p className="about-text">
                Dijital dönüşüm, ERP, yapay zekâ, IoT ve endüstriyel elektronik alanlarında; Türkiye ve Kuzey Kıbrıs'ta faaliyet gösteren işletmelere stratejik yol arkadaşlığı yapıyorum. Stratejiyi, insanı ve teknolojiyi aynı çatı altında buluşturarak işletmeler için kalıcı rekabet avantajı sağlayan dijital mimariler tasarlıyorum.
              </p>
            </FadeContent>
            <FadeContent blur={true} duration={1000} easing="ease-out" delay={1.2} threshold={0.1} initialOpacity={0}>
              <a href="/about" className="btn btn-outline">Tümünü Gör</a>
            </FadeContent>
          </div>
        </div>
        <div style={{ height: '100px' }}></div>
      </div>
    </section>
  );
};

export default About;