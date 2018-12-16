<?php get_header(); ?>
  <div class="row">
    <main class="col-md-10 col-md-offset-1 main main_no-sidebar">
      <?php if ( have_posts() ) : ?>
        <?php while ( have_posts() ) : the_post(); ?>
          <?php if ( in_category( 9 ) ) { ?>
            <?php get_template_part( 'content-waterskier', get_post_format() ); ?>
          <?php } else { ?>
            <?php get_template_part( 'content-single', get_post_format() ); ?>
          <?php } ?>
        <?php endwhile; ?>
        
        <?php get_template_part( 'partials/facebook-like-button' ); ?>

        <nav>
          <ul class="pager">
            <li class="previous"><?php next_post_link( '%link', '<span aria-hidden="true">&larr;</span> След.', true ); ?></li>
            <li class="next"><?php previous_post_link( '%link', 'Пред. <span aria-hidden="true">&rarr;</span>', true ); ?></li>
          </ul>
        </nav>
      <?php endif; ?>
    </main>
  </div> <!-- .row -->
<?php get_footer(); ?>
