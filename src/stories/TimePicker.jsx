import React from 'react';
import PropTypes from 'prop-types';
import { TimePicker as KendoTimePicker } from "@progress/kendo-react-dateinputs";
import './assets/index.scss';

export const TimePicker = ({...props }) => {

  return (
    <>
      <KendoTimePicker {...props} />
    </>
  );
};

TimePicker.propTypes = {
  ariaDescribedBy: PropTypes.string,
  ariaLabeledBy: PropTypes.string,
  cancelButton: PropTypes.bool,
  className: PropTypes.string,
  dateInput: PropTypes.node,
  defaultShow: PropTypes.bool,
  defaultValue: PropTypes.instanceOf(Date),
  disabled: PropTypes.bool,
  fillMode: PropTypes.oneOf(['flat', 'outline', 'solid',]),
  format: PropTypes.string,
  formatPlaceholder: PropTypes.oneOf(['wide', 'narrow', 'short', 'formatPattern']),
  id: PropTypes.string,
  label: PropTypes.string,
  max: PropTypes.instanceOf(Date),
  min: PropTypes.instanceOf(Date),
  name: PropTypes.string,
  nowButton: PropTypes.bool,
  placeholder: PropTypes.string,
  popup: PropTypes.node,
  popupSettings: PropTypes.any,
  required: PropTypes.bool,
  rounded: PropTypes.oneOf(['small', 'medium', 'full', 'large']),
  show: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  smoothScroll: PropTypes.bool,
  steps: PropTypes.any,
  tabIndex: PropTypes.number,
  title: PropTypes.string,
  valid: PropTypes.bool,
  validationMessage: PropTypes.string,
  validityStyles: PropTypes.bool,
  value: PropTypes.instanceOf(Date),
  width: PropTypes.string 
};

TimePicker.defaultProps = {

};
