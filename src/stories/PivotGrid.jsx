import React from 'react';
import PropTypes from 'prop-types';
import {
  PivotGrid as KendoPivotGrid,
  PivotGridContainer,
  usePivotOLAPService,
} from "@progress/kendo-react-pivotgrid";
import './assets/index.scss';
import { SampleFileBase64 } from "./assets/pdfsample";

export const PivotGrid = ({...props }) => {

  const defaultColumnAxes = [
  {
    name: ["[Date].[Calendar]"],
    expand: true,
  },
  {
    name: ["[Product].[Category]"],
  },
];
const defaultRowAxes = [
  {
    name: ["[Geography].[City]"],
  },
];
const defaultMeasureAxes = [
  {
    name: ["[Measures].[Reseller Freight Cost]"],
  },
];
const catalog = "Adventure Works DW 2008R2";
const cube = "Adventure Works";
const url = "https://demos.telerik.com/olap/msmdpump.dll";

  const [show, setShow] = React.useState(true);
  const { pivotProps } = usePivotOLAPService({
    catalog,
    cube,
    url,
    defaultRowAxes,
    defaultColumnAxes,
    defaultMeasureAxes,
  });
  const handleButtonClick = React.useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
    <>
    <PivotGridContainer>
      <KendoPivotGrid
        {...pivotProps}
        {...props}
        style={{
          height: 700,
        }}
      />
    </PivotGridContainer>
    </>
  );
};

PivotGrid.propTypes = {
  cell: PropTypes.any,
  className: PropTypes.string,
  column: PropTypes.node,
  columnAxes: PropTypes.any,
  columnHeadersCell: PropTypes.node,
  columnHeadersColumn: PropTypes.node,
  columnHeadesRow: PropTypes.node,
  columns: PropTypes.any,
  data: PropTypes.any,
  dataColumn: PropTypes.node,
  dataRow: PropTypes.node,
  headerCell: PropTypes.node,
  id: PropTypes.string,
  navigatable: PropTypes.bool,
  row: PropTypes.node,
  rowAxes: PropTypes.any,
  rowHeadersCell: PropTypes.node,
  rowHeadersColumn: PropTypes.node,
  rowHeadersRow: PropTypes.node,
  rows: PropTypes.any,
  style: PropTypes.any,
  tabIndex: PropTypes.number
};

PivotGrid.defaultProps = {
}
