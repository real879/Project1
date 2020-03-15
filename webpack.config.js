const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry : "./src/index.tsx",
    output : {
        path : path.resolve(__dirname, 'build'),
        filename : "bundle.js"
    },
    devServer: {
        historyApiFallback: true
    },
    resolve : {
        extensions : [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    module : {
        rules : [
            {
                test : /\.tsx?$/,
                loader : 'awesome-typescript-loader'
            },
            {
                enforce : 'pre',
                test : /\.js$/,
                loader : 'source-map-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000'
            },
        ]
    },
    plugins : [
        new HTMLWebpackPlugin({
            template : 'src/index.html'
        })
    ],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    devtool : 'source-map'
}
