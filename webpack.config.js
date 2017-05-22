const webpack = require('webpack');
const path = require('path');
const packageConfig = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const PostcssImport = require('postcss-import');
const PostcssNext = require('postcss-cssnext');
const PostcssFor = require('postcss-for');
const PostcssNested = require('postcss-nested');
const PostcssSimpleVars = require('postcss-simple-vars');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BASE_PATH = __dirname;
const SRC_PATH = path.join(BASE_PATH, 'client');
const DIST_PATH = path.join(BASE_PATH, 'dist');
const PUBLIC_PATH = '/';
const HTML_INDEX_FILENAME = 'index.html';
const IS_DEV = process.env.NODE_ENV !== 'production';

const postcssOptions = {
  plugins: () => [
    PostcssFor(),
    PostcssNested(),
    PostcssSimpleVars(),
    PostcssImport({
      path: path.join(SRC_PATH, 'styles'),
      addDependencyTo: webpack
    }),
    PostcssNext({
      browsers: ['last 2 versions', '> 5%'],
    }),
  ],
};

const htmlWebpackConfig = [HTML_INDEX_FILENAME, '404.html'].map(filename => (
  new HtmlWebpackPlugin({
    template: path.join(SRC_PATH, 'public/template.html'),
    filename,
    title: 'La Vendimia',
    hash: false,
    inject: 'body',
  })
));

const webpackConfig = {
  name: 'titorline-ui',
  target: 'web',
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      SRC_PATH
    ],
    vendor: Object.keys(packageConfig.dependencies),
  },
  output: {
    path: DIST_PATH,
    publicPath: PUBLIC_PATH,
    filename: '[name].[hash].js',
    chunkFilename: 'titorline-[name]-[chunkhash].js',
    sourceMapFilename: '[name].map.js',
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    alias: {
      styles: path.resolve(SRC_PATH, 'styles'),
      components: path.resolve(SRC_PATH, 'components'),
      containers: path.resolve(SRC_PATH, 'containers'),
    },
    extensions: ['.js', '.jsx', '.json', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        include: SRC_PATH,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[local]',
            },
          },
          {
            loader: 'postcss-loader',
            options: postcssOptions,
          },
        ],
      },
    ],
  },
  devtool: IS_DEV ? 'cheap-module-inline-source-map' : 'source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    ...htmlWebpackConfig,
  ]
};

if (IS_DEV) {
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin() /* eslint comma-dangle: 0 */
  );
  webpackConfig.devServer = {
    contentBase: SRC_PATH,
    historyApiFallback: {
      index: `${PUBLIC_PATH}${HTML_INDEX_FILENAME}`,
    },
    host: '0.0.0.0',
    hot: true,
    inline: true,
    port: process.env.PORT || 5321,
    publicPath: PUBLIC_PATH,
    stats: {
      cached: true,
      cachedAssets: true,
      chunks: true,
      chunkModules: false,
      colors: true,
      hash: false,
      reasons: true,
      timings: true,
      version: false,
    },
  };
} else {
  webpackConfig.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks(module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1/* || module.context.indexOf('src/markdown') !== -1)*/;
      },
    }),
    new CleanWebpackPlugin(DIST_PATH),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
      mangle: {
        screw_ie8: true,
      },
      sourceMap: false,
    })
  );

  webpackConfig.module.rules.forEach((rule) => {
    if (rule.test.test('.css')) {
      rule.use = ExtractTextPlugin.extract({ /* eslint no-param-reassign: 0 */
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[hash:base64:8]',
            },
          },
          {
            loader: 'postcss-loader',
            options: postcssOptions,
          },
        ],
      });
    }
  });
}

module.exports = webpackConfig;
