const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [ //配置插件的节点
        // 自动在内存中根据指定页面生成一个内存的页面
        // 自动将打包好的bundle.js文件追加到页面中去
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: { //配置所有第三方模块加载器
        rules: [ //所有第三方模块的匹配规则
            {
                test: /\.css$/,
                // 加载顺序，从右向左
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.scss$/,
                // 加载顺序，从右向左
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                use: 'url-loader?limit=9999&[hash=10]-name=[name].[ext]'
            }, {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: 'url-loader'
            }, {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: {
            // "vue$": "vue/dist/vue.js"
        }
    },
    // 解决跨域问题
    devServer: {
        proxy: {
            '/api': {
                target: 'http://api.zhuishushenqi.com/',
                pathRewrite: {
                    // 这个参数的目的是给代理命名后， 在访问时把命名删除掉。
                    '^/api': ''
                },
                changeOrigin: true, // target是域名的话，需要这个参数，
                secure: false, // 设置支持https协议的代理
            },
        }
    },
    mode: 'development'
}