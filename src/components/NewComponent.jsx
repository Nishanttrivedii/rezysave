

import { useState } from "react";
import AlertSummary from '../components2/AlertSummary';
import AlertTabs from '../components2/AlertTabs';
import FilteringNav from '../components2/FilteringNav';
import Box from "../components2/Box";

function NewComponent() {
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

export default NewComponent;
