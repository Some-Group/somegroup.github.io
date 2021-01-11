/*
 * @Author: Boiao Ch
 * @Date: 2021-01-11 13:10:16
 * @Last Modified by: Boiao Ch
 * @Last Modified time: 2021-01-11 16:31:00
 */
// eslint-disable-next-line no-unused-vars
// import { createCell, component } from 'web-cell';
import Home from '../page/Home';

export const routes = [
    {
        title: 'Home',
        href: '',
        component: () => Home
    },
    {
        title: 'Projects',
        href: 'projects',
        component: () => Home
    },
    {
        title: 'Members',
        href: 'members',
        component: () => Home
    },
    {
        title: 'About',
        href: 'about',
        component: () => Home
    }
];
