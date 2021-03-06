<?php get_header(); ?>

<main class="bg-white black-70 center db f4 lh-copy measure-wide pb5 ph3 ph0-l pt4 sans-serif">
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            <?php
            if (in_category('adverts')) {
                get_template_part('content-ad', get_post_format());
            } elseif (in_category('vodnolyzhniki')) {
                get_template_part('content-waterskier', get_post_format());
            } else {
                get_template_part('content-single', get_post_format());
            }
            ?>
        <?php endwhile; ?>

        <div class="mt4">
            <?php get_template_part('components/facebook-like-button'); ?>
        </div>

        <nav class="pagination mt4">
            <ul class="pagination__list">
                <li class="pagination__item pagination__item--prev" data-qa="paginationPrevLinkWrapper">
                    <?php next_post_link('%link', 'Пред.', true); ?>
                </li>
                <li class="pagination__item pagination__item--next" data-qa="paginationNextLinkWrapper">
                    <?php previous_post_link('%link', 'След.', true); ?>
                </li>
            </ul>
        </nav>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
