import React from 'react';
import PropTypes from 'prop-types';
import {
  MultiSelectTree as KendoMultiSelectTree,
  getMultiSelectTreeValue,
} from "@progress/kendo-react-dropdowns";
import './assets/index.scss';
import {
  processMultiSelectTreeData,
  expandedState,
} from "./assets/multiselecttree-data-ops";
import { data } from "./assets/tree-data";

const dataItemKey = "id";
const checkField = "checkField";
const checkIndeterminateField = "checkIndeterminateField";
const subItemsField = "items";
const expandField = "expanded";
const textField = "text";
const fields = {
  dataItemKey,
  checkField,
  checkIndeterminateField,
  expandField,
  subItemsField,
};

export const MultiSelectTree = ({...props }) => {

  const [value, setValue] = React.useState([]);
  const [expanded, setExpanded] = React.useState([data[0][dataItemKey]]);
  const onChange = (event) =>
    setValue(
      getMultiSelectTreeValue(data, {
        ...fields,
        ...event,
        value,
      })
    );
  const onExpandChange = React.useCallback(
    (event) => setExpanded(expandedState(event.item, dataItemKey, expanded)),
    [expanded]
  );
  const treeData = React.useMemo(
    () =>
      processMultiSelectTreeData(data, {
        expanded,
        value,
        ...fields,
      }),
    [expanded, value]
  );

  return (
    <>
      <KendoMultiSelectTree {...props}
        style={{
            width: "300px",
        }}
        data={treeData}
        value={value}
        onChange={onChange}
        placeholder="Please select ..."
        textField={textField}
        dataItemKey={dataItemKey}
        checkField={checkField}
        checkIndeterminateField={checkIndeterminateField}
        subItemsField={subItemsField}
        expandField={expandField}
        onExpandChange={onExpandChange}
        label={"Category"}/>

    </>
  );
};

MultiSelectTree.propTypes = {
  accessKey: PropTypes.string,
  ariaDescribedBy: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  checkField: PropTypes.string,
  checkIndeterminateField: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.array,
  dataItemKey: PropTypes.string,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  disabled: PropTypes.bool,
  expandField: PropTypes.string,
  fillMode: PropTypes.oneOf(['flat', 'outline', 'solid', 'null']),
  filter: PropTypes.string,
  filterable: PropTypes.bool,
  id: PropTypes.string,
  item: PropTypes.any,
  label: PropTypes.string,
  listNoData: PropTypes.any,
  loading: PropTypes.bool,
  name: PropTypes.string,
  opened: PropTypes.bool,
  placeholder: PropTypes.string,
  popupSettings: PropTypes.any,
  required: PropTypes.bool,
  rounded: PropTypes.oneOf(['null', 'small', 'medium', 'full', 'large']),
  size: PropTypes.oneOf(['null', 'small', 'medium', 'large']),
  style: PropTypes.any,
  subItemsField: PropTypes.string,
  tabIndex: PropTypes.number,
  tag: PropTypes.any,
  tags: PropTypes.any,
  textField: PropTypes.string,
  valid: PropTypes.bool,
  validationMessage: PropTypes.string,
  validityStyles: PropTypes.bool,
  value: PropTypes.any
};

MultiSelectTree.defaultProps = {

};
