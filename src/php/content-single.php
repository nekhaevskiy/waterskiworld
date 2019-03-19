<article>
  <h1 class="f2 mv0 lh-solid fw5 serif">
    <?php the_title(); ?>
  </h1>

  <div class="mt3 cf nested">
    <?php the_content(); ?>
  </div>
  
  <div class="f5 mt4 cf">
    <div class="fl-ns">
      <b>Автор:</b>
      <span class="nested">
        <?php the_author_posts_link() ?>
      </span>
    </div>
    <div class="fr-ns silver i">
      <span>Опубликовано:</span>
      <span><?php the_date(); ?></span>
    </div>
  </div>
</article>
