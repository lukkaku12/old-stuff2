const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { type } = require("os");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/",
  },
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@components": path.resolve(__dirname,'src/components'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
			'@pages': path.resolve(__dirname, 'src/pages/'),
			'@routes': path.resolve(__dirname, 'src/routes/'),
			'@styles': path.resolve(__dirname, 'src/styles/'),
			'@icons': path.resolve(__dirname, 'src/assets/icons/'),
			'@logos': path.resolve(__dirname, 'src/assets/logos/'), 
      '@hooks': path.resolve(__dirname, 'src/Hooks/'),
      '@context':path.resolve(__dirname, 'src/context/'),
      '@templates':path.resolve(__dirname, 'src/templates/')
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset',
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    historyApiFallback: true,
    port: 3060,
  },
};
