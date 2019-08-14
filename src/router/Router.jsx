import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';

class RouterView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routes
    }
  }

  render() {
    return (
      <Switch>
        {
          this.state.routes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={
                props => (
                  <route.component {...props} routes={route.routes} /> // pass the sub-routes down to keep nesting
                )
              }
            />
          ))
        }
      </Switch>
    );
  }
}

export default RouterView;
