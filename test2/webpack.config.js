const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js",
    },
    resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    extensions: [".js", ".jsx"],
    },
    externals: {
        fs: 'empty',
    },
    mode: 'development',
    module: {
        rules: [
            {
                include: [path.join(__dirname)],
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react'],
                },
            },
            {
                test: /\.(wasm)$/,
                loader: 'file-loader',
                type: 'javascript/auto',
            },
        ],
    },
    resolve: {
        alias: {
            path: "path-browserify",
        },
        fallback: {
            child_process: false,
            fs: false,
            crypto: false,
            net: false,
            tls: false
          }
    },
    plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src/index.html') })],
};