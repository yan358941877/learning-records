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
            left: 0;  /*通过该值来控制container中呈现的内容*/
            width: 800px;
      }
        
      .carousel>li {
            float: left; /*让carousel内部的图片水平排布*/
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

#### JavaScript部分

* 通过 $(node).animate()来实现动画效果(通过 `$(node).css('left','-200px')`也可以实现图片切换效果,但是没有动画效果,呈现出来的效果是突变的)

```
// 通过$(node).animate()来修改carousel的left值,从而实现动画效果
$carousel.animate({left: "-200px"}, 1000);
```

* 轮播图一直向右切换达到最后一张图片(或一直向左切换达到第一张图片),此时再向右切换时,如果直接使用`$(node).animate()`切换到第一张图片的话,轮播图会呈现从最后一张向左滑动到第一张,影响滑动效果(如图1所示).因此为了解决该问题,需要在轮播图的最后添加第一幅图片,在轮播图的开头添加最后一张图片(如图2所示),当滑动到最右端image1时,可以使用 `$(node).css('left','xxxpx')`"暗地里"切换到前面的image1;下次再往右切换就从前面的image01开始,从而实现统一的滑动效果.


























