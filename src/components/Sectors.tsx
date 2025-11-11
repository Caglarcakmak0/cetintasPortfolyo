const Sectors = () => {
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
        <div className="section-header">
          <h2 className="section-title">Sektörler & Öne Çıkan Proje Türleri</h2>
          <p className="section-description">
            Farklı sektörlerde yürüttüğüm projelerin ortak noktası; karmaşık sistemleri sadeleştirmek ve kurumun gerçek ihtiyacına uygun dijital çözümler tasarlamaktır.
          </p>
        </div>

        <div className="sectors-grid">
          {sectors.map((sector) => (
            <div key={sector.id} className="sector-card">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;