const commonPath = "/html";
export default [
  {
    text: "HTML基础",
    collapsible: true,
    collapsed: false,
    items: [
      // This shows `/guide/index.md` page.
      { text: "网页基本标签", link: `${commonPath}/intro.md` },
      { text: "URL简介", link: `${commonPath}/url.md` },
      { text: "网页元素属性", link: `${commonPath}/attribute.md` },
      { text: "HTML字符编码", link: `${commonPath}/encode.md` },
      { text: "文本标签", link: `${commonPath}/text.md` },
      { text: "列表标签", link: `${commonPath}/list.md` },
      { text: "图像标签", link: `${commonPath}/image.md` },
      { text: "链接标签", link: `${commonPath}/link.md` },
      { text: "iframe标签", link: `${commonPath}/iframe.md` },
      { text: "表格标签", link: `${commonPath}/table.md` },
      { text: "表单标签", link: `${commonPath}/form.md` },
      { text: "其他标签", link: `${commonPath}/elements.md` },
      { text: "移动设备网页设计", link: `${commonPath}/mobile.md` },
    ],
  },
  {
    text: "HTML5",
    collapsible: true,
    collapsed: false,
    items: [
      { text: "HTML5简介", link: `${commonPath}/HTML5/html5.md` },
      { text: "Canvas", link: `${commonPath}/canvas.md` },
      { text: "HTML5的本地存储", link: `${commonPath}/HTML5/storage.md` },
    ],
  },
];
