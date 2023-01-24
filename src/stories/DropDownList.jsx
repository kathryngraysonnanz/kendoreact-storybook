import React from 'react';
import PropTypes from 'prop-types';
import { DropDownList as KendoDropDownList } from "@progress/kendo-react-dropdowns";
import './assets/index.scss';
import countries from './assets/countries.js'

export const DropDownList = ({...props }) => {
const sizes = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];
  return (
    <>
      <p>Choose your size:</p>
      <KendoDropDownList {...props} data={sizes}/>
    </>
  );
};

DropDownList.propTypes = {
  accessKey: PropTypes.string,
  ariaDescribedBy: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.array,
  dataItemKey: PropTypes.string,
  defaultItem: PropTypes.any,
  defaultValue: PropTypes.string,
  delay: PropTypes.number,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  disabled: PropTypes.bool,
  fillMode: PropTypes.oneOf(['flat', 'outline', 'solid', 'null']),
  filter: PropTypes.string,
  filterable: PropTypes.bool,
  footer: PropTypes.node,
  header: PropTypes.node,
  iconClassName: PropTypes.string,
  id: PropTypes.string,
  ignoreCase: PropTypes.bool,
  label: PropTypes.string,
  leftRightKeysNavigation: PropTypes.bool,
  loading: PropTypes.bool,
  name: PropTypes.string,
  opened: PropTypes.bool,
  popupSettings: PropTypes.any,
  required: PropTypes.bool,
  rounded: PropTypes.oneOf(['null', 'small', 'medium', 'full', 'large']),
  size: PropTypes.oneOf(['null', 'small', 'medium', 'large']),
  style: PropTypes.any,
  svgIcon: PropTypes.string,
  tabIndex: PropTypes.number,
  textField: PropTypes.string,
  title: PropTypes.string,
  valid: PropTypes.bool,
  validationMessage: PropTypes.string,
  validityStyles: PropTypes.bool,
  value: PropTypes.any,
  virtual: PropTypes.any
};

DropDownList.defaultProps = {

};
