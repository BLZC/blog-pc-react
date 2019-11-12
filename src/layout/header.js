import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Menu, Icon, Input, Button, Badge, Avatar, Dropdown } from 'antd';
import Login from './components/login'

function Header (props) {
    const [current, setcurrent] = useState()
    const [islogin, setislogin] = useState(false)
    const [showmodal, setshowmodal] = useState(false)

    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
              我的主页
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
              我的消息
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
              退出
            </a>
          </Menu.Item>
        </Menu>
    );
    let avator = []
    if (islogin) {
        avator.push(               
            < Dropdown overlay = { menu } >
                <Avatar size="large" className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </Dropdown>)
    } else {
        avator.push(
            <div key="index" className="header-right">
                <span className="header-right-item" onClick={() => setshowmodal(true)}>登录</span>
                |
                <span className="header-right-item" >注册</span>
            </div>
        )
    }
    function handleClick(e) {
        setcurrent(e.key);
    };
    function linkTo() {
        props.history.push('/home')
    }
    // function dialogShow(pma) {
    //     console.log(pma)
    //     setshowmodal(true)
    // }
    return (
        <div className="header">
            <Login show={showmodal} close={() => setshowmodal(false)}></Login>
            <Row>
                <Col span={3} className="logo">
                    <img src="http://pzpxyio9x.bkt.clouddn.com/logo.svg" alt="logo" onClick={linkTo}/>
                    <span className="logo-text">IT之家</span>
                </Col>    
                <Col span={10}>
                <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                    <Menu.Item key="p1">
                        每日一记
                    </Menu.Item>
                    <Menu.Item key="p2">
                        读书笔记
                    </Menu.Item>
                    <Menu.Item key="p3">
                        坑点记录
                    </Menu.Item>
                    <Menu.Item key="p4">
                        技术社区
                    </Menu.Item>
                    <Menu.Item key="git">
                    <a href="https://github.com/BLZC?tab=repositories" target="_blank" rel="noopener noreferrer">
                        github
                    </a>
                        </Menu.Item>
                        <Menu.Item key="blog">
                    <a href="https://github.com/BLZC?tab=repositories" target="_blank" rel="noopener noreferrer">
                        博客园
                    </a>
                    </Menu.Item>
                </Menu>
                </Col>
                <Col span={3}>
                    <Input placeholder="请输入搜素内容" />
                </Col>
                <Col span={2} offset={1}>
                    <Button type="primary" icon="edit">写文章</Button>
                </Col>
                <Col span={2} className="icon">
                <Badge count={5}>
                    <Icon type="bell" theme="twoTone" className="icon-bell" />
                </Badge>
                </Col>
                <Col span={3} className="avatar-col">
                    {avator}
                </Col>
            </Row>
        </div>
    )
}

export default withRouter(Header)