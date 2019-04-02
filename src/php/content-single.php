<article>
    <h1 class="f2 fw5 lh-solid mv0 serif" data-qa="articleHeading">
        <?php the_title(); ?>
    </h1>

    <div class="cf mt3 nested" data-qa="articleContent">
        <?php the_content(); ?>
    </div>

    <div class="cf f5 mt4">
        <div class="fl-ns" data-qa="articleAuthorInfo">
            <b>Автор:</b>
            <span class="nested" data-qa="articleAuthorLink">
                <?php the_author_posts_link() ?>
            </span>
        </div>
        <div class="fr-ns i silver" data-qa="articleDate">
            <span>Опубликовано:</span>
            <span><?php the_date(); ?></span>
        </div>
    </div>
</article>
