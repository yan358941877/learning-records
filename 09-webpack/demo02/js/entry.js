var $ = require('jquery');
var Carousel = require('./app/Carousel.js');
var GoTop = require('./app/GoTop.js');
var LoadOnDemand = require('./app/LoadOnDemand.js');

var carousel = new Carousel($('.carousel-window'));
carousel.init();
var gotop = new GoTop();
var loadImg = new LoadOnDemand($('#character .container'));

/*
module: {
        loaders: [
            { test: /css\/\.css$/, loader: 'style-loader!css-loader' }
        ]
    }
*/