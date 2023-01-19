import React from "react";
import PropTypes from "prop-types";
import { SvgIcon } from "@progress/kendo-react-common";
import * as svgIcons from '@progress/kendo-svg-icons';
import "./assets/index.scss";

export const SVGIcons = ({...props }) => {

  return (
    <>
    <div className="svg-wrapper">
      {Object.keys(svgIcons).map((key, index) => {
        return (
          <span key={index}>
            <SvgIcon icon={svgIcons[key]} {...props} />
            <p className="title">{key}</p>
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
