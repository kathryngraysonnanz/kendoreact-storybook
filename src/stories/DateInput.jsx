import React from 'react';
import PropTypes from 'prop-types';
import { DateInput as KendoDateInput } from "@progress/kendo-react-dateinputs";
import './assets/index.scss';

export const DateInput = ({...props }) => {


  return (
    <>
      <KendoDateInput {...props}/>
    </>
  );
};

DateInput.propTypes = {
  ariaControls: PropTypes.string,
  ariaDescribedBy: PropTypes.string,
  ariaExpanded: PropTypes.bool,
  ariaHasPopup: PropTypes.bool,
  ariaLabel: PropTypes.string,
  ariaLabeledBy: PropTypes.string,
  ariaRole: PropTypes.string,
  className: PropTypes.string,
  defaultValue: PropTypes.instanceOf(Date),
  dir: PropTypes.oneOf(['rtl', 'ltr', 'auto']),
  disabled: PropTypes.bool,
  fillMode: PropTypes.oneOf(['null', 'flat', 'outline', 'solid']),
  format: PropTypes.string,
  formatPlaceholder: PropTypes.oneOf(['wide', 'narrow', 'short', 'formatPattern']),
  id: PropTypes.string,
  label: PropTypes.string,
  max: PropTypes.instanceOf(Date),
  min: PropTypes.instanceOf(Date),
  maxTime: PropTypes.instanceOf(Date),
  minTime: PropTypes.instanceOf(Date),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  rounded: PropTypes.oneOf(['null', 'small', 'medium', 'full', 'large']),
  size: PropTypes.oneOf(['null', 'small', 'medium', 'large']),
  spinners: PropTypes.bool,
  steps: PropTypes.any,
  tabIndex: PropTypes.number,
  title: PropTypes.string,
  valid: PropTypes.bool,
  validationMessage: PropTypes.string,
  validityStyles: PropTypes.bool,
  value: PropTypes.instanceOf(Date),
  width: PropTypes.string
};

DateInput.defaultProps = {
  width: 200
};
