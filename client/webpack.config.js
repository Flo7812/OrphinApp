const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'web/index.web.js'),
    output: {
        filename: 'bundle.web.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
        'react-native$': 'react-native-web',
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: path.join(__dirname, 'web/index.html'),
        }),
    ],
    devServer: {
        port: 7828,
    }
};