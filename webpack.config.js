var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Awesome Vue App',
            template: 'index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};