import{_ as s,o as n,c as a,a as l}from"./app.a2d80bcf.js";const b=JSON.parse('{"title":"Typescript 基础","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础类型","slug":"基础类型","link":"#基础类型","children":[{"level":3,"title":"字符串类型","slug":"字符串类型","link":"#字符串类型","children":[]},{"level":3,"title":"数字类型","slug":"数字类型","link":"#数字类型","children":[]},{"level":3,"title":"布尔类型","slug":"布尔类型","link":"#布尔类型","children":[]},{"level":3,"title":"空值类型","slug":"空值类型","link":"#空值类型","children":[]},{"level":3,"title":"Null 和 Undefined 类型","slug":"null-和-undefined-类型","link":"#null-和-undefined-类型","children":[]}]}],"relativePath":"ts/基础类型.md","lastUpdated":1675852229000}'),p={name:"ts/基础类型.md"},e=l(`<h1 id="typescript-基础" tabindex="-1">Typescript 基础 <a class="header-anchor" href="#typescript-基础" aria-hidden="true">#</a></h1><h2 id="基础类型" tabindex="-1">基础类型 <a class="header-anchor" href="#基础类型" aria-hidden="true">#</a></h2><h3 id="字符串类型" tabindex="-1">字符串类型 <a class="header-anchor" href="#字符串类型" aria-hidden="true">#</a></h3><p>字符串是使用 String 定义的</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula"><code><span class="line"><span style="color:#6272A4;">//普通类型声明</span></span>
<span class="line"><span style="color:#FF79C6;">let</span><span style="color:#F8F8F2;"> a</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#8BE9FD;font-style:italic;">string</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#E9F284;">&#39;</span><span style="color:#F1FA8C;">123</span><span style="color:#E9F284;">&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6272A4;">//ES6模板字符串声明</span></span>
<span class="line"><span style="color:#FF79C6;">let</span><span style="color:#F8F8F2;"> str</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#8BE9FD;font-style:italic;">string</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#F1FA8C;">\`今天星期</span><span style="color:#FF79C6;">\${</span><span style="color:#F8F8F2;">a</span><span style="color:#FF79C6;">}</span><span style="color:#F1FA8C;">\`</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p><code>\${expr}</code>用来在模板字符串中嵌入表达式。</p></div><h3 id="数字类型" tabindex="-1">数字类型 <a class="header-anchor" href="#数字类型" aria-hidden="true">#</a></h3><p>支持十六进制、十进制、八进制和二进制</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula"><code><span class="line"><span style="color:#FF79C6;">let</span><span style="color:#F8F8F2;"> notANumber</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#8BE9FD;font-style:italic;">number</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">NaN</span><span style="color:#F8F8F2;">; </span><span style="color:#6272A4;">//Nan</span></span>
<span class="line"><span style="color:#FF79C6;">let</span><span style="color:#F8F8F2;"> num</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#8BE9FD;font-style:italic;">number</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">123</span><span style="color:#F8F8F2;">; </span><span style="color:#6272A4;">//普通数字</span></span>
<span class="line"><span style="color:#FF79C6;">let</span><span style="color:#F8F8F2;"> infinityNumber</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#8BE9FD;font-style:italic;">number</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">Infinity</span><span style="color:#F8F8F2;">; </span><span style="color:#6272A4;">//无穷大</span></span>
<span class="line"><span style="color:#FF79C6;">let</span><span style="color:#F8F8F2;"> decimal</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#8BE9FD;font-style:italic;">number</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">6</span><span style="color:#F8F8F2;">; </span><span style="color:#6272A4;">//十进制</span></span>
<span class="line"><span style="color:#FF79C6;">let</span><span style="color:#F8F8F2;"> hex</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#8BE9FD;font-style:italic;">number</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">0xf00d</span><span style="color:#F8F8F2;">; </span><span style="color:#6272A4;">//十六进制</span></span>
<span class="line"><span style="color:#FF79C6;">let</span><span style="color:#F8F8F2;"> binary</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#8BE9FD;font-style:italic;">number</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">0b1010</span><span style="color:#F8F8F2;">; </span><span style="color:#6272A4;">//二进制</span></span>
<span class="line"><span style="color:#FF79C6;">let</span><span style="color:#F8F8F2;"> octal</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#8BE9FD;font-style:italic;">number</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">0o744</span><span style="color:#F8F8F2;">; </span><span style="color:#6272A4;">//八进制</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="布尔类型" tabindex="-1">布尔类型 <a class="header-anchor" href="#布尔类型" aria-hidden="true">#</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula"><code><span class="line"><span style="color:#FF79C6;">let</span><span style="color:#F8F8F2;"> booleand</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#8BE9FD;font-style:italic;">boolean</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">true</span><span style="color:#F8F8F2;">; </span><span style="color:#6272A4;">//可以直接使用布尔值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF79C6;">let</span><span style="color:#F8F8F2;"> booleand2</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#8BE9FD;font-style:italic;">boolean</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#50FA7B;">Boolean</span><span style="color:#F8F8F2;">(</span><span style="color:#BD93F9;">1</span><span style="color:#F8F8F2;">); </span><span style="color:#6272A4;">//也可以通过函数返回布尔值</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="danger custom-block"><p class="custom-block-title">错误写法</p><p>使用构造函数 <code>Boolean</code> 创造的对象<strong>不是布尔值</strong></p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula"><code><span class="line"><span style="color:#FF79C6;">let</span><span style="color:#F8F8F2;"> createdBoolean</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#8BE9FD;font-style:italic;">boolean</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;font-weight:bold;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#50FA7B;">Boolean</span><span style="color:#F8F8F2;">(</span><span style="color:#BD93F9;">1</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#6272A4;">//这样会报错 应为事实上 new Boolean() 返回的是一个 Boolean 对象</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><div class="tip custom-block"><p class="custom-block-title">正确写法</p><p>实际上 new Boolean（）返回的是一个 Boolean 对象</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula"><code><span class="line"><span style="color:#FF79C6;">let</span><span style="color:#F8F8F2;"> createdBoolean</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#8BE9FD;font-style:italic;">Boolean</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;font-weight:bold;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#50FA7B;">Boolean</span><span style="color:#F8F8F2;">(</span><span style="color:#BD93F9;">1</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><h3 id="空值类型" tabindex="-1">空值类型 <a class="header-anchor" href="#空值类型" aria-hidden="true">#</a></h3><p>JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 <code>void</code> 表示没有任何返回值的函数</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula"><code><span class="line"><span style="color:#FF79C6;">function</span><span style="color:#F8F8F2;"> </span><span style="color:#50FA7B;">voidFn</span><span style="color:#F8F8F2;">()</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#8BE9FD;font-style:italic;">void</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  console.</span><span style="color:#50FA7B;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#E9F284;">&#39;</span><span style="color:#F1FA8C;">test void</span><span style="color:#E9F284;">&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p><code>void</code>类型的用法，主要是用在我们<strong>不希望</strong>调用者关心函数返回值的情况下，比如通常的<strong>异步回调函数</strong></p></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p><strong>void 也可以定义 undefined 和 null 类型</strong></p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula"><code><span class="line"><span style="color:#FF79C6;">let</span><span style="color:#F8F8F2;"> u</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#8BE9FD;font-style:italic;">void</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">undefined</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#FF79C6;">let</span><span style="color:#F8F8F2;"> n</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#8BE9FD;font-style:italic;">void</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">null</span><span style="color:#F8F8F2;">; </span><span style="color:#6272A4;">//严格模式下会报错</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><h3 id="null-和-undefined-类型" tabindex="-1">Null 和 Undefined 类型 <a class="header-anchor" href="#null-和-undefined-类型" aria-hidden="true">#</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula"><code><span class="line"><span style="color:#FF79C6;">let</span><span style="color:#F8F8F2;"> u</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#8BE9FD;font-style:italic;">undefined</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">undefined</span><span style="color:#F8F8F2;">; </span><span style="color:#6272A4;">//定义undefined</span></span>
<span class="line"><span style="color:#FF79C6;">let</span><span style="color:#F8F8F2;"> n</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#8BE9FD;font-style:italic;">null</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">null</span><span style="color:#F8F8F2;">; </span><span style="color:#6272A4;">//定义null</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="danger custom-block"><p class="custom-block-title">void 和 undefined 和 null 最大的区别</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula"><code><span class="line"><span style="color:#6272A4;">//这样写会报错 void类型不可以分给其他类型</span></span>
<span class="line"><span style="color:#FF79C6;">let</span><span style="color:#F8F8F2;"> test</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#8BE9FD;font-style:italic;">void</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">undefined</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#FF79C6;">let</span><span style="color:#F8F8F2;"> num2</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#8BE9FD;font-style:italic;">string</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#E9F284;">&#39;</span><span style="color:#F1FA8C;">1</span><span style="color:#E9F284;">&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">num2 </span><span style="color:#FF79C6;">=</span><span style="color:#F8F8F2;"> test;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>undefined</code> 和 <code>null</code> 是所有类型的子类型，而<code>void</code> 不是。也就是说 <code>undefined</code> 类型的变量，可以赋值给 string 类型的变量：</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dracula"><code><span class="line"><span style="color:#6272A4;">//这样是没问题的</span></span>
<span class="line"><span style="color:#FF79C6;">let</span><span style="color:#F8F8F2;"> test</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#8BE9FD;font-style:italic;">null</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">null</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#FF79C6;">let</span><span style="color:#F8F8F2;"> num2</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#8BE9FD;font-style:italic;">string</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#E9F284;">&#39;</span><span style="color:#F1FA8C;">1</span><span style="color:#E9F284;">&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">num2 </span><span style="color:#FF79C6;">=</span><span style="color:#F8F8F2;"> test;</span></span>
<span class="line"><span style="color:#6272A4;">//或者这样的</span></span>
<span class="line"><span style="color:#FF79C6;">let</span><span style="color:#F8F8F2;"> test</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#8BE9FD;font-style:italic;">undefined</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">undefined</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#FF79C6;">let</span><span style="color:#F8F8F2;"> num2</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#8BE9FD;font-style:italic;">string</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#E9F284;">&#39;</span><span style="color:#F1FA8C;">1</span><span style="color:#E9F284;">&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">num2 </span><span style="color:#FF79C6;">=</span><span style="color:#F8F8F2;"> test;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></div>`,21),o=[e];function t(F,c,r,i,y,d){return n(),a("div",null,o)}const C=s(p,[["render",t]]);export{b as __pageData,C as default};
