import React from 'react';
import PropTypes from 'prop-types';
import { DateTimePicker as KendoDateTimePicker } from "@progress/kendo-react-dateinputs";
import './assets/index.scss';

export const DateTimePicker = ({...props }) => {

  return (
    <>
      <KendoDateTimePicker {...props} />
    </>
  );
};

DateTimePicker.propTypes = {
  ariaDescribedBy: PropTypes.string,
  ariaLabeledBy: PropTypes.string,
  calendar: PropTypes.any,
  cancelButton: PropTypes.bool,
  className: PropTypes.string,
  dateInput: PropTypes.node,
  defaultShow: PropTypes.bool,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  fillMode: PropTypes.oneOf(['flat', 'outline', 'solid']),
  focusedDate: PropTypes.instanceOf(Date),
  formatPlaceholder: PropTypes.any,
  format: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  max: PropTypes.instanceOf(Date),
  maxTime: PropTypes.instanceOf(Date),
  min: PropTypes.instanceOf(Date),
  minTime: PropTypes.instanceOf(Date),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  popup: PropTypes.node,
  required: PropTypes.bool,
  rounded: PropTypes.oneOf(['small', 'medium', 'full', 'large']),
  show: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  tabIndex: PropTypes.number,
  title: PropTypes.string,
  valid: PropTypes.bool,
  validationMessage: PropTypes.string,
  validityStyles: PropTypes.bool,
  value: PropTypes.instanceOf(Date),
  weekNumber: PropTypes.bool,
  width: PropTypes.string
};

DateTimePicker.defaultProps = {
  width: 300
};
