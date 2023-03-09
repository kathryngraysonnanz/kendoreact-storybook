import React from 'react';
import PropTypes from 'prop-types';
import { Barcode as KendoBarcode } from "@progress/kendo-react-barcodes";
import './assets/index.scss';

export const Barcode = ({...props }) => {
  return (
    <>
      <KendoBarcode {...props} />
    </>
  );
};

Barcode.propTypes = {
  background: PropTypes.string,
  border: PropTypes.shape({
    color: PropTypes.string,
    dashType: PropTypes.oneOf(['dash', 'dashDot', 'dot', 'longDash', 'longDashDot','longDashDotDot', 'solid']),
    width: PropTypes.number,
  }),
  checksum: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  padding: PropTypes.number,
  renderAs: PropTypes.oneOf(['svg', 'canvas']),
  style: PropTypes.any,
  text: PropTypes.shape({
    color: PropTypes.string,
    font: PropTypes.string,
    margin: PropTypes.number,
    visible: PropTypes.bool
  }),
  type: PropTypes.oneOf(['EAN13', 'EAN8', 'UPCA', 'UPCE', 'Code11', 'Code39', 'Code39Extended', 'Code93', 'Code93Extended', 'Code128', 'Code128A', 'Code128B', 'Code128C', 'GS1-128', 'MSImod10', 'MSImod1010', 'MSImod1110', 'POSTNET']),
  value: PropTypes.string,
  width: PropTypes.number
};

Barcode.defaultProps = {
  type: "EAN13",
  value: "123456789012"
};
