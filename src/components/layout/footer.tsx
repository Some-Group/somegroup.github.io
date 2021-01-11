/*
 * @Author: Boiao Ch
 * @Date: 2021-01-11 10:51:43
 * @Last Modified by: Boiao Ch
 * @Last Modified time: 2021-01-11 18:21:29
 */
// eslint-disable-next-line no-unused-vars
import { createCell } from 'web-cell';

export function Footer() {
    return (
        <footer className="text-right bg-light py-2 px-2 fixed-bottom">
            Proudly developed with
            <a className="mx-2" target="_blank" href="https://web-cell.dev/">
                WebCell v2
            </a>
            &amp;
            <a
                className="mx-2"
                target="_blank"
                href="https://bootstrap.web-cell.dev/"
            >
                BootCell v1
            </a>
            &copy;
            <a className="mx-2" target="_blank" href="https://somegroup.dev/">
                SomeGroup.Dev
            </a>
        </footer>
    );
}
