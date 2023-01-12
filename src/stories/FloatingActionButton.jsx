import React from 'react';
import PropTypes from 'prop-types';
import { FloatingActionButton as KendoFloatingActionButton } from "@progress/kendo-react-buttons";
import './assets/index.scss';

export const FloatingActionButton = ({text, ...props }) => {
  return (
    <>
      <KendoFloatingActionButton {...props}/>
    </>
  );
};

FloatingActionButton.propTypes = {
  accessKey: PropTypes.string,
  align: {
    vertical: PropTypes.oneOf(['top', 'middle', 'bottom']),
    horizontal: PropTypes.oneOf(['start', 'center', 'end'])
  },
  alignOffset: {
    x: PropTypes.number,
    y: PropTypes.number
  },
  className: PropTypes.string,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  iconClass: PropTypes.string,
  id: PropTypes.string,
  iconUrl: PropTypes.string,
  modal: PropTypes.bool,
  overlayStyle: PropTypes.any,
  popupSettings: PropTypes.any,
  positionMode: PropTypes.oneOf(['absolute', 'fixed']),
  rounded: PropTypes.oneOf(['small', 'medium', 'large', 'full', 'null']),
  shape: PropTypes.oneOf(['rectangle', 'square', 'null']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'null']),
  style: PropTypes.any,
  tabIndex: PropTypes.number,
  text: PropTypes.string,
  themeColor: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error', 'dark', 'light', 'inverse', 'null']),
};

FloatingActionButton.defaultProps = {
};
