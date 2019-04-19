<article class="b--black-10 bb">
    <a class="black-70 db dim hover-black-70 no-underline pv4" href="<?php the_permalink(); ?>">
        <h2 class="f3 fw5 lh-solid mb2 mt0 serif"><?php the_title(); ?></h2>
    
        <?php if (has_post_thumbnail()) { ?>
            <div class="flex flex-row">
                <div class="db-ns dn pr2-ns w-100 w-30-ns">
                    <?php the_post_thumbnail('excerpt-thumbnail', array('class' => 'br2 db h-auto')); ?>
                </div>
                <div class="f6 f5-l lh-copy nested pl2-ns sans-serif w-100 w-70-ns">
                    <?php the_excerpt(); ?>
                    
                    <p class="f6 lh-copy mb0 mt2">
                        <?php the_date(); ?>
                    </p>
                </div>
            </div>
        <?php } else { ?>
            <div class="f6 f5-l lh-copy">
                <?php the_excerpt(); ?>
            </div>
            <div class="f6 lh-copy mv0">
                <?php the_date(); ?>
            </div>
        <?php } ?>
    </a>
</article>
