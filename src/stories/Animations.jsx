import React from 'react';
import PropTypes from 'prop-types';
import {
  Slide,
  Push,
  Expand,
  Fade,
  Zoom,
  Reveal,
} from "@progress/kendo-react-animation";
import './assets/index.scss';

export const Animations = ({type, ...props }) => {

  const [show, setShow] = React.useState(true);
 const onClick = () => {
   setShow(!show);
 };
 const children = show ? <div style={{height: '60px', width: '60px', backgroundColor:'green', borderRadius: '100px'}}></div> : null;

  return (
    <>
     <button onClick={onClick}>
       Animate
     </button>
      <br/><br/>
      { type == 'Slide' &&
      <Slide {...props}>{children}</Slide>
      }

      { type == 'Fade' &&
      <Fade {...props}>{children}</Fade>
      }

      { type == 'Expand' &&
      <Expand {...props}>{children}</Expand>
      }

      { type == 'Zoom' &&
      <Zoom {...props}>{children}</Zoom>
      }

      { type == 'Push' &&
      <Push {...props}>{children}</Push>
      }

      { type == 'Reveal' &&
      <Reveal {...props}>{children}</Reveal>
      }

    </>
  );
};

Animations.propTypes = {
  type: PropTypes.oneOf(['Fade', 'Expand', 'Push', 'Reveal', 'Slide', 'Zoom']),
  animationEnteredStyle: PropTypes.any,
  animationEnteringStyle: PropTypes.any,
  animationExitedStyle: PropTypes.any,
  AnimationExitingStyle: PropTypes.any,
  appear: PropTypes.bool,
  childFactory: PropTypes.any,
  className: PropTypes.string,
  componentChildClassName: PropTypes.string,
  componentChildStyle: PropTypes.any,
  enter: PropTypes.bool,
  exit: PropTypes.bool,
  id: PropTypes.string,
  mountOnEnter: PropTypes.bool,
  stackChildren: PropTypes.bool,
  style: PropTypes.any,
  transitionEnterDuration: PropTypes.number,
  transitionExitDuration: PropTypes.number,
  transitionName: PropTypes.string,
  unmountOnExit: PropTypes.bool
};

Animations.defaultProps = {
};
