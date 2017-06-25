<?php if ( !defined('ABSPATH') )
    die ( 'No direct script access allowed' );
?>
<?php get_header(); ?>
<div id="primary">
	<div id="content" role="main">

        <article id="post-0">
            <div class="entry-content" style="text-align: center;">
	            
	            <div class="g1-hgroup">
	                    <h1 class="entry-title">אופס!</h1>
	                    <p>העמוד שהגעת אליו אינו קיים או שהוסר.</p>
	                </div>
                <div class="g1-grid" id="error404">
	                

                    <div class="g1-column g1-one-third" data-g1-delay="">
                        <i class="fa fa-search" style="text-align: center;"></i>
                        <h2>חיפוש באתר</h2>
                        <?php get_search_form(); ?>
                    </div>

                    <div class="g1-column g1-one-third" data-g1-delay="">
                        <i class="fa fa-envelope" style="text-align: center;"></i>
                        <h2>דיווח על תקלה</h2>
                        <p>נא לתאר את אופי התקלה ככל האפשר...</p>
                    </div>

                    <div class="g1-column g1-one-third" data-g1-delay="">
                        <i class="fa fa-home" style="text-align: center;"></i>
                        <h2>בחזרה לעמוד הראשי</h2>
                        <p><?php printf( __( 'ניתן לחזור לעמוד הראשי על ידי הקלקה על הקישור <a href="%s">בחזרה לעמוד הראשי</a> ולהמשיך לסקור את האתר משם.', 'g1_theme' ), home_url() ); ?></p>
                    </div>
                </div>
            </div><!-- .entry-content -->
        </article><!-- #post-0 -->

	</div><!-- #content -->
</div><!-- #primary -->

<?php get_footer(); ?>