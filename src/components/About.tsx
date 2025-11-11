import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about-preview">
      <div className="container">
        <div className="about-card">
          <div className="about-image">
            <img src="/assets/koray2.png" alt="Koray Çetintaş" />
          </div>
          <div className="about-content">
            <h2 className="section-title">Hakkımda</h2>
            <div className="role-badges">
              <span className="role-badge">Dijital Dönüşüm Mimarı</span>
              <span className="role-badge">ERP Danışmanı</span>
              <span className="role-badge">Bağımsız YK Üyesi</span>
            </div>
            <p className="about-text">
              Dijital dönüşüm, ERP, yapay zekâ, IoT ve endüstriyel elektronik alanlarında; Türkiye ve Kuzey Kıbrıs'ta faaliyet gösteren işletmelere stratejik yol arkadaşlığı yapıyorum. Stratejiyi, insanı ve teknolojiyi aynı çatı altında buluşturarak işletmeler için kalıcı rekabet avantajı sağlayan dijital mimariler tasarlıyorum.
            </p>
            <a href="/about" className="btn btn-outline">Tümünü Gör</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;