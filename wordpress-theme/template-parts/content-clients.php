<?php
$row1 = [
    ['name' => 'Altair Defense', 'logo' => 'assets/logos/altairdefense.jpg'],
    ['name' => 'Sarsilmaz', 'logo' => 'assets/logos/sarsılmaz.png'],
    ['name' => 'Mertsav', 'logo' => 'assets/logos/mertsav.png'],
    ['name' => 'Dünyasan Savunma', 'logo' => 'assets/logos/dünyasan-savunma.jpg'],
    ['name' => 'Özer Elektronik', 'logo' => 'assets/logos/özer-elektronik.png'],
    ['name' => 'Meditac', 'logo' => 'assets/logos/meditac.jpg'],
    ['name' => 'Ağaoğlu', 'logo' => 'assets/logos/Agaoglu_logo-png.png'],
    ['name' => 'Karadeniz Holding', 'logo' => 'assets/logos/karadeniz-holing.jpg']
];

$row2 = [
    ['name' => 'Best Elektrik', 'logo' => 'assets/logos/best_elektrik_logo.png'],
    ['name' => 'YKK', 'logo' => 'assets/logos/ykk.jpg'],
    ['name' => 'Yünsa', 'logo' => 'assets/logos/yünsa.svg'],
    ['name' => 'Knorr', 'logo' => 'assets/logos/knorr.png'],
    ['name' => 'Unilever', 'logo' => 'assets/logos/unillever.png'],
    ['name' => 'Novartis', 'logo' => 'assets/logos/Novartis-Logo.svg.png'],
    ['name' => 'Vitalab', 'logo' => 'assets/logos/vitalab.jpg'],
    ['name' => 'AXA Sigorta', 'logo' => 'assets/logos/axa-sigorta.png'],
    ['name' => 'Anadolu Sigorta', 'logo' => 'assets/logos/Anadolu_Sigorta_logo.svg.png'],
    ['name' => 'Innomind', 'logo' => 'assets/logos/innomindLogo.png'],
    ['name' => 'Corning Optik', 'logo' => 'assets/logos/CORNİNG-OPTİK-İLETİŞİM-SAN.-LTD.-ŞTİ..jpg'],
    ['name' => 'U4', 'logo' => 'assets/logos/u4.png']
];
?>
<section class="clients-section">
      <div style="height: 100px;"></div> <!-- simplified media query for now -->

      <div style="display: flex; justify-content: center; align-items: center; width: 100%">
         <!-- Placeholder for SplitText animation -->
         <div class="sectors-label">KURUMSAL İŞ ORTAKLARIM</div>
      </div>
      <div style="display: flex; justify-content: center; align-items: center; width: 100%">
         <div class="black-title" style="font-size: 2rem; font-weight: bold; margin-bottom: 2rem;">REFERANSLARIM</div>
      </div>
      
      <div style="height: 50px;"></div>

        <!-- Marquee Row 1 -->
        <div class="marquee">
            <div class="marquee-content">
                <?php 
                // Duplicate twice for seamless loop
                for($i=0; $i<2; $i++):
                    foreach($row1 as $client): ?>
                    <div class="marquee-item">
                        <div class="logo-card">
                            <img src="<?php echo get_template_directory_uri() . '/' . $client['logo']; ?>" 
                                 alt="<?php echo esc_attr($client['name']); ?>" 
                                 class="client-logo">
                        </div>
                    </div>
                    <?php endforeach; 
                endfor; ?>
            </div>
        </div>

      <div style="height: 50px;"></div>
      
        <!-- Marquee Row 2 (Reverse) -->
        <div class="marquee marquee-reverse">
            <div class="marquee-content">
                <?php 
                 // Duplicate twice for seamless loop
                for($i=0; $i<2; $i++):
                    foreach($row2 as $client): ?>
                    <div class="marquee-item">
                        <div class="logo-card">
                            <img src="<?php echo get_template_directory_uri() . '/' . $client['logo']; ?>" 
                                 alt="<?php echo esc_attr($client['name']); ?>" 
                                 class="client-logo">
                        </div>
                    </div>
                    <?php endforeach; 
                endfor; ?>
            </div>
        </div>

      <div style="height: 50px;"></div>
      
        <div style="display: flex; justify-content: center; align-items: center">
          <a href="/referanslar" class="btn btn-outline inline-btn">
            Tümünü Gör
          </a>
        </div>
      
      <div style="height: 100px;"></div>

    </section>
