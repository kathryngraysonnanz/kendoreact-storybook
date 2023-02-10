import React from 'react';
import PropTypes from 'prop-types';
import { PDFViewer as KendoPDFViewer } from "@progress/kendo-react-pdf-viewer";
import './assets/index.scss';
import { SampleFileBase64 } from "./assets/pdfsample";

export const PDFViewer = ({...props }) => {

  return (
    <>
    <KendoPDFViewer {...props} data={SampleFileBase64} />
    </>
  );
};

PDFViewer.propTypes = {
  arrayBuffer: PropTypes.any,
  data: PropTypes.string,
  defaultZoom: PropTypes.number,
  maxZoom: PropTypes.number,
  minZoom: PropTypes.number,
  saveFileName: PropTypes.string,
  style: PropTypes.any,
  typedArray: PropTypes.any,
  url: PropTypes.string,
  zoom: PropTypes.number,
  zoomRate: PropTypes.number
};

PDFViewer.defaultProps = {
  defaultZoom: 0.75
};
