<article>
    <h1 class="f2 mv0 lh-solid fw5 serif" data-qa="articleHeading">
        <?php the_title(); ?>
    </h1>

    <div class="mt3 cf nested" data-qa="articleContent">
        <?php the_content(); ?>
    </div>

    <div class="f5 mt4 cf">
        <div class="fl-ns" data-qa="articleAuthorInfo">
            <b>Автор:</b>
            <span class="nested" data-qa="articleAuthorLink">
                <?php the_author_posts_link() ?>
            </span>
        </div>
        <div class="fr-ns silver i" data-qa="articleDate">
            <span>Опубликовано:</span>
            <span><?php the_date(); ?></span>
        </div>
    </div>
</article>
