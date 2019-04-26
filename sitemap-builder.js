require('babel-register');
 
const router = require('./src/app/modules/main').default;
const Sitemap = require('../').default;

(
  new Sitemap(router)
      .build('https://neverfapdeluxe.com/')
      .save('./build/sitemap.xml')
);
