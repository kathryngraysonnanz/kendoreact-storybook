import React from 'react';
import PropTypes from 'prop-types';
import { FloatingLabel as KendoFloatingLabel } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";

import './assets/index.scss';

export const FloatingLabel = ({...props }) => {

  return (
    <>
      <KendoFloatingLabel {...props} >
        <Input />
      </KendoFloatingLabel>
    </>
  );
};

FloatingLabel.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  editorDisabled: PropTypes.bool,
  editorId: PropTypes.string,
  editorPlaceholder: PropTypes.string,
  editorValid: PropTypes.bool,
  editorValue: PropTypes.any,
  id: PropTypes.string,
  label: PropTypes.string,
  optional: PropTypes.bool,
  style: PropTypes.any
};

FloatingLabel.defaultProps = {
  label: 'First Name'
};
