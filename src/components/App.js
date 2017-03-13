import React from 'react';
import { Link } from 'react-router';
import Log from './Log';
import Word from './Word';

export default class App extends React.Component {
  componentDidMount() {
     console.log('component has mounted');
      gapi.signin2.render('g-signin2', {
        'scope': 'https://www.googleapis.com/auth/plus.login',
        'width': 200,
        'height': 200,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': this.onSignIn
      })
  }

  render() {
    return(
      <div>
      <Link to="/test"> Click me </Link>
        <Log />
        <Word />
      </div>
    );
  }
}