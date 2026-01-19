<?php
$locations = [
    [
        'id' => '1',
        'name' => 'Türkiye',
        'flag' => '🇹🇷',
        'companyName' => 'Koray Çetintaş Danışmanlık',
        'description' => 'Türkiye genelinde dijital dönüşüm ve ERP danışmanlık hizmetleri',
        'address' => 'İstiklal Mahallesi Piyalepaşa Bulvarı 22/1 Ticari, B Blok, 34440 Beyoğlu/İstanbul',
        'coordinates' => [41.0602, 28.9744]
    ],
    [
        'id' => '2', 
        'name' => 'Kuzey Kıbrıs',
        'flag' => '🇨🇾',
        'companyName' => 'KKTC Ofis',
        'description' => 'Kuzey Kıbrıs Türk Cumhuriyeti\'nde ERP ve dijital dönüşüm projeleri',
        'address' => 'Dijital Dönüşüm Mimarı & ERP Danışmanı',
        'coordinates' => [35.2, 33.4]
    ],
    [
        'id' => '3',
        'name' => 'San Francisco',
        'flag' => '🇺🇸',
        'companyName' => 'Silikon Vadisi Ofis',
        'description' => 'Silikon Vadisi\'nde yapay zekâ ve inovasyon projeleri',
        'address' => '1875 Mission St Ste 103 # 421 San Francisco, CA 94103-3561',
        'coordinates' => [37.7627, -122.4194]
    ],
    [
        'id' => '4',
        'name' => 'İngiltere',
        'flag' => '🇬🇧',
        'companyName' => 'Londra Ofis',
        'description' => 'Birleşik Krallık\'ta kurumsal danışmanlık ve stratejik yönetim',
        'address' => '88 Park Lane N17 0JR London',
        'coordinates' => [51.6050, -0.0745]
    ],
];
?>
<section id="map" class="map-compact-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Lokasyonlar</h2>
          <p class="section-description">
            Türkiye, KKTC, ABD ve İngiltere'de hizmet verdiğimiz global lokasyonlar
          </p>
        </div>

        <div class="map-content-wrapper">
          <div class="map-locations-compact">
            <?php foreach($locations as $index => $location): ?>
              <div 
                class="location-compact <?php echo $index === 0 ? 'active' : ''; ?>"
                data-id="<?php echo esc_attr($location['id']); ?>"
                data-lat="<?php echo $location['coordinates'][0]; ?>"
                data-lng="<?php echo $location['coordinates'][1]; ?>"
              >
                <div class="location-info">
                  <strong><?php echo esc_html($location['name']); ?></strong>
                  <span class="company-name"><?php echo esc_html($location['companyName']); ?></span>
                  <span class="location-description"><?php echo esc_html($location['description']); ?></span>
                  <span class="location-address"><?php echo esc_html($location['address']); ?></span>
                </div>
              </div>
            <?php endforeach; ?>
          </div>

          <div id="compactMap" style="height: 500px; width: 100%;"></div>
        </div>

        <div class="map-cta">
          <a href="https://wa.me/905492211008" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            Lokasyonunuza Özel Çözüm İçin İletişime Geçin
          </a>
        </div>
      </div>
    </section>
    
    <script>
    // Pass PHP data to JS
    window.mapLocations = <?php echo json_encode($locations); ?>;
    </script>
