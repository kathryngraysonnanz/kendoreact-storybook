import React from 'react';
import PropTypes from 'prop-types';
import { Slider as KendoSlider, SliderLabel } from "@progress/kendo-react-inputs";
import './assets/index.scss';

export const Slider = ({...props }) => {

  return (
    <>
      <KendoSlider {...props} >
        {[props.min, props.max].map((perc, i) => (
         <SliderLabel key={i} position={perc}>
           {perc.toString()}
         </SliderLabel>
       ))}
       </KendoSlider> 
    </>
  );
};

Slider.propTypes = {
  ariaDescribedBy: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  buttons: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  defaultValue: PropTypes.number,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  required: PropTypes.bool,
  step: PropTypes.number,
  style: PropTypes.any,
  tabIndex: PropTypes.number,
  valid: PropTypes.bool,
  validationMessage: PropTypes.string,
  validityStyles: PropTypes.bool,
  value: PropTypes.number,
  vertical: PropTypes.bool
};

Slider.defaultProps = {
  min: 0,
  max: 100,
  defaultValue: 50
};
