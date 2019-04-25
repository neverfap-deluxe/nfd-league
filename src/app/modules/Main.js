import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from '../pages/Home';

class Main extends React.Component {
  render() {
    const { client } = this.props;
    return (
      <Router>
        
        <Route exact path="/" component={Home} />
        {/* <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} /> */}
      </Router>
    )
  };
}

export default Main;
