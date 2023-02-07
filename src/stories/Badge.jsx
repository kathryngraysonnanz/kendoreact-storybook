import React from 'react';
import PropTypes from 'prop-types';
import { Badge as KendoBadge, BadgeContainer } from "@progress/kendo-react-indicators";
import './assets/index.scss';

export const Badge = ({...props }) => {

  const alignOptions = {
    align: {
      horizontal: props.horizontal,
      vertical: props.vertical
    }
  }
  return (
    <>
      <BadgeContainer>
          <span className="k-icon k-i-twitter-box social" style={{fontSize: '30px'}} />
          <KendoBadge {...props} {...alignOptions}>
            11
          </KendoBadge>
      </BadgeContainer>
    </>
  );
};

Badge.propTypes = {
  // Align Child props
    horizontal: PropTypes.oneOf(['start', 'end']),
    vertical: PropTypes.oneOf(['top', 'bottom']),
  children: PropTypes.node,
  className: PropTypes.string,
  cutoutBorder: PropTypes.bool,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  fillMode: PropTypes.oneOf(['null', 'outline', 'solid']),
  position: PropTypes.oneOf(['inside', 'outside', 'edge']),
  rounded: PropTypes.oneOf(['null', 'small', 'medium', 'large', 'full']),
  size: PropTypes.oneOf(['null', 'small', 'medium', 'large']),
  style: PropTypes.any,
  themeColor: PropTypes.oneOf(["null" , "error" , "inverse" , "inherit" , "success" , "dark" , "light" , "primary" , "secondary" , "tertiary" , "info" , "warning"])
};

Badge.defaultProps = {
  vertical: 'top'
};
