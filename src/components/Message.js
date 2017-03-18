import React from 'react';

export default class Message extends React.Component {
  constructor(props) {
    super(props);

    console.log("PROPS", props)
    
  }
  render() {
    return (
      <div >
        MESSAGE TEST
      </div>
    );
  }
}