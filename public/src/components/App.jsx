import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './styles/style.js';

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