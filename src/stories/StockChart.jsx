import React from 'react';
import PropTypes from 'prop-types';
import {
  StockChart as KendoStockChart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartNavigator,
  ChartNavigatorSelect,
  ChartNavigatorSeries,
  ChartNavigatorSeriesItem,
} from "@progress/kendo-react-charts";
import './assets/index.scss';
import data from "./assets/stock-data.json";

export const StockChart = ({...props }) => {

  return (
    <>
    <KendoStockChart>
      <ChartSeries>
        <ChartSeriesItem
          data={data}
          type="candlestick"
          openField="Open"
          closeField="Close"
          lowField="Low"
          highField="High"
          categoryField="Date"
        />
      </ChartSeries>
    </KendoStockChart>
    </>
  );
};

StockChart.propTypes = {
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

StockChart.defaultProps = {

};
