import React from 'react';
import PropTypes from 'prop-types';
import { Splitter as KendoSplitter } from "@progress/kendo-react-layout";

import './assets/index.scss';

export const Splitter = ({...props }) => {

  return (
    <>
    <KendoSplitter {...props}>
        <div>
          <h3>Panel 1</h3>
        </div>
        <div>
          <h3>Panel 2</h3>
        </div>
      </KendoSplitter>
    </>
  );
};

Splitter.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  defaultPanes: PropTypes.any,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  panes: PropTypes.any,
  style: PropTypes.any
};

Splitter.defaultProps = {
};
