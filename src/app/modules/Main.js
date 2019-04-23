import * as React from 'react';

import Home from '../pages/Home';

class Main extends React.Component {
  render() {
    const {
      route,
      client,
     } = this.props;

    switch (route.name) {
      case 'homepage': 
        return <Home client={client} route={route}/>
      default:
        throw new Error('le application is not working, sorry buddy.');
    }
  };
}

export default Main;
