const path = require('path')
module.exports = {
  entry:'./src/index.js',
  output:{
    path:path.resolve(__dirname,'./build'),
    filename:'bundle.js'
  },
  module:{
    rules:[
      {
        test: /.css$/gi,
        use:['style-loader','css-loader','postcss-loader']
      },
      {
        test: /.less$/gi,
        use:[
          'style-loader',
          'css-loader',
          "less-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  "autoprefixer"
                ]
              }
            }
          }
        ]
      }
    ]
  }
}