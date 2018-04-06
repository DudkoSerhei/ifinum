import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import './input-calendar.component.css';
import 'react-day-picker/lib/style.css';

class InputCalendar extends Component {
  render() {
    const { value, disableDateAfter, disableDateBefore, placeholder } = this.props;

    return (
      <label className="input-calendar">
        <DayPickerInput
          placeholder={placeholder}
          value={value || ''}
          inputProps={{
            onChange: this.onInputChange,
            onKeyDown: this.onKeyPress,
          }}
          dayPickerProps={{
            disabledDays: { after: disableDateAfter, before: disableDateBefore },
          }}
          onDayChange={this.handleChange}
        />
        <div className="icon-calendar">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="26" height="26">
            <defs><path id="a" d="M11 13H4v2h7v-2zm5 5H2V7h14v11zm0-16h-1V0h-2v2H5V0H3v2H2C.89 2 .01 2.9.01 4L0 18a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 7H4v2h10V9z"/></defs><use transform="translate(4 3)" xlinkHref="#a"/>
          </svg>
        </div>
      </label>
    );
  }

  handleChange = (day) => {
    if (this.props.onChange) {
      this.props.onChange(day);
    }
    if (this.props.onDaySelect) {
      this.props.onDaySelect(day);
    }
  }

  onInputChange = (e) => {
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  }

  onKeyPress = (e) => {
    if (e.key !== 'Tab') {
      e.preventDefault();
    }
  };
}

InputCalendar.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  onDaySelect: PropTypes.func,
  placeholder: PropTypes.string,
  disableDateBefore: PropTypes.instanceOf(Date),
  disableDateAfter: PropTypes.instanceOf(Date),
};

export default InputCalendar;