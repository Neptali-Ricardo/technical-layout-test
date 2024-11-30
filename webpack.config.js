const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // Regla para archivos CSS
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],  // Cargar CSS
      },
      // Regla para archivos SCSS
      {
        test: /\.scss$/,
        use: [
          'style-loader', // Inyecta el CSS al HTML
          'css-loader',   // Permite importar CSS en JS
          'sass-loader',  // Compila Sass a CSS
        ],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
  },
  devtool: 'source-map',
};
