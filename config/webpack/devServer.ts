import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types";

export const devServer = (options: BuildOptions):DevServerConfiguration => {
    return {
        port: options.port ?? 5000,
        open: true,
        hot: true, // функционал который позволяет обновлять код, без перезагрузки страницы
        // Если раздавать статику через nginx, то надо сделать проксирование на index.html, так как тут только для дев режима
        historyApiFallback: true,
    }
}