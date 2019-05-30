<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="<?php echo get_bloginfo('template_directory'); ?>/favicon.ico">
    <?php wp_head(); ?>

    <script>
        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o), m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-109430591-1', 'auto');
        ga('send', 'pageview');
    </script>

    <script type="text/javascript">
        (function(d, w, c) {
            (w[c] = w[c] || []).push(function() {
                try {
                    w.yaCounter9704365 = new Ya.Metrika({
                        id: 9704365,
                        clickmap: true,
                        trackLinks: true,
                        accurateTrackBounce: true,
                        webvisor: true
                    });
                } catch (e) {}
            });
            var n = d.getElementsByTagName("script")[0],
                s = d.createElement("script"),
                f = function() {
                    n.parentNode.insertBefore(s, n);
                };
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://mc.yandex.ru/metrika/watch.js";
            if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
            } else {
                f();
            }
        })(document, window, "yandex_metrika_callbacks");
    </script> <noscript>
        <div><img src="https://mc.yandex.ru/watch/9704365" style="position:absolute; left:-9999px;" alt="" /></div>
    </noscript>
</head>

<body>
    <header class="bg-center center contain dn f4 flex-l flex-nowrap h4 items-center justify-between mv0 mw8 pa3" style="background-image: url(<?php echo get_template_directory_uri(); ?>/img/header-bg.png)">
        <div> 
            <?php if (is_front_page() && !is_paged()) { ?>
                <h1 class="dark-blue f2 fw5 lh-solid ma0 serif" data-qa="logoHeading">
                    <?php echo get_bloginfo('name'); ?>
                </h1>
                <p class="dark-blue f3 fw5 lh-solid mb0 mt1 serif" data-qa="logoSubheading">
                    <?php echo get_bloginfo('description'); ?>
                </p>
            <?php } else { ?>
                <a class="dark-blue dim fw5 hover-dark-blue lh-solid link serif" href="<?php echo get_bloginfo('wpurl'); ?>" title="На главную" data-qa="logoLink">
                    <p class="f2 ma0" data-qa="logoHeaing">
                        <?php echo get_bloginfo('name'); ?>
                    </p>
                    <p class="f3 mb0 mt1" data-qa="logoSubheading">
                        <?php echo get_bloginfo('description'); ?>
                    </p>
                </a>
            <?php } ?>
        </div>

        <div class="flex flex-nowrap" data-qa="socialsBlock"> 
            <a 
                data-qa="socialsTwitter"
                href="https://twitter.com/waterskiworld" 
                title="Twitter" 
            >
                <img 
                    alt="Twitter" 
                    height="40"
                    src="<?php echo get_template_directory_uri(); ?>/img/twitter.png" 
                    width="40" 
                >
            </a>
            <a 
                class="ml1"
                data-qa="socialsFacebook"
                href="https://www.facebook.com/waterskiworld"
                title="Facebook" 
            >
                <img 
                    alt="Facebook" 
                    height="40"
                    src="<?php echo get_template_directory_uri(); ?>/img/facebook.png" 
                    width="40" 
                >
            </a>
            <a 
                class="ml1"    
                data-qa="socialsVK"
                href="https://vk.com/waterskiworld" 
                title="VK" 
            >
                <img 
                    alt="VK" 
                    height="40"
                    src="<?php echo get_template_directory_uri(); ?>/img/vk.png" 
                    width="40" 
                >
            </a>
            <a 
                class="ml1"    
                data-qa="socialsYouTube"
                href="https://www.youtube.com/user/waterskiworld2008" 
                title="YouTube" 
            >
                <img 
                    alt="YouTube" 
                    height="40"
                    src="<?php echo get_template_directory_uri(); ?>/img/youtube.png" 
                    width="40" 
                >
            </a>
            <a 
                class="ml1"    
                data-qa="socialsRSS"
                href="http://feeds.feedburner.com/waterskiworld" 
                title="RSS" 
            >
                <img 
                    alt="RSS" 
                    height="40"
                    src="<?php echo get_template_directory_uri(); ?>/img/rss.png" 
                    width="40" 
                >
            </a>
        </div>
    </header>

    <nav class="b--light-gray bb bg-near-white bt-l" data-js="navbar">
        <div class="b--black-10 bb bg-near-white dn-l pa3 relative z-1">
            <?php if (is_front_page() && !is_paged()) { ?>
                <span class="black-80 dib f4 fw6 mr3 serif">
                    WaterSkiWorld.ru
                </span>
            <?php } else { ?>
                <a href="<?php echo get_bloginfo('wpurl'); ?>" class="black-80 dib dim f4 fw6 hover-black-80 link mr3 serif">
                    WaterSkiWorld.ru
                </a>
            <?php } ?>

            <button type="button" class="hamburger hamburger--spin" data-js="navbar-hamburger">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>

        <?php wp_nav_menu(array(
            'container' => '',
            'menu_class' => 'menu js-menu',
            'theme_location' => 'primary-menu'
        )); ?>
    </nav>
    <script src="<?php echo get_template_directory_uri() . '/js/navbar/navbar.js' ?>" async></script>
