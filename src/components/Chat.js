import React from 'react';
import { Link } from 'react-router';
import Log from './Log';
import Word from './Word';
import {Grid, Row, Column} from 'react-cellblock';


export default class Chat extends React.Component {

  submit(){
    console.log("here?")
  }

  render() {
    return(
      <Grid>
        <Column width="2/3">
          Search Results!
        </Column>
        <Column width="1/3">
          <h4>Chat</h4>
            <input type="text" name="message" id="message"/>
            <button value="submit" onClick={this.submit}>Submit</button>
          <div id="chats"></div>
        </Column>
      </Grid>
    );
  }
}