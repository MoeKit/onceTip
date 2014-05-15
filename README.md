# onceTip

---

只显示一次的提示处理。

依赖于`cookieStore`,保存所有的显示状态到一个cookie里面。

注意，所有的提示请`先设置为隐藏`。先显示再闪一下消失是让人不悦的体验。

---

## 使用说明

```html
<a href="hello" data-action="show-once" data-scope="bbs" data-label="name">我是论坛只显示一次的提示呀</a>
```

## API

只有一个初始化接口

### walk <em>function</em>
初始化入口

## API配置

### scopeMap <em>function(scope){}</em>
scope的预处理，一般不需要配置。


## HTML 配置

### data-action="show-once"
必须且固定，标识该区块为需要处理的元素

### data-trigger

触发元素选择器，从`data-action`的子孙元素中查找

默认当前元素为触发元素

### data-scope

状态保存域名
可以写域名，也可以写子域名字。如果为子域名字`a`，则保存域名为 a + . + 主域名。
默认为`current`。

特殊名字有：
+ `all`表示全站，
+ `current`表示当前域名，

### data-label

必需，为状态值保存名字(key)

每个不同的提示块名字必须不同。

如果几个地方名字相同，那么可以实现`一处关闭，其他地方也不再出现`。





