import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox as KendoCheckbox } from "@progress/kendo-react-inputs";
import './assets/index.scss';

export const Checkbox = ({...props }) => {

  return (
    <>
      <KendoCheckbox {...props} />
    </>
  );
};

Checkbox.propTypes = {
  ariaDescribedBy: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  checked: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  defaultValue: PropTypes.any,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  labelOptional: PropTypes.bool,
  labelPlacement: PropTypes.oneOf(['after', 'before']),
  name: PropTypes.string,
  required: PropTypes.bool,
  rounded: PropTypes.oneOf(['null', 'small', 'medium', 'large']),
  size: PropTypes.oneOf(['null', 'small', 'medium', 'large']),
  tabIndex: PropTypes.number,
  valid: PropTypes.bool,
  validationMessage: PropTypes.string,
  validityStyles: PropTypes.bool,
  value: PropTypes.oneOf(['null', 'string', 'number', 'bool'])
};

Checkbox.defaultProps = {
  defaultChecked: true
};
