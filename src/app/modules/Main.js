import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
import Routes from './Routes';

class Main extends React.Component {
  render() {
    return (
      <Router>
        <Header/>
        <Routes/>
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
