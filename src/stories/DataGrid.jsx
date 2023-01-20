import React from 'react';
import PropTypes from 'prop-types';
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import './assets/index.scss';
import data from './assets/datagrid-data'

export const DataGrid = ({...props }) => {

  return (
    <>
    <Grid {...props} data={data} style={{height: '350px'}}>
     <GridColumn field="ProductID" title="ID" width="40px" />
     <GridColumn field="ProductName" title="Name" width="250px" />
     <GridColumn field="Category.CategoryName" title="CategoryName" />
     <GridColumn field="UnitPrice" title="Price" />
     <GridColumn field="UnitsInStock" title="In stock" />
   </Grid>
    </>
  );
};

DataGrid.propTypes = {
  ariaLabel: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  columnMenu: PropTypes.element,
  columnVirtualization: PropTypes.bool,
  data: PropTypes.any,
  dataItemKey: PropTypes.string,
  detail: PropTypes.element,
  editField: PropTypes.string,
  expandField: PropTypes.string,
  filter: PropTypes.any,
  filterable: PropTypes.bool,
  filterOperators: PropTypes.any,
  fixedScroll: PropTypes.bool,
  group: PropTypes.any,
  groupable: PropTypes.bool,
  id: PropTypes.string,
  lockGroups: PropTypes.bool,
  navigatable: PropTypes.bool,
  pageable: PropTypes.bool,
  pager: PropTypes.any,
  pageSize: PropTypes.number,
  reorderable: PropTypes.bool,
  resizeable: PropTypes.bool,
  rowHeight: PropTypes.number,
  scrollable: PropTypes.oneOf(['none', 'scrollable', 'virtual']),
  selectable: PropTypes.any,
  selectedField: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium']),
  skip: PropTypes.number,
  sort: PropTypes.any,
  sortable: PropTypes.any,
  style: PropTypes.any,
  take: PropTypes.number,
  total: PropTypes.number
};

DataGrid.defaultProps = {
};
