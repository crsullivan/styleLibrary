import React from 'react';
import './App.css';
import { Router, Route, Switch } from "react-router-dom";
import Home from "./Home.jsx"
import history from "./utils/History";
import Example1 from './example pages/Example1'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faKey);

function App() {
  return (
    <Router history={history}>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/example1" component={Example1} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;