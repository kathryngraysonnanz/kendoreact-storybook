import React from 'react';
import PropTypes from 'prop-types';
import { DateRangePicker as KendoDateRangePicker } from "@progress/kendo-react-dateinputs";
import './assets/index.scss';

export const DateRangePicker = ({...props }) => {

  return (
    <>
      <KendoDateRangePicker {...props} />
    </>
  );
};

DateRangePicker.propTypes = {
  allowReverse: PropTypes.bool,
  ariaDescribedBy: PropTypes.string,
  ariaLabeledBy: PropTypes.string,
  calendar: PropTypes.any,
  calendarSettings: PropTypes.any,
  className: PropTypes.string,
  defaultShow: PropTypes.bool,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  endDateInput: PropTypes.node,
  endDateInputSettings: PropTypes.any,
  focusedDate: PropTypes.instanceOf(Date),
  format: PropTypes.string,
  id: PropTypes.string,
  max: PropTypes.instanceOf(Date),
  min: PropTypes.instanceOf(Date),
  popup: PropTypes.node,
  popupSettings: PropTypes.any,
  show: PropTypes.bool,
  startDateInput: PropTypes.node,
  startDateInputSettings: PropTypes.any,
  style: PropTypes.any,
  swapButton: PropTypes.bool,
  tabIndex: PropTypes.number,
  valid: PropTypes.bool,
  value: PropTypes.instanceOf(Date),
};

DateRangePicker.defaultProps = {

};
