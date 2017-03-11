import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

  render() {
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