import React from 'react';
import PropTypes from 'prop-types';
import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartSeries,
  ChartSeriesItem,
} from "@progress/kendo-react-charts";
import './assets/index.scss';
import data from "./assets/radar-data.json";

export const RadarChart = ({...props }) => {

  const labelContent = (e) => `${e.dataItem.time.substring(0, 2)}h`;

  return (
    <>
    <Chart>
    <ChartSeries>
      <ChartSeriesItem
        type="radarLine"
        data={data}
        field="pre"
        categoryField="name"
        name="Market value as of 2007"
      />
      <ChartSeriesItem
        type="radarLine"
        data={data}
        field="post"
        categoryField="name"
        name="Market value as of 2009"
      />
    </ChartSeries>
    <ChartValueAxis>
      <ChartValueAxisItem
        labels={{
          format: "C0",
        }}
      />
    </ChartValueAxis>
    <ChartLegend position="bottom" />
  </Chart>
    </>
  );
};

RadarChart.propTypes = {
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

RadarChart.defaultProps = {

};
