import React from 'react';
import PropTypes from 'prop-types';
import { RangeSlider as KendoRangeSlider, SliderLabel } from "@progress/kendo-react-inputs";
import './assets/index.scss';

export const RangeSlider = ({...props }) => {

  const options = {
    defaultValue: {
      start: props.start,
      end: props.end
    }
  }

  return (
    <>
      <KendoRangeSlider {...props} {...options} >
        {[props.min, props.max].map((perc, i) => (
         <SliderLabel key={i} position={perc}>
           {perc.toString()}
         </SliderLabel>
       ))}
       </KendoRangeSlider>
    </>
  );
};

RangeSlider.propTypes = {
  ariaDescribedBy: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  //Default Value Props
    start: PropTypes.number,
    end: PropTypes.number,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  disabled: PropTypes.bool,
  endTabIndex: PropTypes.number,
  id: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  required: PropTypes.bool,
  startTabIndex: PropTypes.number,
  step: PropTypes.number,
  style: PropTypes.any,
  valid: PropTypes.bool,
  validationMessage: PropTypes.string,
  validityStyles: PropTypes.bool,
  value: PropTypes.any,
  vertical: PropTypes.bool
};

RangeSlider.defaultProps = {
  min: 0,
  max: 100,
  start: 50,
  end: 80
};
