import React from 'react';
import { Link } from 'react-router';
import Log from './Log';
import Word from './Word';
import trends from '../data/trends.js';
import 'whatwg-fetch'

export default class App extends React.Component {
  

  render() {
    
    return(
      <div>
        <Word />
        <Link to='/test'> This is a test </Link>
      </div>
    );
  }
}