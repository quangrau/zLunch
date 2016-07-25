import React, { PropTypes, Component } from 'react';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

class Root extends Component {

  static childContextTypes = {
    firebase: PropTypes.object.isRequired,
    database: PropTypes.object.isRequired,
  };

  getChildContext() {
    return {
      firebase: this.props.firebase,
      database: this.props.database,
    };
  }

  render() {
    return (
      <Router 
        history={browserHistory}
        routes={routes}
      />
    );
  }
}

Root.propTypes = {
  firebase: PropTypes.object.isRequired,
  database: PropTypes.object.isRequired,
};

export default Root;
