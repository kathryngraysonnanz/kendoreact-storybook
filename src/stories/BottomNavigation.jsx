import React from 'react';
import PropTypes from 'prop-types';
import { BottomNavigation as KendoBottomNavigation } from "@progress/kendo-react-layout";

import './assets/index.scss';

export const BottomNavigation = ({...props }) => {

  const items = [
  {
    text: "Inbox",
    id: 1,
    icon: "email"
  },
  {
    text: "Calendar",
    id: 2,
    icon: "calendar",
  },
  {
    text: "Profile",
    id: 3,
    icon: "user",
  },
];

  return (
    <>
      <KendoBottomNavigation {...props} items={items} />
    </>
  );
};

BottomNavigation.propTypes = {
  border: PropTypes.bool,
  className: PropTypes.string,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  disabled: PropTypes.bool,
  fill: PropTypes.oneOf(['flat', 'solid']),
  id: PropTypes.string,
  item: PropTypes.any,
  itemFlow: PropTypes.oneOf(['vertical', 'horizontal']),
  positionMode: PropTypes.oneOf(['fixed', 'sticky']),
  style: PropTypes.any,
  themeColor: PropTypes.oneOf(["null" , "error" , "inverse" , "base" , "success" , "dark" , "light" , "primary" , "secondary" , "tertiary" , "info" , "warning"]),
};

BottomNavigation.defaultProps = {
};
