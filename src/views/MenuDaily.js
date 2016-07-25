import map from 'lodash/map';
import moment from 'moment';
import React, { PropTypes, Component } from 'react';
import './MenuDaily.css';
import MenuItem from '../components/MenuItem';
import MenuItemSelected from '../components/MenuItemSelected';

class MenuDaily extends Component {

  static contextTypes = {
    database: PropTypes.object.isRequired,
  };

  state = {
    date: moment(),
    menus: {},
  };

  componentWillMount() {
    // [START databaselistener]
    this.context.database
      .ref(`menus/${this.state.date.format('YYYY-MM-DD')}`)
      .on('value', this.handleUpdateMenu);
  }

  handleUpdateMenu = (snap) => {
    this.setState({ menus: snap ? snap.val() : {} });
  };

  handleSelected = (menuId) => {
    this.setState({ selected: menuId });
  };

  render() {
    const { menus, selected } = this.state;

    return (
      <div className="MenuDaily">
        {map(menus, (menu, idx) => selected === idx ?
          <MenuItemSelected
            key={idx}
            menu={menu}
          /> :
          <MenuItem
            key={idx}
            menu={menu}
            onSelected={this.handleSelected.bind(this, idx)}
          />
        )}
      </div>
    );
  }
}

MenuDaily.propTypes = {
};

export default MenuDaily;
