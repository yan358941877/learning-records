function LoadImage($container) {
    this.imgList = $container.find(".img-list");
    this.flag = $container.find('.flag');

    this.showNum = 2;
    this.loadSize = 3;
}
LoadImage.prototype = {
        constructor: LoadImage,
        init: function() {

            $(window).scroll(this.isVisible.bind(this));
            /*
            注意:在事件处理函数中,this指的是该事件处理函数对应的DOM对象,在这里,事件处理函数中的this指的是window
                因为在事件处理函数中不需要以this的方式使用window,因此将isVisible中的this绑定到当前对象,即此时的this
                (在向scroll传递参数时,这里的this指的还是当前对象,进入到参数所指的方法中则this指的是window)
            */
        },
        isVisible: function() {

            var windowHeight = $(window).innerHeight();
            var scrollHeight = $(document).scrollTop();
            var topHeight = this.flag.offset().top;

            if (windowHeight + scrollHeight > topHeight) {
                for (var i = 0; i < this.loadSize; i++) {
                    var src = this.imgList.find('img').eq(this.showNum + i).attr("data-src");
                    this.imgList.find('img').eq(this.showNum + i).attr("src", src);
                }
                this.showNum += this.loadSize;
                if (this.showNum > this.imgList.find('img').length) {
                    this.flag.text("已经加载完毕!!");
                }
            }
        }
    }
    // var $container = $('.container');
    // var loadImage = new LoadImage($container);
    // loadImage.init();