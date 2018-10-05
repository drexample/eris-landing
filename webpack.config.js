var HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [{
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: true
                    }
                }]
            },
            {
                test: /\.css$/,
                // use: [MiniCssExtractPlugin.loader, "css-loader"] // Default CSS Loader
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.(png|svg|jp(e*)g|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: 'assets/[hash]-[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        // Home
        new HtmlWebPackPlugin({
            title: 'Home',
            filename: 'index.html',
            template: 'src/templates/template.ejs'
        }),
        new HtmlWebPackPlugin({
            title: 'Bans',
            filename: 'bans.html',
            template: 'src/templates/template.ejs'
        }),
        new HtmlWebPackPlugin({
            title: 'Manifest',
            filename: 'manifest.html',
            template: 'src/templates/template.ejs'
        }),
        new HtmlWebPackPlugin({
            title: 'Monitor',
            filename: 'monitor.html',
            template: 'src/templates/template.ejs'
        }),

    ]
};
