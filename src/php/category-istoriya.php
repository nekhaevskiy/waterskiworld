<?php get_header(); ?>
<div class="row">
  <main class="col-md-10 col-md-offset-1 main main_no-sidebar">
    <div class="page-header">
      <h1><?php single_cat_title(); ?></h1>
    </div>
    <section class="description">
      <h2 class="description__heading">Циклы статей:</h2>
      <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        <div class="panel panel-default">
          <div class="panel-heading" role="tab" id="headingOne">
            <h4 class="panel-title">
              <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Вера Федорова: История побед 1967-2010
              </a>
            </h4>
          </div>
          <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
            <?php
              $args = array(
                'nopaging' => true,
                'cat'         => 14,
                'orderby'     => 'title',
                'order'       => 'ASC',
              );
              $query1 = new WP_Query( $args );
              if ( $query1->have_posts() ) {
                  echo '<ul class="list-group">';
                  while ( $query1->have_posts() ) {
                      $query1->the_post();
                      echo '<li class="list-group-item"><a href="' . get_the_permalink() . '">' . get_the_title() . '</a></li>';
                  }
                  echo '</ul>';
              }
              wp_reset_postdata();
            ?>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading" role="tab" id="headingTwo">
            <h3 class="panel-title">
              <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Юрий Жуков: История воднолыжного спорта глазами очевидца 1963-1980
              </a>
            </h3>
          </div>
          <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
            <?php
              $args = array(
                'nopaging' => true,
                'cat'         => 15,
                'orderby'     => 'title',
                'order'       => 'ASC',
              );
              $query2 = new WP_Query( $args );
              if ( $query2->have_posts() ) {
                  echo '<ul class="list-group">';
                  while ( $query2->have_posts() ) {
                      $query2->the_post();
                      echo '<li class="list-group-item"><a href="' . get_the_permalink() . '">' . get_the_title() . '</a></li>';
                  }
                  echo '</ul>';
              } 
              wp_reset_postdata();
            ?>
          </div>
        </div>
      </div>
    </section>
    <?php if ( have_posts() ) : ?>
      <?php while ( have_posts() ) : the_post(); ?>
        <?php get_template_part( 'content', get_post_format() ); ?>
      <?php endwhile; ?>
      <nav>
        <ul class="pager">
        <li class="next"><?php next_posts_link( 'Пред. <span aria-hidden="true">&rarr;</span>' ); ?></li>
        <li class="previous"><?php previous_posts_link( '<span aria-hidden="true">&larr;</span> След.' ); ?></li>
        </ul>
      </nav>
    <?php endif; ?>
  </main>
</div> <!-- .row -->
<?php get_footer(); ?>