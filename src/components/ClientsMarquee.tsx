import React from 'react';
import clientsData from '@/data/clients.json';
import Marquee from "react-fast-marquee";
import SplitText from '@/animations/SplitText';
import AnimatedContent from '@/animations/AnimatedContent';

const ClientsMarquee: React.FC = () => {
  const { row1, row2 } = clientsData as { row1: any[], row2: any[] };

  return (
    <section className="clients-section">
      <div style={{ height: window.innerWidth > 768 ? '100px' : '50px' }}></div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <SplitText
          text="KURUMSAL İŞ ORTAKLARIM"
          className="sectors-label"
          delay={200}
          duration={1.5}
          ease="back.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <SplitText
          text="REFERANSLARIM"
          className="black-title"
          delay={70}
          duration={0.5}
          ease="back.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
        />
      </div>
      
      <div style={{ height: window.innerWidth > 768 ? '50px' : '25px' }}></div>

      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0}
      >
        <Marquee gradient speed={30}>
          {[...row1, ...row1].map((client, index) => (
            <div key={`row1-${index}`} className="marquee-item">
              <div className="logo-card">
                <img
                  src={`/${client.logo}`}
                  alt={client.name}
                  className="client-logo"
                  onError={(e) => {
                    console.log(`Failed to load: /${client.logo}`);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          ))}
        </Marquee>
      </AnimatedContent>
      <div style={{ height: window.innerWidth > 768 ? '50px' : '25px' }}></div>
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0}
      >
        <Marquee gradient speed={30} direction='right'>
          {[...row2, ...row2].map((client, index) => (
            <div key={`row2-${index}`} className="marquee-item">
              <div className="logo-card">
                <img
                  src={`/${client.logo}`}
                  alt={client.name}
                  className="client-logo"
                  onError={(e) => {
                    console.log(`Failed to load: /${client.logo}`);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          ))}
        </Marquee>
      </AnimatedContent>
      <div style={{ height: '50px' }}></div>
      
      <AnimatedContent
        distance={50}
        direction="vertical"
        reverse={false}
        duration={0.8}
        ease="power2.out"
        initialOpacity={0}
        animateOpacity
        threshold={0.2}
        delay={0.2}
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a 
            href="/referanslar"
            className="btn btn-outline inline-btn"
          >
            Tümünü Gör
          </a>
        </div>
      </AnimatedContent>
      
      <div style={{ height: '100px' }}></div>

    </section>
  );
};

export default ClientsMarquee;