import React from 'react';
import PropTypes from 'prop-types';
import { Switch as KendoSwitch } from "@progress/kendo-react-inputs";
import './assets/index.scss';

export const Switch = ({...props }) => {

  return (
    <>
      <KendoSwitch {...props} />
    </>
  );
};

Switch.propTypes = {
  accessKey: PropTypes.string,
  ariaDescribedBy: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  checked: PropTypes.bool,
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  defaultValue: PropTypes.any,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  offLabel: PropTypes.string,
  onLabel: PropTypes.string,
  required: PropTypes.bool,
  size: PropTypes.oneOf(['null', 'small', 'medium', 'large']),
  tabIndex: PropTypes.number,
  thumbRounded: PropTypes.oneOf(['null', 'small', 'medium', 'full', 'large']),
  trackRounded: PropTypes.oneOf(['null', 'small', 'medium', 'full', 'large']),
  valid: PropTypes.bool,
  validationMessage: PropTypes.string,
  validityStyles: PropTypes.bool,
  value: PropTypes.any,
};

Switch.defaultProps = {
};
