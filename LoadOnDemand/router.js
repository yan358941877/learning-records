app.get('/getNews', function(req, res) {
    var news = [{
            title: "111",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/1.jpg",
            content: "aaaaa"
        },
        {
            title: "222",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/2.jpg",
            content: "bbb"
        },
        {
            title: "333",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/3.jpg",
            content: "ccccc"
        },
        {
            title: "444",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/4.jpg",
            content: "dddd"
        },
        {
            title: "555",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/5.jpg",
            content: "eeee"
        },
        {
            title: "6666",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/6.jpg",
            content: "ffff"
        },
        {
            title: "7777",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/7.jpg",
            content: "gggg"
        },
        {
            title: "8888",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/8.jpg",
            content: "hhhh"
        },
        {
            title: "9999",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/9.jpg",
            content: "jjjjj"
        },
        {
            title: "10",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/10.jpg",
            content: "iiiiii"
        },
        {
            title: "11",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/11.jpg",
            content: "kkkkkk"
        },
        {
            title: "12",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/12.jpg",
            content: "lllll"
        },
        {
            title: "13",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/13.jpg",
            content: "mmmmmmm"
        },
        {
            title: "14",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/14.jpg",
            content: "nnnnn"
        },
        {
            title: "15",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/15.jpg",
            content: "oooooo"
        },
        {
            title: "16",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/16.jpg",
            content: "pppppp"
        },
        {
            title: "17",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/9.jpg",
            content: "jjjjj"
        },
        {
            title: "18",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/10.jpg",
            content: "iiiiii"
        },
        {
            title: "18",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/11.jpg",
            content: "kkkkkk"
        },
        {
            title: "20",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/12.jpg",
            content: "lllll"
        },
        {
            title: "21",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/13.jpg",
            content: "mmmmmmm"
        },
        {
            title: "22",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/14.jpg",
            content: "nnnnn"
        },
        {
            title: "23",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/15.jpg",
            content: "oooooo"
        },
        {
            title: "24",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/16.jpg",
            content: "pppppp"
        },
        {
            title: "25",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/10.jpg",
            content: "iiiiii"
        },
        {
            title: "26",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/11.jpg",
            content: "kkkkkk"
        },
        {
            title: "27",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/12.jpg",
            content: "lllll"
        },
        {
            title: "28",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/13.jpg",
            content: "mmmmmmm"
        },
        {
            title: "29",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/14.jpg",
            content: "nnnnn"
        },
        {
            title: "30",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/15.jpg",
            content: "oooooo"
        },
        {
            title: "31",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/16.jpg",
            content: "pppppp"
        },
        {
            title: "32",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/9.jpg",
            content: "jjjjj"
        },
        {
            title: "33",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/10.jpg",
            content: "iiiiii"
        },
        {
            title: "34",
            imgae: "http://cdn.jirengu.com/book.jirengu.com/img/11.jpg",
            content: "kkkkkk"
        }
    ];
    var pageindex = req.query.page;
    console.log(pageindex);
    var len = 5;
    var retNews = news.slice(pageindex * 5, pageindex * 5 + 5);
    res.send({
        status: 0,
        data: {
            news: retNews
        }
    })
});