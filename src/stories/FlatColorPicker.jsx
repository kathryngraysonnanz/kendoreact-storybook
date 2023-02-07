import React from 'react';
import PropTypes from 'prop-types';
import { FlatColorPicker as KendoFlatColorPicker } from "@progress/kendo-react-inputs";
import './assets/index.scss';

export const FlatColorPicker = ({...props }) => {

  const pickerOptions = {
    gradientSettings: {
      backgroundColor: props.backgroundColor,
      opacity: props.opacity
    },
    paletteSettings: {
      columns: props.columns,
      palette: props.palette,
      tileSize: props.tileSize
    },
    popupSettings: {
      animate: props.animate,
      className: props.popupClassName
    }
  }

  return (
    <>
      <KendoFlatColorPicker {...props} {...pickerOptions} />
    </>
  );
};

FlatColorPicker.propTypes = {
  ariaDescribedBy: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  defaultValue: PropTypes.any,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  disabled: PropTypes.bool,
  fillMode: PropTypes.oneOf(['null', 'flat', 'outline', 'solid']),
  // Gradient Settings Props
    backgroundColor: PropTypes.string,
    opacity: PropTypes.number,
  icon: PropTypes.string,
  iconClassName: PropTypes.string,
  id: PropTypes.string,
  open: PropTypes.bool,
  // Palette Settings
    columns: PropTypes.number,
    palette: PropTypes.oneOf(['office', 'apex', 'austin', 'clarity', 'slipstream', 'metro', 'flow', 'hardcover', 'trek', 'verve', 'basic', 'monochrome']),
    tileSize: PropTypes.number,
  showButtons: PropTypes.bool,
  showClearButton: PropTypes.bool,
  showPreview: PropTypes.bool,
  tabIndex: PropTypes.number,
  title: PropTypes.string,
  valid: PropTypes.bool,
  value: PropTypes.string,
  view: PropTypes.oneOf(['palette', 'gradient'])
};

FlatColorPicker.defaultProps = {
};
