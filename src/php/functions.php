<?php

if ( ! function_exists( 'waterskiworld_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which runs
	 * before the init hook. The init hook is too late for some features, such as indicating
	 * support post thumbnails.
	 */
	function waterskiworld_setup() {
	 
		/**
		 * Make theme available for translation.
		 * Translations can be placed in the /languages/ directory.
		 */
		load_theme_textdomain( 'waterskiworld', get_template_directory() . '/languages' );
	 
		/**
		 * Add default posts and comments RSS feed links to <head>.
		 */
		add_theme_support( 'automatic-feed-links' );
	 
		/**
		 * Enable support for post thumbnails and featured images.
		 */
		add_theme_support( 'post-thumbnails' );
	 
		/**
		 * Add support for two custom navigation menus.
		 */
		register_nav_menus( array(
			'primary-menu' => __( 'Primary Menu' )
		) );
	 
		// Support of HTML5 
		add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption' ) );

		// WordPress Titles
		add_theme_support( 'title-tag' );

	}
endif; // waterskiworld_setup
add_action( 'after_setup_theme', 'waterskiworld_setup' );


// Add scripts and stylesheets
function waterskiworld_scripts() {
	wp_enqueue_style( 'style', get_template_directory_uri() . '/css/style.css' );
}
add_action( 'wp_enqueue_scripts', 'waterskiworld_scripts' );

// Defining home page thumbnail size
add_image_size('excerpt-thumbnail', 220, 220, true);

// Disable full size image option
add_filter('image_size_names_choose', function($sizes) {
    unset($sizes['full']);
    return $sizes;
});

// Disable top panel
add_filter('show_admin_bar', '__return_false');

/**
 * Filter the excerpt "read more" string.
 *
 * @param string $more "Read more" excerpt string.
 * @return string (Maybe) modified "read more" excerpt string.
 */
function wpdocs_excerpt_more( $more ) {
    return '...';
}
add_filter('excerpt_more', 'wpdocs_excerpt_more');
