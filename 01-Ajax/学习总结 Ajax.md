## ajax

### 1.Ajax是什么?有什么作用?

* Ajax是Asynchronous JavaScript and XML的缩写.Ajax在浏览器与Web服务器之间使用异步数据传输(HTTP请求)从服务器获取数据.这里的异步是指脱离当前浏览器页面的请求 加载等单独执行,这意味着可以在不重新加载整个网页的情况下,通过JavaScript发送请求,接受服务器传来的数据,然后操作DOM将新数据对网页的某部分进行更新.
* 作用:这一技术能够向服务器请求额外的数据而无需刷新整个页面,会带来良好的用户体验

### 2.前后端开发联调需要注意哪些事情？后端接口完成前如何 mock 数据？

前后端开发联调需要注意哪些事情:
    * 约定接口名称
    * 约定接口实现使用哪种方式:get/post
    * 约定request参数的name,类型(格式)
    * 约定response的类型(格式)格式: 字符串/数组/对象...
    * 将上述内容写成文档,,开发工作按照文档约定的进行
后端接口完成前如何 mock 数据:
    * 根据文档,编写符合文档规范的测试用例,使用相关工具模拟服务器来实现对页面和接口的测试
    * 相关工具: server-mock

### 3.点击按钮，使用 ajax 获取数据，如何在数据到来之前防止重复点击?

* 使用XMLHttpRequest的readyState属性:当readyState == 4时,表明请求已完成,且响应数据已经到来.

```JavaScript
var flag = true;
var xhr = new XMLHttpRequest();
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    if(flag){
        flag = false;
        xhr.open('get', '/default', true);
        xhr.send();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                flag = true;
            }
            // 相关处理
        }    
    }
})
```


### 4.封装一个 ajax 函数，能通过如下方式调用。后端在本地使用server-mock来 mock 数据

```JavaScript
function ajax(opts){
    var xhr = new XMLHttpRequest();
    var parameter = '';
    for(var i in opts.data){
        parameter = parameter + i + '=' + opts.data[i]+'&';
    }
    parameter.length = parameter.length - 1;
    if(opts.type.toLowerCase() == 'get'){
        xhr.open(opts.type, opts.url + '?' + parameter, true);
        xhr.send();  
    }else if(opts.type.toLowerCase() == 'post'){
        xhr.open(opts.type, opts.url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(parameter);
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            opts.success();
        }else {
            opts.error();
        }
    }    
}
document.querySelector('#btn').addEventListener('click', function(){
    ajax({
        url: '/login',   //接口地址
        type: 'get',               // 类型， post 或者 get,
        data: {
            username: 'xiaoming',
            password: 'abcd1234'
        },
        success: function(ret){
            console.log(ret);       // {status: 0}
        },
        error: function(){
           console.log('出错了')
        }
    })
});
```

### server-mock的使用

* npm install -g server-mock 安装工具
* mock init 初始化范例
* mock start 启动服务器

