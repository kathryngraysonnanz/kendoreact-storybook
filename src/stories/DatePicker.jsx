import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker as KendoDatePicker } from "@progress/kendo-react-dateinputs";
import './assets/index.scss';

export const DatePicker = ({...props }) => {

  return (
    <>
      <KendoDatePicker {...props} />
    </>
  );
};

DatePicker.propTypes = {
  ariaDescribedBy: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaLabeledBy: PropTypes.string,
  calendar: PropTypes.any,
  className: PropTypes.string,
  dateInput: PropTypes.any,
  defaultShow: PropTypes.bool,
  defaultValue: PropTypes.instanceOf(Date),
  disabled: PropTypes.bool,
  fillMode: PropTypes.oneOf(['null', 'flat', 'outline', 'solid']),
  focusedDate: PropTypes.instanceOf(Date),
  format: PropTypes.string,
  formatPlaceholder: PropTypes.oneOf(['wide', 'narrow', 'short', 'formatPattern']),
  id: PropTypes.string,
  label: PropTypes.string,
  max: PropTypes.instanceOf(Date),
  min: PropTypes.instanceOf(Date),
  name: PropTypes.string,
  pickerWrap: PropTypes.node,
  placeholder: PropTypes.string,
  popup: PropTypes.node,
  popupSettings: PropTypes.any,
  required: PropTypes.bool,
  rounded: PropTypes.oneOf(['null', 'small', 'medium', 'full', 'large']),
  show: PropTypes.bool,
  size: PropTypes.oneOf(['null', 'small', 'medium', 'large']),
  tabIndex: PropTypes.number,
  title: PropTypes.string,
  toggleButton: PropTypes.any,
  valid: PropTypes.bool,
  validationMessage: PropTypes.string,
  validityStyles: PropTypes.bool,
  value: PropTypes.instanceOf(Date),
  weekNumber: PropTypes.bool,
  width: PropTypes.string
};

DatePicker.defaultProps = {
  width: 200
};
