import React from 'react';
import PropTypes from 'prop-types';
import { ChunkProgressBar as KendoChunkProgressBar } from "@progress/kendo-react-progressbars";
import './assets/index.scss';

export const ChunkProgressBar = ({...props }) => {

  return (
    <>
      <KendoChunkProgressBar {...props} />
    </>
  );
};

ChunkProgressBar.propTypes = {
  ariaLabel: PropTypes.string,
  chunkCount: PropTypes.number,
  className: PropTypes.string,
  dir: PropTypes.oneOf(['rtl', 'ltr', 'auto']),
  disabled: PropTypes.bool,
  emptyClassName: PropTypes.string,
  emptyStyle: PropTypes.any,
  max: PropTypes.number,
  min: PropTypes.number,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  progressClassName: PropTypes.string,
  progressStyle: PropTypes.any,
  reverse: PropTypes.bool,
  style: PropTypes.any,
  tabIndex: PropTypes.number,
  value: PropTypes.number
};

ChunkProgressBar.defaultProps = {
  min: 0,
  max: 100,
  value: 55
};
