const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: {
        main: './src/main.ts',
    },
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
                test: /\.css$/,
                // no include since we want to handle bootstrap css in node_modules too
                use:
                    // both style-loader and css-loader are needed to parse style tags in vue-loader
                    // sass-loader needed for bootstrap, needs node-ass as well
                    ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                // Custom common chunk
                bundle: {
                    name: 'commons',
                    chunks: 'all',
                    minChunks: 3,
                    reuseExistingChunk: false,
                },
                // Merge all the CSS into one file
                styles: {
                    name: 'styles',
                    test: /\.s?css$/,
                    chunks: 'all',
                    minChunks: 1,
                    reuseExistingChunk: true,
                    enforce: true,
                },
                // Customer vendor
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    priority: -10
                },
            },
        },
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