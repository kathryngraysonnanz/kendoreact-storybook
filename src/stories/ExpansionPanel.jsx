import React from 'react';
import PropTypes from 'prop-types';
import {
  ExpansionPanel as KendoExpansionPanel,
  ExpansionPanelContent,
} from "@progress/kendo-react-layout";

import './assets/index.scss';

export const ExpansionPanel = ({...props }) => {

  const [expanded, setExpanded] = React.useState(props.expanded);

  function updateExpanded() {
    setExpanded(!expanded)
  }

  return (
    <>
    <KendoExpansionPanel {...props}>
          {(props.expanded == true) && (
            <ExpansionPanelContent>
              The name “Colombia” is derived from the last name of the Italian
              navigator Christopher Columbus. It was conceived by the Venezuelan
              revolutionary Francisco de Miranda as a reference to all of the
              New World, but especially to those portions under Spanish law. The
              name was later adopted by the Republic of Colombia of 1819, formed
              from the territories of the old Viceroyalty of New Granada
              (modern-day Colombia, Panama, Venezuela, Ecuador, and northwest
              Brazil).
            </ExpansionPanelContent>
          )}
      </KendoExpansionPanel>

    </>
  );
};

ExpansionPanel.propTypes = {
  ariaControls: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  collapseIcon: PropTypes.string,
  collapseSVGIcon: PropTypes.string,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  disabled: PropTypes.bool,
  expanded: PropTypes.bool,
  expandIcon: PropTypes.string,
  expandSVGIcon: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.any,
  subtitle: PropTypes.string,
  tabIndex: PropTypes.number,
  title: PropTypes.string
};

ExpansionPanel.defaultProps = {
  expanded: true,
  title: 'Columbia',
  expandIcon: "fa fa-plus",
  collapseIcon: "fa fa-minus"
};
