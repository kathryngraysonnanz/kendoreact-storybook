import React from 'react';
import PropTypes from 'prop-types';
import { MultiSelect as KendoMultiSelect } from "@progress/kendo-react-dropdowns";
import './assets/index.scss';

export const MultiSelect = ({...props }) => {
const sizes = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];
  return (
    <>
      <p>Choose sizes:</p>
      <KendoMultiSelect {...props} data={sizes} style={{width: 300}}/>
    </>
  );
};

MultiSelect.propTypes = {
  accessKey: PropTypes.string,
  allowCustom: PropTypes.bool,
  ariaDescribedBy: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  autoClose: PropTypes.bool,
  className: PropTypes.string,
  data: PropTypes.array,
  dataItemKey: PropTypes.string,
  defaultValue: PropTypes.string,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  disabled: PropTypes.bool,
  fillMode: PropTypes.oneOf(['flat', 'outline', 'solid', 'null']),
  filter: PropTypes.string,
  filterable: PropTypes.bool,
  footer: PropTypes.node,
  header: PropTypes.node,
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
  tabIndex: PropTypes.number,
  textField: PropTypes.string,
  valid: PropTypes.bool,
  validationMessage: PropTypes.string,
  validityStyles: PropTypes.bool,
  value: PropTypes.any,
  virtual: PropTypes.any
};

MultiSelect.defaultProps = {

};
