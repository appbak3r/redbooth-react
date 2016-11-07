module.exports = [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    loaders: [ 'babel', 'eslint-loader' ]
  },
  {
    test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
    loaders: [
      'style?sourceMap',
      'css'
    ]
  },
  {
    test: /[\/\\]app[\/\\].*\.css$/,
    loaders: [
      'style?sourceMap',
      'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
    ]
  },
  {
    test: /\.sass$/,
    loaders: [
      "style?sourceMap",
      "css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]", "sass"
    ]
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: "file"
  },
  {
    test: /\.(woff|woff2)$/,
    loader: "url?prefix=font/&limit=50000"
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url?limit=100000&mimetype=application/octet-stream"
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url?limit=100000&mimetype=image/svg+xml"
  },
  {
    test: /\.gif/,
    loader: "url-loader?limit=100000&mimetype=image/gif"
  },
  {
    test: /\.jpg/,
    loader: "url-loader?limit=100000&mimetype=image/jpg"
  },
  {
    test: /\.png/,
    loader: "url-loader?limit=100000&mimetype=image/png"
  }
];
