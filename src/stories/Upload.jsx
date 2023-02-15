import React from 'react';
import PropTypes from 'prop-types';
import { Upload as KendoUpload } from "@progress/kendo-react-upload";
import './assets/index.scss';

export const Upload = ({...props }) => {

  const options = {
    restrictions: {
      allowedExtensions: props.allowedExtensions,
      maxFileSize: props.maxFileSize,
      minFileSize: props.minFileSize
    }
  }

  return (
    <>
      <KendoUpload
        {...props}
        {...options}
        defaultFiles={[]}
         saveUrl={"https://demos.telerik.com/kendo-ui/service-v4/upload/save"}
         removeUrl={"https://demos.telerik.com/kendo-ui/service-v4/upload/remove"}
       />
    </>
  );
};

Upload.propTypes = {
  accept: PropTypes.bool,
  actionsLayout: PropTypes.oneOf(['start', 'center', 'end', 'stretched']),
  ariaDescribedBy: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  autoUpload: PropTypes.bool,
  batch: PropTypes.bool,
  className: PropTypes.string,
  defaultFiles: PropTypes.array,
  disabled: PropTypes.bool,
  files: PropTypes.array,
  id: PropTypes.string,
  listItemUI: PropTypes.element,
  multiple: PropTypes.bool,
  removeField: PropTypes.string,
  removeHeaders: PropTypes.any,
  removeMethod: PropTypes.string,
  responseType: PropTypes.oneOf(['text', 'arraybuffer', 'blob', 'json']),
  // Restrictions Props
    allowedExtensions: PropTypes.array,
    maxFileSize: PropTypes.number,
    minFileSize: PropTypes.number,
  saveField: PropTypes.string,
  saveHeaders: PropTypes.any,
  saveMethod: PropTypes.string,
  saveUrl: PropTypes.string,
  selectMessageUrl: PropTypes.node,
  showActionButtons: PropTypes.bool,
  showFileList: PropTypes.bool,
  tabIndex: PropTypes.number,
  withCredentials: PropTypes.bool
};

Upload.defaultProps = {
};
