import React from 'react';
import PropTypes from 'prop-types';
import { Spreadsheet as KendoSpreadsheet} from "@progress/kendo-react-spreadsheet";
import { sheets } from "./assets/sheets";
import './assets/index.scss';

export const Spreadsheet = ({...props }) => {

  const cellOptions = {
      background: props.background, 
      bold: props.bold,
      color: props.color, 
      fontFamily: props.fontFamily, 
      fontSize: props.fontSize, 
      italic: props.italic,
      underline: props.underline,
      wrap: props.wrap
  }

  const options = {
    defaultProps: {
      activeSheet: props.activeSheet,
      columns: props.columns,
      columnWidth: props.columnWidth,
      defaultCellStyle: cellOptions, 
      excel: props.excel, 
      headerHeight: props.headerHeight, 
      headerWidth: props.headerWidth,
      images: props.images,
      locale: props.locale,
      messages: props.messages,
      name: props.name,
      names: props.names, 
      rowHeight: props.rowHeight,
      rows: props.rows,
      sheets: sheets
    }
  }

  return (
    <>
      <KendoSpreadsheet {...props} {...options} /> 
    </>
  );
};

Spreadsheet.propTypes = {
  className: PropTypes.string, 
   // default props 
    activeSheet: PropTypes.string,
    columns: PropTypes.number,
    columnWidth: PropTypes.number,
      // cell default style props
      background: PropTypes.string,
      bold: PropTypes.bool,
      color: PropTypes.string,
      fontFamily: PropTypes.string, 
      fontSize: PropTypes.number,
      italic: PropTypes.bool,
      underline: PropTypes.bool,
      wrap: PropTypes.bool,
    excel: PropTypes.any,
    headerHeight: PropTypes.number,
    headerWidth: PropTypes.number,
    images: PropTypes.object,
    locale: PropTypes.string,
    messages: PropTypes.any,
    name: PropTypes.string,
    names: PropTypes.array, 
    rowHeight: PropTypes.number,
    rows: PropTypes.number,
    sheets: PropTypes.array,
  style: PropTypes.any,
  toolbar: PropTypes.bool
};

Spreadsheet.defaultProps = {
}
