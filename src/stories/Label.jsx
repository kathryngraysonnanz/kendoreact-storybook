import React from 'react';
import PropTypes from 'prop-types';
import { Label as KendoLabel } from "@progress/kendo-react-labels";

import './assets/index.scss';

export const Label = ({...props }) => {

  return (
    <>
      <KendoLabel {...props} >First Name:</KendoLabel>
    </>
  );
};

Label.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  editorDisabled: PropTypes.bool,
  editorId: PropTypes.string,
  editorRef: PropTypes.any,
  editorValid: PropTypes.bool,
  id: PropTypes.string,
  optional: PropTypes.bool,
  style: PropTypes.any
};

Label.defaultProps = {
};
