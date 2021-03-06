import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
// import Routes from './Routes';
import Home from '../pages/Home';
import Stats from '../pages/Stats';
import HowItWorks from '../pages/HowItWorks';
import Participate from '../pages/Participate';
import About from '../pages/About';
// import Posts from '../pages/Posts';

class Main extends React.Component {
  render() {
    return (
      <Router>
        <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/statistics" component={Stats} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/participate" component={Participate} />
        <Route path="/about" component={About} />
        {/* <Route path="/posts" component={Posts} /> */}
        <Footer/>
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
