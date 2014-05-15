# 演示文档

---

````html
<style>
div[data-action="show-once"] {
    display:none;
}
</style>
<div data-action="show-once" data-label="name" data-trigger="a.close-me">
  <a href="hello">我是论坛只显示一次的提示呀</a>
  <a class="close-me" href="javascript:">X</a>
</div>

<div data-action="show-once" data-scope="all" data-label="name" data-trigger="a.close-me">
  <a href="hello">我是全站只显示一次的提示呀</a>
  <a class="close-me" href="javascript:">X</a>
</div>
````

````javascript
seajs.use('onceTip', function(onceTip){
    onceTip.init();
});
````
