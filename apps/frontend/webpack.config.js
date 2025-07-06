/* eslint-disable */

const { NxAppWebpackPlugin } = require("@nx/webpack/app-plugin");
const { NxReactWebpackPlugin } = require("@nx/react/webpack-plugin");
const { join, resolve } = require("path");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "@/ui-shared": resolve(__dirname, "../../libs/ui-shared/src"),
      "@": resolve(__dirname, "src"),
    },
  },

  output: {
    path: join(__dirname, "../../dist/apps/frontend"),
  },

  devServer: {
    port: 3000,
    historyApiFallback: {
      index: "/index.html",
      htmlAcceptHeaders: ["text/html", "application/xhtml+xml"],
    },
  },

  plugins: [
    new NxAppWebpackPlugin({
      tsConfig: "./tsconfig.app.json",
      compiler: "babel",
      main: "./src/index.tsx",
      index: "./public/index.html",
      baseHref: "/",
      assets: ["./public/favicon.ico", "./src/assets"],
      styles: ["./public/styles.css"],
      outputHashing: process.env["NODE_ENV"] === "production" ? "all" : "none",
      optimization: process.env["NODE_ENV"] === "production",
    }),
    new NxReactWebpackPlugin({
      // svgr: false,
    }),
  ],
};
