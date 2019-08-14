import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'

const { Header } = Layout

class AppHeader extends React.Component {
  render () {
    return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
          <Menu.Item key="1">
            <Link to="/">Weather</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/cities">Cities</Link>
          </Menu.Item>
        </Menu>
      </Header>
    )
  }
}

export default AppHeader
