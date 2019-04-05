<article>
    <h1 class="f2 fw5 lh-solid mv0 serif" data-qa="articleHeading">
        <?php the_title(); ?>
    </h1>

    <div class="cf mt3 nested" data-qa="articleContent">
        <?php the_content(); ?>
    </div>
  
    <div class="f5 i mt4 silver tr" data-qa="articleDate">
        <span>Обновлено:</span>
        <span><?php the_modified_date(); ?></span>
    </div>
</article>
