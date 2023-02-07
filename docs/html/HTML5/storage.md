## 本地存储

我们知道，在HTML4中可以使用cookie在客户端保存诸如用户名等简单的用户信息，但是，通过长期的使用，你会发现，用cookie存储永久数据存在以下几个问题

- 大小：cookie的大小被限制在4KB。
- 带宽：cookie是随HTTP事务一起被发送的，因此会浪费一部分发送cookie时使用的带宽。
- 复杂性：要正确的操纵cookie是很困难的。

::: warning 提示

针对这些问题，在HTML5中，重新提供了一种在客户端本地保存数据的功能，它就是Web Storage。

:::

## Cookie

Cookie是最早被提出来的本地存储方式，在此之前，服务端是无法判断网络中的两个请求是否是同一用户发起的，为解决这个问题，Cookie就出现了。Cookie的大小只有4kb，它是一种纯文本文件，每次发起HTTP请求都会携带Cookie。

**特性：**

- Cookie一旦创建成功，名称就无法修改
- Cookie是无法跨域名的，也就是说a域名和b域名下的cookie是无法共享的，这也是由Cookie的隐私安全性决定的，这样就能够阻止非法获取其他网站的Cookie
- 每个域名下Cookie的数量不能超过20个，每个Cookie的大小不能超过4kb
- 有安全问题，如果Cookie被拦截了，那就可获得session的所有信息，即使加密也于事无补，无需知道cookie的意义，只要转发cookie就能达到目的
- Cookie在请求一个新的页面的时候都会被发送过去

**使用场景**

- 在HTML4中可以使用cookie在客户端保存诸如用户名等简单的用户信息
- 可以用来统计页面的点击次数
- 最常见的使用场景就是Cookie和session结合使用，我们将sessionId存储到Cookie中，每次发请求都会携带这个sessionId，这样服务端就知道是谁发起的请求，从而响应相应的信息

::: warning 注意

如果需要域名之间跨域共享Cookie，有两种方法：

- 使用Nginx反向代理
- 在一个站点登陆之后，往其他网站写Cookie。服务端的Session存储到一个节点，Cookie存储sessionId

:::

## WebStorage

- 两个主要目标：
  - 提供一种在cookie之外存储会话数据的路径。
  - 提供一种存储大量可以跨会话存在的数据的机制。

### LocalStorage

LocalStorage是HTML5新引入的特性，由于有的时候我们存储的信息较大，Cookie就不能满足我们的需求，这时候LocalStorage就派上用场了。

**优点：**

- localStorage的生命周期是永久的，关闭页面或浏览器之后localStorage中的数据也不会消失。
- localStorage除非主动删除数据，否则数据永远不会消失。
- 仅储存在本地，不像Cookie那样每次HTTP请求都会被携带。
- 在大小方面，LocalStorage的大小一般为5MB，可以储存更多的信息

**缺点：**

- 存在浏览器兼容问题，IE8以下版本的浏览器不支持
- 如果浏览器设置为隐私模式，那我们将无法读取到LocalStorage
- LocalStorage受到同源策略的限制，即端口、协议、主机地址有任何一个不相同，都不会访问

**使用场景：**

- 网站换肤功能
- 存储网站中的用户浏览信息和网站一些不常变动的个人信息

::: details 常用API

```js
// 保存数据到 localStorage
localStorage.setItem('key', 'value');

// 从 localStorage 获取数据
let data = localStorage.getItem('key');

// 从 localStorage 删除保存的数据
localStorage.removeItem('key');

// 从 localStorage 删除所有保存的数据
localStorage.clear();

// 获取某个索引的Key
localStorage.key(index)
```

:::

### SessionStorage

SessionStorage是在HTML5才提出来的存储方案，SessionStorage 主要用于临时保存同一窗口(或标签页)的数据，刷新页面时不会删除，关闭窗口或标签页之后将会删除这些数据。

**优点：**

- SessionStorage的生命周期是在仅在当前会话下有效；
- LocalStorage和SessionStorage都不能被爬虫爬取；
- SessionStorage也有同源策略的限制，但是SessionStorage有一条更加严格的限制，SessionStorage只有在同一浏览器的同一窗口下才能够共享；

::: warning 提示

SessionStorage引入了一个“浏览器窗口”的概念，sessionStorage是在同源的窗口中始终存在的数据。只要这个浏览器窗口没有关闭，即使刷新页面或者进入同源另一个页面，数据依然存在。但是sessionStorage在关闭了浏览器窗口后就会被销毁。同时独立的打开同一个窗口同一个页面，sessionStorage也是不一样的。

::: 

**使用场景**

由于SessionStorage具有时效性，所以可以用来存储一些网站的游客登录的信息，还有临时的浏览记录的信息。当关闭网站之后，这些信息也就随之消除了

::: details 常用API

```js
// 保存数据到 sessionStorage
sessionStorage.setItem('key', 'value');

// 从 sessionStorage 获取数据
let data = sessionStorage.getItem('key');

// 从 sessionStorage 删除保存的数据
sessionStorage.removeItem('key');

// 从 sessionStorage 删除所有保存的数据
sessionStorage.clear();

// 获取某个索引的Key
sessionStorage.key(index)
```

:::

## 总结

|     特性     |                            Cookie                            |                   SessionStorage                    |                    LocalStorage                     |
| :----------: | :----------------------------------------------------------: | :-------------------------------------------------: | :-------------------------------------------------: |
| 数据生命周期 | 生成时就会指定一个maxAge值，这就是cookie的生命周期，在这个周期内cookie有效，默认关闭浏览器无效 |                  页面会话期间可用                   |            除非数据被清除，否则一直存在             |
| 存放数据大小 |           4kb左右，因为每次http请求都会携带cookie            |                    一般5MB或更大                    |                    一般5MB或更大                    |
| 与服务器通信 | 由对服务器的请求来传递，每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题 |                不参与和服务器的通信                 |                不参与和服务器的通信                 |
|    易用性    |            cookie需要自己封装setCookie，getCookie            | 可用原生接口，也可自己封装对Object和Arrey更好的支持 | 可用原生接口，也可自己封装对Object和Arrey更好的支持 |
|    共同点    |         都是保存在浏览器端，和服务器的sessin机制不同         |                                                     |                                                     |



