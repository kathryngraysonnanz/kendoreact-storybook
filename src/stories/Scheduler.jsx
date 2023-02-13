import React from 'react';
import PropTypes from 'prop-types';
import {
  Scheduler as KendoScheduler,
  AgendaView,
  TimelineView,
  DayView,
  WeekView,
  MonthView,
} from "@progress/kendo-react-scheduler";
import './assets/index.scss';
import { sampleData, displayDate } from './assets/events'

export const Scheduler = ({...props }) => {

  return (
    <>
    <KendoScheduler data={sampleData} defaultDate={displayDate} {...props}>
      <AgendaView />
      <TimelineView />
      <DayView />
      <WeekView />
      <MonthView />
    </KendoScheduler>
    </>
  );
};

Scheduler.propTypes = {
  ariaLabel: PropTypes.string,
  ariaLabeledBy: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  data: PropTypes.any,
  date: PropTypes.instanceOf(Date),
  defaultDate: PropTypes.instanceOf(Date),
  defaultView: PropTypes.string,
  editable: PropTypes.bool,
  editItem: PropTypes.any,
  editSlot: PropTypes.any,
  editTask: PropTypes.any,
  footer: PropTypes.node,
  groups: PropTypes.any,
  header: PropTypes.node,
  height: PropTypes.number,
  id: PropTypes.string,
  item: PropTypes.node,
  modelFields: PropTypes.any,
  resources: PropTypes.any,
  role: PropTypes.string,
  rtl: PropTypes.bool,
  slot: PropTypes.node,
  tabIndex: PropTypes.number,
  task: PropTypes.node,
  timezone: PropTypes.string,
  view: PropTypes.string,
  viewItem: PropTypes.any,
  viewSlot: PropTypes.any,
  viewTask: PropTypes.any
};

Scheduler.defaultProps = {

};
