import React from 'react';
import PropTypes from 'prop-types';
import { QRCode as KendoQRCode } from "@progress/kendo-react-barcodes";
import './assets/index.scss';

export const QRCode = ({...props }) => {
  return (
    <>
      <KendoQRCode {...props} />
    </>
  );
};

QRCode.propTypes = {
  background: PropTypes.string,
  border: PropTypes.shape({
    color: PropTypes.string,
    dashType: PropTypes.oneOf(['dash', 'dashDot', 'dot', 'longDash', 'longDashDot','longDashDotDot', 'solid']),
    width: PropTypes.number,
  }),
  className: PropTypes.string,
  color: PropTypes.string,
  encoding: PropTypes.oneOf(['ISO_8859_1', 'UTF_8']),
  errorCorrection: PropTypes.oneOf(['L', 'M', 'Q', 'H']),
  overlay: PropTypes.shape({
    height: PropTypes.number,
    imageUrl: PropTypes.string,
    type: PropTypes.oneOf(['image', 'swiss']),
    width: PropTypes.number
  }),
  padding: PropTypes.number,
  renderAs: PropTypes.oneOf(['svg', 'canvas']),
  size: PropTypes.string,
  style: PropTypes.any,
  value: PropTypes.string
};

QRCode.defaultProps = {
  value: 'https://www.telerik.com/kendo-react-ui'
};
