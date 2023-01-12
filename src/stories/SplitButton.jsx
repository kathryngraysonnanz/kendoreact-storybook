import React from 'react';
import PropTypes from 'prop-types';
import { SplitButton as KendoSplitButton } from "@progress/kendo-react-buttons";
import './assets/index.scss';

export const SplitButton = ({text, ...props }) => {
  const items = [
  {
    text: "Keep Text Only",
    icon: "paste-plain-text",
  },
  {
    text: "Paste as HTML",
    icon: "paste-as-html",
  },
  {
    text: "Paste Markdown",
    icon: "paste-markdown",
  },
  {
    text: "Set Default Paste",
  },
];
  return (
    <>
      <KendoSplitButton text={text} items={items} {...props}/>
    </>
  );
};

SplitButton.propTypes = {
  accessKey: PropTypes.string,
  ariaLabel: PropTypes.string,
  buttonClass: PropTypes.string,
  children: PropTypes.element,
  className: PropTypes.string,
  dir: PropTypes.oneOf(['rtl', 'ltr', 'auto']),
  disabled: PropTypes.bool,
  fillMode: PropTypes.oneOf(['solid', 'outline', 'flat', 'link', 'null']),
  icon: PropTypes.string,
  iconClass: PropTypes.string,
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  item: PropTypes.any,
  itemRender: PropTypes.any,
  items: PropTypes.any,
  opened: PropTypes.bool,
  popupSettings: PropTypes.any,
  rounded: PropTypes.oneOf(['small', 'medium', 'large', 'full', 'null']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'null']),
  style: PropTypes.any,
  tabIndex: PropTypes.number,
  text: PropTypes.string,
  textField: PropTypes.string,
  themeColor: PropTypes.oneOf(['base', 'primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error', 'dark', 'light', 'inverse', 'null']),
  title: PropTypes.string
};

SplitButton.defaultProps = {
};
