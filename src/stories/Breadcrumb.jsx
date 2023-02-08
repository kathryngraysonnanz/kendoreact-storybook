import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb as KendoBreadcrumb } from "@progress/kendo-react-layout";

import './assets/index.scss';

export const Breadcrumb = ({...props }) => {

  const items = [
    {
      id: "home",
      text: "Home",
      iconClass: "k-i-home",
    },
    {
      id: "products",
      text: "Products",
    },
    {
      id: "computer",
      text: "Computer",
    },
    {
      id: "gaming",
      text: "Gaming",
    },
    {
      id: "keyboard",
      text: "Keyboard",
    },
  ];

  return (
    <>
      <KendoBreadcrumb {...props} data={items} />
    </>
  );
};

Breadcrumb.propTypes = {
  ariaLabel: PropTypes.string,
  breadcrumbDelimiter: PropTypes.any,
  breadcrumbLink: PropTypes.any,
  breadcrumbListItem: PropTypes.any,
  breadcrumbOrderedList: PropTypes.any,
  className: PropTypes.string,
  data: PropTypes.any,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  disabled: PropTypes.bool,
  iconClassField: PropTypes.string,
  iconField: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.any,
  tabIndex: PropTypes.number,
  textField: PropTypes.string,
  valueField: PropTypes.string, 
};

Breadcrumb.defaultProps = {
};
