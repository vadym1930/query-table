const path              = require('path');
const ExtractTextPLugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const debug = process.env.MODE !== 'production';

console.log(debug);

module.exports = {
    entry: './src/scripts/app.js',
    devtool: debug ? 'inline-source-map' : null,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 4000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['stage-0', 'es2015']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPLugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'autoprefixer-loader', 'sass-loader'],
                    publicPath: '/dist'
                })
            }
        ]

    },
    plugins: [
        new ExtractTextPLugin({
            filename: 'bundle.css',
            allChunks: true,
            disable: false
        }),
        new HtmlWebpackPlugin({
            template: './src/views/index.html',
            hash: true,
            minify: {
                collapseWhitespace: true
            }
        })
    ]
}