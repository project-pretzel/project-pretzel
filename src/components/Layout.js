// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router';
import Log from './Log';

export default class Layout extends React.Component {
  render() {
    return (
    <div>
      <nav id="mainNav" className="navbar navbar-default navbar-custom affix-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#page-top">Project Pretzel</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li className="page-scroll">
                <Log />
              </li>
            </ul>
          </div>
        </div>
      </nav>
        
        <div className="app-container">
          <header>
            <Link to="/">
              Back to Index
            </Link>
            <Link to="/test">
              Where does this lead?
            </Link>
            <div className="app-content">{this.props.children}</div>
          </header>
          This is the index
          <footer>
            <p>
              This is a demo app to showcase universal rendering and routing with <strong>React</strong> and <strong>Express</strong>.
            </p>
          </footer>
        </div>
      </div>
    );
  }
}