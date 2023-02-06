import React from 'react';
import PropTypes from 'prop-types';
import {
  Gantt as KendoGantt,
  GanttWeekView,
  GanttMonthView,
  GanttDayView,
  GanttYearView,
  filterBy,
  orderBy,
  mapTree,
  extendDataItem,
  GanttTextFilter,
  GanttDateFilter,
  getSelectedState,
  getSelectedStateFromKeyDown,
} from "@progress/kendo-react-gantt";
import './assets/index.scss';
import { getter } from "@progress/kendo-react-common";
import { exampleTaskData, exampleDependencyData } from "./assets/gantt_data";

const ganttStyle = {
  height: 740,
  width: '100%'
};
const taskModelFields = {
  id: 'id',
  start: 'start',
  end: 'end',
  title: 'title',
  percentComplete: 'percentComplete',
  isRollup: 'isRollup',
  isExpanded: 'isExpanded',
  isInEdit: 'isInEdit',
  children: 'children',
  isSelected: 'isSelected'
};
const dependencyModelFields = {
  id: 'id',
  fromId: 'fromId',
  toId: 'toId',
  type: 'type'
};
const getTaskId = getter(taskModelFields.id);
const columns = [{
  field: taskModelFields.id,
  title: 'ID',
  width: 70
}, {
  field: taskModelFields.title,
  title: 'Title',
  width: 200,
  expandable: true
}, {
  field: taskModelFields.start,
  title: 'Start',
  width: 120,
  format: '{0:MM/dd/yyyy}'
}, {
  field: taskModelFields.end,
  title: 'End',
  width: 120,
  format: '{0:MM/dd/yyyy}'
}];

export const Gantt = ({...props }) => {

  const [taskData, setTaskData] = React.useState(exampleTaskData);
    const [dependencyData, setDependencyData] = React.useState(exampleDependencyData);
    const [expandedState, setExpandedState] = React.useState({
      7: true,
      11: true,
      12: true,
      13: true
    });
    const [selectedState, setSelectedState] = React.useState({});
    const [dragEnabled, setDragEnabled] = React.useState(true);
    const [cellEnabled, setCellEnabled] = React.useState(true);
    const [dataState, setDataState] = React.useState({
      sort: [],
      filter: []
    });
    const onDataStateChange = React.useCallback(event => setDataState(event.dataState), [setDataState]);
    const onExpandChange = React.useCallback(event => {
      setExpandedState({
        ...expandedState,
        [getTaskId(event.dataItem)]: !event.value
      });
    }, [expandedState, setExpandedState]);
    const onTaskClick = React.useCallback(event => {
      const taskId = getTaskId(event.dataItem);
      setSelectedState({
        [taskId]: !selectedState[taskId]
      });
    }, [setSelectedState, selectedState]);
    const onSelectionChange = React.useCallback(event => {
      const newSelectedState = getSelectedState({
        event,
        selectedState,
        dataItemKey: taskModelFields.id
      });
      setSelectedState(newSelectedState);
    }, [selectedState]);
    const onKeyDown = React.useCallback(event => {
      const newSelectedState = getSelectedStateFromKeyDown({
        event,
        selectedState: selectedState,
        dataItemKey: taskModelFields.id
      });
      setSelectedState(newSelectedState);
    }, [selectedState]);
    const onDragChange = event => {
      setDragEnabled(event.value);
    };
    const onCellChange = event => {
      setCellEnabled(event.value);
    };

    const processedData = React.useMemo(() => {
      const filteredData = filterBy(taskData, dataState.filter, taskModelFields.children);
      const sortedData = orderBy(filteredData, dataState.sort, taskModelFields.children);
      return mapTree(sortedData, taskModelFields.children, task => extendDataItem(task, taskModelFields.children, {
        [taskModelFields.isExpanded]: expandedState[getTaskId(task)],
        [taskModelFields.isSelected]: selectedState[getTaskId(task)]
      }));
    }, [taskData, dataState, expandedState, selectedState]);

    const [columnsState, setColumnsState] = React.useState(columns);

    const onColumnReorder = React.useCallback(
      (event) => setColumnsState(event.columns),
      [setColumnsState]
    );

    const onColumnResize = React.useCallback(
  (event) => event.end && setColumnsState(event.columns),
  [setColumnsState]
);

  return (
    <>
    <KendoGantt
    {...props}
      style={ganttStyle}
      taskData={processedData}
      taskModelFields={taskModelFields}
      dependencyData={dependencyData}
      dependencyModelFields={dependencyModelFields}
      columns={columnsState}
      sort={dataState.sort}
      filter={dataState.filter}
      onColumnResize={onColumnResize}
      onColumnReorder={onColumnReorder}
      onExpandChange={onExpandChange}
      onDataStateChange={onDataStateChange}
      onSelectionChange={onSelectionChange}
    >
      <GanttWeekView />
      <GanttDayView />
      <GanttMonthView />
      <GanttYearView />
    </KendoGantt>
    </>
  );
};

Gantt.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  columnMenu: PropTypes.node,
  columnMenuFilter: PropTypes.any,
  columns: PropTypes.any,
  defaultView: PropTypes.oneOf(['day', 'week', 'month', 'year']),
  dependencyData: PropTypes.any,
  dependencyModelFields: PropTypes.any,
  filter: PropTypes.any,
  navigatable: PropTypes.bool,
  noReacords: PropTypes.node,
  reorderable: PropTypes.bool,
  resizable: PropTypes.bool,
  row: PropTypes.node,
  rowHeight: PropTypes.number,
  selectable: PropTypes.any,
  sort: PropTypes.any,
  sortable: PropTypes.any,
  style: PropTypes.any,
  taskData: PropTypes.any,
  taskModelFields: PropTypes.any,
  timezone: PropTypes.string,
  toolbar: PropTypes.any,
  view: PropTypes.string
};

Gantt.defaultProps = {

};
