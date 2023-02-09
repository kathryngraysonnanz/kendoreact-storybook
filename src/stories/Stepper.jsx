import React from 'react';
import PropTypes from 'prop-types';
import { Stepper as KendoStepper } from "@progress/kendo-react-layout";

import './assets/index.scss';

export const Stepper = ({...props }) => {

  const steps = [{}, {}, {}];

  const stepsWithLabel = [
   {
     label: "Step 1",
   },
   {
     label: "Step 2",
   },
   {
     label: "Step 3",
   },
 ];

 const icons = [
  {
    icon: "k-i-lock",
  },
  {
    icon: "k-i-user",
  },
  {
    icon: "k-i-track-changes",
  },
];
const iconsWithLabel = [
  {
    icon: "k-i-lock",
    label: "Step 1",
  },
  {
    icon: "k-i-user",
    label: "Step 2",
  },
  {
    icon: "k-i-track-changes",
    label: "Step 3",
  },
];
const customText = [
  {
    text: "A",
  },
  {
    text: "B",
  },
  {
    text: "C",
  },
];
const labelOnly = [
  {
    label: "Step 1",
  },
  {
    label: "Step 2",
  },
  {
    label: "Step 3",
  },
];

const [value, setValue] = React.useState(1);
  const handleChange = (e) => {
    setValue(e.value);
  };

  return (
    <>
    <div className="row">
        <div className="col-6">
          <p>Simple Steps</p>
          <KendoStepper {...props} value={value} onChange={handleChange} items={steps} />
        </div>
        <div className="col-6">
          <p>Steps with icons</p>
          <KendoStepper {...props} value={value} onChange={handleChange} items={icons} />
        </div>
        <div className="col-6 pt-5">
          <p>Steps with labels</p>
          <KendoStepper
          {...props}
            value={value}
            onChange={handleChange}
            items={stepsWithLabel}
          />
        </div>
        <div className="col-6 pt-5">
          <p>Steps with icons and labels</p>
          <KendoStepper
          {...props}
            value={value}
            onChange={handleChange}
            items={iconsWithLabel}
          />
        </div>
        <div className="col-6 pt-5">
          <p>Steps with custom text</p>
          <KendoStepper {...props} value={value} onChange={handleChange} items={customText} />
        </div>
        <div className="col-6 pt-5">
          <p>Labels Only</p>
          <KendoStepper
          {...props}
            value={value}
            onChange={handleChange}
            mode={"labels"}
            items={labelOnly}
          />
        </div>
      </div>
    </>
  );
};

Stepper.propTypes = {
  animationDuration: PropTypes.number,
  children: PropTypes.any,
  className: PropTypes.string,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  disabled: PropTypes.bool,
  errorIcon: PropTypes.string,
  errorSVGIcon: PropTypes.string,
  item: PropTypes.node,
  items: PropTypes.any,
  linear: PropTypes.bool,
  mode: PropTypes.oneOf(['labels', 'steps']),
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  style: PropTypes.any,
  successIcon: PropTypes.string,
  successSVGIcon: PropTypes.string,
  value: PropTypes.number
};

Stepper.defaultProps = {

};
