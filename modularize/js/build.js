// ({
//     // baseUrl设置的是app.js所在目录  '.'代表当前目录 即 build.js所在目录,
//     baseUrl: "./app",
//     path: {},
//     // name指明了从哪个js文件开始解析:即 ./app/app.js
//     name: "app",
//     // 输出目录 会和build.js放在一起
//     out: "index.merge.min.js"
// })
({
    baseUrl: ".",
    path: {

    },
    // name指明了从哪个js文件开始解析
    name: "app",
    // 输出目录
    out: "index.merge.min.js"
})