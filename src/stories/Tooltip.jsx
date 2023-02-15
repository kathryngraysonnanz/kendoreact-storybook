import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip as KendoTooltip } from "@progress/kendo-react-tooltip";
import './assets/index.scss';

export const Tooltip = ({...props }) => {

  const anchor = React.useRef(null);

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <KendoTooltip {...props} anchor={anchor}>
            <button title="some title" ref={anchor}>
            Hover me
            </button>
         </KendoTooltip>
      </div>
    </>
  );
};

Tooltip.propTypes = {
  anchorElement: PropTypes.oneOf(['pointer', 'target']),
  appendTo: PropTypes.element,
  children: PropTypes.any,
  className: PropTypes.string,
  content: PropTypes.any,
  open: PropTypes.bool,
  openDelay: PropTypes.number,
  parentTitle: PropTypes.bool,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'auto']),
  setCalloutOnPositionAuto: PropTypes.any,
  showCallout: PropTypes.bool,
  style: PropTypes.any,
  targetElement: PropTypes.any,
  tooltipClassName: PropTypes.string,
  tooltipStyle: PropTypes.any,
  updateInterval: PropTypes.number
};

Tooltip.defaultProps = {
};
