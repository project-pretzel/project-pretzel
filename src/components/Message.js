import React from 'react';

export default class Message extends React.Component {
  constructor(props) {
    super(props);

    console.log("PROPS", props)
    
  }

  prettyDate(ugly){
    var date = ugly.split("T")[0];
    var time = ugly.split("T")[1];
    var hour = (time.split(":")[0] - 5) % 12;
    var min = time.split(":")[1];
    var year = date.split("-")[0];
    var month = date.split("-")[1];
    var day = date.split("-")[2];

    return month + '/' + day + '/' + year + ' at ' + hour + ':' + min;
  }
  render() {
    return (
      <div>
        <div class="msg-name">
          {this.props.message.name}
        </div>
        <div class="msg-text">
          {this.props.message.msgtext}
        </div>
        <div class="msg-time">
          {this.prettyDate(this.props.message.msgtime)}
        </div>
      </div>
    );
  }
}