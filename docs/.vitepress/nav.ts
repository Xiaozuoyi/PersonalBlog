import js from './configuration/JavaScript';
import ts from './configuration/TypeScript';
import vue from './configuration/vue';
import react from './configuration/react';
import project from './configuration/project';
import node from './configuration/node';
import other from './configuration/other';
const NavbarConfig = [
  { text: '首页', link: '/' },
  { text: 'HTML', link: '/html/', activeMatch: '/html/' },
  { text: 'CSS', link: '/css/', activeMatch: '/css/' },
  { text: 'JavaScript', items: js, activeMatch: '/js/' },
  { text: 'TypeScript', items: ts, activeMatch: '/ts/' },
  { text: 'Vue', items: vue, activeMatch: '/vue/' },
  { text: 'React', items: react, activeMatch: '/react/' },
  { text: 'Node', items: node, activeMatch: '/node/' },
  { text: '前端工程化', items: project, activeMatch: '/project/' },
  { text: '其他', items: other, activeMatch: '/other/' }
];
export default NavbarConfig;
