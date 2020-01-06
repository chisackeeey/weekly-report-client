/* eslint-disable */
require("dotenv").config();
const path = require("path");
const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  distDir: "../.next",
  //   publicRuntimeConfig: {
  //     accessToken: process.env.QIITA_ACCESS_TOKEN,
  //     basePath
  //   },
  //   exportPathMap() {
  //     return {
  //       "/": { page: "/" }
  //     };
  //   },
  assetPrefix: basePath,
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.join(__dirname, "src")
    };
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]"
        }
      }
    });
    return config;
  }
});
