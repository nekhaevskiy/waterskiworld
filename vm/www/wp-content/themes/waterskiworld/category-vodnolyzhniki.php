<?php get_header(); ?>
<div class="row">
  <main class="col-md-10 col-md-offset-1 main main_no-sidebar">
    <div class="page-header">
      <h1><?php single_cat_title(); ?></h1>
    </div>
    <ul>
      <?php global $post;
      $args = array( 
        'numberposts'     => -1,
        'category'         => 9,
        'orderby'          => 'title',
        'order'            => 'ASC',
        'post_status'      => 'publish'
      );
      $myposts = get_posts( $args );
      foreach ( $myposts as $post ) : setup_postdata( $post ); ?>
        <li>
          <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
        </li>
      <?php endforeach; 
      wp_reset_postdata();?>
    </ul>
    <br>
  </main>
</div> <!-- .row -->
<?php get_footer(); ?>