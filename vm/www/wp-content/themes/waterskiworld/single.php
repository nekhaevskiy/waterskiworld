<?php get_header(); ?>
  <div class="row">
    <main class="col-md-10 col-md-offset-1 main main_no-sidebar">
      <?php if ( have_posts() ) : ?>
        <?php while ( have_posts() ) : the_post(); ?>
          <?php if ( in_category( 9 ) ) { ?>
            <?php get_template_part( 'content-waterskier', get_post_format() ); ?>
          <?php } else { ?>
            <?php get_template_part( 'content-single', get_post_format() ); ?>
          <?php } ?>
        <?php endwhile; ?>
        <nav>
          <ul class="pager">
            <li class="previous"><?php next_post_link( '%link', '<span aria-hidden="true">&larr;</span> След.', true ); ?></li>
            <li class="next"><?php previous_post_link( '%link', 'Пред. <span aria-hidden="true">&rarr;</span>', true ); ?></li>
          </ul>
        </nav>
        <div id="hypercomments_widget"></div>
        <script type="text/javascript">
          _hcwp = window._hcwp || [];
          _hcwp.push({
            widget:"Stream", 
            widget_id: 97368
          });
          (function() {
            if("HC_LOAD_INIT" in window)return;
            HC_LOAD_INIT = true;
            var lang = "ru";
            var hcc = document.createElement("script"); hcc.type = "text/javascript"; hcc.async = true;
            hcc.src = ("https:" == document.location.protocol ? "https" : "http")+"://w.hypercomments.com/widget/hc/97368/"+lang+"/widget.js";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hcc, s.nextSibling);
          })();
        </script>
      <?php endif; ?>
    </main>
  </div> <!-- .row -->
<?php get_footer(); ?>