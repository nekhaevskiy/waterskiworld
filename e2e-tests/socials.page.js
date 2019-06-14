class Socials {
    get block() {
        return $('[data-qa="socialsBlock"]');
    }
    get twitterLink() {
        return $('[data-qa="socialsTwitter"]');
    }
    get facebookLink() {
        return $('[data-qa="socialsFacebook"]');
    }
    get vkLink() {
        return $('[data-qa="socialsVK"]');
    }
    get youtubeLink() {
        return $('[data-qa="socialsYouTube"]');
    }
    get rssLink() {
        return $('[data-qa="socialsRSS"]');
    }
}

module.exports = new Socials();
