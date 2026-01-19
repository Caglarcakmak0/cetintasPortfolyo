<?php
$sectors = [
    [
        'id' => 'uretim-sektoru',
        'title' => 'Üretim Sektörü',
        'description' => 'Dağınık stok yönetiminden gerçek zamanlı üretim kontrolüne geçiş.',
        'features' => ['Uçtan uca ERP entegrasyonu', 'Gerçek zamanlı veri girişi', 'Stok doğruluğu %99.2'],
        'backgroundImage' => 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200'
    ],
    [
        'id' => 'lojistik-dagitim',
        'title' => 'Lojistik ve Dağıtım',
        'description' => 'Manuel raporlamadan veriye dayalı rota optimizasyonuna.',
        'features' => ['İş Zekası platformu', 'Rota optimizasyonu', 'Yakıt maliyetlerinde %15 tasarruf'],
        'backgroundImage' => 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200'
    ],
    [
        'id' => 'perakende-eticaret',
        'title' => 'Perakende ve E-Ticaret',
        'description' => 'Ayrık kanallardan bütünleşik müşteri deneyimine (Omni-Channel).',
        'features' => ['Omni-channel stok yönetimi', 'Merkezi CRM platformu', 'Müşteri sadakati %25 arttı'],
        'backgroundImage' => 'https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=1200'
    ],
    [
        'id' => 'profesyonel-hizmetler',
        'title' => 'Profesyonel Hizmetler',
        'description' => 'Proje kaosundan kârlılık analizine geçiş.',
        'features' => ['Proje yönetim sistemi', 'Otomatik faturalama', 'Faturalama 7 günden 1 güne indi'],
        'backgroundImage' => 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200'
    ],
    [
        'id' => 'saglik-hizmetleri',
        'title' => 'Sağlık Hizmetleri',
        'description' => 'Manuel randevudan dijital klinik yönetimine.',
        'features' => ['Online hasta portalı', 'Elektronik Medikal Kayıt (EMR)', 'Randevu trafiği %70 azaldı'],
        'backgroundImage' => 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200'
    ]
];
?>
<section id="sectors" class="sectors-section">
      <div class="container">
        <div class="sectors-wrapper">
          <div class="sectors-content">
              <span class="sectors-label">Sektörler & Öne Çıkan Proje Türleri</span>
              <h2 class="sectors-main-title">SİZE ÖZEL DİJİTAL ÇÖZÜMLER</h2>
              <p class="sectors-description">
                Farklı sektörlerde yürüttüğüm projelerin ortak noktası; karmaşık sistemleri sadeleştirmek ve kurumun gerçek ihtiyacına uygun dijital çözümler tasarlamaktır.
              </p>
              <div class="sectors-navigation">
                <button class="sectors-nav-btn sectors-nav-prev" aria-label="Önceki">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button class="sectors-nav-btn sectors-nav-next" aria-label="Sonraki">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
          </div>

          <div class="sectors-swiper-container">
              <div class="swiper sectors-swiper">
                <div class="swiper-wrapper">
                <?php foreach($sectors as $sector): ?>
                  <div class="swiper-slide">
                    <div class="sector-card" onclick="location.href='/sector/<?php echo esc_attr($sector['id']); ?>'" style="cursor: pointer;">
                      <div class="sector-bg" style="background-image: url(<?php echo esc_url($sector['backgroundImage']); ?>)"></div>
                      <div class="sector-overlay">
                        <h3 class="sector-title sector-title-white"><?php echo esc_html($sector['title']); ?></h3>
                        <div class="sector-details">
                          <p class="sector-description"><?php echo esc_html($sector['description']); ?></p>
                          <ul class="sector-features">
                            <?php foreach($sector['features'] as $feature): ?>
                              <li><?php echo esc_html($feature); ?></li>
                            <?php endforeach; ?>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                <?php endforeach; ?>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
