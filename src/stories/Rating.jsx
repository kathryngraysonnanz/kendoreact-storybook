import React from 'react';
import PropTypes from 'prop-types';
import { Rating as KendoRating } from "@progress/kendo-react-inputs";
import './assets/index.scss';

export const Rating = ({...props }) => {

  return (
    <>
      <KendoRating {...props} />
    </>
  );
};

Rating.propTypes = {
  ariaDescribedBy: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  defaultValue: PropTypes.number,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  disabled: PropTypes.bool,
  half: PropTypes.bool,
  icon: PropTypes.string,
  id: PropTypes.string,
  item: PropTypes.node,
  label: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  precision: PropTypes.oneOf(['item', 'half']),
  readonly: PropTypes.bool,
  required: PropTypes.bool,
  selection: PropTypes.oneOf(['single', 'continues']),
  step: PropTypes.number,
  style: PropTypes.any,
  svgIcon: PropTypes.string,
  svgIconOutline: PropTypes.string,
  tabIndex: PropTypes.number,
  valid: PropTypes.bool,
  validationMessage: PropTypes.string,
  validityStyles: PropTypes.bool,
  value: PropTypes.any
};

Rating.defaultProps = {
}
