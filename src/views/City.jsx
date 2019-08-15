import React from 'react'
import { Divider } from 'antd'
import logo from '../assets/img/logo.svg'

class City extends React.Component {
  render() {
    return (
      <div>
        <h3>City page!</h3>
        <Divider />
        <img src={logo} className="app-logo" alt="logo" />
      </div>
    )
  }
}

export default City
