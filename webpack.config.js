const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
    entry: './src/main.ts',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        // resolve .ts and .js automatically
        extensions: ['.js', '.ts'],
        alias: {
            // Use the ESM module version for packagers
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/, include: /src/,
                loader: 'vue-loader',
                options: {
                    loaders:
                        // how to parse script tags
                        { js: 'ts-loader' }
                }
            },
            {
                test: /\.ts$/, include: /src/, use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            // Needed for single-file-component .vue
                            appendTsSuffixTo: [/\.vue$/]
                        }
                    }
                ]
            },
            {
                test: /\.css$/, include: /src/,
                use:
                    // both style-loader and css-loader are needed to parse style tags in vue-loader
                    ['style-loader', 'css-loader']
            },
        ]
    },
    plugins: [
        // Generates the index.html in the output directory
        new HtmlWebpackPlugin({
            title: 'Awesome Vue App',
            template: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    // for webpack-dev-server
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};