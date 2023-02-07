import React from 'react';
import PropTypes from 'prop-types';
import { RadioButton as KendoRadioButton } from "@progress/kendo-react-inputs";
import './assets/index.scss';

export const RadioButton = ({...props }) => {

  return (
    <>
      <KendoRadioButton {...props} />
    </>
  );
};

RadioButton.propTypes = {
  ariaDescribedBy: PropTypes.string,
  checked: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  index: PropTypes.number,
  label: PropTypes.string,
  labelPlacement: PropTypes.oneOf(['after', 'before']),
  name: PropTypes.string,
  size: PropTypes.oneOf(['null', 'small', 'medium', 'large']),
  style: PropTypes.any,
  tabIndex: PropTypes.number,
  valid: PropTypes.bool,
  value: PropTypes.any
};

RadioButton.defaultProps = {
};
