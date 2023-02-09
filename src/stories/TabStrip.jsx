import React from 'react';
import PropTypes from 'prop-types';
import { TabStrip as KendoTabStrip, TabStripTab } from "@progress/kendo-react-layout";

import './assets/index.scss';

export const TabStrip = ({...props }) => {

  const [selected, setSelected] = React.useState(props.selected);
  const handleSelect = (e) => {
    setSelected(e.selected);
  };

  return (
    <>
    <KendoTabStrip {...props}  selected={selected} onSelect={handleSelect}>
      <TabStripTab title="Tab 1 Title">
        <p>Tab 1 Content</p>
      </TabStripTab>
      <TabStripTab title="Tab 2 Title">
        <p>Tab 2 Content</p>
      </TabStripTab>
      <TabStripTab title="Tab 3 Title">
        <p>Tab 3 Content</p>
      </TabStripTab>
      <TabStripTab title="Tab 4 Title">
        <p>Tab 4 Content</p>
      </TabStripTab>
    </KendoTabStrip>
    </>
  );
};

TabStrip.propTypes = {
  animation: PropTypes.bool,
  buttonScrollSpeed: PropTypes.number,
  children: PropTypes.any,
  className: PropTypes.string,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  id: PropTypes.string,
  keepTabsMounted: PropTypes.bool,
  mouseScrollSpeed: PropTypes.number,
  nextButton: PropTypes.node,
  prevButton: PropTypes.node,
  scrollable: PropTypes.bool,
  selected: PropTypes.number,
  tabContentStyle: PropTypes.any,
  tabIndex: PropTypes.number,
  tabPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
};

TabStrip.defaultProps = {
  selected: 0
};
