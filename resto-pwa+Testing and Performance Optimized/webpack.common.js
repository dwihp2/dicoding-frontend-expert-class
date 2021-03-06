const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { InjectManifest } = require("workbox-webpack-plugin");
const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;
const imageminPngquant = require("imagemin-pngquant");
const ImageminMozjpeg = require("imagemin-mozjpeg");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/scripts/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/templates/index.html"),
      filename: "index.html",
      favicon: path.resolve(__dirname, "src/public/favicon.png"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/public/"),
          to: path.resolve(__dirname, "dist/"),
          globOptions: {
            ignore: ["**/images/**"], // ignore folder images
          },
        },
      ],
    }),
    new InjectManifest({
      swSrc: path.resolve(__dirname, "src/scripts/sw.js"),
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
        imageminPngquant({
          quality: [0.3, 0.5],
        }),
      ],
    }),
  ],
};
