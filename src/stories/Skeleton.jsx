import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton as KendoSkeleton } from "@progress/kendo-react-indicators";
import './assets/index.scss';

export const Skeleton = ({...props }) => {

  const skeletonOptions = {
    animation: {
      type: props.animationType
    },
    style: {
      width: '100px',
      height: '100px'
    }
  }

  return (
    <>
      <KendoSkeleton {...props} {...skeletonOptions}/>
    </>
  );
};

Skeleton.propTypes = {
  animation: PropTypes.bool,
  animationType: PropTypes.oneOf(['wave', 'pulse']),
  className: PropTypes.string,
  shape: PropTypes.oneOf(['circle', 'text', 'rectangle']),
  style: PropTypes.any
};

Skeleton.defaultProps = {
 
};
