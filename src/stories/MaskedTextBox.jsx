import React from 'react';
import PropTypes from 'prop-types';
import { MaskedTextBox as KendoMaskedTextBox } from "@progress/kendo-react-inputs";
import './assets/index.scss';

export const MaskedTextBox = ({...props }) => {

  return (
    <>
      <KendoMaskedTextBox {...props} />
    </>
  );
};

MaskedTextBox.propTypes = {
  accessKey: PropTypes.string,
  autocomplete: PropTypes.oneOf(['off', 'on', 'name', 'honorific-prefix', 'given-name', 'additional-name', 'family-name', 'honorific-suffix', 'nickname', 'email', 'username', 'new-password', 'current-password', 'one-time-code', 'organization-title', 'organization', 'street-address', 'address-line1', 'address-line2', 'address-line3', 'address-level4', 'address-level3', 'address-level2', 'address-level1', 'country', 'country-name', 'postal-code', 'cc-name', 'cc-given-name', 'cc-additional-name', 'cc-family-name', 'cc-number', 'cc-exp', 'cc-exp-month', 'cc-exp-year', 'cc-csc', 'cc-type', 'transaction-currency', 'transaction-amount', 'language', 'bday', 'bday-day', 'bday-month', 'bday-year', 'sex', 'tel', 'tel-country-code', 'tel-national', 'tel-area-code', 'tel-local', 'tel-extension', 'impp', 'url', 'photo']),
  ariaDescribedBy: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  dir: PropTypes.oneOf(['rtl', 'ltr', 'auto']),
  disabled: PropTypes.bool,
  fillMode: PropTypes.oneOf(['null', 'flat', 'outline', 'solid']),
  id: PropTypes.string,
  includeLiterals: PropTypes.bool,
  list: PropTypes.string,
  label: PropTypes.string,
  mask: PropTypes.string,
  maskValidation: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  prefix: PropTypes.any,
  prompt: PropTypes.string,
  promptPlaceholder: PropTypes.string,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
  rounded: PropTypes.oneOf(["null" , "small" , "medium" , "full" , "large"]),
  rules: PropTypes.shape(RegExp),
  // Selection Props
    end: PropTypes.number,
    start: PropTypes.number,
  size: PropTypes.oneOf(['null', 'small', 'medium', 'large']),
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

MaskedTextBox.defaultProps = {
  mask: "(999) 000-00-00-00",
  defaultValue: "(359) 884-12-33-21"
};
