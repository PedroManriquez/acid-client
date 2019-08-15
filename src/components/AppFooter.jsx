import React from 'react'
import { Layout } from 'antd'
import acid from '../assets/img/acid-logo.png'

const { Footer } = Layout

class AppFooter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logo_style: {
        width: '35%',
        minWidth: '10em',
        maxWidth: '25em'
      }
    }
  }
  render () {
    return (
      <Footer style={{ textAlign: 'center' }}>
        <p>Ant Design ©2018 Created by Ant UED</p>
        <img src={acid} alt="logo" style={this.state.logo_style}/>
      </Footer>
    )
  }
}

export default AppFooter
