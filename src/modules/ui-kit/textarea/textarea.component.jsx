import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './textarea.component.css';

class Textarea extends Component {
  render() {
    const { placeholder } = this.props;

    return (
      <div className="textarea-container">
        <textarea
          className="textarea"
          placeholder={placeholder}
          name="text"
          onChange={this.onTextareaChange}
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
};

export default Textarea;