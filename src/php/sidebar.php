<aside class="db-l dn ml3 pt4 w5">
    <h3 class="f3 fw5 lh-solid mb2 mt0 serif" data-qa="sidebarSearchHeading">
        Поиск по сайту
    </h3>
    <form 
        action="<?php echo get_bloginfo('wpurl'); ?>" 
        class="flex flex-nowrap flex-row items-stretch" 
        method="get"
    >
        <input 
            class="b--black-20 ba br2 f6 flex-grow-1 input-reset mr1 pa2 sans-serif" 
            data-qa="sidebarSearchInput"
            name="s" 
            placeholder="Поиск" 
            required 
            type="search"
        >
        <button 
            class="bg-dark-blue br2 f6 flex-grow-0 flex-shrink-0 dim f5 link pv2 tc sans-serif white w3" 
            data-qa="sidebarSearchBtn"
            type="submit"
        >
            Найти
        </button>
    </form>

    <h3 class="f3 fw5 lh-solid mb2 mt4 serif" data-qa="sidebarFacebookHeading">
        Facebook
    </h3>
    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwaterskiworld%2F&tabs&width=256&height=154&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=389986204396822" width="256" height="154" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" data-qa="sidebarFacebookBody"></iframe>

    <h3 class="f3 fw5 lh-solid mb2 mt4 serif" data-qa="sidebarVKHeading">
        ВКонтакте
    </h3>
    <script type="text/javascript" src="//vk.com/js/api/openapi.js?150"></script>
    <div id="vk_groups" data-qa="sidebarVKBody"></div>
    <script type="text/javascript">
        VK.Widgets.Group("vk_groups", {
            mode: 3,
            no_cover: 1,
            width: "256"
        }, 24712561);
    </script>

    <h3 class="f3 fw5 lh-solid mb2 mt4 serif" data-qa="sidebarSubscribeHeading">
        Подписка
    </h3>
    <form 
        action="https://feedburner.google.com/fb/a/mailverify" 
        class="flex flex-nowrap flex-row items-stretch" 
        method="post" 
        onsubmit="window.open('https://feedburner.google.com/fb/a/mailverify?uri=waterskiworld', 'popupwindow', 'scrollbars=yes,width=550,height=520');return true"
        target="popupwindow" 
    >
        <input 
            class="b--black-20 ba br2 f6 flex-grow-1 input-reset mr1 pa2 sans-serif" 
            data-qa="sidebarSubscribeInput"
            name="email" 
            placeholder="Email" 
            required
            type="email" 
        >
        <input type="hidden" value="waterskiworld" name="uri">
        <input type="hidden" name="loc" value="ru_RU">
        <button 
            class="bg-dark-blue br2 f6 flex-grow-0 flex-shrink-0 dim f5 link pv2 tc sans-serif white w3" 
            data-qa="sidebarSubscribeBtn"
            type="submit" 
        >
            Ok
        </button>
    </form>
</aside>
