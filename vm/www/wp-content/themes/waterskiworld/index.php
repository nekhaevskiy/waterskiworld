<?php get_header(); ?>
  <div class="row">
    <main class="col-md-8 main">
      <?php if ( have_posts() ) : ?>
        <?php while ( have_posts() ) : the_post(); ?>
          <?php get_template_part( 'content', get_post_format() ); ?>
        <?php endwhile; ?>
        <nav>
          <ul class="pager">
            <li class="next"><?php next_posts_link( 'Пред. <span aria-hidden="true">&rarr;</span>' ); ?></li>
            <li class="previous"><?php previous_posts_link( '<span aria-hidden="true">&larr;</span> След.' ); ?></li>
          </ul>
        </nav>
      <?php else :?>
        <?php echo 'Sorry, no posts matched your criteria.' ?>
      <?php endif; ?>
    </main>
    <?php get_sidebar(); ?>
  </div> <!-- .row -->
<?php get_footer(); ?>