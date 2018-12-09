<div class="page-header">
  <h1><?php the_title(); ?></h1>
</div>
<div class="article article_single">
  <?php the_content(); ?>
  <p class="article__meta">Обновлено: <?php the_modified_date(); ?></p>
  <?php if (! is_page('kontaktyi')) { ?>
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
  <?php } ?>
</div>