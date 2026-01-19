
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-col">
                    <h3>Koray Çetintaş</h3>
                    <p>Dijital Dönüşüm Mimarı & ERP Danışmanı</p>
                    <p class="footer-subtitle">
                        Stratejiyi, insanı ve teknolojiyi aynı çatı altında buluşturarak işletmeler için kalıcı rekabet avantajı sağlayan dijital mimariler tasarlıyorum.
                    </p>
                </div>
                <div class="footer-col">
                    <h4>Şirketler</h4>
                    <ul class="footer-links">
                        <li>Çetintaş Yazılım Danışmanlık</li>
                        <li>Didoda Bilgi Teknolojileri A.Ş. (Türkiye)</li>
                        <li>Didoda Bilgi Teknolojileri Ltd. (KKTC)</li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Hizmet Alanları</h4>
                    <?php
                    wp_nav_menu(
                        array(
                            'theme_location' => 'footer',
                            'container'      => false,
                            'menu_class'     => 'footer-links',
                            'fallback_cb'    => false, 
                        )
                    );
                    ?>
                    <!-- Fallback static if menu is empty (matches React data) -->
                     <?php if ( ! has_nav_menu( 'footer' ) ) : ?>
                    <ul class="footer-links">
                         <li><a href="/contact">ERP Danışmanlığı</a></li>
                         <li><a href="/#sectors">Dijital Dönüşüm</a></li>
                         <li><a href="/#sectors">Savunma Sanayii</a></li>
                         <li><a href="/contact">İletişim</a></li>
                    </ul>
                    <?php endif; ?>
                </div>
                <div class="footer-col">
                    <h4>Sosyal Medya</h4>
                    <div class="social-links">
                        <a href="https://linkedin.com/in/koraycetintas" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <!-- Linkedin Icon SVG -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                        </a>
                        <a href="https://github.com/koraycetintas" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                             <!-- Github Icon SVG -->
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; <?php echo date('Y'); ?> Koray Çetintaş. Tüm hakları saklıdır.</p>
            </div>
        </div>
    </footer>
</div><!-- .app -->

<?php wp_footer(); ?>
</body>
</html>
