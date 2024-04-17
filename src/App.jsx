import React, { useState } from 'react';
import AlertSummary from './Components/AlertSummary';
import AlertTabs from './Components/AlertTabs';
import Filtering from './Components/Filtering';

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div >
        <AlertSummary />
        <AlertTabs value={value} handleChange={handleChange} />
        <Filtering/>
      </div>
    </>
  );
}

export default App;
