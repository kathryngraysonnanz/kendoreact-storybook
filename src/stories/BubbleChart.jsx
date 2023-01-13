import React from 'react';
import PropTypes from 'prop-types';
import {
  Chart,
 ChartTooltip,
 ChartTitle,
 ChartLegend,
 ChartSeries,
 ChartSeriesItem,
 ChartXAxis,
 ChartXAxisItem,
 ChartYAxis,
 ChartYAxisItem,
} from "@progress/kendo-react-charts";
import './assets/index.scss';
import data from "./assets/bubble-data.json";

export const BubbleChart = ({...props }) => {

  return (
    <>
    <Chart>
  <ChartTitle text="Job Growth" />
  <ChartSeries>
    <ChartSeriesItem
      type="bubble"
      xField="x"
      yField="y"
      sizeField="size"
      categoryField="category"
      data={data}
    />
  </ChartSeries>
  <ChartXAxis>
    <ChartXAxisItem
      axisCrossingValue={-5000}
      majorUnit={2000}
    />
  </ChartXAxis>
  <ChartYAxis>
    <ChartYAxisItem
      labels={{
        format: "{0:N0}",
      }}
    />
  </ChartYAxis>
  <ChartLegend visible={true} />
  <ChartTooltip format="{3}: {2:N0} applications" opacity={1} />
</Chart>
    </>
  );
};

BubbleChart.propTypes = {
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

BubbleChart.defaultProps = {

};
