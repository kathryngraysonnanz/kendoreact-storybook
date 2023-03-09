import React from 'react';
import PropTypes from 'prop-types';
import { PanelBar as KendoPanelBar, PanelBarItem } from "@progress/kendo-react-layout";

import './assets/index.scss';

export const PanelBar = ({...props }) => {
  return (
    <>
    <KendoPanelBar {...props} style={{width: 400}}>
     <PanelBarItem title="Team">
       <PanelBarItem title="John Dow" />
       <PanelBarItem title="Ann Brown" />
       <PanelBarItem title="Dave Johnson" />
     </PanelBarItem>
     <PanelBarItem title="Projects">
       <PanelBarItem title="Business Plan" />
       <PanelBarItem title="Forecast" />
       <PanelBarItem title="OKRs" />
     </PanelBarItem>
     <PanelBarItem title="Communication" />
   </KendoPanelBar>
    </>
  );
};

PanelBar.propTypes = {
  animation: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  expanded: PropTypes.string,
  expandMode: PropTypes.oneOf(['single', 'multiple']),
  focused: PropTypes.string,
  isControlled: PropTypes.bool,
  keepItemsMounted: PropTypes.bool,
  selected: PropTypes.string,
  style: PropTypes.any
};

PanelBar.defaultProps = {
};
