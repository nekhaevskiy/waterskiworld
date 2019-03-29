<article>
  <h1 class="f2 mv0 lh-solid fw5 serif" data-qa="articleHeading">
    <?php the_title(); ?>
  </h1>

  <div class="mt3 cf nested" data-qa="articleContent">
    <?php the_content(); ?>
  </div>
  
  <div class="f5 tr mt4 silver i" data-qa="articleDate">
    Обновлено:
    <span>
      <?php the_modified_date(); ?>
    </span>
  </div>
</article>
