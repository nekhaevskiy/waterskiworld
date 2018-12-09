<?php get_header(); ?>
<div class="row">
  <main class="col-md-10 col-md-offset-1 main main_no-sidebar">
    <div class="page-header">
      <h1>Результаты поиска</h1>
    </div>
    <form role="search" method="get" class="form-inline" action="<?php echo get_bloginfo( 'wpurl' );?>" style="margin: -20px 0 40px; padding-bottom: 20px; border-bottom: 1px solid #eee;">
      <div class="form-group">
        <label for="page-search" class="sr-only">Поиск</label>
        <input type="search" class="form-control" id="page-search" placeholder="Поиск" name="s" required value="<?php echo get_search_query(); ?>">
      </div>
      <button type="submit" class="btn btn-default">Найти</button>
    </form>
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
        <?php echo 'К сожалению, мы не нашли статей, удовлетворяющих этому критерию.' ?>
      <?php endif; ?>
  </main>
</div> <!-- .row -->
<?php get_footer(); ?>