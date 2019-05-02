const socials = require('./socials.page');

describe('socials.js - Socials', function () {
    beforeEach(function () {
        browser.url('/');
    });

    it('should exist and have height > 0', function () {
        const isBlockExist = socials.block.isExisting();
        expect(isBlockExist).to.be.true;

        const height = socials.block.getElementSize('height');
        expect(height).to.be.above(0);
    });

    it('should have a link to Twitter', function () {
        const linkHref = socials.twitterLink.getAttribute('href');
        expect(linkHref).to.equal('https://twitter.com/waterskiworld');
    });

    it('should have a link to Facebook', function () {
        const linkHref = socials.facebookLink.getAttribute('href');
        expect(linkHref).to.equal('https://www.facebook.com/waterskiworld');
    });

    it('should have a link to VK', function () {
        const linkHref = socials.vkLink.getAttribute('href');
        expect(linkHref).to.equal('https://vk.com/waterskiworld');
    });

    it('should have a link to YouTube', function () {
        const linkHref = socials.youtubeLink.getAttribute('href');
        expect(linkHref).to.equal('https://www.youtube.com/user/waterskiworld2008');
    });

    it('should have a link to RSS-feed', function () {
        const linkHref = socials.rssLink.getAttribute('href');
        expect(linkHref).to.equal('http://feeds.feedburner.com/waterskiworld');
    });
});
