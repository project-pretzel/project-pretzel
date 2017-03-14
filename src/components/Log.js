import React from 'react';
import GoogleLogin from 'react-google-login';

export default class Log extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    // This binding is necessary to make `this` work in the callback
  }

  responseGoogle(response){
    console.log(response);
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        />
      </div> 
    );
  }
}
