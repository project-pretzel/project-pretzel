// src/components/IndexPage.js
import React from 'react';
//import AthletePreview from './AthletePreview';
import trends from '../data/trends';
import App from './App'

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
      <App />
        <div className="trends-selector">
        </div>
      </div>
    );
  }
}