/*
 * @Author: Boiao Ch
 * @Date: 2021-01-11 10:51:43
 * @Last Modified by: Boiao Ch
 * @Last Modified time: 2021-01-11 15:26:01
 */
// eslint-disable-next-line no-unused-vars
import { createCell, Fragment, WebCellElement } from 'web-cell';
import { Footer } from './footer';
import { Header } from './header';
import { routes } from '../../routes';

interface LayoutProps {
    defaultSlot?: WebCellElement;
    activeIndex?: number;
}

export function Layout({ defaultSlot, activeIndex }: LayoutProps) {
    return (
        <>
            <Header activeIndex={activeIndex} menu={routes}></Header>
            <div
                className="container"
                style={{ paddingTop: '20px', paddingBottom: '20px' }}
            >
                {defaultSlot}
            </div>
            <Footer></Footer>
        </>
    );
}
