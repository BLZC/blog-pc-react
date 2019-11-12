import React, {useState} from 'react';
import { Row, Col, Card, Icon } from 'antd';
import { withRouter } from 'react-router-dom' 
import './css/home/home.css';

function Home (props) {
    const [likes, setlikes] = useState(10)
    const [comment, setcomment] = useState(12)
    const [likeclass, setlikeclass] = useState()
    function linkTo(){
        props.history.push('/detail')
    }
    function Good () {
        if (likeclass) {
            setlikeclass()
        } else {
            setlikeclass('liked');
        }
        setlikes(likes + 1)
    }
    let lists = []
    for (let i=0; i < 10; i++) {
        lists.push(
            <Card className="card" key={i}>
                <div className="card-header"> 
                    <span className="author">小皮&nbsp;&nbsp;&nbsp;10小时前</span>
                </div>
                    <Row>
                    <Col span={19}>
                        <div className="card-title" onClick={linkTo}>
                            JS学习笔记
                        </div>
                        <div className="card-footer">
                            <span className="minitem">
                                <Icon type="like" className={likeclass} theme="filled" style={{ cursor: 'pointer' }} onClick={Good} />
                            &nbsp;&nbsp;{likes}
                            </span>
                            <span className="minitem">
                            <Icon type="message" theme="filled" style={{cursor: 'pointer'}}/>
                                &nbsp;&nbsp;{comment}
                            </span>
                        </div>
                        </Col>
                        <Col span={4} offset={1}>
                            <img className="card-img" src="http://pzpxyio9x.bkt.clouddn.com/blog-img2.jpg" alt="img" />
                        </Col>
                    </Row>
            </Card >
        )
    }
    return (
        <div className="home">
            <Row>
                <Col span={18} className="home-left">
                    {lists}
                </Col>
                <Col span={5} offset={1} className="home-right">
                </Col>
            </Row>
        </div>
    )
}

export default withRouter(Home)