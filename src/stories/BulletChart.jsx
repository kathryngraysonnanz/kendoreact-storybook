import React from 'react';
import PropTypes from 'prop-types';
import {
  Chart,
   ChartTitle,
   ChartTooltip,
   ChartSeries,
   ChartSeriesItem,
   ChartCategoryAxis,
   ChartCategoryAxisItem,
   ChartValueAxis,
   ChartValueAxisItem,
} from "@progress/kendo-react-charts";
import './assets/index.scss';

export const BulletChart = ({...props }) => {

  const tempPlotBands = [
    {
      from: 30,
      to: 45,
      color: "#e62325",
      opacity: 1,
    },
    {
      from: 15,
      to: 30,
      color: "#ffc000",
      opacity: 1,
    },
    {
      from: 0,
      to: 15,
      color: "#37b400",
      opacity: 1,
    },
    {
      from: -10,
      to: 0,
      color: "#5392ff",
      opacity: 1,
    },
  ];

  const temp = [[25, 22]];


  return (
    <>
    <Chart style={{height: 120}}>
     <ChartTitle text="Temperature [&deg;C]" />
     <ChartSeries>
       <ChartSeriesItem type="bullet" data={temp} />
     </ChartSeries>
     </Chart>
    </>
  );
};

BulletChart.propTypes = {
  axisDefaults: PropTypes.any,
  className: PropTypes.string,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  paneDefaults: PropTypes.shape({
    background: PropTypes.string,
    border: PropTypes.shape({
      color: PropTypes.string,
      dashType: PropTypes.oneOf([ "dash", "dashDot" , "dot", "longDash" , "longDashDot", "longDashDotDot", "solid"]),
      width: PropTypes.number,
    }),
    clip: PropTypes.bool,
    height: PropTypes.number,
    margin: PropTypes.number,
    name: PropTypes.string,
    padding: PropTypes.number,
    title: PropTypes.shape({
      background: PropTypes.string,
      border: PropTypes.shape({
        color: PropTypes.string,
        dashType: PropTypes.oneOf([ "dash", "dashDot" , "dot", "longDash" , "longDashDot", "longDashDotDot", "solid"]),
        width: PropTypes.number,
      }),
      color: PropTypes.string,
      font: PropTypes.string,
      margin: PropTypes.number,
      position: PropTypes.oneOf(['center', 'left', 'right']),
      visible: PropTypes.bool
    })
  })
};

BulletChart.defaultProps = {

};
