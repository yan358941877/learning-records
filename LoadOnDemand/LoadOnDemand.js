// 判断一个元素是否出现在窗口可视范围（浏览器的上边缘和下边缘之间，肉眼可视）
function isVisible($node) {
    // $node.offset().top 元素距离document顶端的距离
    // $(window).height() 浏览器窗口的高度
    // $(document).scrollTop() document滑动的距离
    if ($(window).height() + $(document).scrollTop() > $node.offset().top && $(document).scrollTop() < $node.offset().top) {
        return true;
    } else {
        return false;
    }
}

// 当窗口滚动时，判断一个元素是不是出现在窗口可视范围。每次出现都在控制台打印 true
/*function isVisibleOnScroll($node) {
    function check() {
        if ($(window).height() + $(document).scrollTop() > $node.offset().top && $(document).scrollTop() < $node.offset().top) {
            console.log('true');
        } else {
            console.log('false');
        }
    };
    $(window).on('scroll', check);
}*/

// 当窗口滚动时，判断一个元素是不是出现在窗口可视范围。在元素第一次出现时在控制台打印 true，
// 以后再次出现不做任何处理。用代码实现

function isVisibleOnScroll($node) {
    function check() {
        if ($(window).height() + $(document).scrollTop() > $node.offset().top && $(document).scrollTop() < $node.offset().top) {
            console.log('true');
        } else {
            console.log('false');
        }
    };
    $(window).one('scroll', check);
}