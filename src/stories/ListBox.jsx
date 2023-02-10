import React from 'react';
import PropTypes from 'prop-types';
import { ListBox as KendoListBox, ListBoxToolbar, processListBoxData } from '@progress/kendo-react-listbox';
import './assets/index.scss';

const data = [{
name: 'Steven White',
selected: true
}, {
name: 'Nancy King',
selected: false
}, {
name: 'Nancy Davolio',
selected: false
}, {
name: 'Robert Davolio',
selected: false
}, {
name: 'Michael Leverling',
selected: false
}, {
name: 'Andrew Callahan',
selected: false
}, {
name: 'Michael Suyama',
selected: false
}];
const SELECTED_FIELD = 'selected';

export const ListBox = ({...props }) => {

  const lastSelectedIndex = React.useRef(0);
  const [state, setState] = React.useState({
    employees: data,
    developers: []
  });
  const handleItemClick = (event, data, connectedData) => {
    let last = lastSelectedIndex.current;
    const newData = [...state[data]];
    const current = newData.findIndex(dataItem => dataItem === event.dataItem);
    if (!event.nativeEvent.shiftKey) {
      lastSelectedIndex.current = last = current;
    }
    if (!event.nativeEvent.ctrlKey) {
      newData.forEach(item => item.selected = false);
    }
    const select = !event.dataItem.selected;
    if (last <= newData.length - 1) {
      for (let i = Math.min(last, current); i <= Math.max(last, current); i++) {
        newData[i].selected = select;
      }
    }
    setState({
      ...state,
      [data]: newData,
      [connectedData]: state[connectedData].map(item => {
        item[SELECTED_FIELD] = false;
        return item;
      })
    });
  };
  const handleToolBarClick = e => {
    let toolName = e.toolName || '';
    let result = processListBoxData(state.employees, state.developers, toolName, SELECTED_FIELD);
    setState({
      ...state,
      employees: result.listBoxOneData.map(item => {
        item.selected = false;
        return item;
      }),
      developers: result.listBoxTwoData.map(item => {
        item.selected = false;
        return item;
      })
    });
  };

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col'>
          <h6>Employees</h6>
          <KendoListBox style={{
          height: 350,
          width: '100%'
        }} data={state.employees} textField="name" selectedField={SELECTED_FIELD} onItemClick={e => handleItemClick(e, 'employees', 'developers')} toolbar={() => {
          return <ListBoxToolbar tools={['moveUp', 'moveDown', 'transferTo', 'transferFrom', 'transferAllTo', 'transferAllFrom', 'remove']} data={state.employees} dataConnected={state.developers} onToolClick={handleToolBarClick} />;
        }} />
        </div>
        <div className='col'>
          <h6>Developers</h6>
          <KendoListBox style={{
          height: 350,
          width: '100%'
        }} data={state.developers} textField="name" selectedField={SELECTED_FIELD} onItemClick={e => handleItemClick(e, 'developers', 'employees')} />
        </div>
      </div>
    </div>
  );
};

ListBox.propTypes = {
  className: PropTypes.string,
  data: PropTypes.any,
  draggable: PropTypes.bool,
  item: PropTypes.node,
  selectedField: PropTypes.string,
  size: PropTypes.oneOf(['null', 'small', 'medium', 'large']),
  style: PropTypes.any,
  textField: PropTypes.string,
  toolbar: PropTypes.node,
  toolbarPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'none']),
  valueField: PropTypes.string
};

ListBox.defaultProps = {
  style: {height: '400', width: '100%'}
};
