import React from 'react';
import PropTypes from 'prop-types';
import { MultiViewCalendar as KendoMultiViewCalendar } from "@progress/kendo-react-dateinputs";
import './assets/index.scss';

export const MultiViewCalendar = ({...props }) => {

  return (
    <>
      <KendoMultiViewCalendar {...props} />
    </>
  );
};

MultiViewCalendar.propTypes = {
  activeRangeEnd: PropTypes.oneOf(['start', 'end']),
  allowReverse: PropTypes.bool,
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
  mode: PropTypes.oneOf(['single', 'multiple', 'range']),
  tabIndex: PropTypes.number,
  topView: PropTypes.oneOf(['month', 'year', 'decade', 'century']),
  value: PropTypes.instanceOf(Date),
  views: PropTypes.number,
  weekCell: PropTypes.node,
  weekNumber: PropTypes.bool
};

MultiViewCalendar.defaultProps = {

};
