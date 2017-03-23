// requirejs.config({
//     // 指明了app.js所在目录, .代表了index.html的目录
//     baseUrl: './js/app',
//     paths: {
//         // 以baseUrl目录为基础,其他目录的具体路径
//     }
// });
// requirejs(['../lib/jquery', 'Carousel', 'GoTop', 'LoadOnDemand'], function($, Carousel, GoTop, LoadOnDemand) {

//     var carousel = new Carousel($('.carousel-window'));
//     carousel.init();
//     var gotop = new GoTop();
//     var loadImg = new LoadOnDemand($('#character .container'));
// })
requirejs.config({
    baseUrl: './js',
    paths: {
        lib: './lib', // 这里的.是以baseUrl为基准的
        app: './app',
        jquery: './lib/jquery'
    }
});

requirejs(['jquery', 'app/Carousel', 'app/GoTop', 'app/LoadOnDemand'], function($, Carousel, GoTop, LoadOnDemand) {

    var carousel = new Carousel($('.carousel-window'));
    carousel.init();
    var gotop = new GoTop();
    var loadImg = new LoadOnDemand($('#character .container'));
});

// requirejs(['jquery', 'app/Carousel', 'app/GoTop', 'app/LoadOnDemand'], function($) {


// });

// require(['app/hello'], function(hello) {
//     hello();
// });

// requirejs(['app/hello'], function(hello) {
//     hello.sayHello();
// });

// requirejs(['app/baseinfo'], function(baseinfo) {
//     console.log(baseinfo);
// })

// requirejs(['jquery'], function($) {
//     console.log($);
// });