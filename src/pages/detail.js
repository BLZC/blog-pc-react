import React, {useState} from 'react';
import { Row, Col, Avatar, Button } from 'antd';
import './css/detail/detail.css';
function Detail () {
    const [attentionText, setattentionText] = useState('关注')
    const [buttonType, setbuttonType] = useState('normal')
    function attention () {
        if (attentionText === '关注') {
            setattentionText('已关注')
            setbuttonType('primary')
        } else {
            setattentionText('关注')
            setbuttonType('normal')
        }
    }
    return (
        <div className="detail">
            <Row>
                <Col span={19} className="detail-left">
                    <div className="detail-header">
                        <Row>
                            <Col span={2}>
                                <Avatar size="large" className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            </Col>
                            <Col span={18}>
                                <div className="detail-author">
                                    小皮
                                </div>
                                <div className="detail-time">
                                    2019/1/2
                                </div>
                            </Col>
                            <Col span={3}>
                                <Button type={buttonType} onClick={attention}>{attentionText}</Button>
                            </Col>
                        </Row>
                    </div>
                    <div className="detail-title">
                                JS学习笔记
                    </div>
                </Col>
                <Col span={4} offset={1} className="detail-right">
                    
                </Col>
            </Row>
        </div>
    )
}

export default Detail