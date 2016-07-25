import moment from 'moment';
import React, { PropTypes, Component } from 'react';
import Icon from 'react-mdl/lib/Icon';
import './DateSlider.css';

class DateSlider extends Component {

  handleBack = () => {
    this.props.onDateChange(moment(this.props.date).subtract(1, 'days'));
  }

  handleNext = () => {
    this.props.onDateChange(moment(this.props.date).add(1, 'days'));
  }

  render() {
    return (
      <div className="DateSlider">
        <div className="DateSlider__prev">
          <Icon
            name="arrow_back"
            onTouchTap={this.handleBack}
          />
        </div>
        <div className="DateSlider__date">
          {moment(this.props.date).format('DD/MM/YYYY')}
        </div>
        <div className="DateSlider__next">
          <Icon
            name="arrow_forward"
            onTouchTap={this.handleNext}
          />
        </div>
      </div>
    );
  }
}

DateSlider.propTypes = {
  date: PropTypes.object.isRequired,
  onDateChange: PropTypes.func.isRequired,
};

export default DateSlider;
