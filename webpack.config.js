    const HtmlWebPackPlugin = require("html-webpack-plugin");
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");

    module.exports = {
        parser: 'sugarss',
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
                        'postcss-loader'
                    ]
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: ['file-loader']
                }
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "./index.html"
            }),
            //new MiniCssExtractPlugin({
            //    filename: "[name].css",
            //    chunkFilename: "[id].css"
            //})
            {
                'postcss-import': {},
                'postcss-preset-env': {},
                'cssnano': {}
            }
        ]
    };
