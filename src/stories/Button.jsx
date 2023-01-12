import React from 'react';
import PropTypes from 'prop-types';
import { Button as KendoButton } from "@progress/kendo-react-buttons";
import './button.css';

export const Button = () => {
  return (
    <>
      <KendoButton>Hello</KendoButton>
    </>
  );
};

Button.propTypes = {

};

Button.defaultProps = {

};
