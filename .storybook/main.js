const path = require("path");

const custom = require("../webpack.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: (config) => {
    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules },
      resolve: {
        ...custom.resolve,
        ...config.resolve,
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: "[name].[contenthash].css",
        }),
        ...config.plugins,
      ],
    };
  },
};
