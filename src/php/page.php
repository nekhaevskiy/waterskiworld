<?php get_header(); ?>
<main class="bg-white black-70 center f4 lh-copy mb5 measure-wide sans-serif">
    <?php if ( have_posts() ) : ?>
        <?php while ( have_posts() ) : the_post(); ?>
            <h1 class="b--light-gray bb f1 fw5 lh-solid mb4 mt2 pb4 serif" data-qa="pageHeading">
                <?php the_title(); ?>
            </h1>

            <div class="nested" data-qa="pageContent">
                <?php the_content(); ?>
            </div>

            <div class="f5 i mt4 silver tr" data-qa="pageDate">
                <span>Обновлено:</span>
                <span><?php the_modified_date(); ?></span>
            </div>
        <?php endwhile; ?>

        <div class="mt4">
            <?php get_template_part( 'components/facebook-like-button' ); ?>
        </div>
    <?php endif; ?>
</main>
<?php get_footer(); ?>
