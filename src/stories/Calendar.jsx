import React from 'react';
import PropTypes from 'prop-types';
import { Calendar as KendoCalendar } from "@progress/kendo-react-dateinputs";
import './assets/index.scss';

export const Calendar = ({...props }) => {
  return (
    <>
      <KendoCalendar {...props}/>
    </>
  );
};

Calendar.propTypes = {
  ariaDescribedBy: PropTypes.string,
  ariaLabeledBy: PropTypes.string,
  bottomView: PropTypes.oneOf(['month', 'year', 'decade', 'century']),
  cell: PropTypes.node,
  className: PropTypes.string,
  defaultActiveView: PropTypes.oneOf(['month', 'year', 'decade', 'century']),
  defaultValue: PropTypes.instanceOf(Date),
  disabled: PropTypes.bool,
  focusedDate: PropTypes.instanceOf(Date),
  headerTitle: PropTypes.node,
  id: PropTypes.string,
  max: PropTypes.instanceOf(Date),
  min: PropTypes.instanceOf(Date),
  navigation: PropTypes.bool,
  navigationItem: PropTypes.node,
  smoothScroll: PropTypes.bool,
  tabIndex: PropTypes.number,
  topView: PropTypes.oneOf(['month', 'year', 'decade', 'century']),
  value: PropTypes.instanceOf(Date),
  weekCell: PropTypes.node,
  weekNumber: PropTypes.bool
};

Calendar.defaultProps = {

};
