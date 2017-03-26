var webpack = require('webpack')
var path = require('path');
// 建立对插件的引用
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // entry 是webpack打包的入口指示,告诉webpack哪些文件需要打包
    // 有三种指定entry的方式
    // 1. 打包一个文件  (1 to 1)
    // entry: "./src/script/main.js",
    //2. 打包多个文件到一起 (n to 1)
    //entry: ["./src/script/main.js", "./src/script/a.js"],
    //3. 打包多个文件到不同的输出文件 (n to n),适用于多页面应用
    /*
    entry: {
        // chunk name: entry, entry遵循上面的规则,可以是个字符串也可以是一个字符串数组
        index: ['./src/script/main.js', './src/script/a.js'] 
    },
    output: {
        // 在webpack2中,输出路径必须使用绝对路径
        path: '/home/xin/桌面/learning-records/09-webpack/demo04/dist/js',
        // 
        filename: 'bundle.js'
    }*/
    // 如果给entry传入一个对象(有多个键值对),则output应该也有多个输出文件与其对应,这时应该使用[name][chunk][chunkhash]
    entry: {
        main: "./src/script/main.js",
        a: "./src/script/a.js",
        b: "./src/script/b.js",
        c: "./src/script/c.js"
    },
    output: {
        // 在webpack2中,输出路径必须使用绝对路径
        path: '/home/xin/桌面/learning-records/09-webpack/demo04/dist',
        // 
        filename: 'js/[name]-[chunkhash].js',
        publicPath: 'http://cdn.com/'
    },
    // entry: './src/script/main.js',
    // output: {
    //     path: path.resolve(__dirname, './dist/js'),
    //     filename: 'bundle.js'
    // }

    // 使用插件 html-webpack-plugin

    /*plugins: [
        // 将会在output路径中生成index.html,并对生成的两个js文件进行引用 但是生成的index.html和根目录下的index.html没有关系
        new htmlWebpackPlugin([

        ])
    ]*/

    // 使用根目录下的index.html作为模板,生成output路径中的index.html
    // 注意:plugins是一个数组,可以生成多个插件用来处理多个文件(构建多个html页面)
    plugins: [
        // new htmlWebpackPlugin({
        //     // 可以指定生成html文件的名称,默认为index.html
        //     filename: 'index.html', // 使用这种命名方式,当相关文件内容发生变化时,[hash]值会发生变化,因此新生成的文件不会覆盖旧文件
        //     // 这里的路径指的是根目录下的index.html,但是生成的index.html是在output指定的path路径下
        //     template: 'index.html',
        //     // 指定脚本位置 可选值: head body
        //     inject: false,
        //     // 在这里传入参数,在模板中进行引用,动态操控生成文件的内容
        //     title: 'webpack is good', // 传入title参数
        //     date: new Date(),
        //     // 使用minify 对文件进行压缩
        //     minify: {
        //         removeComments: true, // 删除注释
        //         collapseWhitespace: true, // 删除空格
        //     }
        // })
        // // 
        // ,
        new htmlWebpackPlugin({
            filename: 'a.html', // 使用这种命名方式,当相关文件内容发生变化时,[hash]值会发生变化,因此新生成的文件不会覆盖旧文件
            // 这里的路径指的是根目录下的index.html,但是生成的index.html是在output指定的path路径下
            template: 'index.html',
            // 指定脚本位置 可选值: head body
            inject: "body",
            // 在这里传入参数,在模板中进行引用,动态操控生成文件的内容
            title: 'this is a', // 传入title参数
            // 使用chunks参数来指定生成的页面包含哪些js文件
            chunks: ['main', 'a'],
        }),
        new htmlWebpackPlugin({
            filename: 'b.html', // 使用这种命名方式,当相关文件内容发生变化时,[hash]值会发生变化,因此新生成的文件不会覆盖旧文件
            // 这里的路径指的是根目录下的index.html,但是生成的index.html是在output指定的path路径下
            template: 'index.html',
            // 指定脚本位置 可选值: head body
            inject: "body",
            // 在这里传入参数,在模板中进行引用,动态操控生成文件的内容
            title: 'this is b', // 传入title参数
            chunks: ['b'],
        }),
        new htmlWebpackPlugin({
            filename: 'c.html', // 使用这种命名方式,当相关文件内容发生变化时,[hash]值会发生变化,因此新生成的文件不会覆盖旧文件
            // 这里的路径指的是根目录下的index.html,但是生成的index.html是在output指定的path路径下
            template: 'index.html',
            // 指定脚本位置 可选值: head body
            inject: "body",
            // 在这里传入参数,在模板中进行引用,动态操控生成文件的内容
            title: 'this is c', // 传入title参数   
            chunks: ["c"],
            //excludeChunks 用来排除相关entry
        })
    ]

}