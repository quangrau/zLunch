import React, { PropTypes, Component } from 'react';
import './MenuItemSelected.css';
import { Card, CardTitle, CardActions } from 'react-mdl/lib/Card';
import Button from 'react-mdl/lib/Button';
import Icon from 'react-mdl/lib/Icon';

class MenuItemSelected extends Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { menu } = this.props;

    return (
      <div className="MenuItemSelected">
        <Card
          className="MenuItemSelected__Card"
          shadow={0}
        >
          <CardTitle
            className="MenuItemSelected__Card__Title"
          >
            <h4 style={{marginTop: '0'}}>
              {menu.name}
            </h4>
          </CardTitle>

          <CardActions border className="MenuItemSelected__Card__Actions">
            <Button colored style={{color: '#FFF'}}>Selected</Button>
            <div className="mdl-layout-spacer"></div>
            <Icon name="check" />
          </CardActions>
        </Card>
      </div>
    );
  }
}

MenuItemSelected.propTypes = {
  menu: PropTypes.object,
};

MenuItemSelected.propDefault = {
  menu: {},
};

export default MenuItemSelected;
