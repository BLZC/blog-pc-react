import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
// 首页
import Home from '../pages/home'
// 个人信息
import About from '../pages/about'
// 内容详情
import Detail from '../pages/detail'

export default () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/detail" component={Detail} />
    <Redirect to="/home" />
  </Switch>
)
