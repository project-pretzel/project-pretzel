import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

export default class Log extends React.Component {

  constructor(props) {
    super(props);
     var jwt = localStorage.getItem("jwt");
    //auth token should be saved as a JSON string, but just in case
    try {
      var googleToken = JSON.parse(jwt); //pass the googleToken to the log component to parse
    } catch(e) {
      alert(e); // error in the above string (in this case, yes)!
    } 

    this.state = {
      loggedIn: false
    };

    if(googleToken) {
      this.state = {
        gid: googleToken.data.sub, //sub is the gid
        email: googleToken.data.email,
        givenName: googleToken.data.given_name,
        familyName: googleToken.data.family_name,
        imageUrl: googleToken.data.picture,
        loggedIn: true 
      };
    }
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

    axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${response.tokenId}`)
    .then((googleToken) => {
      var jwt = googleToken;
      this.loginUser(jwt);
      return googleToken;
    })
    .then((googleToken) => {
      axios.post('/users', googleToken).
      then((response)=> {
        console.log('SQL posted');
      });
    });
  }

  loginUser(jwt) {
    // We save the JWT in localStorage to keep the user authenticated. We’ll learn more about this later.
    localStorage.setItem("jwt", JSON.stringify(jwt));
    console.log('This is for logging in');
    // Send the action to all stores through the Dispatcher
  }

  logoutUser() {
    localStorage.removeItem("jwt");
    this.setState({
      loggedIn: false
    });

  }

  render() {
    return (
      <div>
        <GoogleLogin
        clientId="791653946192-gial2vpbjr0pdtg6k90a9jrfja3c5mgl.apps.googleusercontent.com"
        buttonText={!(this.state.loggedIn) ? 'Sign in with Google ' : 'Hi, ' + this.state.givenName} 
        onSuccess={this.responseGoogle.bind(this)}
        onFailure={this.responseGoogle}
        style={{color: '#066', 'border-radius': '10px'}}
        />
        <div className='signout'> {this.state.loggedIn ? `Not ${this.state.givenName}?` : '' }</div>
        <a id='signout' onClick={this.logoutUser.bind(this)}> {this.state.loggedIn ? `Click here to sign out.` : '' }</a>

      </div> 
    );
  }
}