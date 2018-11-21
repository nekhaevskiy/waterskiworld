const socials = require('./socials.page');

describe('Socials', () => {
    beforeEach(() => {
        browser.url('/');
    });

    it('should exist', () => {
        const isBlockExist = socials.block.isExisting();
        expect(isBlockExist).to.be.true;
    });

    it('should have a link to Twitter', () => {
        const linkHref = socials.twitterLink.getAttribute('href');
        expect(linkHref).to.equal('https://twitter.com/waterskiworld');
    });

    it('should have a link to Facebook', () => {
        const linkHref = socials.facebookLink.getAttribute('href');
        expect(linkHref).to.equal('https://www.facebook.com/waterskiworld');
    });

    it('should have a link to VK', () => {
        const linkHref = socials.vkLink.getAttribute('href');
        expect(linkHref).to.equal('https://vk.com/waterskiworld');
    });

    it('should have a link to YouTube', () => {
        const linkHref = socials.youtubeLink.getAttribute('href');
        expect(linkHref).to.equal('https://www.youtube.com/user/waterskiworld2008');
    });

    it('should have a link to RSS-feed', () => {
        const linkHref = socials.rssLink.getAttribute('href');
        expect(linkHref).to.equal('http://feeds.feedburner.com/waterskiworld');
    });
});