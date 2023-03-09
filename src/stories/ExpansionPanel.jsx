import React from 'react';
import PropTypes from 'prop-types';
import {
  ExpansionPanel as KendoExpansionPanel,
  ExpansionPanelContent,
} from "@progress/kendo-react-layout";

import './assets/index.scss';

export const ExpansionPanel = ({...props }) => {

  const [expanded, setExpanded] = React.useState(props.expanded);

  return (
    <>
    <KendoExpansionPanel style={{width: 400}} {...props} onAction={(e) => setExpanded(!expanded)}>
          {(expanded == true) && (
            <ExpansionPanelContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at nibh ut ipsum aliquam ornare. Integer molestie tellus non libero vehicula, id porta velit laoreet. Nam scelerisque consequat eros quis congue. Vivamus at quam vel libero varius feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris commodo ullamcorper lacus eu aliquet. Nam at sagittis tellus. Aliquam lacinia sem a felis aliquam, sed interdum neque aliquet. Nunc facilisis magna sit amet tortor fermentum dignissim in in nulla. Etiam non quam sit amet libero mollis vestibulum. Morbi quis metus ut lorem interdum faucibus vel non nibh.
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
  title: 'Title'
};
