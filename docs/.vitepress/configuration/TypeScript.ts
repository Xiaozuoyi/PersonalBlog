const commonPath = '/ts';
export default [
  {
    text: 'TS基础',
    collapsible: true,
    collapsed: false,
    items: [
      // This shows `/guide/index.md` page.
      { text: '基础类型', link: `${commonPath}/基础类型.md` }, // /guide/index.md
      { text: 'b', link: `${commonPath}/b.md` } // /guide/one.md
    ]
  },
  {
    text: 'section 2',
    collapsible: true,
    collapsed: false,
    items: [
      { text: 'c', link: `${commonPath}/c.md` },
      { text: 'd', link: `${commonPath}/d.md` } // /guide/one.md
    ]
  }
];
