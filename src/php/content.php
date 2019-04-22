<article class="b--black-10 bb" data-qa="articleBlock">
    <a class="black-70 db dim hover-black-70 no-underline pv4" href="<?php the_permalink(); ?>" data-qa="articleLink">
        <h2 class="f3 fw5 lh-solid mb2 mt0 serif" data-qa="articleHeading"><?php the_title(); ?></h2>
    
        <?php if (has_post_thumbnail()) { ?>
            <div class="flex flex-row">
                <div class="db-ns dn mt1 pr2-ns w-100 w-30-ns" data-qa="articleImageWrapper">
                    <?php the_post_thumbnail('excerpt-thumbnail', array('class' => 'br2 db h-auto')); ?>
                </div>
                <div class="pl2-ns w-100 w-70-ns">
                    <div class="f6 f5-l lh-copy nested sans-serif" data-qa="articleSummary">
                        <?php the_excerpt(); ?>
                    </div>
                    
                    <div class="f6 lh-copy mt2" data-qa="articleDate">
                        <?php the_date(); ?>
                    </div>
                </div>
            </div>
        <?php } else { ?>
            <div class="f6 f5-l lh-copy nested sans-serif" data-qa="articleSummary">
                <?php the_excerpt(); ?>
            </div>
            <div class="f6 lh-copy mt2" data-qa="articleDate">
                <?php the_date(); ?>
            </div>
        <?php } ?>
    </a>
</article>
