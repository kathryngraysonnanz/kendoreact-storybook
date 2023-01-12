import React from 'react';
import PropTypes from 'prop-types';
import { DropDownButton as KendoDropDownButton } from "@progress/kendo-react-buttons";
import './assets/index.scss';

export const DropDownButton = ({label, ...props }) => {
  const items = [
  "My Profile",
  "Friend Requests",
  "Account Settings",
  "Support",
  "Log Out",
];

  return (
    <>
      <KendoDropDownButton items={items} {...props}/>
    </>
  );
};

DropDownButton.propTypes = {
  accessKey: PropTypes.string,
  ariaLabel: PropTypes.string,
  buttonClass: PropTypes.string,
  children: PropTypes.element,
  className: PropTypes.string,
  dir: PropTypes.string,
  disabled: PropTypes.bool,
  fillMode: PropTypes.oneOf(['solid', 'outline', 'flat', 'link', 'null']),
  icon: PropTypes.string,
  iconClass: PropTypes.string,
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  items: PropTypes.array,
  opened: PropTypes.bool,
  rounded: PropTypes.oneOf(['small', 'medium', 'large', 'full', 'null']),
  shape: PropTypes.oneOf(['square', 'rectangle', 'null']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'null']),
  text: PropTypes.string,
  textField: PropTypes.string,
  themeColor: PropTypes.oneOf(['base', 'primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error', 'dark', 'light', 'inverse', 'null']),
  title: PropTypes.string
};

DropDownButton.defaultProps = {
  text: 'DropDownButton',
};
