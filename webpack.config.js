var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './js/main.js' 
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                plugins: [['@babel/plugin-proposal-decorators', {legacy: true}] ]
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    mode: 'development'
};