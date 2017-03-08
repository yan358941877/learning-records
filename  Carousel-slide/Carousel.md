## 轮播图的实现

### 基础知识

* display: inline-block;
  父容器 text-align: center;
 
  图片并排排列
  overflow: hidden
  
  图片的变换:
  操作DOM来改变图片的位置:每一次操作,都会导致页面重绘
  
### 实现原理

#### html和css部分

```HTML
<style>
    .container {
            position: relative;
            height: 300px;
            width: 200px;
            overflow: hidden;
        }
        
        .carousel img {
            width: 200px;
            height: 300px;
        }
        
        .carousel {
            position: absolute;
            left: 0;
            width: 800px;
        }
        
        .carousel>li {
            float: left;
        }
</style>
<div class="container">
        <ul class="carousel">
            <li>轮播图片</li>
	    <li>轮播图片</li>
	    <li>轮播图片</li>
            <li>轮播图片</li>        
        </ul>
<div>
```

让carousel内部的图片水平排布;为container设置一个宽高(一张图片的大小),并设置overflow为hidden,即让一个图片大小的内容呈现出来.让carousel绝对定位,通过其left值来控制container中呈现的内容.

#### 

