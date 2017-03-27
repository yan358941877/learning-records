var webpack = require('webpack')
var path = require('path');
// 建立对插件的引用
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/app.js',
    output: {
        // 在webpack2中,输出路径必须使用绝对路径
        path: './dist',
        // 
        filename: 'js/[name].bundle.js'
    },
    module: {
        // 将es6语法转换成为浏览器可以解析的语法
        loaders: [{
                test: /\.js$/,
                // babel语法转换会特别耗时,可以指定排除范围
                loader: 'babel-loader',
                // exclude必须使用绝对路径才会有效,但是速度还是比不是使用include
                // path.resolve()是nodejs中的方法,__dirname是运行时的路径, ./node_modules是相对路径,
                // path.resolve()可以解析得到绝对路径
                exclude: path.resolve(__dirname, './node_modules'),
                //include: './src',
                // 告诉编译器,需要转换哪些特性,指定为lastest(需要安装babel-preset-lastest)意味着对于最新的特性要进行转换
                query: {
                    presets: ['latest']
                }
            },
            {
                test: /\.css$/,
                // 处理顺序是从右往左:先经过css-loader处理,然后再经过style-loader处理
                // css-loader的作用是读取css资源,style-loader的作用是创建style标签,并插入到dom中
                // 生成的html文件中并不会有style标签,而是当浏览器载入网页,运行js后,才会动态生成style标签和相关样式
                //loader: 'style-loader!css-loader'
                loader: 'style-loader!css-loader!postcss-loader'
            }
        ]
    },
    postcss: function() {
        return [
            // 定义了postcss需要使用的插件
            require('autoprefixer')({
                // 向插件传入参数,broswers表示了需要对哪些浏览器进行兼容
                browsers: ['last 5 versions']
            })
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html', // 使用这种命名方式,当相关文件内容发生变化时,[hash]值会发生变化,因此新生成的文件不会覆盖旧文件
            // 这里的路径指的是根目录下的index.html,但是生成的index.html是在output指定的path路径下
            template: 'index.html',
            // 指定脚本位置 可选值: head body
            inject: "body"
        })
    ]

}