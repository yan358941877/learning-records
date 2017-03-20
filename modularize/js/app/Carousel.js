define(['jquery'], function($) {
    function Carousel($carouselWindow) {
        ///// error 
        this.$carousel = $carouselWindow.find('.carousel');
        this.btn_next = $carouselWindow.find('.next');
        this.btn_pre = $carouselWindow.find('.pre');
        this.$preview = $carouselWindow.find('.preview');
        this.$previewImg = this.$preview.find("ul");
        this.imgWidth = this.$carousel.find('img').innerWidth();
        this.count = 0;
        this.flag = true;
    }
    Carousel.prototype = {
        constructor: Carousel,
        init: function() {
            var first = this.$carousel.children().eq(0).clone(false);
            var last = this.$carousel.children().eq(this.$carousel.children().length - 1).clone(false);
            this.$carousel.append(first);
            last.insertBefore(".carousel li:first-child");
            this.count = 1;
            this.$carousel.css("left", -1 * this.imgWidth * this.count + "px");

            this.nextImg();
            this.preImg();
            this.preview();
            this.repeat();
        },
        nextImg: function() {
            var _this = this;
            this.btn_next.on('click', function(event) {
                if (_this.flag) {
                    _this.flag = false;
                    _this.count++;
                    _this.$carousel.animate({
                        "left": -1 * _this.imgWidth * _this.count + "px"
                    }, 1000, function() {
                        if (_this.count == 6) {
                            _this.count = 1;
                            _this.$carousel.css("left", -1 * _this.imgWidth * _this.count + "px");
                        }
                        _this.$preview.find("li div").each(function() {
                            // 注意:这里的this指的是dom对象,而不是jQuery对象
                            this.classList.add("unactive");
                        });
                        _this.$preview.find("li div").eq(_this.count - 1).removeClass("unactive");
                    });
                    _this.flag = true;
                }
            });
        },
        preImg: function() {
            var _this = this;
            _this.btn_pre.on('click', function(event) {
                if (_this.flag) {
                    _this.flag = false;
                    _this.count--;
                    _this.$carousel.animate({
                        "left": -1 * _this.imgWidth * _this.count + "px"
                    }, 1000, function() {
                        if (_this.count == 0) {
                            _this.count = 5;
                            _this.$carousel.css("left", -1 * _this.imgWidth * _this.count + "px");
                        }
                        _this.$preview.find("li div").each(function() {
                            this.classList.add("unactive");
                        });
                        _this.$preview.find("li div").eq(_this.count - 1).removeClass("unactive");
                    });
                    _this.flag = true;
                }

            });
        },
        preview: function() {
            var _this = this;
            var $previewImg = _this.$preview.find("ul");

            $previewImg.on('click', 'li', function(event) {
                if (_this.flag) {
                    _this.flag = false;
                    var index = $previewImg.children().index($(this));
                    _this.count = index + 1;
                    _this.$carousel.animate({
                        "left": -1 * _this.imgWidth * _this.count + "px"
                    }, 1000);
                    _this.$preview.find("li div").each(function() {
                        // 注意:这里的this指的是dom对象,而不是jQuery对象
                        this.classList.add("unactive");
                    });
                    _this.$preview.find("li div").eq(_this.count - 1).removeClass("unactive");
                    _this.flag = true;
                }
            })
        },
        repeat: function() {
            var _this = this;
            setInterval(function() {
                _this.count++;
                _this.$carousel.animate({
                    "left": -1 * _this.imgWidth * _this.count + "px"
                }, 1000, function() {
                    if (_this.count == 6) {
                        _this.count = 1;
                        _this.$carousel.css("left", -1 * _this.imgWidth * _this.count + "px");
                    }
                    _this.$preview.find("li div").each(function() {
                        // 注意:这里的this指的是dom对象,而不是jQuery对象
                        this.classList.add("unactive");
                    });
                    _this.$preview.find("li div").eq(_this.count - 1).removeClass("unactive");
                });
            }, 3000);
        }
    }

    return Carousel;
});


// var carousel = new Carousel($('.carousel-window'));
// carousel.init();