<?php
/**
 * Theme functions and definitions
 */

if ( ! function_exists( 'cetintas_setup' ) ) :
	function cetintas_setup() {
		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		// Let WordPress manage the document title.
		add_theme_support( 'title-tag' );

		// Enable support for Post Thumbnails on posts and pages.
		add_theme_support( 'post-thumbnails' );

		// Register Navigation Menus
		register_nav_menus(
			array(
				'primary' => esc_html__( 'Primary Menu', 'cetintas-portfolyo' ),
				'footer'  => esc_html__( 'Footer Menu', 'cetintas-portfolyo' ),
			)
		);

		// Switch default core markup to output valid HTML5.
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'cetintas_setup' );

/**
 * Enqueue scripts and styles.
 */
function cetintas_scripts() {
	// Enqueue Google Fonts
	wp_enqueue_style( 'cetintas-google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap', array(), null );

	// Enqueue Leaflet CSS
	wp_enqueue_style( 'leaflet-css', 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css', array(), '1.9.4' );

	// Enqueue Swiper CSS
	wp_enqueue_style( 'swiper-css', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css', array(), '11.0.0' );

	// Enqueue Main Style
	wp_enqueue_style( 'cetintas-style', get_stylesheet_uri(), array(), '1.0.0' );

	// Enqueue Scripts
	// Note: React-specific logic (GSAP, etc.) will need adaptation. 
	// For now, we are enqueuing necessary libraries via CDN as they were in HTML head or package.json
	
	// Leaflet JS
	wp_enqueue_script( 'leaflet-js', 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js', array(), '1.9.4', true );

	// Swiper JS
	wp_enqueue_script( 'swiper-js', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', array(), '11.0.0', true );

    // GSAP (from CDN as used in React)
    wp_enqueue_script( 'gsap-js', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js', array(), '3.12.2', true );
    wp_enqueue_script( 'gsap-scrolltrigger', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js', array('gsap-js'), '3.12.2', true );

    // Theme JS
    wp_enqueue_script( 'cetintas-main', get_template_directory_uri() . '/js/main.js', array('jquery', 'gsap-js'), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'cetintas_scripts' );

/**
 * Filter the nav menu items to add active class and attributes
 */
function cetintas_nav_menu_link_attributes( $atts, $item, $args ) {
    if ( in_array( 'current-menu-item', $item->classes ) ) {
        $atts['class'] = 'nav-link active';
    } else {
        $atts['class'] = 'nav-link';
    }
    return $atts;
}
add_filter( 'nav_menu_link_attributes', 'cetintas_nav_menu_link_attributes', 10, 3 );
