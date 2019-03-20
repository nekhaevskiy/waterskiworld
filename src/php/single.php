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
      
      <div class="mt4">
        <?php get_template_part( 'partials/facebook-like-button' ); ?>
      </div>

      <nav class="mt4 tc">
        <?php
          $next_post = get_adjacent_post(true, '', false);
          $next_post_text = '
            <svg class="v-mid w1" data-icon="chevronLeft" viewBox="0 0 32 32" style="fill:currentcolor">
              <title>chevronLeft icon</title>
              <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
            </svg>
            <span class="v-mid pr1">Пред.</span>
          ';
          if (!empty($next_post)) {
            echo '<a class="f5 mr2 ph3 pv2 dark-blue link dim fw5 dib br2 ba bw1" href="' . get_permalink($next_post->ID) .'" data-qa="linkNextPage">' . $next_post_text . '</a>';
          } else {
            echo '<a class="f5 mr2 ph3 pv2 silver hover-silver link fw5 dib br2 ba bw1" data-qa="linkNextPage">' . $next_post_text . '</a>';
          }
          
          $prev_post = get_adjacent_post(true, '', true);
          $prev_post_text = '
            <span class="v-mid pl1">След.</span>
            <svg class="v-mid w1" data-icon="chevronRight" viewBox="0 0 32 32" style="fill:currentcolor">
              <title>chevronRight icon</title>
              <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
            </svg>
            ';
          if (!empty($prev_post)) {
            echo '<a class="f5 ml2 ph3 pv2 dark-blue link dim fw5 dib br2 ba bw1" href="' . get_permalink($prev_post->ID) .'" data-qa="linkPrevPage">' . $prev_post_text . '</a>';
          } else {
            echo '<a class="f5 ml2 ph3 pv2 silver hover-silver link fw5 dib br2 ba bw1" data-qa="linkPrevPage">' . $prev_post_text . '</a>';
          }
        ?>
      </nav>
    <?php endif; ?>
  </main>
<?php get_footer(); ?>
