const path = require('path');
const outputDirectory = 'public';
const isProduction =
  typeof process.env.NODE_ENV !== 'undefined' &&
  process.env.NODE_ENV === 'production';
const devtool = isProduction ? false : 'inline-source-map';
const mode = isProduction ? 'production' : 'development';

module.exports = {
  entry: './src/client/index.tsx',
  mode,
  devtool,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'src/client/tsconfig.json',
          compilerOptions: {
            sourceMap: !isProduction,
          },
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css', '.scss'],
  },
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, outputDirectory),
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: [{
      context: ['/', '/api'],
      target: 'http://localhost:8080',
    }]
  },
  plugins: [],
  watchOptions: {
    ignored: ['public/**', 'node_modules/**'],
  }
};
