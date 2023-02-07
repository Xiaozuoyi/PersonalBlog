import { defineConfig } from 'vitepress';
import nav from './nav';
import sidebar from './sidebar';
export default defineConfig({
  title: '程序猿的小破屋', //网站标题
  description: '程序猿的小破屋', //网站描述
  base: '/article/', //默认的路径
  lang: 'zh-CN', //默认的语言
  titleTemplate: '程序猿的小破屋', //标题模板
  appearance: true, //是否显示主题切换按钮
  head: [['link', { rel: 'icon', type: 'image/png', href: 'pure-logo.svg' }]], //网站图标
  lastUpdated: true, //是否显示最后更新时间
  markdown: {
    lineNumbers: true, // 代码块显示行号
    theme: 'dracula' // 代码块主题
  },
  themeConfig: {
    logo: '/pure-logo.svg', //网站logo
    nav: nav, //导航栏
    sidebar: sidebar, //侧边栏
    outlineTitle: '文章目录', //文章目录标题
    //社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    //页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Coder.Peng'
    },
    lastUpdatedText: '上次更新', //最后更新时间
    //文档页脚
    docFooter: {
      prev: '上一页', //上一页
      next: '下一页' //下一页
    }
  },
  cacheDir: './.vitepress/.vite' //缓存目录
});
