/*
 * @Author: Boiao Ch
 * @Date: 2021-01-11 14:44:32
 * @Last Modified by: Boiao Ch
 * @Last Modified time: 2021-01-11 16:30:43
 */

import { createCell, Fragment } from 'web-cell';

export default function Home() {
    return (
        <Fragment>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: 'calc(100vh - 120px)'
                }}
            >
                <h1 className="display-3 text-center my-10">
                    因为热爱，让我们汇聚于此.
                </h1>
                <h2 className="text-right">学习、分享、进步</h2>
            </div>
        </Fragment>
    );
}
