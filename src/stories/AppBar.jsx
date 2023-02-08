import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar as KendoAppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
} from "@progress/kendo-react-layout";

import './assets/index.scss';

export const AppBar = ({...props }) => {

  return (
    <>
    <KendoAppBar {...props}>
      <AppBarSection>
        <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base">
          <span className="k-icon k-i-menu" />
        </button>
      </AppBarSection>

      <AppBarSpacer
        style={{
          width: 4,
        }}
      />

      <AppBarSection>
        <h3 className="title" style={{margin: 0}}>KendoReact</h3>
      </AppBarSection>

      <AppBarSpacer
        style={{
          width: 32,
        }}
      />

      <AppBarSection>
        <span className="k-appbar-separator" />
      </AppBarSection>

      <AppBarSection>
        <ul style={{ fontSize: '14px', listStyleType: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'space-around', cursor: 'pointer', width: '300px'}}>
          <li>
            <span>What's New</span>
          </li>
          <li>
            <span>About</span>
          </li>
          <li>
            <span>Contacts</span>
          </li>
        </ul>
      </AppBarSection>

      <AppBarSpacer />

      <AppBarSection className="actions">
        <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base">

        </button>
      </AppBarSection>


    </KendoAppBar>
    </>
  );
};

AppBar.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  id: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom']),
  positionMode: PropTypes.oneOf(['static', 'sticky', 'fixed']),
  style: PropTypes.any,
  themeColor: PropTypes.oneOf(['light', 'dark', 'inherit'])
};

AppBar.defaultProps = {
};
