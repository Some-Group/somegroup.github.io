/*
 * @Author: Boiao Ch
 * @Date: 2021-01-11 14:44:32
 * @Last Modified by: Boiao Ch
 * @Last Modified time: 2021-01-11 16:30:43
 */

// eslint-disable-next-line no-unused-vars
import { createCell, Fragment } from 'web-cell';
// import { Progress } from 'boot-cell/source/Reminder/Progress';

export default function Home() {
    return (
        <>
            {/* <div className="jumbotron">
                <h1 className="display-3">Some Group</h1>
                <p className="lead">This is a new beginning.</p>
                <Progress status="success" percent={10} />
            </div> */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: 'calc(100vh - 120px)'
                }}
            >
                <h1 className="display-3 text-center my-10">Comming soon!</h1>
            </div>
        </>
    );
}
