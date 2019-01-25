<aside class="col-md-4 hidden-xs hidden-sm sidebar">
  <div class="sidebar-module">
    <form role="search" method="get" class="form-inline" action="<?php echo get_bloginfo( 'wpurl' );?>">
      <div class="form-group">
        <label for="sidebar-search" class="sr-only">Поиск</label>
        <input type="search" class="form-control" id="sidebar-search" placeholder="Поиск" name="s" required style="width: 180px;">
      </div>
      <button type="submit" class="btn btn-default">Найти</button>
    </form>
  </div>

  <div class="sidebar-module">
    <h4>Facebook</h4>
    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwaterskiworld%2F&tabs&width=248&height=230&small_header=false&adapt_container_width=false&hide_cover=true&show_facepile=true&appId=389986204396822" width="248" height="230" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
  </div>

  <div class="sidebar-module">
    <h4>ВКонтакте</h4>
    <script type="text/javascript" src="//vk.com/js/api/openapi.js?150"></script>

    <!-- VK Widget -->
    <div id="vk_groups"></div>
    <script type="text/javascript">
      VK.Widgets.Group("vk_groups", { mode: 3, no_cover: 1, width: "248" }, 24712561);
    </script>
  </div>

  <div class="sidebar-module">
    <h4>Подписка</h4>
    <form action="https://feedburner.google.com/fb/a/mailverify" method="post" target="popupwindow" onsubmit="window.open('https://feedburner.google.com/fb/a/mailverify?uri=waterskiworld', 'popupwindow', 'scrollbars=yes,width=550,height=520');return true">
      <div class="form-group">
        <label for="subscriber-email" class="sr-only">Email</label>
        <input type="email" class="form-control" id="subscriber-email" placeholder="Email" name="email" required>
      </div>
      <input type="hidden" value="waterskiworld" name="uri">
      <input type="hidden" name="loc" value="ru_RU">
      <button type="submit" class="btn btn-default center-block">Подписаться</button>
    </form>
  </div>
</aside> 
