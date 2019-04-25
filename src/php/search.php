<?php get_header(); ?>

<main class="bg-white black-70 center f4 lh-copy mb5 measure-wide sans-serif">
    <h1 class="b--light-gray bb f1 fw5 lh-solid mb4 mt2 pb4 serif" data-qa="categoryHeading">
        Результаты поиска
    </h1>
    
    <form 
        action="<?php echo get_bloginfo('wpurl'); ?>" 
        class="b--light-gray bb flex flex-nowrap flex-row items-stretch pb4" 
        method="get" 
        role="search" 
    >
        <input 
            class="b--black-20 ba br2 flex-grow-1 input-reset mr2 pa2"
            data-qa="inputSearch"
            name="s" 
            placeholder="Поиск" 
            required 
            type="search" 
            value="<?php echo get_search_query(); ?>"
        >
        <button 
            class="bg-dark-blue br2 flex-grow-0 flex-shrink-0 dim f5 link ph3 pv2 white"
            data-qa="buttonSearch"
            type="submit" 
        >
            Найти
        </button>
    </form>
    
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            <?php get_template_part('content', get_post_format()); ?>
        <?php endwhile; ?>

        <nav class="wsw-pagination mt5">
            <ul class="wsw-pagination__list">
                <li class="wsw-pagination__item wsw-pagination__item--prev" data-qa="paginationPrevLinkWrapper">
                    <?php previous_posts_link('Пред.'); ?>
                </li>
                <li class="wsw-pagination__item wsw-pagination__item--next" data-qa="paginationNextLinkWrapper">
                    <?php next_posts_link('След.'); ?>
                </li>
            </ul>
        </nav>
    <?php else : ?>
        <?php echo '<div class="mt4">К сожалению, мы не нашли статей, удовлетворяющих этому критерию.</div>' ?>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
