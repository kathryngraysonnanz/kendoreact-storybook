import React from 'react';
import PropTypes from 'prop-types';
import {
  Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
} from "@progress/kendo-react-charts";
import './assets/index.scss';
import data from "./assets/power-distribution.json";

export const PieChart = ({...props }) => {
  return (
    <>
    <Chart>
      <ChartSeries>
        <ChartSeriesItem
          type="pie"
          data={data}
          categoryField="kind"
          field="share"
        >
 
        </ChartSeriesItem>
      </ChartSeries>
    </Chart>
    </>
  );
};

PieChart.propTypes = {
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

PieChart.defaultProps = {

};
