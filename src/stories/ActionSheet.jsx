import React from 'react';
import PropTypes from 'prop-types';
import { ActionSheet as KendoActionSheet } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";

import './assets/index.scss';

export const ActionSheet = ({...props }) => {

  const [open, setOpen] = React.useState(true);
  const handleOverlayClick = () => {
    setOpen(false);
  };
  const handleItemClick = () => {
    setOpen(false);
  };
  const openHandler = () => {
    setOpen(true);
  };

  const items = [
  {
    title: "Add to Favorites",
    tabIndex: 0,
  },
  {
    title: "Upload New",
    disabled: true,
  },
  {
    title: "Cancel",
    tabIndex: 0,
    group: "bottom",
  },
];


  return (
    <>
      <Button onClick={openHandler}>
        Open Action Sheet
      </Button>
      {open &&
      <KendoActionSheet {...props} items={items} onOverlayClick={handleOverlayClick} onItemClick={handleItemClick}/>
      }
    </>
  );
};

ActionSheet.propTypes = {
  children: PropTypes.any,
  subTitle: PropTypes.string,
  title: PropTypes.string
};

ActionSheet.defaultProps = {
};
