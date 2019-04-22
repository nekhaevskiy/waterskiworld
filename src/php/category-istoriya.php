<?php get_header(); ?>

<main class="bg-white black-70 center f4 lh-copy mb5 measure-wide sans-serif">
    <h1 class="b--light-gray bb f1 fw5 lh-solid mb4 mt2 pb4 serif" data-qa="categoryHeading">
        <?php single_cat_title(); ?>
    </h1>
    
    <section class="accordion b--black-10 bb pb4" data-js="accordion" data-qa="categoryDescription">
        <h2 class="accordion__heading" data-qa="categoryDescriptionHeading">Циклы статей:</h2>
        
        <div id="collapseOne" class="accordion__item" data-qa="accordionItem">
            <button 
                class="accordion__btn"
                data-js="accordion-btn"
                data-js-target="#collapseOne"
                type="button"
                data-qa="accordionItemHeading" 
            >
                Вера Федорова: История побед 1967-2010
            </button>
            <?php
                $args = array(
                    'nopaging' => true,
                    'cat'         => 14,
                    'orderby'     => 'title',
                    'order'       => 'ASC',
                );
                $query1 = new WP_Query($args);
                if ($query1->have_posts()) {
                    echo '<ul class="accordion__content" data-qa="accordionItemBody">';
                    while ($query1->have_posts()) {
                        $query1->the_post();
                        echo '<li class="accordion__list-item"><a class="accordion__link" href="' . get_the_permalink() . '">' . get_the_title() . '</a></li>';
                    }
                    echo '</ul>';
                }
                wp_reset_postdata();
            ?>
        </div>
    
        <div id="collapseTwo" class="accordion__item" data-qa="accordionItem">
            <button 
                class="accordion__btn"
                data-js="accordion-btn"
                data-js-target="#collapseTwo"
                type="button"
                data-qa="accordionItemHeading"
            >
                Юрий Жуков: История воднолыжного спорта глазами очевидца 1963-1980
            </button>
            <?php
                $args = array(
                    'nopaging' => true,
                    'cat'         => 15,
                    'orderby'     => 'title',
                    'order'       => 'ASC',
                );
                $query2 = new WP_Query($args);
                if ($query2->have_posts()) {
                    echo '<ul class="accordion__content" data-qa="accordionItemBody">';
                    while ($query2->have_posts()) {
                        $query2->the_post();
                        echo '<li class="accordion__list-item"><a class="accordion__link" href="' . get_the_permalink() . '">' . get_the_title() . '</a></li>';
                    }
                    echo '</ul>';
                }
                wp_reset_postdata();
            ?>
        </div>
    </section>
    
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
    <?php endif; ?>
</main>

<?php get_footer(); ?>

<script src="<?php echo get_template_directory_uri() . '/js/accordion/accordion.js' ?>"></script>
