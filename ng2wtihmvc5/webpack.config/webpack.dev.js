var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');


module.exports = {
    entry: {
        'polyfills': './ng2src/polyfills.ts',
        'vendor': './ng2src/vendor.ts',
        'app': './ng2src/main.ts'
    },

    output: {
        path: helpers.root('dist'),
        filename: '[name].js',
    },
    resolve: {

        /*
         * An array of extensions that should be used to resolve modules.
         *
         * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
         */
        extensions: ['', '.ts', '.js', '.json'],

        // Make sure root is src
        root: helpers.root('ng2src'),

        // remove other default values
        modulesDirectories: ['node_modules'],

    },
    module: {
        loaders: [
          {
              test: /\.ts$/,
              loaders: ['awesome-typescript-loader'],
              exclude: [/\.(spec|e2e)\.ts$/]
          },
          {
              test: /\.html$/,
              loader: 'html'
          },
          {
              test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
              loader: 'file?name=assets/[name].[hash].[ext]'
          },
          {
              test: /\.css$/,
              exclude: helpers.root('src', 'app'),
              loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
          },
          {
              test: /\.css$/,
              include: helpers.root('src', 'app'),
              loader: 'raw'
          }
        ]
    },

    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
          name: ['app', 'vendor', 'polyfills']
      })
    ]
}