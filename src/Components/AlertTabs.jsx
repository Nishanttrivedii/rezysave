import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import iwinboxImage from "../Images/iwinbox.jpeg";
import outlineImage from "../Images/outline.png";
import ultraImage from "../Images/ultra.png";
import okImage from "../Images/OK.jpeg";
import smaImage from "../Images/sma.webp";
import lastImage from "../Images/last.png";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "space-between",
        padding: "0 16px",
        borderRadius: "0.7rem",
        color: "black",
        marginTop: '17px'
    },
    tab: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        cursor: "pointer",
        transition: "background-color 0.3s",
        width: "260px",
        height: "88px",
        marginTop: "2rem",
        borderTopLeftRadius: "0.5rem",
        borderTopRightRadius: "0.5rem",
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
        height: "71%",
        marginTop: "-5.3rem",
        marginLeft: "-1px",
        backgroundColor: "black",
    },
}));

function AlertTabs({ value, handleChange }) {
    const classes = useStyles();

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
            label: "Last",
            count: "07",
        },
    ];

    const lineIndices = [1, 2, 3, 4, 5];

    return (
        <div className={classes.container}>
            {tabs.map((tab, index) => (
                <div key={index} style={{ position: "relative" }}>
                    <div
                        className={`${classes.tab} ${
                            value === tab.label ? classes.activeTab : ""
                        }`}
                        onClick={() => handleChange(null, index)}
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

                    {lineIndices.includes(index) && value !== tab.label && (
                        <div className={classes.verticalLine} />
                    )}
                </div>
            ))}
        </div>
    );
}

export default AlertTabs;
