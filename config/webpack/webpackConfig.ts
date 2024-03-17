import webpack from 'webpack';
import { devServer } from "./devServer";
import { loaders } from "./loaders";
import { plugins } from "./plugins";
import { resolver } from "./resolver";
import { BuildOptions } from "./types";

export const webpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {mode, paths } = options
    const isDev = mode === 'development'

    const config: webpack.Configuration = {
        mode: mode ?? 'development',
        entry: paths.entry,
        output: {
            filename: '[name][contenthash].js',
            path: paths.output,
            clean: true
        },
        plugins: plugins(options),
        /*
            Webpack по умолчанию только про js знает нам необходимо указать как обрабатывать такие расширения концепция loader
            Порядок лоудеров важен
        */
        module: {
            rules: loaders(options)
        },
        resolve: resolver(options),
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? devServer(options) : undefined
    }
    return config

};