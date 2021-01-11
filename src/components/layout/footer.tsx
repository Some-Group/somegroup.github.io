/*
 * @Author: Boiao Ch
 * @Date: 2021-01-11 10:51:43
 * @Last Modified by: Boiao Ch
 * @Last Modified time: 2021-01-11 15:18:10
 */
// eslint-disable-next-line no-unused-vars
import { createCell } from 'web-cell';

export function Footer() {
    return (
        <footer className="text-right bg-light py-2 fixed-bottom">
            Proudly developed with
            <a className="mx-1" target="_blank" href="https://web-cell.dev/">
                WebCell v2
            </a>
            &amp;
            <a
                className="mx-1"
                target="_blank"
                href="https://bootstrap.web-cell.dev/"
            >
                BootCell v1
            </a>
            &nbsp;&copy;&nbsp;SomeGroup.Dev&nbsp;&nbsp;
        </footer>
    );
}
