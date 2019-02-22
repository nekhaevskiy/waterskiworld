class Article {
    get heading() {
        return $('.article__title');
    }
    get meta() {
        return $('.article__meta');
    }
    get metaRegExp() {
        return /^\d{2}.\d{2}.\d{4}, автор: [a-zа-я\s]+$/gi;
    }
    get authorLink() {
        return $('.article__meta a');
    }
    get image() {
        return $('figure.wp-caption.aligncenter > img.size-full');
    }
    get imageCaption() {
        return $('figure.wp-caption.aligncenter > figcaption.wp-caption-text');
    }
    get paragraphs() {
        return $$('.article p:not(.article__meta)');
    }
    get comments() {
        return $('#hypercomments_widget');
    }
    get prevArticleLink() {
        return $('.pager .next a');
    }
    get nextArticleLink() {
        return $('.pager .previous a');
    }
}

module.exports = new Article();