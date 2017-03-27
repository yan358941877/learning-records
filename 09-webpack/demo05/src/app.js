import layer from './components/layer/layer.js';
// 在入口js文件中,对css文件进行引用:因为在webpack.config.js中定义的生成的html文件会将入口
// js文件即 app.js文件打包进去,因此也会把app.js中import的css资源打包到生成的html页面中
import './css/common.css';
const App = function() {
    console.log(layer);
}

new App();