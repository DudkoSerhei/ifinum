import React from 'react';
import PropTypes from 'prop-types';
import './button.component.css';

const Button = (props) => {
  const { children } = props;

  return (
    <button className="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;