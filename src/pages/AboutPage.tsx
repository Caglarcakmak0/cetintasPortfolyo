
import { Link } from 'react-router-dom';
const AboutPage = () => { 
  return (
    <>
      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="page-title">Hakkımda</h1>
            <p className="page-subtitle">
              Kurumsal bakış açısıyla teknoloji mimarisi
            </p>
          </div>
        </div>
      </section>

      {/* Full About Content */}
      <section className="about-full">
        <div className="container">
          <div className="about-intro">
            <div className="about-intro-image">
              <img src="/assets/koray2.png" alt="Koray Çetintaş" />
            </div>
            <div className="about-intro-content">
              <div className="intro-header">
                <h1 className="intro-title">Koray Çetintaş</h1>
                <p className="intro-subtitle">Teknoloji ve Strateji Uzmanı</p>
              </div>
              <div className="role-badges">
                <span className="role-badge">Dijital Dönüşüm Mimarı</span>
                <span className="role-badge">ERP Danışmanı</span>
                <span className="role-badge">Bağımsız YK Üyesi</span>
                <span className="role-badge">Yapay Zekâ & IoT</span>
              </div>
              <div className="intro-mission">
                <h2>Stratejiyi, insanı ve teknolojiyi aynı çatı altında buluşturarak işletmeler için kalıcı rekabet avantajı sağlayan dijital mimariler tasarlıyorum.</h2>
                <div className="intro-stats">
                  <div className="stat-item">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">Yıl Deneyim</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">200+</span>
                    <span className="stat-label">Başarılı Proje</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">2</span>
                    <span className="stat-label">Ülke</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-text-content">
            <p>
              Dijital dönüşüm, ERP, yapay zekâ, IoT ve endüstriyel elektronik alanlarında; Türkiye ve Kuzey Kıbrıs'ta faaliyet gösteren işletmelere stratejik yol arkadaşlığı yapıyorum.
            </p>
            <p>
              Koray Çetintaş, dijital dönüşüm, kurumsal sistem mimarisi, ERP (Kurumsal Kaynak Planlama), yapay zekâ, IoT, otomasyon ve endüstriyel elektronik alanlarında derin bilgiye sahip, analitik düşünme gücü yüksek, çözüm odaklı bir teknoloji lideridir. Türkiye ve Kuzey Kıbrıs'ta faaliyet gösteren işletmelere kurumsal dijitalleşme, ERP seçimi ve uyarlaması, stratejik yönetim, süreç optimizasyonu ve teknolojik entegrasyon alanlarında rehberlik etmektedir.
            </p>
            <p>
              Kurucusu olduğu Çetintaş Yazılım Danışmanlık, Didoda Bilgi Teknolojileri Ltd. (KKTC) ve Didoda Bilgi Teknolojileri A.Ş. (Türkiye) aracılığıyla; işletmelerin dijital dönüşüm ve ERP projelerini uçtan uca yöneten, yenilikçi ve sürdürülebilir sistemler tasarlamakta ve hayata geçirmektedir. Ayrıca bağımsız yönetim kurulu üyesi olarak, dijitalleşmenin sadece teknik değil, yönetsel düzeyde de kalıcı olmasını desteklemektedir.
            </p>

            <div className="highlights-section">
              <h3>Öne Çıkan Başlıklar</h3>
              <ul className="highlights-list">
                <li>Kurumsal dijital dönüşüm stratejisi ve sistem tasarımı</li>
                <li>ERP seçimi, uyarlaması ve entegrasyonu</li>
                <li>Yapay zekâ tabanlı karar destek sistemleri</li>
                <li>IoT destekli akıllı fabrika çözümleri</li>
                <li>Kurumsal yönetişim, risk ve stratejik yönetim</li>
              </ul>
            </div>
          </div>

          {/* Uzmanlık Alanları */}
          <div className="expertise-section">
            <h2 className="section-title">Uzmanlık Alanlarım</h2>
            <p className="section-description">
              Rolümü üç ana eksen üzerinde konumlandırıyorum: Dijital dönüşüm mimarisi, ERP danışmanlığı ve bağımsız yönetim kurulu üyeliği.
            </p>
            <div className="expertise-grid">
              <div className="expertise-card">
                <div className="expertise-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Dijital Dönüşüm Mimarı</h3>
                <p>İş hedeflerinizi, süreçlerinizi ve teknolojiyi aynı mimari çerçevede birleştiriyorum.</p>
                <ul>
                  <li>Dijital yol haritaları</li>
                  <li>Süreç analizi ve yeniden tasarım</li>
                  <li>Karar destek ve veri mimarisi</li>
                </ul>
              </div>

              <div className="expertise-card">
                <div className="expertise-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>ERP Danışmanı</h3>
                <p>Mevcut yapıya uygun ERP seçimi, tasarımı ve uyarlaması ile kurumsal verimliliği artırıyorum.</p>
                <ul>
                  <li>ERP seçim ve değerlendirme</li>
                  <li>Uyarlama, entegrasyon ve test</li>
                  <li>Canlıya geçiş ve son kullanıcı eğitimi</li>
                </ul>
              </div>

              <div className="expertise-card">
                <div className="expertise-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Bağımsız YK Üyesi</h3>
                <p>Teknoloji odaklı stratejik kararlar için yönetim kurullarında aktif rol alıyorum.</p>
                <ul>
                  <li>Dijitalleşme stratejisi & risk yönetimi</li>
                  <li>IT yönetişimi ve KPI takibi</li>
                  <li>Komite ve proje gözetimi</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ERP Danışmanlığı Yol Haritası */}
          <div className="roadmap-section">
            <h2 className="section-title">ERP Danışmanlığı & Uygulama Yol Haritası</h2>
            <p className="section-description">
              ERP projelerini yalnızca bir yazılım kurulumu olarak değil; süreç, insan ve teknoloji üçgeninde konumlanan kurumsal bir dönüşüm programı olarak ele alıyorum.
            </p>
            <div className="roadmap-steps">
              <div className="roadmap-step">
                <div className="step-number">01</div>
                <h3>İhtiyaç Analizi & Mevcut Durum</h3>
                <p>
                  Üretim, satınalma, satış, kalite, finans ve insan kaynakları süreçlerinizi detaylı analiz ederek ERP için net bir "as-is / to-be" resmi çıkarırım.
                </p>
              </div>
              <div className="roadmap-step">
                <div className="step-number">02</div>
                <h3>Çözüm Seçimi & Mimari Tasarım</h3>
                <p>
                  Sektörünüz, regülasyonlarınız ve büyüme hedeflerinize uygun ERP mimarisini, entegrasyon gereksinimlerini ve modüler yapıyı birlikte tasarlarız.
                </p>
              </div>
              <div className="roadmap-step">
                <div className="step-number">03</div>
                <h3>Uyarlama, Entegrasyon ve Test</h3>
                <p>
                  Süreç bazlı uyarlama (BOM, rota, teklif-sipariş, MRP vb.), diğer sistemlerle entegrasyon ve test senaryolarını uçtan uca yönetirim.
                </p>
              </div>
              <div className="roadmap-step">
                <div className="step-number">04</div>
                <h3>Canlıya Geçiş, Eğitim ve İyileştirme</h3>
                <p>
                  Go-live, kullanıcı eğitimleri, destek modeli ve performans izleme metrikleri ile ERP'nin sürdürülebilir olmasını sağlarım.
                </p>
              </div>
            </div>

            <div className="erp-focus">
              <h3>ERP Projelerinde Odak Noktalarım</h3>
              <div className="focus-grid">
                <div className="focus-item">
                  <span className="focus-icon">✓</span>
                  <p>Sektöre özel süreç tasarımı (özellikle savunma ve üretim)</p>
                </div>
                <div className="focus-item">
                  <span className="focus-icon">✓</span>
                  <p>Stok, maliyet ve kalite verisinin tek kaynakta toplanması</p>
                </div>
                <div className="focus-item">
                  <span className="focus-icon">✓</span>
                  <p>Yasal mevzuat ve iç denetim gereksinimlerine uyum</p>
                </div>
                <div className="focus-item">
                  <span className="focus-icon">✓</span>
                  <p>Raporlama, gösterge panoları ve yönetim kokpiti tasarımı</p>
                </div>
              </div>
            </div>
          </div>

          {/* Yaklaşım */}
          <div className="approach-section">
            <h2 className="section-title">Yaklaşımım</h2>
            <p className="section-description">
              Yargılayan değil, geliştiren bir danışmanlık yaklaşımı ile; kurum yapısına uygun, uygulanabilir ve sürdürülebilir modeller kurmaya odaklanıyorum.
            </p>
            <div className="approach-steps">
              <div className="approach-step">
                <div className="approach-number">1</div>
                <h3>Keşfet</h3>
                <p>Mevcut durum analizi, paydaş görüşmeleri, süreç haritalama ve veri incelemesi ile gerçek problemi netleştiririm.</p>
              </div>
              <div className="approach-arrow">→</div>
              <div className="approach-step">
                <div className="approach-number">2</div>
                <h3>Tasarla</h3>
                <p>Kurumun kültürü, stratejisi ve kaynaklarıyla uyumlu bir hedef mimari ve yol haritası oluştururum.</p>
              </div>
              <div className="approach-arrow">→</div>
              <div className="approach-step">
                <div className="approach-number">3</div>
                <h3>Uygula & İyileştir</h3>
                <p>Proje yönetimi, değişim yönetimi ve performans takibi ile çözümün hayata geçmesini sağlarım.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="about-cta">
            <h2>Birlikte Çalışalım</h2>
            <p>ERP projesi, dijital dönüşüm yol haritası ya da yönetim kurulu düzeyinde teknoloji danışmanlığı ihtiyacınız varsa benimle iletişime geçebilirsiniz.</p>
            <Link to="/#contact" className="btn btn-primary">İletişime Geçin</Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutPage;