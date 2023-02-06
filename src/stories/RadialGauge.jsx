import React from 'react';
import PropTypes from 'prop-types';
import { RadialGauge as KendoRadialGauge} from "@progress/kendo-react-gauges";
import './assets/index.scss';

export const RadialGauge = ({...props }) => {

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

  const radialOptions = {
    pointer: {
      cap: {
        color: props.capColor,
        size: props.capSize
      },
      color: props.pointerColor,
      length: props.pointerLength,
      value: props.pointerValue
    },
    scale: {
      labels: {
        background: props.labelBackground,
        border: {
          color: props.labelBorderColor,
          dashType: props.labelBorderDashType,
          width: props.labelBorderWidth
        },
        color: props.labelColor,
        font: props.labelFont,
        format: props.labelFormat,
        margin: props.labelMargin,
        padding: props.labelPadding,
        position: props.labelPosition,
        visible: props.labelVisible
      },
      majorTicks: {
        color: props.majorTickColor,
        size: props.majorTickSize,
        visible: props.majorTickVisible,
        width: props.majorTickWidth
      },
      majorUnit: props.majorUnit,
      max: props.max,
      min: props.min,
      minorTicks: {
        color: props.minorTickColor,
        size: props.minorTickSize,
        visible: props.minorTickVisible,
        width: props.minorTickWidth
      },
      minorUnit: props.minorUnit,
      rangeDistance: props.rangeDistance,
      rangePlaceholderColor: props.rangePlaceholderColor,
      ranges: {
        color: props.rangeColor,
        from: props.rangeFrom,
        opacity: props.rangeOpacity,
        to: props.rangeTo
      },
      rangeSize: props.rangeSize,
      reverse: props.reverse,
      startAngle: props.startAngle
    }
  }

  return (
    <>
      <KendoRadialGauge {...props} {...radialOptions}/>
    </>
  );
};

RadialGauge.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  // Pointer Child Props
    // Pointer Cap Child props
    capColor: PropTypes.string,
    capSize: PropTypes.number,
  pointerColor: PropTypes.string,
  pointerLength: PropTypes.number,
  pointerValue: PropTypes.number,
  renderAs: PropTypes.oneOf(['canvas', 'svg']),
  // Scale Child Props
    endAngle: PropTypes.number,
    //Scale Labels Child props
      labelBackground: PropTypes.string,
      //Scale Label Border Child Props
        labelColor: PropTypes.string,
        labelDashType: PropTypes.oneOf([]),
        labelWidth: PropTypes.number,
      labelColor: PropTypes.string,
      labelFont: PropTypes.string,
      labelFormat: PropTypes.string,
      labelMargin: PropTypes.number,
      labelPadding: PropTypes.number,
      labelPosition: PropTypes.oneOf(['inside', 'outside']),
      labelVisible: PropTypes.bool,
      //Label Major Ticks Child Props
        majorTickColor: PropTypes.string,
        majorTickSize: PropTypes.number,
        majorTickVisible: PropTypes.bool,
        majorTickWidth: PropTypes.number,
    majorUnit: PropTypes.number,
    max: PropTypes.number,
    min: PropTypes.number,
      //Label Minor Ticks Child Props
        minorTickColor: PropTypes.string,
        minorTickSize: PropTypes.number,
        minorTickVisible: PropTypes.bool,
        minorTickWidth: PropTypes.number,
    minorUnit: PropTypes.number,
    // Range Child Props
      rangeColor: PropTypes.string,
      rangeFrom: PropTypes.number,
      rangeOpacity: PropTypes.number,
      rangeTo: PropTypes.number,
    rangePlaceholderColor: PropTypes.string,
    rangeSize: PropTypes.number,
    reverse: PropTypes.bool,
    startAngle: PropTypes.number,
  style: PropTypes.any,
  transitions: PropTypes.bool
};

RadialGauge.defaultProps = {
  pointerValue: 25
};
