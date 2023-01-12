import React from 'react';
import PropTypes from 'prop-types';
import { Button as KendoButton, ButtonGroup as KendoButtonGroup } from "@progress/kendo-react-buttons";
import './assets/index.scss';

export const ButtonGroup = ({...props }) => {
  return (
    <>
      <KendoButtonGroup {...props}>
          <KendoButton togglable={true}>Button 1</KendoButton>
          <KendoButton togglable={true}>Button 2</KendoButton>
          <KendoButton togglable={true}>Button 3</KendoButton>
        </KendoButtonGroup>
    </>
  );
};

ButtonGroup.propTypes = {
  className: PropTypes.string,
  dir: PropTypes.oneOf(['rtl', 'ltr', 'auto']),
  disabled: PropTypes.bool,
  width: PropTypes.string
};

ButtonGroup.defaultProps = {

};
