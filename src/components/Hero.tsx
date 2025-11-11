const Hero = () => (
  <section id="home" className="hero">
    <div className="container">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Dijital Dönüşüm Mimarı & <br />
            <span className="gradient-text">ERP Danışmanı</span>
          </h1>
          <p className="hero-description">
            Savunma, üretim ve hizmet sektörlerinde ERP ve dijital dönüşüm projelerini uçtan uca tasarlayan teknoloji lideri.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-icon">🇹🇷</span>
              <span className="stat-text">Türkiye & KKTC odağı</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">🏭</span>
              <span className="stat-text">Üretim & Savunma ağırlıklı</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">⚡</span>
              <span className="stat-text">Dijital dönüşüm & ERP projeleri</span>
            </div>
          </div>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">ERP Danışmanlığı Talep Et</a>
            <a href="#about" className="btn btn-secondary">Profesyonel Profilimi İncele</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img src="/assets/koraygemini.jpg" alt="Koray Çetintaş" className="profile-image" />
            <div className="image-decoration"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="hero-background">
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
    </div>
  </section>
);

export default Hero;