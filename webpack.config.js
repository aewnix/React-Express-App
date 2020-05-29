const path = require("path");
const APP_DIR = path.resolve(__dirname, "./client");
const BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = {
    mode: "production",
    entry: {
        main: APP_DIR + "/index.js"
    },
    output: {
        filename: "bundle.js",
        path: BUILD_DIR
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {presets: ["@babel/react"]}
                    }],
            },
        ]
    }
};