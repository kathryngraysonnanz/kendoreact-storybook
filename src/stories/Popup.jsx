import React from 'react';
import PropTypes from 'prop-types';
import { Popup as KendoPopup } from "@progress/kendo-react-popup";
import './assets/index.scss';

export const Popup = ({...props }) => {

 const anchor = React.useRef(null);
 const [show, setShow] = React.useState(false);
 React.useEffect(() => {
   setShow(true);
 }, []);
 const onClick = () => {
   setShow(!show);
 };

 const options = {
   anchorAlign: {
     horizontal: props.anchorHorizontal,
     vertical: props.anchorVertical
   },
   margin: {
     vertical: props.marginVertical,
     horizontal: props.marginHorizontal
   },
   offset: {
     top: props.offsetTop,
     left: props.offsetLeft
   },
   popupAlign: {
     horizontal: props.popupHorizontal,
     vertical: props.popupVertical
   }
 }

  return (
    <>
    <button
      onClick={onClick}
      ref={anchor}
    >
      {show ? "Hide" : "Show"}
    </button>

      <KendoPopup {...props} anchor={anchor.current} show={show} {...options} >
          <p style={{padding: '10px'}}>Popup content</p>
      </KendoPopup>
    </>
  );
};

Popup.propTypes = {
  anchor: PropTypes.node,
  // Anchor Align
    anchorHorizontal: PropTypes.oneOf(['center', 'left', 'right']),
    anchorVertical: PropTypes.oneOf(['center', 'top', 'bottom']),
  // Animation
    closeDuration: PropTypes.number,
    openDuration: PropTypes.number,
  appendTo: PropTypes.node,
  className: PropTypes.string,
  collision: PropTypes.any,
  id: PropTypes.string,
  // Margin
    marginHorizontal: PropTypes.number,
    marginVertical: PropTypes.number,
  // Offset
    offsetLeft: PropTypes.number,
    offsetTop: PropTypes.number,
  // Popup Align
    popupHorizontal: PropTypes.number,
    popupVertical: PropTypes.number,
  popupClass: PropTypes.string,
  positionMode: PropTypes.oneOf(['fixed', 'absolute']),
  scale: PropTypes.number,
  show: PropTypes.bool,
  style: PropTypes.any
};

Popup.defaultProps = {
  anchorHorizontal: 'left',
  anchorVertical: 'bottom'
};
