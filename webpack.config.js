// Webpack 4

const path = require('path');
const webpack = require('webpack')
const autoprefixer = require('autoprefixer');
const WebpackMd5Hash = require('webpack-md5-hash');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// Входные параметры (cross-env)
const devMode = process.env.DEV_MODE;

module.exports = {
    mode: devMode !== "build" ? "development" : "production",
    entry: {
        bundle: './local/src/main.js'
    },
    output: {
        filename: 'js/[name].js',
        publicPath: "local/public/created",
        library: '[name]',
        path: path.resolve(__dirname, 'local/public/created')
    },
    watch: (devMode == "watch" || devMode == "watch-sync") ? true : false,
    devtool: devMode != "build" ? "inline-cheap-module-source-map" : false,
    resolve: {
        alias: {
            '@': path.resolve(__dirname, "local/src"),
            'jquery': path.resolve(__dirname, "local/public/created/vendor/jquery/dist/jquery")
        },
        modules: [
            path.resolve(__dirname, "local/public/created/vendor"), path.resolve(__dirname, "node_modules")
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false,
                uglifyOptions: {
                    comments: false,
                    warnings: false,
                    parse: {},
                    compress: {},
                    mangle: true,
                    output: null,
                    toplevel: false,
                    nameCache: null,
                    ie8: false,
                    keep_fnames: false,
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks: {
            chunks: 'all',
            name: 'chunks',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    module: {
        rules: [{
            test: /\.(eot|woff2|woff|ttf|otf)$/,
            use: {
                loader: "file-loader",
                options: {
                    name: devMode != "build" ? '/fonts/[path][name].[ext]' : '/fonts/[path][name]~[hash].[ext]'
                }
            }
        }, {
            test: /\.js$/,
            exclude: /(node_modules|local\/public\/created\/vendor\/js-module|vendor)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['env'],
                    // plugins: ['transform-runtime']
                }
            }]
        }, {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: devMode != "build"
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            autoprefixer({
                                browsers: ['ie >= 9', 'last 4 version']
                            })
                        ],
                        sourceMap: devMode != "build"
                    }
                },
                // {
                //     loader: 'group-css-media-queries-loader',
                //     options: {
                //         sourceMap: devMode != "build"
                //     }
                // },
                {
                    loader: "sass-loader",
                    options: {
                        sourceMap: devMode != "build"
                    }
                }
            ]
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: devMode != "build"
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            autoprefixer({
                                browsers: ['ie >= 9', 'last 4 version']
                            })
                        ],
                        sourceMap: devMode != "build"
                    }
                },
                // {
                //     loader: 'group-css-media-queries-loader',
                //     options: {
                //         sourceMap: devMode != "build"
                //     }
                // },
            ]
        }, {
            test: /\.(png|jpg|jpeg|svg|gif|webp)$/,
            use: [{
                loader: "file-loader",
                options: {
                    name: devMode != "build" ? '/img/bg/[path][name].[ext]' : '/img/bg/[name]~[hash].[ext]'
                }
            }, {
                loader: "image-webpack-loader",
                options: {
                    disable: devMode != "build"
                }
            }]
        }]
    },
    plugins: [
        new WebpackNotifierPlugin({
            title: 'Webpack',
            skipFirstNotification: true
        }),
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery'
        // }),
        new CopyPlugin([{
            from: path.resolve(__dirname, 'local/src/img/static/'),
            to: path.resolve(__dirname, 'local/public/created/img/static/'),
            force: true,
            flatten: false,
        }]),
        new webpack.DefinePlugin({
            'DEV_MODE': JSON.stringify(devMode),
        }),
        new CleanWebpackPlugin(['js', 'img', 'css', 'fonts'], {
            root: path.resolve(__dirname, 'local/public/created/')
        }),
        new MiniCssExtractPlugin({
            filename: '../../../[name].css'
            // chunkFilename: "css/[id].css",
        }),

        new WebpackMd5Hash(),
    ]
};



if (devMode == "watch-sync") {
    module.exports.plugins.push(new BrowserSyncPlugin({
        host: 'localhost',
        port: 9001,
		files: ["local/**/*.php"],
        notify: false,
    }, {
        injectCss: true,
    }));
}
