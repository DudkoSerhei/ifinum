import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './textarea.component.css';

class Textarea extends Component {
  render() {
    const { placeholder, value, maxLength } = this.props;

    return (
      <div className="textarea-container">
        <textarea
          className="textarea"
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={this.onTextareaChange}
          defaultValue={value}
        />
      </div>
    );
  }

  onTextareaChange = (e) => {
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  }
}

Textarea.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  maxLength: PropTypes.number,
};

export default Textarea;