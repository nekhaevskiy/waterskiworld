class Socials {
    get block() {
        return $('.socials');
    }
    get twitterLink() {
        return $('.socials__item_twitter a');
    }
    get facebookLink() {
        return $('.socials__item_facebook a');
    }
    get vkLink() {
        return $('.socials__item_vk a');
    }
    get youtubeLink() {
        return $('.socials__item_youtube a');
    }
    get rssLink() {
        return $('.socials__item_rss a');
    }
}

module.exports = new Socials();