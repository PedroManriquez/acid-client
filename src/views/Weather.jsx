import React from 'react';
import { Divider, Row, Col, Card } from 'antd';

class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: [
        {
          name: 'Santiago',
          country_code: 'CL',
          lat: 123412423,
          lng: 987608769,
          time: new Date(),
          tmp: '20 C°'
        }, {
          name: 'Santiago',
          country_code: 'CL',
          lat: 123412423,
          lng: 987608769,
          time: new Date(),
          tmp: '20 C°'
        }, {
          name: 'Santiago',
          country_code: 'CL',
          lat: 123412423,
          lng: 987608769,
          time: new Date(),
          tmp: '20 C°'
        }, {
          name: 'Santiago',
          country_code: 'CL',
          lat: 123412423,
          lng: 987608769,
          time: new Date(),
          tmp: '20 C°'
        }, {
          name: 'Santiago',
          country_code: 'CL',
          lat: 123412423,
          lng: 987608769,
          time: new Date(),
          tmp: '20 C°'
        }, {
          name: 'Santiago',
          country_code: 'CL',
          lat: 123412423,
          lng: 987608769,
          time: new Date(),
          tmp: '20 C°'
        }
      ]
    }
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
                  <p>Time: {city.time.toString()}</p>
                  <p>Temperature: {city.tmp}</p>
                </Card>
              </Col>
            ))
          }
        </Row>
      </div>
    );
  }
}

export default Weather;
