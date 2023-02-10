import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar as KendoProgressBar } from "@progress/kendo-react-progressbars";
import './assets/index.scss';

export const ProgressBar = ({...props }) => {

  return (
    <>
      <KendoProgressBar {...props} />
    </>
  );
};

ProgressBar.propTypes = {
  animation: PropTypes.bool,
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  dir: PropTypes.oneOf(['rtl', 'ltr', 'auto']),
  disabled: PropTypes.bool,
  emptyClassName: PropTypes.string,
  emptyStyle: PropTypes.any,
  label: PropTypes.node,
  labelPlacement: PropTypes.oneOf(['center', 'end', 'start']),
  labelVisible: PropTypes.bool,
  max: PropTypes.number,
  min: PropTypes.number,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  progressClassName: PropTypes.string,
  progressStyle: PropTypes.any,
  reverse: PropTypes.bool,
  style: PropTypes.any,
  tabIndex: PropTypes.number,
  value: PropTypes.number
};

ProgressBar.defaultProps = {
  min: 0,
  max: 100,
  value: 55
};
