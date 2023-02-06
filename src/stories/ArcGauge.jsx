import React from 'react';
import PropTypes from 'prop-types';
import { ArcGauge as KendoArcGauge } from "@progress/kendo-react-gauges";
import './assets/index.scss';

export const ArcGauge = ({...props }) => {

  const arcCenterRenderer = (value, color) => {
    return (
      <h2
        style={{
          color: color,
        }}
      >
        {value}%
      </h2>
    );
  };

  return (
    <>
      <KendoArcGauge {...props} arcCenterRender={arcCenterRenderer}/>
    </>
  );
};

ArcGauge.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  color: PropTypes.string,
  colors: PropTypes.any,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  opacity: PropTypes.number,
  renderAs: PropTypes.oneOf(['canvas', 'svg']),
  scale: PropTypes.any,
  style: PropTypes.any,
  transitions: PropTypes.bool,
  value: PropTypes.number
};

ArcGauge.defaultProps = {
  value: 25
};
