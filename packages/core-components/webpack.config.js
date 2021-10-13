const path = require("path");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
    globalObject: "this",
    libraryTarget: "umd",
    library: "@project/core-components",
  },
  devtool: isDev ? "inline-source-map" : false,
  resolve: {
    // alias: {
    //   react: path.resolve('node_modules/react'),
    // },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      // {
      //   test: /\.(s[ac]ss|css)$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     {
      //       loader: "css-loader",
      //       options: { sourceMap: isDev ? true : false },
      //     },
      //     {
      //       loader: "sass-loader",
      //       options: { sourceMap: isDev ? true : false },
      //     },
      //   ],
      // },
      // {
      //   test: /\.(eot|ttf|woff|woff2)$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: isDev ? "[path][name].[ext]" : "static/fonts/[name].[ext]",
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: isDev
      //           ? "[path][name].[ext]"
      //           : "static/media/[name].[contenthash:6].[ext]",
      //       },
      //     },
      //   ],
      // },
    ],
  },
};
