const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: ["react-hot-loader/patch","./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"] ,
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@styles": path.resolve(__dirname, "src/assets/styles"),
      "@fonts": path.resolve(__dirname, "src/assets/fonts"),
      "@img": path.resolve(__dirname, "src/assets/images"),
      'react-dom': '@hot-loader/react-dom'
    },
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.s?[ac]ss/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // {
      //   test: /\.(png|svg|jpe?g|gif|webp)/,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: 'assets/images/[name].[contenthash][ext]'
      //   }
      // },
      // {
      //   test: /\.(woff2?)$/,
      //   generator: {
      //     filename: 'assets/fonts/[name].[contenthash][ext]',  // Directorio de salida
      //   }
      // }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public",'index.html'),
      filename: "index.html",
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    watchFiles: {
      paths: ['./src/', './src/*.js' ,'./src/*.jsx' ,'./src/**/*.js','./src/**/*.jsx','./src/**/**/*.js','./src/**/**/*.jsx'],
      options: {
        usePolling: false,
        ignored: ['./node_modules/'],
      },
    },
    // static: [path.join(__dirname, 'public'), path.join(__dirname, 'src'), path.join(__dirname, 'dist')],
    // static:  "./dist",
    // contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'src')],
    hot: true,
    // watchContentBase: true,
    // client: false,
    compress: true,
    port: 3001,
    open: true,
    liveReload: true,
    client: {
      logging: 'info',
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  target: 'web', 
};
