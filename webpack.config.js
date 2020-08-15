const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_env, argv) => {
  return {
    entry: './src/index.tsx',
    devtool: argv.mode === 'production' ? false : 'source-map',
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
      alias: {
        '@src': path.resolve(__dirname, 'src/'),
      },
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${__dirname}/src/index.html`,
        filename: 'index.html',
      }),
      new CleanWebpackPlugin(),
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: argv.mode === 'production' ? '[chunkhash].js' : '[name].js',
    },
    devServer: {
      historyApiFallback: true,
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
  };
};
