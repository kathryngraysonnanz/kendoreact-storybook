import * as React from 'react';
import PropTypes from 'prop-types';
import { Filter as KendoFilter, Operators, TextFilter, NumericFilter, BooleanFilter } from '@progress/kendo-react-data-tools';
import { filterBy } from '@progress/kendo-data-query';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './assets/datagrid-data'

const initialFilter = {
  logic: 'and',
  filters: [{
    field: 'UnitPrice',
    operator: 'gt',
    value: 10
  },{
    logic: 'or',
    filters: [{
      field: 'ProductName',
      operator: 'contains',
      value: 'chef'
    }]
  }]
};

export const Filter = ({...props }) => {
  const [filter, setFilter] = React.useState(initialFilter);
  const onFilterChange = event => {
    setFilter(event.filter);
  };
  return <>
        <KendoFilter {...props} value={filter} onChange={onFilterChange} fields={[{
          name: "ProductName",
          label: 'Name',
          filter: TextFilter,
          operators: Operators.text
        }, {
          name: "UnitPrice",
          label: 'Price',
          filter: NumericFilter,
          operators: Operators.numeric
        }, {
          name: "Discontinued",
          label: 'Discontinued',
          filter: BooleanFilter,
          operators: Operators.boolean
        }]} />
        <Grid style={{
            maxHeight: '400px'
          }} data={filterBy(products, filter)}>
          <GridColumn field="ProductName" title="Name" width="300px" />
          <GridColumn field="UnitPrice" title="Price" />
          <GridColumn field="Discontinued" title="Discontinued" />
        </Grid>
      </>
};


Filter.propTypes = {
  ariaLabelExpression: PropTypes.string,
  ariaLabelGroup: PropTypes.string,
  className: PropTypes.string,
  defaultGroupFilter: PropTypes.any,
  fields: PropTypes.any,
  style: PropTypes.any,
  value: PropTypes.any
};

Filter.defaultProps = {
};
