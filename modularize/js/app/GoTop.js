define(['jquery'], function($) {
    function GoTop() {
        this.$btn_gotop = $('<span>TOP</span>');
        this.addGoTop();
        this.bind();
    }
    GoTop.prototype = {
        constructor: GoTop,
        addGoTop: function() {
            this.$btn_gotop.css({
                "display": "inline-block",
                "width": " 50px",
                "height": "50px",
                "line-height": "50px",
                "text-align": "center",
                "background": "#666",
                "color": "#fff",
                "position": "fixed",
                "bottom": "20px",
                "right": "20px",
                "cursor": "pointer"
            });
            $(document.body).append(this.$btn_gotop);
        },
        bind: function() {
            this.$btn_gotop.on("click", function() {
                $(document).scrollTop(0);
            });
        }
    }
    return GoTop;

});