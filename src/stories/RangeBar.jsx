import React from 'react';
import PropTypes from 'prop-types';
import {
  Chart,
  ChartTitle,
  ChartTooltip,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  ChartSeriesLabelsFrom,
  ChartSeriesLabelsTo,
} from "@progress/kendo-react-charts";
import './assets/index.scss';
import data from "./assets/radar-data.json";

export const RangeBar = ({...props }) => {

  return (
    <>
    <Chart>
    <ChartSeries>
      <ChartSeriesItem
        type="rangeColumn"
        data={data}
        fromField="pre"
        toField="post"
        categoryField="name"
      >
      </ChartSeriesItem>
    </ChartSeries>
    <ChartCategoryAxis>
      <ChartCategoryAxisItem
        labels={{
          rotation: "auto",
        }}
      />
    </ChartCategoryAxis>
  </Chart>
    </>
  );
};

RangeBar.propTypes = {
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

RangeBar.defaultProps = {

};
