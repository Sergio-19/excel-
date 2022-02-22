const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, './src'),
    target: 'web',
    entry: ["@babel/polyfill",'/index.js'],
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    resolve: {
        extensions: ['.js'],
        alias: {
          '@': path.resolve(__dirname, '/src'),
          '@core': path.resolve(__dirname, '/src/core')
        }
    },
    devServer: {
        hot: true,
        port: 8000,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            title: 'Hot Module Replacement'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({filename: '[name].[contenthash].css'})
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, 
                    "css-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    
                  "css-loader",
                  "sass-loader",
                ],
              },
              {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                  }
                }
              }
        ]
    }
}