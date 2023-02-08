import React from 'react';
import PropTypes from 'prop-types';
import { Avatar as KendoAvatar } from "@progress/kendo-react-layout";

import './assets/index.scss';

export const Avatar = ({...props }) => {

  return (
    <>
      <KendoAvatar {...props}>
        {props.type === 'image' &&
        <img
          src="https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg"
          alt="KendoReact Avatar Customer Image"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
        }

        {props.type === 'text' &&
          <span>ABC</span>
        }

        {props.type === 'icon' &&
           <span className="k-icon k-i-user" />
        }
      </KendoAvatar>
    </>
  );
};

Avatar.propTypes = {
  border: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  fillMode: PropTypes.oneOf(['null', 'solid', 'outline']),
  rounded: PropTypes.oneOf(['null', 'small', 'medium', 'full', 'large']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'null']),
  style: PropTypes.any,
  themeColor: PropTypes.oneOf(["null" , "error" , "inverse" , "base" , "success" , "dark" , "light" , "primary" , "secondary" , "tertiary" , "info" , "warning"]),
  type: PropTypes.oneOf(['image', 'text', 'icon'])
};

Avatar.defaultProps = {
  size: 'large'
};
