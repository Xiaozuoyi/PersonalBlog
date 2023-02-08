import{_ as s,o as a,c as n,a as l}from"./app.a2d80bcf.js";const m=JSON.parse('{"title":"移动设备网页设计","description":"","frontmatter":{},"headers":[{"level":2,"title":"<meta>的 viewport 设置","slug":"meta-的-viewport-设置","link":"#meta-的-viewport-设置","children":[]}],"relativePath":"html/mobile.md","lastUpdated":1675852229000}'),e={name:"html/mobile.md"},o=l(`<h1 id="移动设备网页设计" tabindex="-1">移动设备网页设计 <a class="header-anchor" href="#移动设备网页设计" aria-hidden="true">#</a></h1><h2 id="meta-的-viewport-设置" tabindex="-1"><code>&lt;meta&gt;</code>的 viewport 设置 <a class="header-anchor" href="#meta-的-viewport-设置" aria-hidden="true">#</a></h2><p><code>&lt;meta&gt;</code>的 viewport 设置用来控制网页的视觉大小。</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki dracula"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#FF79C6;">meta</span><span style="color:#F8F8F2;"> </span><span style="color:#50FA7B;font-style:italic;">name</span><span style="color:#FF79C6;">=</span><span style="color:#E9F284;">&quot;</span><span style="color:#F1FA8C;">viewport</span><span style="color:#E9F284;">&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#50FA7B;font-style:italic;">content</span><span style="color:#FF79C6;">=</span><span style="color:#E9F284;">&quot;</span><span style="color:#F1FA8C;">initial-scale=1</span><span style="color:#E9F284;">&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这表示网页初始加载不进行放大或缩小。</p><p>下面代码指定网页适配的视口宽度。</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki dracula"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#FF79C6;">meta</span><span style="color:#F8F8F2;"> </span><span style="color:#50FA7B;font-style:italic;">name</span><span style="color:#FF79C6;">=</span><span style="color:#E9F284;">&quot;</span><span style="color:#F1FA8C;">viewport</span><span style="color:#E9F284;">&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#50FA7B;font-style:italic;">content</span><span style="color:#FF79C6;">=</span><span style="color:#E9F284;">&quot;</span><span style="color:#F1FA8C;">width=320</span><span style="color:#E9F284;">&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>下面代码指定网页宽度为设备宽度。</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki dracula"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#FF79C6;">meta</span><span style="color:#F8F8F2;"> </span><span style="color:#50FA7B;font-style:italic;">name</span><span style="color:#FF79C6;">=</span><span style="color:#E9F284;">&quot;</span><span style="color:#F1FA8C;">viewport</span><span style="color:#E9F284;">&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#50FA7B;font-style:italic;">content</span><span style="color:#FF79C6;">=</span><span style="color:#E9F284;">&quot;</span><span style="color:#F1FA8C;">width=device-width</span><span style="color:#E9F284;">&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>下面代码指定用户不能放大网页。</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki dracula"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#FF79C6;">meta</span><span style="color:#F8F8F2;"> </span><span style="color:#50FA7B;font-style:italic;">name</span><span style="color:#FF79C6;">=</span><span style="color:#E9F284;">&quot;</span><span style="color:#F1FA8C;">viewport</span><span style="color:#E9F284;">&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#50FA7B;font-style:italic;">content</span><span style="color:#FF79C6;">=</span><span style="color:#E9F284;">&quot;</span><span style="color:#F1FA8C;">maximum-scale=1</span><span style="color:#E9F284;">&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>适用手机的网页，一般要写成下面这样。</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki dracula"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#FF79C6;">meta</span><span style="color:#F8F8F2;"> </span><span style="color:#50FA7B;font-style:italic;">name</span><span style="color:#FF79C6;">=</span><span style="color:#E9F284;">&quot;</span><span style="color:#F1FA8C;">viewport</span><span style="color:#E9F284;">&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#50FA7B;font-style:italic;">content</span><span style="color:#FF79C6;">=</span><span style="color:#E9F284;">&quot;</span><span style="color:#F1FA8C;">width=device-width, initial-scale=1</span><span style="color:#E9F284;">&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,13),t=[o];function p(c,r,i,F,y,d){return a(),n("div",null,t)}const h=s(e,[["render",p]]);export{m as __pageData,h as default};