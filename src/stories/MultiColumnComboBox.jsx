import React from 'react';
import PropTypes from 'prop-types';
import { MultiColumnComboBox as KendoMultiColumnComboBox} from "@progress/kendo-react-dropdowns";
import './assets/index.scss';
import { employees } from './assets/multicolumncombobox'

export const MultiColumnComboBox = ({...props }) => {

  const columns = [
    {
      field: "id",
      header: "ID",
      width: "100px",
    },
    {
      field: "name",
      header: "Name",
      width: "200px",
    },
    {
      field: "position",
      header: "Position",
      width: "200px",
    },
  ];

  return (
    <>
      <p>Employees:</p>
      <KendoMultiColumnComboBox
       data={employees}
       columns={columns}
       textField={"name"}
       style={{
          width: "520px",
        }}
     />
    </>
  );
};

MultiColumnComboBox.propTypes = {
  accessKey: PropTypes.string,
  allowCustom: PropTypes.bool,
  ariaDescribedBy: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  className: PropTypes.string,
  clearButton: PropTypes.bool,
  columns: PropTypes.any,
  data: PropTypes.array,
  dataItemKey: PropTypes.string,
  defaultValue: PropTypes.any,
  delay: PropTypes.number,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  disabled: PropTypes.bool,
  fillMode: PropTypes.oneOf(['flat', 'outline', 'solid', 'null']),
  filter: PropTypes.string,
  filterable: PropTypes.bool,
  footer: PropTypes.node,
  groupField: PropTypes.string,
  header: PropTypes.node,
  iconClassName: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  loading: PropTypes.bool,
  name: PropTypes.string,
  opened: PropTypes.bool,
  placeholder: PropTypes.string,
  popupSettings: PropTypes.any,
  required: PropTypes.bool,
  rounded: PropTypes.oneOf(['null', 'small', 'medium', 'full', 'large']),
  size: PropTypes.oneOf(['null', 'small', 'medium', 'large']),
  style: PropTypes.any,
  suggest: PropTypes.bool,
  svgIcon: PropTypes.string,
  tabIndex: PropTypes.number,
  textField: PropTypes.string,
  valid: PropTypes.bool,
  validationMessage: PropTypes.string,
  validityStyles: PropTypes.bool,
  value: PropTypes.any,
  virtual: PropTypes.any
};

MultiColumnComboBox.defaultProps = {

};
