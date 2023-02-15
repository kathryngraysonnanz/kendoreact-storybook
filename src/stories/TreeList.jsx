import React from 'react';
import PropTypes from 'prop-types';
import { TreeList as KendoTreeList, createDataTree,
  mapTree,
  extendDataItem } from "@progress/kendo-react-treelist";
import './assets/index.scss';
import data from "./assets/simple-data";

const expandField = "expanded";
const subItemsField = "employees";
const dataTree = createDataTree(
  data,
  (i) => i.id,
  (i) => i.reportsTo,
  subItemsField
);
const columns = [
  {
    field: "name",
    title: "Name",
    expandable: true,
    width: "280px",
  },
  {
    field: "position",
    title: "Position",
    width: "230px",
  },
  {
    field: "timeInPosition",
    title: "Year(s) in Position",
    width: "150px",
  },
  {
    field: "hireDate",
    title: "Hire Date",
    format: "{0:d}",
    width: "150px",
  },
  {
    field: "fullTime",
    title: "Full Time",
    width: "150px",
  },
];

export const TreeList = ({...props }) => {

  const data = [...dataTree];
   const [expanded, setExpanded] = React.useState([1, 2, 32]);
   const onExpandChange = (e) => {
     setExpanded(
       e.value
         ? expanded.filter((id) => id !== e.dataItem.id)
         : [...expanded, e.dataItem.id]
     );
   };
   const callback = (item) =>
     expanded.includes(item.id)
       ? extendDataItem(item, subItemsField, {
           [expandField]: true,
         })
       : item;


   const options ={
     selectable: {
       cell: props.cell,
       drag: props.drag,
       enabled: props.enabled,
       mode: props.mode
     }
   }

  return (
    <>
    <KendoTreeList
      style={{
        maxHeight: "100vh",
        overflow: "auto",
      }}
      data={mapTree(data, subItemsField, callback)}
      expandField={expandField}
      subItemsField={subItemsField}
      onExpandChange={onExpandChange}
      columns={columns}
      {...props}
      {...options}
    />
    </>
  );
};

TreeList.propTypes = {
  className: PropTypes.string,
  columnMenu: PropTypes.any,
  columnMenuFilter: PropTypes.any,
  columns: PropTypes.any,
  columnVirtualization: PropTypes.bool,
  data: PropTypes.any,
  dataItemKey: PropTypes.string,
  editField: PropTypes.string,
  editRow: PropTypes.any,
  expandField: PropTypes.string,
  filter: PropTypes.any,
  filterRow: PropTypes.any,
  navigatable: PropTypes.bool,
  noRecords: PropTypes.any,
  pager: PropTypes.node,
  reorderable: PropTypes.bool,
  resizeable: PropTypes.bool,
  row: PropTypes.node,
  rowDraggable: PropTypes.bool,
  rowHeight: PropTypes.number,
  scrollable: PropTypes.oneOf(['none', 'scrollable', 'virtual']),
  // Selectable Props
    cell: PropTypes.bool,
    drag: PropTypes.bool,
    enabled: PropTypes.bool,
    mode: PropTypes.oneOf(['single', 'multiple']),
  selectedField: PropTypes.string,
  skip: PropTypes.number,
  sort: PropTypes.any,
  sortable: PropTypes.bool,
  style: PropTypes.any,
  subItemsField: PropTypes.string,
  tableProps: PropTypes.any,
  take: PropTypes.number,
  toolbar: PropTypes.node
};

TreeList.defaultProps = {
};
