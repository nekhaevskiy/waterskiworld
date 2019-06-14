<?php get_header(); ?>

<main class="bg-white black-70 center db f4 lh-copy measure-wide pb5 ph3 ph0-l pt4 sans-serif">
    <h1 class="b--light-gray bb f1 fw5 lh-solid mb4 mt0 pb4 serif" data-qa="pageHeading">
        Упс! Что-то пошло не так...
    </h1>

    <img 
        alt="Что-то пошло не так..." 
        class="center db h-auto mw-100" 
        data-qa="image"
        height="425" 
        src="<?php echo get_stylesheet_directory_uri() . '/img/404.jpg' ?>" 
        width="639" 
    />

    <h2 class="f2 fw5 lh-solid mv3 serif tc" data-qa="textHeading">
        Мы не смогли найти запрашиваемую страницу
    </h2>

    <div class="nested">
        <p>Вы можете воспользоваться поиском по сайту:</p>
    </div>

    <div class="mv3">
        <?php get_template_part('components/search'); ?>
    </div>

    <div class="nested">
        <p>или ознакомиться со списком последних статей:</p>

        <ul>
            <?php
            $args = array('numberposts' => '5');
            $recent_posts = wp_get_recent_posts($args);
            foreach ($recent_posts as $recent) {
                echo '<li><a href="' . get_permalink($recent["ID"]) . '" data-qa="lastArticleLink">' .   $recent["post_title"] . '</a> </li> ';
            }
            wp_reset_query();
            ?>
        </ul>

        <p>или вернуться на <a href="<?php echo home_url(); ?>" data-qa="homepageLink">главную страницу</a>.</p>
    </div>
</main>

<?php get_footer(); ?>
