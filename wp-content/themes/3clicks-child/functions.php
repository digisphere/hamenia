<?php
/* Code n' Roll */

function cnr_theme_js() {
    wp_enqueue_script( 'theme_js', get_stylesheet_directory_uri() . '/assets/js/custom.js', array( 'jquery' ), '1.0', true );
}

add_action('wp_enqueue_scripts', 'cnr_theme_js');