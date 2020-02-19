import React from 'react';
import "./App.css";
import "./index.css";
import logo from './logo.svg';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom"

import ArticleListing from './pages/ArticleListing'; // "./" means that it comes from the same level
import Article from './pages/Article';

function App() { /**/
  return (
    <div className ="App">
      <Router> 
        <Switch>
          <Route path="/article/:id">
            <Article />
          </Route>
          <Route path="/">
            <ArticleListing />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
/*
switch(value) {
  case: '' return '';
  default: return 'No Idea';
} */