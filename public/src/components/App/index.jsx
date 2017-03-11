import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

class App extends Component {
  render() {
    const { className, ...props } = this.props;
    return(
      <div>
      {this.props.Pretzel[0].fakeData}
        <Log />
        <Word />
      </div>
    );
  }
}

export default App;