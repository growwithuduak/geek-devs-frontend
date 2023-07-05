import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
export const Button = ({ color, size, label, ...props }) => {
  const validSizes = ['small', 'medium', 'large'];
  const buttonSize = validSizes.includes(size) ? size : 'medium';
  const buttonClass = buttonSize === 'small' ? 'smallButton' : buttonSize === 'large' ? 'largeButton' : 'mediumButton';
  const buttonColor = color === 'primary' ? 'primaryButton' : 'secondaryButton';

  return (
    <button
      type="button"
      className={`textButton ${buttonClass} ${buttonColor}`}
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
