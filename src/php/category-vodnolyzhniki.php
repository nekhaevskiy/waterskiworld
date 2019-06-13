<?php get_header(); ?>

<main class="bg-white black-70 center db f4 lh-copy measure-wide pb5 ph3 ph0-l pt4 sans-serif">
    <h1 class="b--light-gray bb f1 fw5 lh-solid mb4 mt0 pb4 serif word-wrap" data-qa="pageHeading">
        <?php single_cat_title(); ?>
    </h1>

    <div class="nested">
        <ul>
            <?php
                global $post;
                $args = array(
                    'numberposts'     => -1,
                    'category'         => 9,
                    'orderby'          => 'title',
                    'order'            => 'ASC',
                    'post_status'      => 'publish'
                );
                $myposts = get_posts($args);
                foreach ($myposts as $post) : setup_postdata($post);
            ?>
    
                <li>
                    <a href="<?php the_permalink(); ?>" data-qa="linkToWaterskier">
                        <?php the_title(); ?>
                    </a>
                </li>
    
            <?php
                endforeach;
                wp_reset_postdata();
            ?>
        </ul>
    </div>
</main>

<?php get_footer(); ?>
