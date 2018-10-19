var HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
let fs = require('fs');
const homePage = fs.readFileSync('./src/templates/home.ejs');
const bansPage = fs.readFileSync('./src/templates/bans.ejs');
const monitorPage = fs.readFileSync('./src/templates/monitor.ejs');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
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
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: './assets/[hash].[ext]'
                    }
                }]
            },
        ]
    },
    plugins: [
        // Home
        new HtmlWebPackPlugin({
            page: 'index',
            title: 'Home',
            hash: true,
            filename: 'index.html',
            template: 'src/templates/template.ejs',
            content: homePage,
            desc: "News and Updates for Eris Gamma."
        }),
        // Bans
        new HtmlWebPackPlugin({
            page: 'bans',
            title: 'Bans',
            hash: true,
            filename: 'bans.html',
            template: 'src/templates/template.ejs',
            content: bansPage,
            desc: "Up-to date list of recent bans, searchable by CKey."
        }),
        // Monitor
        new HtmlWebPackPlugin({
            page: 'monitor',
            title: 'Monitor',
            hash: true,
            filename: 'monitor.html',
            template: 'src/templates/template.ejs',
            content: monitorPage,
            desc: "Eris Gamma server status monitor."
        }),

    ]
};
