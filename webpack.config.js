const path = require('path');
var nodeExternals = require('webpack-node-externals');

const isProduction = typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV === 'production';
const devtool = isProduction ? false : 'inline-source-map';
const mode = isProduction ? 'production' : 'development';

const serverConfig = {
    entry: './src/server/server.ts',
    mode,
    devtool,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    configFile: 'tsconfig.server.json'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'node',
    node: {
        __dirname: false
    },
    externals: [nodeExternals()]
};

const clientConfig = {
    entry: './src/client/index.tsx',
    mode,
    devtool,

    module: {
      rules: [
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
                configFile: 'tsconfig.client.json',
                compilerOptions: {
                    "sourceMap": !isProduction,
                }
            }
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ]
        }
      ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', '.scss']
    },
    output: {
        filename: 'client.js',
        path: path.resolve(__dirname, 'dist', 'public')
    }
};

module.exports = [serverConfig, clientConfig];
