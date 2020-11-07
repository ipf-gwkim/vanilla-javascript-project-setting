const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // .js 확장자로 끝나는 파일만 babel-loader를 사용한다.
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        // 먼저 css-loader가 css를 가져온다.
        // 다음으로 style-loader가 html head에 style 태그를 넣어준다.
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};