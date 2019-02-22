<?php get_header(); ?>
<div class="row">
  <main class="col-md-10 col-md-offset-1 main main_no-sidebar">
    <div class="page-header">
      <h1>Упс! Что-то пошло не так...</h1>
    </div>
    <div class="article article_single">
        <figure class="aligncenter">
          <img src="<?php echo get_stylesheet_directory_uri() . '/img/404.jpg'?>" alt="">
        </figure>
        <h2 class="text-center">Мы не смогли найти запрашиваемую страницу</h2>
        <p>Вы можете воспользоваться поиском по сайту:</p>
        <form role="search" method="get" action="<?php echo get_bloginfo( 'wpurl' );?>">
          <div class="row">
            <div class="col-xs-8 col-sm-6">
              <label for="search" class="sr-only">Поиск</label>
              <input type="search" class="form-control" id="search" placeholder="Поиск" name="s">
            </div>
            <div class="col-xs-4">
              <button type="submit" class="btn btn-default">Найти</button>
            </div>
          </div>
        </form>
        <br>
        <p>или ознакомиться со списком последних статей:</p>
        <ul>
        <?php 
          $args = array( 'numberposts' => '5' );
          $recent_posts = wp_get_recent_posts( $args );
          foreach( $recent_posts as $recent ){
            echo '<li><a href="' . get_permalink($recent["ID"]) . '">' .   $recent["post_title"].'</a> </li> ';
          }
          wp_reset_query();
        ?>
      </ul>
      <p>или вернуться на <a href="<?php echo home_url();?>">главную страницу</a>.</p>
    </div>
  </main>
</div> <!-- .row -->
<?php get_footer(); ?>