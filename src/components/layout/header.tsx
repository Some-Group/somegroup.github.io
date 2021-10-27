/*
 * @Author: Boiao Ch
 * @Date: 2021-01-11 10:57:56
 * @Last Modified by: Boiao Ch
 * @Last Modified time: 2021-01-11 19:13:47
 */
import { createCell } from 'web-cell';

import { NavBar } from 'boot-cell/source/Navigator/NavBar';
import { NavLink } from 'boot-cell/source/Navigator/Nav';

interface HeaderProps {
    activeIndex?: number;
    menu: { title: string; href: string; menuTitle: string }[];
}

export function Header({ activeIndex, menu }: HeaderProps) {
    return (
        <NavBar
            narrow={true}
            expand="md"
            brand="Some Group"
            theme="light"
            className="fixed-top"
            background="white"
            menuAlign="end"
        >
            {menu.map(({ menuTitle, title, href }, index) => (
                <NavLink
                    title={title}
                    href={href}
                    active={activeIndex === index}
                >
                    {menuTitle}
                </NavLink>
            ))}
        </NavBar>
    );
}
