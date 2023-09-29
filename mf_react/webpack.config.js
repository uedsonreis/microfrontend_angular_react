const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const deps = require("./package.json").dependencies
const path = require("path")

console.log({
    react: { singleton: true, requiredVersion: deps.react },
    'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
})

module.exports = {
    mode: "development",
    resolve: {
        extensions: [".css", ".js", ".jsx", ".ts", ".tsx"],
    },
    devServer: {
        port: 3000,
        headers: { 'Access-Control-Allow-Origin': '*' },
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [ "style-loader", "css-loader"],
            },
            {
                test: /\.(js|ts)x?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-typescript']
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
        }),
        new ModuleFederationPlugin({
            name: "reactMf",
            filename: "remoteEntry.js",
            exposes: {
                "./App": "./src/App",
                "./Label": "./src/components/Label",
            },
            shared: {
                react: { singleton: true, requiredVersion: deps.react },
                'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
            },
        }),
    ],
}