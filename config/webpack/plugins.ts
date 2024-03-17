import webpack, {Configuration, DefinePlugin} from 'webpack'
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ReactRefreshWebpackPlugin  from '@pmmmwh/react-refresh-webpack-plugin'

import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types";

export const plugins = ({mode, paths, analyzer, platform}: BuildOptions): Configuration['plugins']  => {
    const isDev = mode === 'development'
    const isProd = mode === 'production'
    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ template: paths.html }),
        new DefinePlugin({ // подменяет глобальные переменные на значения которые задаем на этапе сборки
            __PLATFORM__: JSON.stringify(platform),
            __ENV__: JSON.stringify(mode),
        })
    ]

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin()), // в проде не юзать замедляет сборку
        plugins.push(new ReactRefreshWebpackPlugin())
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename:  "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }))
    }

    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin())
    }

    return plugins
}