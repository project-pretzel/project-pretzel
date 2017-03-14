import React from 'react';
import GoogleLogin from 'react-google-login';

export default class Log extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gid: null,
      email: null,
      givenName: null,
      familyName: null,
      imageUrl: null,
      loggedIn: false
    };
    // This binding is necessary to make `this` work in the callback
  }

  responseGoogle(response){
    
    this.setState({
      gid: response.profileObj.googleId,
      email: response.profileObj.email,
      givenName: response.profileObj.givenName,
      familyName: response.profileObj.familyName,
      imageUrl: response.profileObj.imageUrl,
      loggedIn: true
      });
    console.log(this.state);

  }

  render() {
    return (
      <div>
        <GoogleLogin
        clientId="791653946192-gial2vpbjr0pdtg6k90a9jrfja3c5mgl.apps.googleusercontent.com"
        buttonText={!(this.state.loggedIn) ? 'Login' : 'Hi, ' + this.state.givenName} 
        onSuccess={this.responseGoogle.bind(this)}
        onFailure={this.responseGoogle}
        />
      </div> 
    );
  }
}
