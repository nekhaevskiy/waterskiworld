<?php get_header(); ?>
<div class="row">
  <main class="col-md-10 col-md-offset-1 main main_no-sidebar">
    <div class="page-header">
      <h1><?php single_cat_title(); ?></h1>
    </div>
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
    <?php endif; ?>
  </main>
</div> <!-- .row -->
<?php get_footer(); ?>