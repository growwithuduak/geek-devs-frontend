import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
export const Button = ({ color, size, label, ...props }) => {
  const buttonSize = size === 'medium' ? 'mediumButton' : size === 'large' ? 'largeButton' : 'smallButton';
  const buttonColor = color === 'primary' ? 'primaryButton' : 'secondaryButton';

  return (
    <button
      type="button"
      className={`textButton ${buttonSize} ${buttonColor}`}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  color: 'primary',
  size: 'medium',
};
