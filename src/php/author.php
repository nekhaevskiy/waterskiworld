<?php get_header(); ?>
<div class="row">
  <main class="col-md-10 col-md-offset-1 main main_no-sidebar">
    <div class="jumbotron clearfix">
      <div class="author-avatar">
        <?php echo get_avatar( get_the_author_meta( 'ID' ), 120 ); ?>
      </div>
      <h1 class="author-name"><?php the_author_meta( 'display_name' ) ?></h1>
      <p class="author-descr"><?php the_author_meta('description'); ?></p>
    </div>
    <p class="author-articles">Статьи автора:</p>
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