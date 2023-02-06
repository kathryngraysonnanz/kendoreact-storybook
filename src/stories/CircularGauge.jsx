import React from 'react';
import PropTypes from 'prop-types';
import { CircularGauge as KendoCircularGauge } from "@progress/kendo-react-gauges";
import './assets/index.scss';

export const CircularGauge = ({...props }) => {

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

  const gaugeOptions = {
    colors: {
      color: props.rangeColor,
      from: props.rangeFrom,
      opacity: props.rangeOpacity,
      to: props.rangeTo
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
      rangeLineCap: props.rangeLineCap,
      rangePlaceholderColor: props.rangePlaceholderColor,
      rangeSize: props.rangeSize,
      reverse: props.reverse,
      startAngle: props.startAngle
    }
  }

  return (
    <>
      <KendoCircularGauge {...props} arcCenterRender={arcCenterRenderer} {...gaugeOptions}/>
    </>
  );
};

CircularGauge.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  color: PropTypes.string,
    //Color Range Child Props
    rangeColor: PropTypes.string,
    rangeTo: PropTypes.number,
    rangeOpacity: PropTypes.number,
    rangeTo: PropTypes.number,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  opacity: PropTypes.number,
  renderAs: PropTypes.oneOf(['canvas', 'svg']),
    // Scale Child Props
      // Scale Label Child Props
      labelBackground: PropTypes.string,
        // Scale Label Border Child props
        labelBorderColor: PropTypes.string,
        labelBorderDashType: PropTypes.oneOf([ "dash" , "dashDot" , "dot" , "longDash" , "longDashDot", "longDashDotDot", "solid"]),
        labelBorderWidth: PropTypes.number,
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
      rangeDistance: PropTypes.number,
      rangeLineCap: PropTypes.oneOf(['butt', 'round', 'square']),
      rangePlaceholderColor: PropTypes.string,
      rangeSize: PropTypes.number,
      reverse: PropTypes.bool,
      startAngle: PropTypes.number,
  style: PropTypes.any,
  transitions: PropTypes.bool,
  value: PropTypes.number
};

CircularGauge.defaultProps = {
  value: 25
};
