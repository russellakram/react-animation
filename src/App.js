import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactTransitionGroup from './pages/ReactTransitionGroup';
import ReactAnimations from './pages/ReactAnimations';
import ReactMotion from './pages/ReactMotion';
import ExampleCss from './pages/ExampleCss';
import ReactReveal from './pages/ReactReveal';
import "antd/dist/antd.css";
import './App.css';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <div className="main-content">
            <Nav />
            <Route path="/" exact component={ReactAnimations} />
            <Route path="/ReactReveal/" component={ReactReveal} />
            <Route path="/ExampleCss/" component={ExampleCss} />
            <Route path="/ReactMotion/" component={ReactMotion} />
            <Route path="/ReactTransitionGroup/" component={ReactTransitionGroup} />
          </div>
        </Router>
      </Fragment>
    );
  }
}

export default App;
