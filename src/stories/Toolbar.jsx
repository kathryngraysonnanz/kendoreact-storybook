import React from 'react';
import PropTypes from 'prop-types';
import {
  Button as KendoButton,
  ButtonGroup as KendoButtonGroup,
  Toolbar as KendoToolbar,
  ToolbarItem as KendoToolbarItem,
  ToolbarSeparator as KendoToolbarSeparator,
  ToolbarSpacer as KendoToolbarSpacer
} from "@progress/kendo-react-buttons";
import './assets/index.scss';

export const Toolbar = ({...props }) => {
  return (
    <>
    <KendoToolbar>
    <KendoToolbarItem>
      <KendoButtonGroup>
        <KendoButton icon="bold" title="Bold" togglable={true} />
        <KendoButton icon="italic" title="Italic" togglable={true} />
        <KendoButton icon="underline" title="Underline" togglable={true} />
      </KendoButtonGroup>
    </KendoToolbarItem>
    <KendoToolbarItem>
      <KendoButtonGroup>
        <KendoButton icon="align-left" title="Align Left" togglable={true} />
        <KendoButton icon="align-center" title="Align Center" togglable={true} />
        <KendoButton icon="align-right" title="Align Right" togglable={true} />
        <KendoButton icon="align-justify" title="Align Justify" togglable={true} />
      </KendoButtonGroup>
    </KendoToolbarItem>
    </KendoToolbar>
    </>
  );
};

Toolbar.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  dir: PropTypes.oneOf(['rtl', 'ltr', 'auto']),
  id: PropTypes.string,
  keyboardNavigation: PropTypes.bool,
  style: PropTypes.any,
  tabIndex: PropTypes.number
};

Toolbar.defaultProps = {
  keyboardNavigation: true 
};
