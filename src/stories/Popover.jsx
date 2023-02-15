import React from 'react';
import PropTypes from 'prop-types';
import { Popover as KendoPopover, PopoverActionsBar } from "@progress/kendo-react-tooltip";
import './assets/index.scss';

export const Popover = ({...props }) => {

  const anchor = React.useRef(null);

  const options = {
    margin: {
      vertical: props.marginVertical,
      horizontal: props.marginHorizontal
    },
    offset: {
      top: props.offsetTop,
      left: props.offsetLeft
    }
  }

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <div ref={anchor} style={{height: '50px', width: '50px', backgroundColor: 'red'}}/>
        </div>
      <KendoPopover {...props} {...options} anchor={anchor.current}>
        Hello World
      </KendoPopover>
    </>
  );
};

Popover.propTypes = {
  anchor: PropTypes.element,
  animate: PropTypes.bool,
  appendTo: PropTypes.element,
  callout: PropTypes.bool,
  className: PropTypes.string,
  collision: PropTypes.string,
  contentStyle: PropTypes.any,
  id: PropTypes.string,
  // Margin Props
    marginHorizontal: PropTypes.number,
    marginVertical: PropTypes.number,
  // Offset Props
    offsetLeft: PropTypes.number,
    offsetTop: PropTypes.number,
  popoverClass: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  scale: PropTypes.number,
  show: PropTypes.bool,
  style: PropTypes.any,
  title: PropTypes.node
};

Popover.defaultProps = {
  show: true,
};
