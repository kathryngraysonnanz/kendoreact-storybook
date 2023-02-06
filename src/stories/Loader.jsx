import React from 'react';
import PropTypes from 'prop-types';
import { Loader as KendoLoader } from "@progress/kendo-react-indicators";
import './assets/index.scss';

export const Loader = ({...props }) => {

  return (
    <>
      <KendoLoader {...props} />
    </>
  );
};

Loader.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['null', 'small', 'medium', 'large']),
  style: PropTypes.any,
  themeColor: PropTypes.oneOf(["null" , "error" , "inverse" , "inherit" , "success" , "dark" , "light" , "primary" , "secondary" , "tertiary" , "info" , "warning"]),
  type: PropTypes.oneOf(['pulsing', 'infinite-spinner', 'converging-spinner'])
};

Loader.defaultProps = {
  size: 'large'
};
