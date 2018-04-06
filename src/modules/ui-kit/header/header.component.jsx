import React from 'react';
import PropTypes from 'prop-types';
import './header.component.css';

const Header = (props) => {
  const { title } = props;

  return (
    <header className="header">
      <h1 className="title">
        {title}
      </h1>
      <div className="line" />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;