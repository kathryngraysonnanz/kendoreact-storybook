import React from 'react';
import PropTypes from 'prop-types';
import { ListView as KendoListView } from "@progress/kendo-react-listview";
import './assets/index.scss';
import products from "./assets/listview.json";

export const ListView = ({...props }) => {
  const MyItemRender = (props) => {
    let item = props.dataItem;
    return (
        <p>{item.ProductName}</p>
    );
  };

  return (
    <>
      <KendoListView {...props}
          data={products}
          item={MyItemRender}
      />
    </>
  );
};

ListView.propTypes = {
  className: PropTypes.string,
  data: PropTypes.any,
  footer: PropTypes.node,
  header: PropTypes.node,
  style: PropTypes.any,
};

ListView.defaultProps = {
};
