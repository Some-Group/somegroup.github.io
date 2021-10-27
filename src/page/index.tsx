// eslint-disable-next-line no-unused-vars
import { createCell } from 'web-cell';
import { CellRouter } from 'cell-router/source';
import { SpinnerBox } from 'boot-cell/source/Prompt/Spinner';
import { history } from '../model';

import { routes } from '../routes';

import { Layout } from '../components/layout';

export function Page() {
    const loading = false;
    const Routers = routes.map((item, index) => {
        const PageComponent = item.component ? item.component() : null;
        return {
            paths: item.href === 'welcome' ? [item.href, ''] : [item.href],
            component: () => {
                return (
                    <Layout activeIndex={index}>
                        {PageComponent && <PageComponent></PageComponent>}
                    </Layout>
                );
            }
        };
    });

    return (
        <SpinnerBox cover={loading}>
            <CellRouter
                className="container"
                style={{ minHeight: '60vh' }}
                history={history}
                routes={Routers}
            />
        </SpinnerBox>
    );
}
