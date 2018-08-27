const VueLoaderPlugin = require("vue-loader/lib/plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader",
            }, {
                test: /\.css$/,
                use: ["vue-style-loader", "style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".vue", ".js", ".ts"]
    },
    plugins: [
        //webpack 热加载插件 我们修改文件页面会自动刷新
        new webpack.HotModuleReplacementPlugin(),
        //VueLoader的插件
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            filename: "index.html",
            hash: true,
            inject: 'body',
            minify: true,
            showErrors: true,
            template: "index.html",
            title: "Vue webpack Demo"
        })
    ],
    devServer: {
        port: 3001,
        hot: true,
    }

}
