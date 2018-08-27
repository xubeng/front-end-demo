var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    entry: {
      app: './src/oop.js',
      // print: './src/promise.js'
    },
    output: {
      filename: './release/bundle.js',
      path: __dirname
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Development',
        template:'opp.html'//打包后的js文件注入到这个文件的head标签
      })
    ],
    devServer:{
      contentBase: './release',
      compress: true,
       port: 9000,
       open:true   
    },
    module:{
      rules:[{
        test:/\.js?$/,
        exclude:/(node_modules)/,
        loader:'babel-loader'
      }]
    }
  };