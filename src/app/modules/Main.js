import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from '../pages/Home';
import Stats from '../pages/Stats';
import HowItWorks from '../pages/HowItWorks';
import Participate from '../pages/Participate';
import About from '../pages/About';
import Posts from '../pages/Posts';

import Navbar from './Navbar';

class Main extends React.Component {
  render() {
    return (
      <Router>
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route path="/stats" component={Stats} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/participate" component={Participate} />
        <Route path="/about" component={About} />
        <Route path="/posts" component={Posts} />
      </Router>
    )
  };
}

// const moveToTopOfThePagePlugin = (router, dependencies) => ({
//   onTransitionStart: (toState, fromState) => {
//     window.scroll(0,0);
//     window.scrollTo(0, 0);
//   }
// });


export default Main;
