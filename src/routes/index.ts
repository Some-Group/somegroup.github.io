/*
 * @Author: Boiao Ch
 * @Date: 2021-01-11 13:10:16
 * @Last Modified by: Boiao Ch
 * @Last Modified time: 2021-01-11 19:19:34
 */
// eslint-disable-next-line no-unused-vars
// import { createCell, component } from 'web-cell';
import Home from '../page/Home';
import Projects from '../page/Projects';
const siteTitle = 'Some Group 到底是什么组';

export const routes = [
    {
        title: '欢迎',
        href: 'welcome',
        component: () => Home
    },
    {
        title: '项目',
        href: 'projects',
        component: () => Projects
    },
    {
        title: '成员',
        href: 'members',
        component: () => Home
    },
    {
        title: '关于',
        href: 'about',
        component: () => Home
    }
].map(route => {
    return {
        ...route,
        title: route.title + ' | ' + siteTitle,
        menuTitle: route.title
    };
});
