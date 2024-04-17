import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  faCalendarWeek,
  faClipboardCheck,
  faClipboardQuestion,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iwinboxImage from "../Images/iwinbox.jpeg";
import outlineImage from "../Images/outline.png"; 
import ultraImage from '../Images/ultra.png'
import okImage from '../Images/OK.jpeg'
import smaImage from '../Images/sma.webp'
import lastImage from '../Images/last.png'

const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      justifyContent: "space-between",
      padding: "0 16px",
      borderRadius: "0.7rem",
      color: "black",
    },
    tab: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "16px",
      cursor: "pointer",
      transition: "background-color 0.3s",
      width: "200px",
      height: "60px",
      marginTop: "2rem",
      borderTopLeftRadius: "0.5rem", // Rounded corners at the top-left
      borderTopRightRadius: "0.5rem", // Rounded corners at the top-right
    },
    activeTab: {
      backgroundColor: "#f0f0f0",
    },
    icon: {
      fontSize: "2rem",
    },
    label: {
      fontSize: "0.9rem",
      marginLeft: "8px",
    },
    count: {
      fontSize: "0.9rem",
      marginLeft: "8px",
      color: "blue",
      fontWeight: "bold",
    },
    verticalLine: {
      width: "2px",
      height: "66%",
      marginTop: "-5.3rem",
      marginLeft: "-1px",
      backgroundColor: "black",
    },
  }));
  

function AlertTabs({ value, handleChange }) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(null);
  const classes = useStyles();

  const handleTabClick = (index) => {
    handleChange(null, index);
    setSelectedTabIndex(index); 
  };

  const tabs = [
    {
      icon: null, 
      image: iwinboxImage, 
      label: "Today",
      count: "03",
    },
    {
      icon: null, 
      image: outlineImage, 
      label: "All",
      count: "07",
    },
    {
        icon: null, 
        image: ultraImage, 
        label: "New",
        count: "03",
      },
      {
        icon: null, 
        image: okImage, 
        label: "Flagged",
        count: "03",
      },
      {
        icon: null, 
        image: smaImage, 
        label: "InProgress",
        count: "07",
      },
      {
        icon: null, 
        image: lastImage, 
        label: "last",
        count: "07",
      },
  ];


  const lineIndices = [1, 2, 3, 4, 5];

  return (
    <div className={classes.container}>
      {tabs.map((tab, index) => (
        <div key={index} style={{ position: "relative" }}>
          <div
            className={`${classes.tab} ${value === index ? classes.activeTab : ""}`}
            onClick={() => handleTabClick(index)}
          >
            
            {tab.icon ? (
              <FontAwesomeIcon icon={tab.icon} className={classes.icon} />
            ) : (
              
              <img
                src={tab.image}
                alt={tab.label}
                style={{ width: "3rem", height: "3rem" }}
              />
            )}
            <div>
              <span className={classes.label}>{tab.label}</span>
              {tab.count > 0 && (
                <h1
                  style={{
                    color: "blue",
                    fontSize: "1.9rem",
                    marginLeft: "1rem",
                  }}
                  className={classes.count}
                >
                  {tab.count}
                </h1>
              )}
            </div>
          </div>

          {/* Render a vertical line if the current index is in the lineIndices array and it is not the selected tab */}
          {lineIndices.includes(index) && selectedTabIndex !== index && (
            <div className={classes.verticalLine} />
          )}
        </div>
      ))}
    </div>
  );
}

export default AlertTabs;
