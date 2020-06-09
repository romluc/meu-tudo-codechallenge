import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Cases from '../src/pages/Cases';
import Prevention from '../src/pages/Prevention';

import GlobalStyle from './styles/global';

const App = () => {
  // data from aAP passed down as context?
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cases" component={Cases} />
          <Route path="/prevention" component={Prevention} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
