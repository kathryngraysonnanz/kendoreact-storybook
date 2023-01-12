import React from 'react';
import PropTypes from 'prop-types';
import { Chip as KendoChip } from "@progress/kendo-react-buttons";
import './assets/index.scss';

export const Chip = ({text, ...props }) => {
  return (
    <>
      <KendoChip {...props}> {text} </KendoChip>
    </>
  );
};

Chip.propTypes = {
  ariaDescribedBy: PropTypes.string,
  children: PropTypes.element,
  className: PropTypes.string,
  dataItem: PropTypes.node,
  dir: PropTypes.oneOf(['rtl', 'ltr', 'auto']),
  disabled: PropTypes.bool,
  fillMode: PropTypes.oneOf(['solid', 'outline', 'null']),
  icon: PropTypes.string,
  id: PropTypes.string,
  removable: PropTypes.bool,
  removeIcon: PropTypes.string,
  rounded: PropTypes.oneOf(['small', 'medium', 'large', 'full', 'null']),
  selected: PropTypes.bool,
  selectedIcon: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'null']),
  tabIndex: PropTypes.number,
  text: PropTypes.string,
  themeColor: PropTypes.oneOf(['base', 'info', 'success', 'warning', 'error', 'null']),
  value: PropTypes.node
};

Chip.defaultProps = {
  text: 'Chip Component'
};
