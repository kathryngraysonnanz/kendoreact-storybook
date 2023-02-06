import React from 'react';
import PropTypes from 'prop-types';
import { LinearGauge as KendoLinearGauge } from "@progress/kendo-react-gauges";
import './assets/index.scss';

export const LinearGauge = ({...props }) => {

  const linearOptions = {
     pointer: {
       border: {
         color: props.pointerBorderColor,
         dashType: props.pointerDashType,
         width: props.pointerWidth
       },
       color: props.color,
       margin: props.margin,
       opacity: props.opacity,
       shape: props.shape,
       size: props.size,
       value: props.value,
     },
     scale: {
       labels: {
         background: props.labelBackground,
         border: {
           color: props.labelBorderColor,
           dashType: props.labelDashType,
           width: props.labelWidth
         },
         color: props.labelColor,
         font: props.labelFont,
         format: props.labelFormat,
         margin: props.labelMargin,
         padding: props.labelPadding,
         visible: props.labelVisible
       },
       line: {
         color: props.lineColor,
         dashType: props.lineDashType,
         visible: props.lineVisible,
         width: props.lineWidth
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
       mirror: props.mirror,
       rangePlaceholderColor: props.rangePlaceholderColor,
       ranges: {
         color: props.rangeColor,
         from: props.rangeFrom,
         opacity: props.rangeOpacity,
         to: props.rangeTo
       },
       rangeSize: props.rangeSize,
       reverse: props.reverse,
       vertical: props.vertical
     }

   };

  return (
    <>
      <KendoLinearGauge {...props} {...linearOptions} />
    </>
  );
};

LinearGauge.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),

    //LinearPointer Child Props

      //Pointer Border Child Props
      pointerBorderColor: PropTypes.string,
      pointerDashType: PropTypes.oneOf([ "dash" , "dashDot" , "dot" , "longDash" , "longDashDot", "longDashDotDot", "solid"]),
      pointerWidth: PropTypes.number,
    color: PropTypes.string,
    margin: PropTypes.number,
    opacity: PropTypes.number,
    shape: PropTypes.oneOf(['barIndicator', 'arrow']),
    size: PropTypes.number,
    value: PropTypes.number,
  renderAs: PropTypes.oneOf(['svg', 'canvas']),

    //LinearScale Child Props

      //Label Child props
      labelBackground: PropTypes.string,

        //Label Border Child Props
        labelBorderColor: PropTypes.string,
        labelDashType: PropTypes.oneOf([ "dash" , "dashDot" , "dot" , "longDash" , "longDashDot", "longDashDotDot", "solid"]),
        labelWidth: PropTypes.number,
      labelColor: PropTypes.string,
      labelFont: PropTypes.string,
      labelFormat: PropTypes.string,
      labelMargin: PropTypes.number,
      labelPadding: PropTypes.number,
      labelVisible: PropTypes.bool,

      //Label Line Child Props
      lineColor: PropTypes.string,
      lineDashType: PropTypes.oneOf([ "dash" , "dashDot" , "dot" , "longDash" , "longDashDot", "longDashDotDot", "solid"]),
      lineVisible: PropTypes.bool,
      lineWidth: PropTypes.number,


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
    mirror: PropTypes.bool,
    rangePlaceholderColor: PropTypes.string,

      //Label Range Child Props
      rangeColor: PropTypes.string,
      rangeFrom: PropTypes.number,
      rangeOpacity: PropTypes.number,
      rangeTo: PropTypes.number,

    rangeSize: PropTypes.number,
    reverse: PropTypes.bool,
    vertical: PropTypes.bool,

  transitions: PropTypes.bool,
};

LinearGauge.defaultProps = {
  value: 25
};
