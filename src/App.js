import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';

import Home from './containers/Home';
import WhatWeDo from './containers/WhatWeDo';
import About from './containers/About';
import FAQ from './containers/FAQ';
import Contact from './containers/Contact';
import Error from './containers/Error';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/whatwedo" component={WhatWeDo} />
            <Route path="/about"
              component={About} />
            <Route path="/FAQ"
              component={FAQ} />
            <Route path="/contact"
              component={Contact} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
