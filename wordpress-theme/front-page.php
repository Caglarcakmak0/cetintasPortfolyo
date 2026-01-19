<?php
/**
 * The template for displaying the front page
 *
 * @package Cetintas_Portfolyo
 */

get_header();
?>

<!-- Hero Section -->
<?php get_template_part( 'template-parts/content', 'hero' ); ?>

<!-- Clients Section -->
<?php get_template_part( 'template-parts/content', 'clients' ); ?>

<!-- About Section -->
<?php get_template_part( 'template-parts/content', 'about' ); ?>

<!-- Sectors Section -->
<?php get_template_part( 'template-parts/content', 'sectors' ); ?>

<!-- Map Section -->
<?php get_template_part( 'template-parts/content', 'map' ); ?>

<?php
get_footer();
