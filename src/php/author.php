<?php get_header(); ?>

<main class="bg-white black-70 center f4 lh-copy measure-wide pb5 ph3 pt4 sans-serif">
    <div class="b--light-gray bb flex flex-column flex-nowrap flex-row-ns items-center items-start-ns pb4">
        <?php echo get_avatar(get_the_author_meta('ID'), 120, '', '', array('class' => 'br2')); ?>
        <div class="ml3-ns mt0-ns mt3">
            <h1 class="f1 fw5 lh-solid mv0 serif tc tl-ns">
                <?php the_author_meta('display_name') ?>
            </h1>
            <p class="f4 lh-copy mb0 mt3 sans-serif">
                <?php the_author_meta('description'); ?>
            </p>
        </div>
    </div>

    <div class="f2 fw5 lh-solid mt4 serif">
        Статьи автора:
    </div>

    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            <?php get_template_part('content', get_post_format()); ?>
        <?php endwhile; ?>

        <nav class="pagination mt5">
            <ul class="pagination__list">
                <li class="pagination__item pagination__item--prev" data-qa="paginationPrevLinkWrapper">
                    <?php previous_posts_link('Пред.'); ?>
                </li>
                <li class="pagination__item pagination__item--next" data-qa="paginationNextLinkWrapper">
                    <?php next_posts_link('След.'); ?>
                </li>
            </ul>
        </nav>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
