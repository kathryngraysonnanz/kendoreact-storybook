import React from 'react';
import PropTypes from 'prop-types';
import { Notification as KendoNotification } from "@progress/kendo-react-notification";
import './assets/index.scss';

export const Notification = ({...props }) => {

  const options = {
    type: {
      icon: props.icon,
      style: props.type
    }
  }

  return (
    <>
    <KendoNotification {...props} {...options}>
          {props.text}
        </KendoNotification>
    </>
  );
};

Notification.propTypes = {
  className: PropTypes.string,
  closable: PropTypes.bool,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  style: PropTypes.any,
  type: PropTypes.oneOf(['none', 'error', 'success', 'info', 'warning']),
  icon: PropTypes.bool,
  text: PropTypes.string
};

Notification.defaultProps = {
  text: 'Notification text here'
};
