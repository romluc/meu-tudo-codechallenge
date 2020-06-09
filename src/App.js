import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../src/components/Home';
import Cases from '../src/components/Cases';
import Prevention from '../src/components/Prevention';

import GlobalStyle from './styles/global';

const App = () => {
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
