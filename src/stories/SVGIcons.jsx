import React from "react";
import PropTypes from "prop-types";
import { SvgIcon } from "@progress/kendo-react-common";
import * as svgIcons from '@progress/kendo-svg-icons';
import "./assets/index.scss";

export const SVGIcons = ({...props }) => {

  return (
    <>
    <div style={{display: "flex", flexWrap: 'wrap', justifyContent: "space-evenly", alignItems: "center"}}>
      {Object.keys(svgIcons).map((key, index) => {
        return (
          <span key={index} style={{minWidth: '30%'}}>
            <span style={{display: 'flex', justifyContent: 'center', width: "100%"}}>
            <SvgIcon icon={svgIcons[key]} {...props} />
            </span>
            <span style={{display: 'flex', justifyContent: 'center', width: "100%"}}>
            <p className="title">{key}</p>
            </span>
          </span>
        );
      })}
    </div>
    </>
  );
};

SVGIcons.propTypes = {
  className: PropTypes.string,
  flip: PropTypes.oneOf(["default", "horizontal", "vertical", "both"]),
  id: PropTypes.string,
  size: PropTypes.oneOf(["default", "xsmall", "small", "medium", "large", "xlarge"]),
  style: PropTypes.any,
  tabIndex: PropTypes.number,
  themeColor: PropTypes.oneOf(["inherit", "primary", "secondary", "tertiary", "info", "success", "warning", "error", "dark", "light", "inverse"])
};

SVGIcons.defaultProps = {
  size: "large"
};
