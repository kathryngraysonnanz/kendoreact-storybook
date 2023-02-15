import React from 'react';
import PropTypes from 'prop-types';
import {
  TreeView as KendoTreeView,
  processTreeViewItems,
  handleTreeViewCheckChange,
} from "@progress/kendo-react-treeview";
import './assets/index.scss';

const tree = [
  {
    text: "Furniture",
    expanded: true,
    items: [
      {
        text: "Tables & Chairs",
      },
      {
        text: "Sofas",
      },
      {
        text: "Occasional Furniture",
      },
    ],
  },
  {
    text: "Decor",
    expanded: true,
    items: [
      {
        text: "Bed Linen",
      },
      {
        text: "Curtains & Blinds",
      },
      {
        text: "Carpets",
      },
    ],
  },
];

export const TreeView = ({...props }) => {

  const [check, setCheck] = React.useState([]);
    const [expand, setExpand] = React.useState({
      ids: ["Item2"],
      idField: "text",
    });
    const [select, setSelect] = React.useState([""]);
    const onItemClick = (event) => {
      setSelect([event.itemHierarchicalIndex]);
    };
    const onExpandChange = (event) => {
      let ids = expand.ids.slice();
      const index = ids.indexOf(event.item.text);
      index === -1 ? ids.push(event.item.text) : ids.splice(index, 1);
      setExpand({
        ids,
        idField: "text",
      });
    };
    const onCheckChange = (event) => {
      const settings = {
        singleMode: false,
        checkChildren: false,
        checkParents: false,
      };
      setCheck(handleTreeViewCheckChange(event, check, tree, settings));
    };

  return (
    <>
    <KendoTreeView
      data={processTreeViewItems(tree, {
          select: select,
          check: check,
          expand: expand,
        })}
      onExpandChange={onExpandChange}
      onItemClick={onItemClick}
      onCheckChange={onCheckChange}
      {...props}
    />
    </>
  );
};

TreeView.propTypes = {
  animate: PropTypes.bool,
  ariaLabel: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  ariaMultiSelectable: PropTypes.bool,
  checkboxes: PropTypes.bool,
  checkField: PropTypes.string,
  checkIndeterminateField: PropTypes.string,
  childrenField: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.any,
  disableField: PropTypes.string,
  draggable: PropTypes.bool,
  expandField: PropTypes.string,
  expandIcons: PropTypes.bool,
  focusIdField: PropTypes.string,
  hasChildrenField: PropTypes.string,
  item: PropTypes.node,
  selectField: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'null']),
  tabIndex: PropTypes.number,
  textField: PropTypes.string
};

TreeView.defaultProps = {
};
