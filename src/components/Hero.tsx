import AnimatedContent from "@/animations/AnimatedContent";

const Hero = () => (
  <section id="home" className="hero">
    <div className="container">
      <div className="hero-content">
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
          delay={0.3}
        >
          <div className="hero-text">

            <h1 className="hero-title">
              Dijital Dönüşüm Mimarı & <br />
              <span className="gradient-text">ERP Danışmanı</span>
            </h1>
            <p className="hero-description">
              Savunma, üretim ve hizmet sektörlerinde ERP ve dijital dönüşüm projelerini uçtan uca tasarlayan teknoloji lideri.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">ERP Danışmanlığı Talep Et</a>
              <a href="#about" className="btn btn-secondary">Profesyonel Profilimi İncele</a>
            </div>
          </div>
        </AnimatedContent>
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <div className="hero-image">
            <img src="/assets/koraygemini.jpg" alt="Koray Çetintaş" className="profile-image" />
          </div>
        </AnimatedContent>
      </div>
    </div>
    <div className="hero-background">
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
    </div>
  </section>
);

export default Hero;