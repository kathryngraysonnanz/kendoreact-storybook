import React from 'react';
import PropTypes from 'prop-types';
import { TextArea as KendoTextArea } from "@progress/kendo-react-inputs";
import './assets/index.scss';

export const TextArea = ({...props }) => {

  return (
    <>
      <KendoTextArea {...props} />
    </>
  );
};

TextArea.propTypes = {
  ariaDescribedBy: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  autoSize: PropTypes.bool,
  className: PropTypes.string,
  defaultValue: PropTypes.any,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  disabled: PropTypes.bool,
  fillMode: PropTypes.oneOf(['null', 'flat', 'outline', 'solid']),
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  rounded:  PropTypes.oneOf(['null', 'small', 'medium', 'full', 'large']),
  rows: PropTypes.number,
  size: PropTypes.oneOf(['null', 'small', 'medium', 'large']),
  style: PropTypes.any,
  tabIndex: PropTypes.number,
  valid: PropTypes.bool,
  validationMessage: PropTypes.string,
  validityStyles: PropTypes.bool,
  value: PropTypes.any,
};

TextArea.defaultProps = {
};
