module.exports = {
  // ...other configurations
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,  // Disable source maps for CSS
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
};
