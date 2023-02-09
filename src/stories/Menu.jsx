import React from 'react';
import PropTypes from 'prop-types';
import { Menu as KendoMenu } from "@progress/kendo-react-layout";

import './assets/index.scss';

export const Menu = ({...props }) => {

  const items = [{
    "text": "Item1",
    "items": [{ "text": "Item1.1" }, { "text": "Item1.2", "items": [{ "text": "Item1.2.1" }, { "text": "Item1.2.2" }] }]
}, {
    "text": "Item2",
    "items": [{ "text": "Item2.1" }, { "text": "Item2.2" }, { "text": "Item2.3" }]
}, {
    "text": "Item3"
}]

  return (
    <>
    <KendoMenu {...props} items={items}/>
    </>
  );
};

Menu.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  customCloseIds: PropTypes.string,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  hoverCloseDelay: PropTypes.number,
  hoverOpenDelay: PropTypes.number,
  itemRender: PropTypes.any,
  items: PropTypes.any,
  linkRender: PropTypes.any,
  openOnClick: PropTypes.bool,
  style: PropTypes.any,
  vertical: PropTypes.bool
};

Menu.defaultProps = {
};
