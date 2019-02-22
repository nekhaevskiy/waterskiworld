<article class="article article_single">
  <h1 class="article__title article__title_single"><?php the_title(); ?></h1>
  <p class="article__meta"><?php the_date(); ?>, автор:
    <?php the_author_posts_link() ?>
  </p>
  <?php the_content(); ?>
</article>