import React from 'react';
import PropTypes from 'prop-types';
import { Window as KendoWindow } from "@progress/kendo-react-dialogs";
import './assets/index.scss';

export const Window = ({...props }) => {
  const [visible, setVisible] = React.useState(true);
  const toggleDialog = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <button onClick={toggleDialog}> Open Dialog </button>
      {visible && (
        <KendoWindow {...props} themeColor="dark" onClose={toggleDialog}>
          <p>Hello World</p>
        </KendoWindow>
      )}
    </div>
  )
};

Window.propTypes = {
  appendTo: PropTypes.any,
  className: PropTypes.string,
  closeButton: PropTypes.any,
  doubleClickStageChange: PropTypes.bool,
  draggable: PropTypes.bool,
  height: PropTypes.number,
  initialHeight: PropTypes.number,
  initialLeft: PropTypes.number,
  initialTop: PropTypes.number,
  initialWidth: PropTypes.number,
  left: PropTypes.number,
  maximizeButton: PropTypes.number,
  minWidth: PropTypes.number,
  modal: PropTypes.bool,
  overlayStyle: PropTypes.any,
  resizeable: PropTypes.bool,
  restoreButton: PropTypes.node,
  shouldUpdateOnDrag: PropTypes.bool,
  stage: PropTypes.string,
  style: PropTypes.any,
  themeColor: PropTypes.oneOf(['dark', 'light', 'primary']),
  title: PropTypes.string,
  top: PropTypes.number,
  width: PropTypes.number
};

Window.defaultProps = {
};
