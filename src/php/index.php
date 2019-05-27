<?php get_header(); ?>

<div class="bg-white black-70 center flex-l flex-nowrap justify-between mw8 ph3">
    <main class="center f4 measure-wide mh0-l pb5">
        <?php $paged = (get_query_var('paged')) ? get_query_var('paged') : 1; ?>
        <?php $query = new WP_Query(array('cat' => -354, 'paged' => $paged)); ?>
        <?php if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post(); ?>
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

        <?php else : ?>
            <?php echo 'К сожалению, мы не смогли найти подходящих постов' ?>
        <?php endif; ?>
    </main>

    <?php get_sidebar(); ?>
</div>

<?php get_footer(); ?>
