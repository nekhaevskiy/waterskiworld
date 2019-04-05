<article>
    <h1 class="f2 fw5 lh-solid mv0 serif">
        <?php the_title(); ?>
    </h1>

    <div class="cf mt3 nested">
        <?php the_content(); ?>
    </div>

    <div class="f5 i mt4 silver tr">
        <span>Опубликовано:</span>
        <span><?php the_date(); ?></span>
    </div>
</article>
