import React from 'react'
import { Divider, Row, Col, Card } from 'antd'
import Axios from 'axios'
import socketIO from 'socket.io-client'

class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ws_url: 'http://localhost:3500',
      cities: []
    }
    this.loadData = this.loadData.bind(this)
  }

  componentDidMount() {
    const socket = socketIO(this.state.ws_url)
    this.loadData() // load API data
    socket.on('reload', message => {
      console.log('message from hell')
    })
  }

  loadData() {
    Axios.get('http://localhost:3500/cities')
      .then(response => {
        console.log(response)
        this.setState({ cities: response.data.body })
      })
      .catch(err => {
        setTimeout(() => {
          this.loadData()
        }, 1000 * 2)
      })
  }

  render() {
    return (
      <div>
        <h3>Weather page!</h3>
        <Divider />
        <Row gutter={32}>
          {
            this.state.cities.map((city, i) => (
              <Col style={{ marginBottom: '1em' }} key={i} xs={24} sm={12} md={12} lg={8} xl={8}>
                <Card title={city.name} extra={city.country_code} style={{ width: '100%' }}>
                  <p>Latitude: {city.lat}</p>
                  <p>Longitude: {city.lng}</p>
                  <p>Time: {city.time}</p>
                  <p>Temperature: {city.tmp}</p>
                </Card>
              </Col>
            ))
          }
        </Row>
      </div>
    )
  }
}

export default Weather
