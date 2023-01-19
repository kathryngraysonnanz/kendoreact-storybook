import React from 'react';
import PropTypes from 'prop-types';
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartXAxis,
  ChartXAxisItem,
  ChartYAxis,
  ChartYAxisItem,
} from "@progress/kendo-react-charts";
import './assets/index.scss';
import {data} from "./assets/heatmap-data";

export const Heatmap = ({...props }) => {

  const dayLabels = {
  0: "Mon",
  1: "Tues",
  2: "Wed",
  3: "Thurs",
  4: "Fri",
  5: "Sat",
  6: "Sun"
};

  return (
    <>
    <Chart style={{ width: "100%", maxWidth: '500px', height: '50%'}}>
      <ChartSeries>
       <ChartSeriesItem type="heatmap" data={data}/>
       </ChartSeries>
       <ChartYAxis>
        <ChartYAxisItem labels={{ content: (e) => dayLabels[e.value] }}/>
      </ChartYAxis>
      <ChartXAxis>
        <ChartXAxisItem />
      </ChartXAxis>
    </Chart>
    </>
  );
};

Heatmap.propTypes = {
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

Heatmap.defaultProps = {

};
