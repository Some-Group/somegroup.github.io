/*
 * @Author: Boiao Ch
 * @Date: 2021-01-11 19:18:50
 * @Last Modified by: Boiao Ch
 * @Last Modified time: 2021-01-11 19:42:45
 */

// eslint-disable-next-line no-unused-vars
import { component, mixin, watch, createCell } from 'web-cell';
import { Card } from 'boot-cell/source/Content/Card';

export default () => {
    return (
        <div style={{ marginTop: '120px' }}>
            <div className="row">
                <div className="col-4">
                    <Card
                        image="https://tech-query.me/medias/featureimages/6.jpg"
                        title="Utils"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                    ></Card>
                </div>
                <div className="col-4">
                    <Card
                        image="https://tech-query.me/medias/featureimages/6.jpg"
                        title="Card title"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                    ></Card>
                </div>

                <div className="col-4">
                    <Card
                        image="https://tech-query.me/medias/featureimages/6.jpg"
                        title="Card title"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                    ></Card>
                </div>
            </div>
            <div className="row" style={{ marginTop: '20px' }}>
                <div className="col-4">
                    <Card
                        image="https://tech-query.me/medias/featureimages/6.jpg"
                        title="Card title"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                    ></Card>
                </div>
                <div className="col-4">
                    <Card
                        image="https://tech-query.me/medias/featureimages/6.jpg"
                        title="Card title"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                    ></Card>
                </div>

                <div className="col-4">
                    <Card
                        image="https://tech-query.me/medias/featureimages/6.jpg"
                        title="Card title"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                    ></Card>
                </div>
            </div>
        </div>
    );
};
