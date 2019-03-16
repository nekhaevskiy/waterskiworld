<?php get_header(); ?>
  <main class="center measure-wide f4 mb5 bg-white black-70 lh-copy sans-serif">
    <?php if ( have_posts() ) : ?>
      <?php while ( have_posts() ) : the_post(); ?>
        <?php
          if ( in_category( 'adverts' ) ) {
            get_template_part( 'content-ad', get_post_format() );
          } elseif (in_category( 'vodnolyzhniki' )) {
            get_template_part( 'content-waterskier', get_post_format() );
          } else {
            get_template_part( 'content-single', get_post_format() );
          } 
        ?>
      <?php endwhile; ?>
      
      <div class="mt3">
        <?php get_template_part( 'partials/facebook-like-button' ); ?>
      </div>

      <nav class="mt4 tc">
        <?php
          $next_post = get_adjacent_post(true, '', false);
          if (!empty($next_post)) {
            echo '<a class="f5 mr2 ph3 pv2 dark-blue link dim fw5 dib br1 ba bw1" href="' . get_permalink($next_post->ID) .'"><span aria-hidden="true">&larr;</span> След.</a>';
          } else {
            echo '<a class="f5 mr2 ph3 pv2 silver hover-silver link fw5 dib br1 ba bw1"><span aria-hidden="true">&larr;</span> След.</a>';
          }
          
          $prev_post = get_adjacent_post(true, '', true);
          if (!empty($prev_post)) {
            echo '<a class="f5 ml2 ph3 pv2 dark-blue link dim fw5 dib br1 ba bw1" href="' . get_permalink($prev_post->ID) .'">Пред. <span aria-hidden="true">&rarr;</span></a>';
          } else {
            echo '<a class="f5 ml2 ph3 pv2 silver hover-silver link fw5 dib br1 ba bw1">Пред. <span aria-hidden="true">&rarr;</span></a>';
          }
        ?>
      </nav>
    <?php endif; ?>
  </main>
<?php get_footer(); ?>
