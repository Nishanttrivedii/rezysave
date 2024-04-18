import React, { useState } from "react";
import AlertSummary from "./Components/AlertSummary";
import AlertTabs from "./Components/AlertTabs";
import FilteringNav from "./Components/FilteringNav";
import Box from './Components/Box'

function App() {
  const [selectedTab, setSelectedTab] = useState("All");

  const handleTabChange = (event, index) => {
    const tabNames = ["Today", "All", "New", "Flagged", "InProgress", "Last"];

    setSelectedTab(tabNames[index]);
  };

  return (
    <>
      <div>
        <AlertSummary />
        <AlertTabs value={selectedTab} handleChange={handleTabChange} />
        <FilteringNav selectedTab={selectedTab} />
        <Box/>
      </div>
    </>
  );
}

export default App;
