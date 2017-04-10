<?php
/**
 * Template Name: Products
 */

// Prevent direct script access
if ( !defined('ABSPATH') )
    die ( 'No direct script access allowed' );
?>
<?php
    // Add proper body classes
    add_filter( 'body_class', array(G1_Theme(), 'secondary_none_body_class') );
?>
<?php get_header(); ?>
	<div class="container">
		<div class="loop-products">
			<?php
				$args = array(
					'post_type' => 'product',
					'posts_per_page' => 12
				);
				$q = new WP_Query($args);
				
				if($q->have_posts()) {
					while($q->have_posts()) {
						$q->the_post();
						
						?>
						
						<div class="item">
							<div class="inner">
							<?php the_post_thumbnail('medium');?>
							<?php the_title('<h2>', '</h2>');?>
							<p><?php echo wp_trim_words(get_the_excerpt(), 12, '...');?></p>
							<a href="<?php the_permalink();?>" class="btn">לעמוד המוצר</a>
							</div>
						</div>
						
						<?php
					}
				}
			?>
		</div>
	</div>
<?php get_footer(); ?>
