# 演示文档

---

````html
<style>
div[data-action="show-once"] {
    display:none;
    border:1px solid #fee581;
    background-color:#ffffe3;
    margin:15px;
    padding:3px 10px;
}
div[data-action="show-once"] a {
 font-size:12px;
 color: #fe4543;
 line-height:22px;
}

div[data-action="show-once"] a.show-once-close {
 float:right;
 margin-right:5px;
 font-size:20px;
 line-height:22px;
}
</style>
<div data-action="show-once" data-label="name" data-trigger="a.show-once-close">
  <a href="hello">我是论坛只显示一次的提示呀</a>
  <a class="show-once-close" href="javascript:">×</a>
</div>

<div data-action="show-once" data-scope="all" data-label="name" data-trigger="a.show-once-close">
  <a href="hello">我是全站只显示一次的提示呀</a>
  <a class="show-once-close" href="javascript:">×</a>
</div>
````

````javascript
seajs.use('onceTip', function(onceTip){
    onceTip.init();
});
````
