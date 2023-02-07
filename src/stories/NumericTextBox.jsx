import React from 'react';
import PropTypes from 'prop-types';
import { NumericTextBox as KendoNumericTextBox } from "@progress/kendo-react-inputs";
import './assets/index.scss';

export const NumericTextBox = ({...props }) => {

  return (
    <>
      <KendoNumericTextBox {...props} />
    </>
  );
};

NumericTextBox.propTypes = {
  accessKey: PropTypes.string,
  autocomplete: PropTypes.oneOf(['off', 'on', 'name', 'honorific-prefix', 'given-name', 'additional-name', 'family-name', 'honorific-suffix', 'nickname', 'email', 'username', 'new-password', 'current-password', 'one-time-code', 'organization-title', 'organization', 'street-address', 'address-line1', 'address-line2', 'address-line3', 'address-level4', 'address-level3', 'address-level2', 'address-level1', 'country', 'country-name', 'postal-code', 'cc-name', 'cc-given-name', 'cc-additional-name', 'cc-family-name', 'cc-number', 'cc-exp', 'cc-exp-month', 'cc-exp-year', 'cc-csc', 'cc-type', 'transaction-currency', 'transaction-amount', 'language', 'bday', 'bday-day', 'bday-month', 'bday-year', 'sex', 'tel', 'tel-country-code', 'tel-national', 'tel-area-code', 'tel-local', 'tel-extension', 'impp', 'url', 'photo']),
  ariaDescribedBy: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  className: PropTypes.string,
  defaultValue: PropTypes.number,
  dir: PropTypes.oneOf(['rtl', 'ltr', 'auto']),
  disabled: PropTypes.bool,
  fillMode: PropTypes.oneOf(['null', 'flat', 'outline', 'solid']),
  format: PropTypes.string,
  id: PropTypes.string,
  inputStyle: PropTypes.any,
  inputType: PropTypes.oneOf(['tel', 'text']),
  label: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  rangeOnEnter: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  rounded: PropTypes.oneOf(["null" , "small" , "medium" , "full" , "large"]),
  size: PropTypes.oneOf(['null', 'small', 'medium', 'large']),
  spinners: PropTypes.bool,
  step: PropTypes.number,
  style: PropTypes.any,
  suffix: PropTypes.any,
  tabIndex: PropTypes.number,
  title: PropTypes.string,
  valid: PropTypes.bool,
  validationMessage: PropTypes.string,
  validityStyles: PropTypes.bool,
  value: PropTypes.string,
  width: PropTypes.number
};

NumericTextBox.defaultProps = {
  defaultValue: 5
};
