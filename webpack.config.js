const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // Regla para archivos SCSS
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,  // Extrae el CSS a un archivo
          'css-loader',  // Permite importar CSS en JS
          {
            loader: 'sass-loader', // Compila Sass a CSS
            options: {
              implementation: require('sass'), // Usa Dart Sass en lugar de node-sass
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/main.css',  // El archivo CSS resultante
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
  },
  devtool: 'source-map',
};