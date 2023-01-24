import React from 'react';
import PropTypes from 'prop-types';
import { AutoComplete as KendoAutoComplete } from "@progress/kendo-react-dropdowns";
import './assets/index.scss';
import countries from './assets/countries.js'

export const AutoComplete = ({...props }) => {

  return (
    <>
      <p>Type the name of a European country:</p>
      <KendoAutoComplete {...props} data={countries}/>
    </>
  );
};

AutoComplete.propTypes = {
  accessKey: PropTypes.string,
  ariaDescribedBy: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  className: PropTypes.string,
  clearButton: PropTypes.bool,
  data: PropTypes.array,
  defaultValue: PropTypes.string,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  disabled: PropTypes.bool,
  fillMode: PropTypes.oneOf(['flat', 'outline', 'solid', 'null']),
  footer: PropTypes.node,
  header: PropTypes.node,
  id: PropTypes.string,
  label: PropTypes.string,
  loading: PropTypes.bool,
  name: PropTypes.string,
  opened: PropTypes.bool,
  placeholder: PropTypes.string,
  popupSettings: PropTypes.any,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
  rounded: PropTypes.oneOf(['null', 'small', 'medium', 'full', 'large']),
  size: PropTypes.oneOf(['null', 'small', 'medium', 'large']),
  style: PropTypes.any,
  suggest: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  tabIndex: PropTypes.number,
  textField: PropTypes.string,
  valid: PropTypes.bool,
  validationMessage: PropTypes.string,
  validityStyles: PropTypes.bool,
  value: PropTypes.string
};

AutoComplete.defaultProps = {

};
