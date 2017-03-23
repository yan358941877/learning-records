/**
 * 使用范例
 */


/**
 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据
 */
app.get('/hello', function(req, res) {
    res.send({
        status: 0,
        msg: "hello 饥人谷"
    });
});


/**
 * 发送 GET 请求, 有参数
 * GET /user/100
 * query = { name: 'ruoyu', age: 28 }
 */
app.get('/user/:uid', function(req, res) {
    console.log(req.params.uid); //100
    console.log(req.query.name); // 'ruoyu'
    res.send({
        status: 1,
        errorMsg: "请先注册"
    });
});

var imgList = [
    "http://ossweb-img.qq.com/images/lol/web201310/skin/big51006.jpg",
    "http://ossweb-img.qq.com/images/lol/web201310/skin/big245003.jpg",
    "http://ossweb-img.qq.com/images/lol/web201310/skin/big18005.jpg",
    "http://ossweb-img.qq.com/images/lol/web201310/skin/big78001.jpg",
    "http://ossweb-img.qq.com/images/lol/web201310/skin/big45008.jpg",
    "http://ossweb-img.qq.com/images/lol/web201310/skin/big92006.jpg",
    "http://ossweb-img.qq.com/images/lol/web201310/skin/big117003.jpg",
    "http://ossweb-img.qq.com/images/lol/web201310/skin/big85006.jpg",
    "http://ossweb-img.qq.com/images/lol/web201310/skin/big18010.jpg",
    "http://ossweb-img.qq.com/images/lol/web201310/skin/big412004.jpg",
    "http://ossweb-img.qq.com/images/lol/web201310/skin/big107002.jpg",
    "http://ossweb-img.qq.com/images/lol/web201310/skin/big421001.jpg"
];

app.get('/getCharacter', function(req, res) {
    var count = req.query.count;
    if (count >= imgList.length) {
        res.send({
            status: 1,
            imglist: []
        });
        return;
    }
    var responseImg = [];
    for (var i = 0; i < 3 && count < imgList.length; i++, count++) {
        responseImg.push(imgList[count]);
    };
    res.send({
        status: 1,
        imglist: responseImg
    });
});
/**
 * 发送 POST 请求， 有参数
 * POST /comment
 * query = { comment: "这是评论内容" }
 */
app.post('/comment', function(req, res) {
    console.log(req.body.comment); // "这是评论内容"
    res.send({
        status: 0,
        data: {
            cid: 100,
            comment: "这是评论内容"
        }
    });
});