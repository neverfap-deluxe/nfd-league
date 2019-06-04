import React from 'react';
import { Switch, Route } from 'react-router';

import Home from '../pages/Home';
import Stats from '../pages/Stats';
import HowItWorks from '../pages/HowItWorks';
import Participate from '../pages/Participate';
import About from '../pages/About';
// import Posts from '../pages/Posts';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/statistics" component={Stats} />
    <Route path="/how-it-works" component={HowItWorks} />
    <Route path="/participate" component={Participate} />
    <Route path="/about" component={About} />
    {/* <Route path="/posts" component={Posts} /> */}
  </Switch>
);
