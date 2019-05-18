// require('babel-register');
 
// const router = require('./src/app/modules/Routes').default;
// const Sitemap = require('react-router-sitemap');
// // const Sitemap = require('../').default;

// (
//   new Sitemap(router)
//       .build('https://neverfapdeluxe.com/')
//       .save('./sitemap.xml')
// );

// https://github.com/kuflash/react-router-sitemap/blob/HEAD/api.md

// import { sitemapBuilder as buildSitemap } from 'react-router-sitemap';
// const { sitemapBuilder } = require('react-router-sitemap');

// const paths = ['/', '/statistics', '/how-it-works', '/participate', '/about'];
// const hostname = 'https://league.neverfapdeluxe.com';
// const sitemap = sitemapBuilder(hostname, paths);

const sm = require('sitemap');
const fs = require('fs');
 
const sitemap = sm.createSitemap({
    hostname: 'https://neverfapdeluxe.com',
    cacheTime: 600000,
    urls: [
        { url: '/' , changefreq: 'weekly', priority: 0.8, lastmodrealtime: true },
        { url: '/statistics', changefreq: 'weekly', priority: 0.8, lastmodrealtime: true },
        { url: '/how-it-works', changefreq: 'weekly', priority: 0.8, lastmodrealtime: true }, 
        { url: '/participate', changefreq: 'weekly', priority: 0.8, lastmodrealtime: true },
        { url: '/about', changefreq: 'weekly', priority: 0.8, lastmodrealtime: true } 
    ]
});
 
fs.writeFileSync("build/sitemap.xml", sitemap.toString());
