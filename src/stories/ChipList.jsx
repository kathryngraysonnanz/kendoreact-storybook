import React from 'react';
import PropTypes from 'prop-types';
import { ChipList as KendoChipList } from "@progress/kendo-react-buttons";
import './assets/index.scss';

export const ChipList = ({...props }) => {
  const fruits = [
  {
    text: "Berry",
    value: "berry",
  },
  {
    text: "Apple",
    value: "apple",
  },
  {
    text: "Strawberry",
    value: "strawberry",
  },
  {
    text: "Banana",
    value: "banana",
  },
  {
    text: "Kiwi",
    value: "kiwi",
  },
];
  return (
    <>
    <KendoChipList {...props}
      defaultData={fruits}
    />
    </>
  );
};

ChipList.propTypes = {
  ariaDescribedBy: PropTypes.string,
  ariaLabeledBy: PropTypes.string,
  chip: PropTypes.element,
  className: PropTypes.string,
  data: PropTypes.any,
  defaultData: PropTypes.array,
  defaultValue: PropTypes.any,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  selection: PropTypes.oneOf(['single', 'multiple', 'none']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'null']),
  tabIndex: PropTypes.number,
  textField: PropTypes.string,
  valid: PropTypes.bool,
  validationMessage: PropTypes.string,
  validityStyles: PropTypes.bool,
  value: PropTypes.any,
  valueField: PropTypes.string
};

ChipList.defaultProps = {
  selection: 'multiple'
};
