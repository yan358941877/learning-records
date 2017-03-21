requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app'
    }
});


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

requirejs(['jquery', 'app/Carousel', 'app/GoTop', 'app/LoadOnDemand'], function($, Carousel, GoTop, LoadOnDemand) {

    var carousel = new Carousel($('.carousel-window'));
    carousel.init();
    var gotop = new GoTop();
    var loadImg = new LoadOnDemand($('#character .container'));
})