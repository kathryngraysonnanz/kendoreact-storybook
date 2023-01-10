import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import kendoka from './kendoka.svg';
import './App.scss';

function App() {
  const handleClick = React.useCallback(() => {
    window.open('https://www.telerik.com/kendo-react-ui/components/', '_blank');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={kendoka} className="App-logo" alt="kendoka" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button
          themeColor={'primary'}
          size={"large"}
          onClick={handleClick}
        >
          Learn KendoReact
        </Button>
      </header>
    </div>
  );
}

export default App;
