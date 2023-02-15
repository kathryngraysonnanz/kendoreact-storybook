import React from 'react';
import PropTypes from 'prop-types';
import { TaskBoard as KendoTaskBoard, TaskBoardCard, TaskBoardColumn } from "@progress/kendo-react-taskboard";
import { cards } from "./assets/cards";
import './assets/index.scss';

const tasks = cards.map((c) => ({
  id: c.id,
  title: c.title,
  status: c.status,
  priority: c.priority,
  description: c.description
}));

const columns = [
  {
    id: 1,
    title: "To-Do",
    status: "todo",
  },
  {
    id: 2,
    title: "In Progress",
    status: "inProgress",
  },
  {
    id: 3,
    title: "Done",
    status: "done",
  },
];
const priorities = [
  {
    priority: "Low Priority",
    color: "green",
  },
  {
    priority: "High Priority",
    color: "blue",
  },
  {
    priority: "Urgent",
    color: "orange",
  },
];

export const TaskBoard = ({...props }) => {

  const [taskData, setTaskData] = React.useState(tasks);
 const [columnsData, setColumnsData] = React.useState(columns);
 const onChangeHandler = React.useCallback((event) => {
   if (event.type === "column") {
     setColumnsData(event.data);
   } else {
     // New Task has been added.
     if (event.item && event.item.id === undefined) {
       event.item.id = event.data.length + 1;
     }
     setTaskData(event.data);
   }
 }, []);

  return (
    <>
    <KendoTaskBoard
          columnData={columnsData}
          taskData={taskData}
          priorities={priorities}
          onChange={onChangeHandler}
          column={TaskBoardColumn}
          card={TaskBoardCard}
          {...props}
      />
    </>
  );
};

TaskBoard.propTypes = {
  card: PropTypes.node,
  children: PropTypes.element,
  className: PropTypes.string,
  column: PropTypes.node,
  columnData: PropTypes.any,
  id: PropTypes.string,
  priorities: PropTypes.any,
  tabIndex: PropTypes.number,
  taskData: PropTypes.any
};

TaskBoard.defaultProps = {
  keyboardNavigation: true
};
