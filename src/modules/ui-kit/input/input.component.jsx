import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './input.component.css';

class Input extends Component {
  render() {
    const { placeholder } = this.props;
    const value = this.props.value || '';

    return (
      <div className="input-container">
        <label className="input-label">
          <input
            className="input"
            placeholder={placeholder}
            type="text"
            onChange={this.onInputChange}
            value={value}
          />
          <div className="icon-input">
            <svg height="32" width="32" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 16a4.007 4.007 0 0 0-3.307-3.94l-.347-.835a4.006 4.006 0 0 0-.447-5.124c-1.346-1.346-3.599-1.521-5.125-.448l-.835-.346A4.006 4.006 0 0 0 16 2a4.007 4.007 0 0 0-3.94 3.307l-.835.346a4.007 4.007 0 0 0-5.124.448A3.972 3.972 0 0 0 4.929 8.93c0 .833.253 1.628.724 2.296l-.346.834A4.006 4.006 0 0 0 2 16a4.007 4.007 0 0 0 3.307 3.94l.346.834a4.007 4.007 0 0 0 .448 5.125c1.344 1.345 3.601 1.521 5.125.448l.835.346A4.007 4.007 0 0 0 16.001 30a4.005 4.005 0 0 0 3.939-3.307l.835-.347a4.005 4.005 0 0 0 5.125-.447 3.973 3.973 0 0 0 1.172-2.829c0-.833-.254-1.628-.724-2.296l.346-.834A4.005 4.005 0 0 0 30 16c0 .001 0 .001 0 0zm-4 2.002a1 1 0 0 0-.924.617l-.808 1.948a1 1 0 0 0 .217 1.09c.378.378.586.88.586 1.414 0 .535-.208 1.037-.586 1.415-.78.78-2.051.778-2.829 0a1 1 0 0 0-1.09-.217l-1.949.808a1 1 0 0 0-.617.924c0 1.103-.897 2-2 2s-2-.897-2-2a1 1 0 0 0-.617-.924l-1.95-.808a1 1 0 0 0-1.09.217c-.756.756-2.072.756-2.828 0a2.003 2.003 0 0 1 0-2.829 1 1 0 0 0 .217-1.09l-.808-1.948A1 1 0 0 0 6 18.002c-1.103 0-2-.897-2-2.001 0-1.103.897-2 2-2 .404 0 .769-.244.924-.617l.808-1.95a1 1 0 0 0-.217-1.09 1.986 1.986 0 0 1-.586-1.414 2.003 2.003 0 0 1 3.415-1.415c.286.286.716.37 1.09.217l1.949-.808c.373-.155.617-.52.617-.924 0-1.103.897-2 2-2s2 .897 2 2c0 .404.244.769.617.924l1.95.808a1 1 0 0 0 1.09-.217c.756-.756 2.072-.756 2.828 0 .779.78.779 2.049 0 2.829a1 1 0 0 0-.217 1.09l.808 1.95c.154.372.52.616.924.616 1.103 0 2 .897 2 2a2.003 2.003 0 0 1-2 2.002z"/><path d="M16 11c-2.757 0-5 2.243-5 5s2.243 5 5 5a1 1 0 1 0 0-2c-1.654 0-3-1.346-3-3s1.346-3 3-3a3.004 3.004 0 0 1 2.519 4.632 1 1 0 1 0 1.678 1.088A4.99 4.99 0 0 0 21 16c0-2.757-2.243-5-5-5z"/>
            </svg>
          </div>
        </label>
      </div>
    );
  }

  onInputChange = (e) => {
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  }
}

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Input;