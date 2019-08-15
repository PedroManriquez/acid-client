import React from 'react'
import { Divider, Row, Col, Card } from 'antd'
import socketIO from 'socket.io-client'

class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ws_url: 'http://localhost:3500',
      cities: [
        {
          name: 'Santiago',
          country_code: 'CL',
          lat: -33.4577664,
          lng: -70.6568192,
          time: new Date(),
          tmp: '20 C°'
        }, {
          name: 'Zurich',
          country_code: 'CH',
          lat: 47.3723941,
          lng: 8.5423328,
          time: new Date(),
          tmp: '20 C°'
        }, {
          name: 'Auckland',
          country_code: 'NZ',
          lat: -36.852095,
          lng: 174.7631803,
          time: new Date(),
          tmp: '20 C°'
        }, {
          name: 'Sydney',
          country_code: 'AU',
          lat: -33.8548157,
          lng: 151.2164539,
          time: new Date(),
          tmp: '20 C°'
        }, {
          name: 'Londres',
          country_code: 'UK',
          lat: 51.5073219,
          lng: -0.1276474,
          time: new Date(),
          tmp: '20 C°'
        }, {
          name: 'Georgia',
          country_code: 'USA',
          lat: 32.3293809,
          lng: -83.1137366,
          time: new Date(),
          tmp: '20 C°'
        }
      ]
    }
  }

  componentDidMount () {
    const socket = socketIO(this.state.ws_url)
    socket.on('reload', message => {
      console.log('message from hell')
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
                  <p>Time: {city.time.toLocaleTimeString()}</p>
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
