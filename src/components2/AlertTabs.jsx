/* eslint-disable react/prop-types */
import { makeStyles } from "@material-ui/core/styles";
import iwinboxImage from ".././assets/Images/iwinbox.jpeg";
import outlineImage from ".././assets/Images/outline.png";
import ultraImage from ".././assets/Images/ultra.png";
import okImage from ".././assets/Images/OK.jpeg";
import smaImage from ".././assets/Images//sma.webp";
import lastImage from ".././assets/Images/last.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles(() => ({
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
        transition: "background-color 0.3s, color 0.3s", // Add transition for smooth changes
        width: "260px",
        height: "88px",
        marginTop: "2rem",
        borderTopLeftRadius: "0.5rem",
        borderTopRightRadius: "0.5rem",
    },
    activeTab: {
        backgroundColor: "#F0F0F0",
    },
    icon: {
        fontSize: "2rem",
    },
    label: {
        fontSize: "0.9rem",
        marginLeft: "8px",
        transition: "color 0.3s", // Add transition for color changes
    },
    count: {
        fontSize: "0.9rem",
        marginLeft: "8px",
        color: "blue",
        fontWeight: "bold",
        transition: "color 0.3s", // Add transition for color changes
    },
    verticalLine: {
        width: "2px",
        height: "71%",
        marginTop: "-5.3rem",
        marginLeft: "-1px",
        backgroundColor: "black",
        transition: "background-color 0.3s", // Add transition for background color changes
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
        <div className={classes.container} style={{width:'100%',overflowY:'scroll'}}>
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