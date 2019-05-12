const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
    entry: './src/main.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            { test: /\.vue$/, include: /src/, loader : 'vue-loader' },
            // both style-loader and css-loader are needed to parse style tags in vue-loader
            { test: /\.css$/, include: /src/, use: [ 'style-loader', 'css-loader'] },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Awesome Vue App',
            template: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};