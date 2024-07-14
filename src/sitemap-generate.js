const sitemap = require('sitemap');
const hostname = 'https://goglobal.network';
const fs = require('fs');

const urls = [
    {url : '/', changefreq : 'daily', priority: 1},
    {url : '/en', changefreq : 'daily', priority: 1},
    {url : '/es', changefreq : 'daily', priority: 1},
    {url : '/kr', changefreq : 'daily', priority: 1},
    {url : '/ar', changefreq : 'daily', priority: 1},
    {url : '/blogs', changefreq : 'monthly', priority: 0.8},
    {url : '/blogs/young-generation-personal-and-professional-growth', changefreq : 'monthly', priority: 0.8},
    {url : '/blogs/bridge-the-communication-gap-tips-for-young-leaders-managing-an-older-workforce', changefreq : 'monthly', priority: 0.8},
    {url : "/blogs/earn-commissions-gowin's-affiliate-program", changefreq : 'monthly', priority: 0.8},
    {url : "/blogs/guide-online-business-education-to-business", changefreq : 'monthly', priority: 0.8},
    {url : "/blogs/marketing-success-strategies-leaders", changefreq : 'monthly', priority: 0.8},      

]

const sitemapInstance = sitemap.createSitemap({
    hostname,
    urls,
});


fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());