/**
 * 根组件
 */
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
/**
 * 引入antd全局样式
 */
import 'antd/dist/antd.css'
// main
import Admin from './layout'
function App() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Admin} />
        </Switch>
      </BrowserRouter>
    )
}

export default App

