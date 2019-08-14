import React from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

class AppFooter extends React.Component {
  render () {
    return (
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    )
  }
}

export default AppFooter
