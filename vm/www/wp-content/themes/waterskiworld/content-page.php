<div class="page-header">
  <h1><?php the_title(); ?></h1>
</div>
<div class="article article_single">
  <?php the_content(); ?>
  <p class="article__meta">Обновлено: <?php the_modified_date(); ?></p>

  <?php get_template_part( 'partials/facebook-like-button' ); ?>

</div>
