"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _reactRouterSitemap = _interopRequireDefault(require("react-router-sitemap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sitemap = new _reactRouterSitemap.default(_react.default.createElement(_reactRouter.Route, {
  path: "/"
})).build('https://neverfapdeluxe.com').save("./build/sitemap.xml");

// console.log(sitemap);

// // require('babel-register');
// require("babel-register")({
//   presets: ["es2015", "react"]
// });

// const router = require('./src/app/modules/main').default;
// const Sitemap = require('../').default;

// function generateSitemap() {
//   return (
//     new Sitemap(router)
//         .build("https://neverfapdeluxe.com")
//         .save("./build/sitemap.xml")
//   );
// }

// generateSitemap();

