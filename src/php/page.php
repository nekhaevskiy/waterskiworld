<?php get_header(); ?>
<div class="row">
  <main class="col-md-10 col-md-offset-1 main main_no-sidebar">
    <?php if ( have_posts() ) : ?>
      <?php while ( have_posts() ) : the_post(); ?>
        <?php get_template_part( 'content-page', get_post_format() ); ?>
      <?php endwhile; ?>
    <?php endif; ?>
  </main>
</div> <!-- .row -->
<?php get_footer(); ?>