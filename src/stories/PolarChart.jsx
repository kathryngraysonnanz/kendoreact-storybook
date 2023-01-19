import React from 'react';
import PropTypes from 'prop-types';
import {
  Chart,
  ChartXAxis,
  ChartXAxisItem,
  ChartYAxis,
  ChartYAxisItem,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from "@progress/kendo-react-charts";
import './assets/index.scss';
import data from "./assets/polar-data.json";

export const PolarChart = ({...props }) => {

  const labelContent = (e) => `${e.dataItem.time.substring(0, 2)}h`;

  return (
    <>
    <Chart>
    <ChartSeries>
      <ChartSeriesItem
        type="polarLine"
        data={data}
        xField="azimuth"
        yField="altitude"
      >
        <ChartSeriesLabels position="below" content={labelContent} />
      </ChartSeriesItem>
    </ChartSeries>
    <ChartXAxis>
      <ChartXAxisItem startAngle={-90} majorUnit={30} />
    </ChartXAxis>
    <ChartYAxis>
      <ChartYAxisItem
        labels={{
          visible: false,
        }}
      />
    </ChartYAxis>
  </Chart>
    </>
  );
};

PolarChart.propTypes = {
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

PolarChart.defaultProps = {

};
