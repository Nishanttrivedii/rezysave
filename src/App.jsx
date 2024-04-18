import React, { useState } from "react";
import AlertSummary from "./Components/AlertSummary";
import AlertTabs from "./Components/AlertTabs";
import FilteringNav from "./Components/FilteringNav";
import Box from './Components/Box';
import { sampleData } from "./Components/Data";

function App() {
  // State to track the currently selected tab
  const [selectedTab, setSelectedTab] = useState("All");

  // Function to handle tab changes in AlertTabs
  const handleTabChange = (event, index) => {
    const tabNames = ["Today", "All", "New", "Flagged", "InProgress", "Last"];
    setSelectedTab(tabNames[index]);
  };

  return (
    <>
      <div>
        <AlertSummary />
        
        {/* Pass the selectedTab and handleTabChange props to AlertTabs */}
        <AlertTabs value={selectedTab} handleChange={handleTabChange} />
        
        <FilteringNav selectedTab={selectedTab} />
        
        {/* Pass the selectedTab prop to Box so it can use it to determine the data to display */}
        <Box selectedTab={selectedTab} sampleData={sampleData} />
      </div>
    </>
  );
}

export default App;
