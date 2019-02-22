<article class="article">
  <a class="article__link" href="<?php the_permalink(); ?>">
    <h2 class="article__title"><?php the_title(); ?></h2>
  </a>
  <p class="article__meta"><?php the_date(); ?>, автор:
    <?php the_author_posts_link() ?>
  </p>
  <?php if ( has_post_thumbnail() ) { ?>
    <div class="row">
      <div class="col-sm-4">
        <?php the_post_thumbnail('excerpt-thumbnail', array ('class' => 'article__thumb')); ?>
      </div>
      <div class="col-sm-8">
        <div class="article__summary">
          <?php the_excerpt(); ?>
        </div>
        <div class="text-center">
          <a class="btn btn-default" href="<?php the_permalink(); ?>" role="button">
            Читать далее <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  <?php } else { ?>
    <div class="article__summary">
      <?php the_excerpt(); ?>
    </div>
    <div class="text-center">
      <a class="btn btn-default" href="<?php the_permalink(); ?>" role="button">
        Читать далее <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  <?php } ?>
</article>