/*
 * @Author: Boiao Ch
 * @Date: 2021-01-11 10:57:56
 * @Last Modified by: Boiao Ch
 * @Last Modified time: 2021-01-11 15:42:45
 */
// eslint-disable-next-line no-unused-vars
import { createCell } from 'web-cell';

import { NavBar } from 'boot-cell/source/Navigator/NavBar';
import { NavLink } from 'boot-cell/source/Navigator/Nav';
// import Logo from '../../image/logo.png';

interface HeaderProps {
    activeIndex?: number;
    menu: { title: string; href: string }[];
}

export function Header({ activeIndex, menu }: HeaderProps) {
    return (
        <NavBar
            narrow={true}
            // fixed="top"
            brand="Some Group"
            theme="light"
            className="fixed-top"
            background="light"
            menuAlign="end"
        >
            {menu.map(({ title, href }, index) => (
                <NavLink
                    // title={title}
                    href={href}
                    active={activeIndex === index}
                >
                    {title}
                </NavLink>
            ))}
        </NavBar>
    );
}
