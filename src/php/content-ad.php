<article>
  <h1 class="f2 mv0 lh-solid fw5 serif">
    <?php the_title(); ?>
  </h1>
  
  <div class="mt3 cf nested">
    <?php the_content(); ?>
  </div>
  
  <div class="f5 tr mt4 silver i">
    Опубликовано:
    <span>
      <?php the_date(); ?>
    </span>
  </div>
</article>