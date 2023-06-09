/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { Menu, MenuItem } from "@progress/kendo-react-layout";
import { Popup } from "@progress/kendo-react-popup";
import './assets/index.scss';

export const ContextMenu = ({...props }) => {

  const offSet = React.useRef({
    left: 0,
    top: 0
  });
  const [show, setShow] = React.useState(false);
  const handleContextMenu = e => {
    e.preventDefault();
    offSet.current = {
      left: e.clientX,
      top: e.clientY
    };
    setShow(true);
  };
  React.useEffect(() => {
    document.addEventListener('click', () => {
      show ? setShow(false) : null;
    });
  }, [show]);

  return (
    <>
      <div>
      <div
        style={{
          width: 300,
          height: 200,
          backgroundColor: "#5392e4",
          justifyContent: "center",
          display: "flex",
          position: "absolute",
          alignItems: "center",
        }}
        onContextMenu={handleContextMenu}
      >
        <p>Right click here to open Context menu</p>
      </div>
      <Popup show={show} offset={offSet.current}>
        <Menu
          vertical={true}
          style={{
            display: "inline-block",
          }}
        >
          <MenuItem text="Item1">
            <MenuItem text="Item1.1" />
            <MenuItem text="Item1.2">
              <MenuItem text="Item1.2.1" />
              <MenuItem text="Item1.2.2" />
            </MenuItem>
          </MenuItem>
          <MenuItem text="Item2">
            <MenuItem text="Item2.1" />
            <MenuItem text="Item2.2" />
          </MenuItem>
          <MenuItem text="Item3" />
        </Menu>
      </Popup>
    </div>
    </>
  );
};

ContextMenu.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  customCloseItemIds: PropTypes.string,
  dir: PropTypes.oneOf(['rtl', 'ltr', 'auto']),
  hoverCloseDelay: PropTypes.number,
  hoverOpenDelay: PropTypes.number,
  itemRender: PropTypes.any, 
  items: PropTypes.any,
  linkRender: PropTypes.any,
  openOnClick: PropTypes.bool,
  style: PropTypes.any,
  vertical: PropTypes.bool
};

ContextMenu.defaultProps = {
};
