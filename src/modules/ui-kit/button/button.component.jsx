import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './button.component.css';

const Button = (props) => {
  const { children, className } = props;
  const buttonClassName  = cn(className, 'button');

  return (
    <button className={buttonClassName}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;