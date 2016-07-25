import React, { PropTypes, Component } from 'react';
import { Header } from 'react-mdl/lib/Layout';

class AppHeader extends Component {

  render() {
    return (
      <Header
        title={
          <span>
            <span style={{ color: '#ddd' }}>zLunch / </span>
            <strong>{this.props.title}</strong>
          </span>
        }
      />
    );
  }
}

AppHeader.propTypes = {
  title: PropTypes.string,
};

export default AppHeader;
