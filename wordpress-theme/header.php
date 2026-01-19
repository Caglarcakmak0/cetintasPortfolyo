<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="<?php bloginfo( 'description' ); ?>">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div class="app">
    <nav class="navbar" id="navbar">
        <div class="container">
            <div class="nav-content">
                <div class="logo">
                     <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
                        <h1 class="logo-text">Koray Çetintaş</h1>
                    </a>
                </div>
                
                <?php
                wp_nav_menu(
                    array(
                        'theme_location' => 'primary',
                        'menu_id'        => 'navMenu',
                        'container'      => false,
                        'menu_class'     => 'nav-menu',
                        'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s <li class="mobile-menu-video">
                <div class="mobile-video-wrapper">
                  <h4 class="mobile-video-title">Tanıtım Videosu</h4>
                  <div class="video-container">
                    <iframe 
                      src="https://www.youtube.com/embed/QZiVlOafGIQ?si=x0xcpYbIbgZxRK_D" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </li></ul>',
                    )
                );
                ?>

                <button class="mobile-menu-btn" aria-label="Toggle mobile menu" id="mobileMenuBtn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </nav>
    
    <main class="main-content">
