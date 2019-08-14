import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Layout } from 'antd'
import RouterView from './router/Router'
import UIComponents from './components/'

const { Content } = Layout
const { AppHeader, AppFooter} = UIComponents

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Layout className="layout" style={{ minHeight: '100vh' }}>
            <AppHeader />
            <Content style={{ padding: '0 50px', marginTop: 80 }}>
              <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <RouterView />
              </div>
            </Content>
            <AppFooter />
          </Layout>
        </div>
      </Router>
    )
  }
}

export default App
