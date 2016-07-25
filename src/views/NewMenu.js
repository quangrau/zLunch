import faker from 'faker';
import React, { PropTypes, Component } from 'react';
import Button from 'react-mdl/lib/Button';
import Textfield from 'react-mdl/lib/Textfield';
import Icon from 'react-mdl/lib/Icon';
import './NewMenu.css';

class NewMenu extends Component {

  static contextTypes = {
    firebase: PropTypes.object.isRequired,
    database: PropTypes.object.isRequired,
  };

  state = {
    name: '',
    date: new Date(),
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleDateChange = (e) => {
    this.setState({ date: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      date: this.state.date,
      description: faker.lorem.sentence(),
      imageUrl: faker.image.food(),
      status: 1,
    };

    this.context
      .database.ref(`menus/${data.date}`)
      .push(data)
      .then(res => {
        // console.log(res);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  render() {
    return (
      <div className="NewMenu">
        <form
          onSubmit={this.handleSubmit}
        >
          <Textfield
            ref="name"
            label="Menu name..."
            onChange={this.handleNameChange}
            style={{width: '100%'}}
          />

          <div className="mdl-textfield">
            <input
              ref="date"
              type="date"
              placeholder="Date"
              className="NewMenu__input mdl-textfield__input"
              onChange={this.handleDateChange}
            />
          </div>

          <div className="NewMenu__footer">
            <Button
              raised
              colored
              type="submit"
            >
              <Icon name="add" /> New Menu
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

NewMenu.propTypes = {
};

export default NewMenu;

