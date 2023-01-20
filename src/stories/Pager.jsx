import React from 'react';
import PropTypes from 'prop-types';
import { Pager as KendoPager } from "@progress/kendo-react-data-tools";
import './assets/index.scss';

export const Pager = ({...props }) => {

  const [page, setPage] = React.useState({
    skip: 0,
    take: 5,
  });
  const handlePageChange = (event) => {
    setPage({
      skip: event.skip,
      take: event.take,
    });
  };

  return (
    <>
      <KendoPager onPageChange={handlePageChange} skip={page.skip}
      take={page.take} {...props}/>
    </>
  );
};

Pager.propTypes = {
  buttonCount: PropTypes.number,
  className: PropTypes.string,
  info: PropTypes.bool,
  pageSizes: PropTypes.array,
  previousNext: PropTypes.bool,
  responsive: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'null']),
  skip: PropTypes.number,
  style: PropTypes.any,
  take: PropTypes.number,
  total: PropTypes.number,
  type: PropTypes.oneOf(['input', 'numeric'])
};

Pager.defaultProps = {
  total: 100,
  buttonCount: 10,
  previousNext: true,
  info: true,
  type: 'numeric',
  pageSizes: [10, 15, 20],
  responsive: true,
  size: null
};
