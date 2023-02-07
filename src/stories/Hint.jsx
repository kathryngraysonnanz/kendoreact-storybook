import React from 'react';
import PropTypes from 'prop-types';
import { Hint as KendoHint } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";

import './assets/index.scss';

export const Hint = ({...props }) => {

  return (
    <>
       <KendoHint {...props} >ex: "Peter"</KendoHint>
    </>
  );
};

Hint.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.oneOf(['start', 'end']),
  editorDisabled: PropTypes.bool,
  id: PropTypes.string,
  style: PropTypes.any
};

Hint.defaultProps = {
};
