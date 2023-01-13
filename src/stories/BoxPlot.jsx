import React from 'react';
import PropTypes from 'prop-types';
import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
} from "@progress/kendo-react-charts";
import './assets/index.scss';
import data from "./assets/box-plot-data.json";

export const BoxPlot = ({...props }) => {

  const categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const firstSeries = [123, 276, 310, 212, 240, 156, 98];
  const secondSeries = [165, 210, 287, 144, 190, 167, 212];
  const thirdSeries = [56, 140, 195, 46, 123, 78, 95];

  return (
    <>
    <Chart>
     <ChartTitle text="Monthly Mean Temperatures (&deg;F)" />
     <ChartSeries>
       <ChartSeriesItem
         type="boxPlot"
         data={data}
       />
     </ChartSeries>
    </Chart>
    </>
  );
};

BoxPlot.propTypes = {
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

BoxPlot.defaultProps = {

};
