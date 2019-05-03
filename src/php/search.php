<?php get_header(); ?>

<main class="bg-white black-70 center f4 lh-copy measure-wide pb5 pt4 sans-serif">
    <h1 class="b--light-gray bb f1 fw5 lh-solid mb4 mt0 pb4 serif" data-qa="categoryHeading">
        Результаты поиска
    </h1>

    <div class="b--light-gray bb pb4">
        <?php get_template_part('components/search'); ?>
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
    <?php else : ?>
        <?php echo '<div class="mt4">К сожалению, мы не нашли статей, удовлетворяющих этому критерию.</div>' ?>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
