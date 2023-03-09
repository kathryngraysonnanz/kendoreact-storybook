import React from 'react';
import PropTypes from 'prop-types';
import { DropDownTree as KendoDropDownTree } from "@progress/kendo-react-dropdowns";
import './assets/index.scss';
import { data } from './assets/tree-data'
import { processTreeData, expandedState } from "./assets/tree-data-ops";

export const DropDownTree = ({...props }) => {

const selectField = "selected";
const expandField = "expanded";
const dataItemKey = "id";
const textField = "text";
const subItemsField = "items";
const fields = {
  selectField,
  expandField,
  dataItemKey,
  subItemsField,
};

const [value, setValue] = React.useState(null);
  const [expanded, setExpanded] = React.useState([data[0][dataItemKey]]);
  const onChange = (event) => setValue(event.value);
  const onExpandChange = React.useCallback(
    (event) => setExpanded(expandedState(event.item, dataItemKey, expanded)),
    [expanded]
  );
  const treeData = React.useMemo(
    () =>
      processTreeData(
        data,
        {
          expanded,
          value,
        },
        fields
      ),
    [expanded, value]
  );

  return (
    <>
      <p>Choose from the list:</p>
      <KendoDropDownTree
        {...props}
        data={treeData}
        value={value}
        onChange={onChange}
        placeholder="Please select ..."
        textField={textField}
        dataItemKey={dataItemKey}
        selectField={selectField}
        expandField={expandField}
        onExpandChange={onExpandChange}
        style={{width: 200}}
      />
    </>
  );
};

DropDownTree.propTypes = {
  accessKey: PropTypes.string,
  ariaDescribedBy: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.array,
  dataItemKey: PropTypes.string,
  defaultItem: PropTypes.any,
  defaultValue: PropTypes.string,
  delay: PropTypes.number,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  disabled: PropTypes.bool,
  fillMode: PropTypes.oneOf(['flat', 'outline', 'solid', 'null']),
  filter: PropTypes.string,
  filterable: PropTypes.bool,
  footer: PropTypes.node,
  header: PropTypes.node,
  iconClassName: PropTypes.string,
  id: PropTypes.string,
  ignoreCase: PropTypes.bool,
  label: PropTypes.string,
  leftRightKeysNavigation: PropTypes.bool,
  loading: PropTypes.bool,
  name: PropTypes.string,
  opened: PropTypes.bool,
  popupSettings: PropTypes.any,
  required: PropTypes.bool,
  rounded: PropTypes.oneOf(['null', 'small', 'medium', 'full', 'large']),
  size: PropTypes.oneOf(['null', 'small', 'medium', 'large']),
  style: PropTypes.any,
  svgIcon: PropTypes.string,
  tabIndex: PropTypes.number,
  textField: PropTypes.string,
  title: PropTypes.string,
  valid: PropTypes.bool,
  validationMessage: PropTypes.string,
  validityStyles: PropTypes.bool,
  value: PropTypes.any,
  virtual: PropTypes.any
};

DropDownTree.defaultProps = {

};
