<?php get_header(); ?>

<div class="row">
    <main class="col-md-8 main">

        <?php $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1; ?>
        <?php $query = new WP_Query( array( 'cat' => -354, 'paged' => $paged ) ); ?>   
        <?php if ( $query->have_posts() ) : while ( $query->have_posts() ) : $query->the_post(); ?>
        <?php get_template_part( 'content', get_post_format() ); ?>
        <?php endwhile; ?>

        <nav>
          <ul class="pager">
            <li class="next"><?php next_posts_link( 'Пред. <span aria-hidden="true">&rarr;</span>' ); ?></li>
            <li class="previous"><?php previous_posts_link( '<span aria-hidden="true">&larr;</span> След.' ); ?></li>
          </ul>
        </nav>

        <?php else :?>
        <?php echo 'Sorry, no posts matched your criteria.' ?>
        <?php endif; ?>

    </main>

    <?php get_sidebar(); ?>
</div> <!-- .row -->

<?php get_footer(); ?>