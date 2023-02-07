import React from 'react';
import PropTypes from 'prop-types';
import { ColorPicker as KendoColorPicker } from "@progress/kendo-react-inputs";
import './assets/index.scss';

export const ColorPicker = ({...props }) => {

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
      <KendoColorPicker {...props} {...pickerOptions} />
    </>
  );
};

ColorPicker.propTypes = {
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
  // Popup Settings
    animate: PropTypes.bool,
    popupClassName: PropTypes.string,
  rounded: PropTypes.oneOf(['null', 'small', 'medium', 'full', 'large']),
  size: PropTypes.oneOf(['null', 'small', 'medium', 'large']),
  svgIgon: PropTypes.string,
  tabIndex: PropTypes.number,
  title: PropTypes.string,
  valid: PropTypes.bool,
  value: PropTypes.string,
  view: PropTypes.oneOf(['palette', 'gradient', 'combo'])
};

ColorPicker.defaultProps = {
};
