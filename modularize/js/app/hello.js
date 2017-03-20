// 定义一个函数,在使用模块时,模块名指向该返回函数
// define(function() {
//     return function() {
//         console.log("hello world!!");
//     }
// });

// 定义一个对象,该对象有sayHello方法,模块代表该对象
define({
    sayHello: function() {
        console.log("hello world!!!");
    }
})