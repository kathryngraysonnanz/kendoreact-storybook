import React from 'react';
import PropTypes from 'prop-types';
import { Signature as KendoSignature } from "@progress/kendo-react-inputs";
import './assets/index.scss';

export const Signature = ({...props }) => {

  return (
    <>
      <KendoSignature {...props} />
    </>
  );
};

Signature.propTypes = {
  ariaDescribedBy: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  disabled: PropTypes.bool,
  exportScale: PropTypes.number,
  fillMode: PropTypes.oneOf(['null', 'flat', 'outline', 'solid']),
  height: PropTypes.number,
  hideLine: PropTypes.bool,
  id: PropTypes.string,
  inputStyle: PropTypes.any,
  maximizable: PropTypes.bool,
  name: PropTypes.string,
  open: PropTypes.bool,
  popupScale: PropTypes.number,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  rounded: PropTypes.oneOf(['null', 'small', 'medium', 'large']),
  size: PropTypes.oneOf(['null', 'small', 'medium', 'large']),
  smooth: PropTypes.bool,
  strokeWidth: PropTypes.number,
  style: PropTypes.any,
  tabIndex: PropTypes.number,
  valid: PropTypes.bool,
  validationMessage: PropTypes.string,
  validityStyles: PropTypes.bool,
  value: PropTypes.string,
  width: PropTypes.number
};

Signature.defaultProps = {
}
