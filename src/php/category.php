<?php get_header(); ?>

<main class="bg-white black-70 center db f4 lh-copy measure-wide pb5 ph3 ph0-l pt4 sans-serif">
    <h1 class="b--light-gray bb f1 fw5 lh-solid mv0 pb4 serif" data-qa="categoryHeading">
        <?php single_cat_title(); ?>
    </h1>

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
