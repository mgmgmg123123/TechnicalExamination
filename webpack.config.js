const path = require('path');
const MiniCssExtractPlugin = new require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = new require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = new require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: 'eval-source-map',
    entry: './src/javascripts/main.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'javascripts/[name]-[contenthash].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true },
                    }, {
                        loader: 'sass-loader',
                    },
                ]
            },
            {
                test: /\.(png|jpg|jpeg)/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name]-[contenthash][ext]',
                },
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65,
                            }
                        }
                    }
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './stylesheets/[name]-[contenthash].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: __dirname + '/src/images/*',
                    to: 'images/[name][ext]',
                    noErrorOnMissing: true
                },
            ],
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new ESLintPlugin({
            extensions: ['.ts', '.js'],
            exclude: 'node_modules'
        }),
    ], devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },

}
