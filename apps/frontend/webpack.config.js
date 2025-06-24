/* eslint-disable */

const ESLintPlugin = require('eslint-webpack-plugin');
const { join, resolve } = require("node:path");
const { NxAppWebpackPlugin } = require("@nx/webpack/app-plugin");

module.exports = {
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
      htmlAcceptHeaders: ["text/html", "application/xhtml+xml"],
      index: "./public/index.html",
    },
    port: 3000,
  },
  output: {
    path: join(__dirname, "../../dist/apps/frontend"),
  },
  plugins: [
    new NxAppWebpackPlugin({
      assets: ["./public/favicon.ico", "./src/assets"],
      baseHref: "/",
      compiler: "babel",
      index: "./public/index.html",
      main: "./src/index.tsx",
      optimization: process.env["NODE_ENV"] === "production",
      outputHashing: process.env["NODE_ENV"] === "production" ? "all" : "none",
      styles: ["./public/styles.css"],
      tsConfig: "./tsconfig.app.json",
    }),
    new ESLintPlugin({
      quiet: true,
      failOnError: true,
      outputReport: true,
      overrideConfigFile: join(__dirname, 'eslint.config.mjs'),
      configType: "flat",
      exclude: [
        `model`,
        `dist`,
        `node_modules`,
      ]
    }),
  ],
};
