import React from 'react';
import PropTypes from 'prop-types';
import { ColorGradient as KendoColorGradient } from "@progress/kendo-react-inputs";
import './assets/index.scss';

export const ColorGradient = ({...props }) => {

  return (
    <>
      <KendoColorGradient {...props} />
    </>
  );
};

ColorGradient.propTypes = {
  ariaDescribedBy: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaLabelHSV: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  ariaValueText: PropTypes.string,
  backgroundColor: PropTypes.string,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  opacity: PropTypes.number,
  style: PropTypes.any,
  tabIndex: PropTypes.number,
  value: PropTypes.string
};

ColorGradient.defaultProps = {
};
