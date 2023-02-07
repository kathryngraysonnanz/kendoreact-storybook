import React from 'react';
import PropTypes from 'prop-types';
import { Error as KendoError } from "@progress/kendo-react-labels";

import './assets/index.scss';

export const Error = ({...props }) => {

  return (
    <>
       <KendoError {...props} >This field is required</KendoError>
    </>
  );
};

Error.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  direction: PropTypes.oneOf(['start', 'end']),
  id: PropTypes.string,
  style: PropTypes.any
};

Error.defaultProps = {
};
