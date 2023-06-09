import React from 'react';
import PropTypes from 'prop-types';
import { Timeline as KendoTimeline, sortEventList } from "@progress/kendo-react-layout";
import { events } from "./assets/timeline_events";
import './assets/index.scss';

export const Timeline = ({...props }) => {

  const sortedEvents = sortEventList(events);

  const onActionClick = (e) => {
    const event = e.syntheticEvent;
    event.preventDefault();
    window.open(event.target.getAttribute("href"));
  };

  return (
    <>
      <KendoTimeline
        {...props}
        events={sortedEvents}
        onActionClick={onActionClick}
      />
    </>
  );
};

Timeline.propTypes = {
  alterMode: PropTypes.bool,
  className: PropTypes.string, 
  collapsableEvents: PropTypes.bool,
  dateFormat: PropTypes.string, 
  // events
    actions: PropTypes.object, 
    date: PropTypes.instanceOf(Date), 
    description: PropTypes.string,
    images: PropTypes.object,
    subtitle: PropTypes.string,
    title: PropTypes.string
};

Timeline.defaultProps = {
  
};
