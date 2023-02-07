import React from 'react';
import PropTypes from 'prop-types';
import { RadioGroup as KendoRadioGroup } from "@progress/kendo-react-inputs";
import './assets/index.scss';

export const RadioGroup = ({...props }) => {

  const data = [
  {
    label: "Small",
    value: "small",
  },
  {
    label: "Medium",
    value: "medium",
  },
  {
    label: "Large",
    value: "large",
  },
];

  return (
    <>
      <KendoRadioGroup {...props} data={data}/>
    </>
  );
};

RadioGroup.propTypes = {
  ariaDescribedBy: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.any,
  defaultValue: PropTypes.any,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  disabled: PropTypes.bool,
  item: PropTypes.any,
  labelPlacement: PropTypes.oneOf(['after', 'before']),
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  name: PropTypes.string,
  style: PropTypes.any,
  valid: PropTypes.bool,
  value: PropTypes.any
};

RadioGroup.defaultProps = {
};
