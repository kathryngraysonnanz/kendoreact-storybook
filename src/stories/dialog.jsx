import React from 'react';
import PropTypes from 'prop-types';
import { Dialog as KendoDialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import './assets/index.scss';

export const Dialog = ({...props }) => {
  const [visible, setVisible] = React.useState(true);
  const toggleDialog = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <button onClick={toggleDialog}> Open Dialog </button>
      {visible && (
        <KendoDialog {...props} themeColor="dark" onClose={toggleDialog}>
          <p>Are you sure you want to continue?</p>
          <DialogActionsBar>
            <button onClick={toggleDialog}>No</button>
            <button onClick={toggleDialog}>Yes</button>
          </DialogActionsBar>
        </KendoDialog>
      )}
    </div>
  )
};

Dialog.propTypes = {
  appendTo: PropTypes.any,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  closeIcon: PropTypes.bool,
  contentStyle: PropTypes.any,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  height: PropTypes.string,
  id: PropTypes.string,
  minWidth: PropTypes.string,
  style: PropTypes.any,
  themeColor: PropTypes.oneOf(['dark', 'light', 'primary']),
  title: PropTypes.string,
  width: PropTypes.string
};

Dialog.defaultProps = {
};
