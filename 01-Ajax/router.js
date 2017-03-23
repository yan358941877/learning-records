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

app.get('/change', function(req, res) {
    var news = ["人大代表谭晶由解放军代表团转为云南代表团",
        "丽江处理'官微怒怼网友'事件 两官员被停职立案",
        "杨洁篪赴美将谈习近平特朗普会谈事宜?外交部回应",
        "李小鹏首场答记者问受关注 发布厅扩容加座位",
        "南京大屠杀幸存者又一位离世 在册幸存者剩100位",
        "湖南冷水江20多名干部长期赌博 市委原书记被问责",
        "莆田共享单车19天丢失70％ 官方:这是诈骗案",
        "临汾环保局长上任5月被免 此前二氧化硫严重超标",
        "起底'痞子'妈妈:养104个孤儿 曾为娃户口堵市长车",
        "八达岭动物园轿车遭黑熊围堵 园方:游客误开车窗",
        "西安美院回应艺考生被喷辣椒水:为避免踩踏才喷",
        "丽江网友称家中狗被城管所抓走 交罚款才能领回"
    ];
    var data = [];
    for (var i = 0; i < 5; i++) {
        var index = parseInt(Math.random() * news.length);
        data.push(news[index]);
    }
    res.send(data);
});

app.get('/getmore', function(req, res) {
    var nodeCount = Number(req.query.childCount);
    console.log(nodeCount);
    var content = []
    for (var i = nodeCount + 1; i <= nodeCount + 5; i++) {
        content.push('内容' + i);
    }
    res.send(content);
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