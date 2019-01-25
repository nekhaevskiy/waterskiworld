<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="<?php echo get_bloginfo('template_directory'); ?>/favicon.ico">
  <?php wp_head();?>

  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-109430591-1', 'auto');
    ga('send', 'pageview');
  </script>
  <script type="text/javascript" > (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter9704365 = new Ya.Metrika({ id:9704365, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks"); </script> <noscript><div><img src="https://mc.yandex.ru/watch/9704365" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
</head>

<body>
  <div class="container">
    <header class="header">
      <div class="row">
        <div class="col-sm-6">
          <?php if ( is_front_page() && !is_paged() ) { ?>
            <h1 class="header__title"><?php echo get_bloginfo( 'name' ); ?></h1>
            <p class="lead header__description"><?php echo get_bloginfo( 'description' ); ?></p>
          <?php } else { ?>
            <a class="header__link" href="<?php echo get_bloginfo( 'wpurl' );?>" title="На главную">
              <p class="header__title"><?php echo get_bloginfo( 'name' ); ?></p>
              <p class="lead header__description"><?php echo get_bloginfo( 'description' ); ?></p>
            </a>
          <?php } ?>
        </div>
        <div class="col-sm-6 hidden-xs">
          <ul class="socials">
            <li class="socials__item socials__item_twitter">
              <a href="https://twitter.com/waterskiworld" title="Читайте нас в Твиттере">Twitter</a>
            </li>
            <li class="socials__item socials__item_facebook">
              <a href="https://www.facebook.com/waterskiworld" title="Читайте нас на Фейсбуке">Facebook</a>
            </li>
            <li class="socials__item socials__item_vk">
              <a href="https://vk.com/waterskiworld" title="Читайте нас во ВКонтакте">VK</a>
            </li>
            <li class="socials__item socials__item_youtube">
              <a href="https://www.youtube.com/user/waterskiworld2008" title="Наш канал на YouTube">YouTube</a>
            </li>
            <li class="socials__item socials__item_rss">
              <a href="http://feeds.feedburner.com/waterskiworld" title="Наш RSS-фид">RSS</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>

  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu" aria-expanded="false">
          <span class="sr-only">Переключение меню</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <?php if ( is_front_page() ) { ?>
          <span class="navbar-brand visible-xs-block">WaterSkiWorld.ru</span>
        <?php } else { ?>
          <a href="<?php echo get_bloginfo( 'wpurl' );?>" class="navbar-brand visible-xs-block">WaterSkiWorld.ru</a>
        <?php } ?>
      </div>

      <?php wp_nav_menu( array( 
        'menu_class' => 'nav navbar-nav',
        'container' => 'div',
        'container_class' => 'collapse navbar-collapse',
        'container_id' => 'menu',
        'theme_location' => 'primary-menu' 
      ) ); ?>
      
    </div> <!-- /.container -->
  </nav>
  
  <div class="container">