import React from 'react';
import PropTypes from 'prop-types';
import { Drawer as KendoDrawer, DrawerContent } from "@progress/kendo-react-layout";

import './assets/index.scss';

export const Drawer = ({...props }) => {

  const items = [
  {
    text: "Inbox",
    icon: "k-i-inbox",
    selected: true,
  },
  {
    separator: true,
  },
  {
    text: "Notifications",
    icon: "k-i-bell",
  },
  {
    text: "Calendar",
    icon: "k-i-calendar",
  },
  {
    separator: true,
  },
  {
    text: "Attachments",
    icon: "k-i-hyperlink-email",
  },
  {
    text: "Favourites",
    icon: "k-i-star-outline",
  },
];

  return (
    <>
    <KendoDrawer {...props} items={items}/>
    </>
  );
};

Drawer.propTypes = {
  animation: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  expanded: PropTypes.bool,
  item: PropTypes.node,
  items: PropTypes.any,
  mini: PropTypes.bool,
  miniWidth: PropTypes.number,
  mode: PropTypes.oneOf(['push', 'overlay']),
  position: PropTypes.oneOf(['end', 'start']),
  style: PropTypes.any,
  tabIndex: PropTypes.number,
  width: PropTypes.number
};

Drawer.defaultProps = {
  expanded: true
};
