import React from 'react';
import PropTypes from 'prop-types';
import { Button as KendoButton } from "@progress/kendo-react-buttons";
import './assets/index.scss';

export const Button = ({label, ...props }) => {
  return (
    <>
      <KendoButton {...props}> {label} </KendoButton>
    </>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  fillMode: PropTypes.oneOf(['solid', 'outline', 'flat', 'link', 'null']),
  icon: PropTypes.string,
  iconClass: PropTypes.string,
  imageAlt: PropTypes.string,
  iconUrl: PropTypes.string,
  rounded: PropTypes.oneOf(['small', 'medium', 'large', 'full', 'null']),
  selected: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'null']),
  themeColor: PropTypes.oneOf(['base', 'primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error', 'dark', 'light', 'inverse', 'null']),
  togglable: PropTypes.bool
};

Button.defaultProps = {
  label: 'Button'
};
