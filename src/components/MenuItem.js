import React, { PropTypes, Component } from 'react';
import './MenuItem.css';
import { Card, CardTitle, CardText, CardActions } from 'react-mdl/lib/Card';
import Button from 'react-mdl/lib/Button';

class MenuItem extends Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { menu } = this.props;

    return (
      <div className="MenuItem">
        <Card
          className="MenuItem__Card"
          shadow={0}
        >
          <CardTitle
            className="MenuItem__Card__Title"
            style={{background: `#DDD url(${menu.imageUrl}) center / cover`}}
          >{menu.name}</CardTitle>

          <CardText>
            <strong>{menu.name}</strong>
            <div>{menu.description}</div>
          </CardText>

          <CardActions border className="MenuItem__Card__Actions">
            <Button
              colored
              onTouchTap={this.props.onSelected}
            >Order</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

MenuItem.propTypes = {
  menu: PropTypes.object.isRequired,
  onSelected: PropTypes.func.isRequired,
};

MenuItem.propDefault = {
  menu: {},
};

export default MenuItem;
