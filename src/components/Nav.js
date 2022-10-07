import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import './styles.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header className="header">
          <div className="header-nav">
            <Link className="header-nav__item" to="/">ReactAnimations</Link>
            <Link className="header-nav__item" to="/ReactReveal/">ReactReveal</Link>
            <Link className="header-nav__item" to="/ExampleCss/">ExampleCss</Link>
            <Link className="header-nav__item" to="/ReactTransitionGroup/">ReactTransitionGroup</Link>
            {/* <Link className="header-nav__item" to="/ReactMotion/">ReactMotion</Link> */}
          </div>
          <a href="https://github.com/russellakram/react-animation" className="header__link" target="_blank" rel="noreferrer">GitHub</a>
        </header>
      </Fragment>
    );
  }
}

export default App;
