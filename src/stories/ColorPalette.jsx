import React from 'react';
import PropTypes from 'prop-types';
import { ColorPalette as KendoColorPalette } from "@progress/kendo-react-inputs";
import './assets/index.scss';

export const ColorPalette = ({...props }) => {

  return (
    <>
      <KendoColorPalette {...props} />
    </>
  );
};

ColorPalette.propTypes = {
  ariaDescribedBy: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  columns: PropTypes.number,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  palette: PropTypes.oneOf(['office', 'apex', 'austin', 'clarity', 'slipstream', 'metro', 'flow', 'hardcover', 'trek', 'verve', 'basic', 'monochrome']),
  tabIndex: PropTypes.number,
  tileSize: PropTypes.number,
  value: PropTypes.string
};

ColorPalette.defaultProps = {
};
