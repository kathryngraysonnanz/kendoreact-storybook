import React from 'react';
import PropTypes from 'prop-types';
import { ComboBox as KendoComboBox } from "@progress/kendo-react-dropdowns";
import './assets/index.scss';
import countries from './assets/countries.js'

export const ComboBox = ({...props }) => {

  return (
    <>
      <p>Choose your favorite:</p>
      <KendoComboBox {...props} data={countries}/>
    </>
  );
};

ComboBox.propTypes = {
  accessKey: PropTypes.string,
  allowCustom: PropTypes.bool,
  ariaDescribedBy: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  className: PropTypes.string,
  clearButton: PropTypes.bool,
  data: PropTypes.array,
  dataItemKey: PropTypes.string,
  defaultValue: PropTypes.string,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  disabled: PropTypes.bool,
  fillMode: PropTypes.oneOf(['flat', 'outline', 'solid', 'null']),
  filter: PropTypes.string,
  filterable: PropTypes.bool,
  groupField: PropTypes.string,
  header: PropTypes.node,
  iconClassName: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  loading: PropTypes.bool,
  name: PropTypes.string,
  opened: PropTypes.bool,
  placeholder: PropTypes.string,
  popupSettings: PropTypes.any,
  required: PropTypes.bool,
  rounded: PropTypes.oneOf(['null', 'small', 'medium', 'full', 'large']),
  size: PropTypes.oneOf(['null', 'small', 'medium', 'large']),
  style: PropTypes.any,
  suggest: PropTypes.bool,
  svgIcon: PropTypes.string,
  tabIndex: PropTypes.number,
  textField: PropTypes.string,
  valid: PropTypes.bool,
  validationMessage: PropTypes.string,
  validityStyles: PropTypes.bool,
  value: PropTypes.string,
  virtual: PropTypes.any
};

ComboBox.defaultProps = {

};
