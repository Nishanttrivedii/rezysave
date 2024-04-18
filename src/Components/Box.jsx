import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { sampleData } from "../Components/Data";
import hotSaleImage from "../Images/hotsale.png";

const useStyles = makeStyles(() => ({
  container: {
    fontFamily: "Manrope, sans-serif",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    padding: "16px",
    backgroundColor: "#f0f0f0",
    borderRadius: "0 0 16px 16px",
    marginTop: "-1rem",
    marginRight: "1rem",
    marginLeft: "1rem",
  },
  box: {
    width: "100%",
    height: "150px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    color: "black",
    fontSize: "1rem",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  lightRedBox: {
    width: "45rem",
    height: "5rem",
    borderRadius: "10px",
    backgroundColor: "#f5a0a8",
  },
  lightOrangeBox: {
    width: "45rem",
    height: "5rem",
    borderRadius: "10px",
    backgroundColor: "#FFCC99",
  },
  leftColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
//   image: {
//     width: "30px",
//     height: "30px",
//     marginBottom: "8px",
//   },
  hotSaleImage: {
    position: "absolute",
    top: "8px",
    right: "8px",
    width: "20px",
    height: "20px",
  },
  text: {
    color:'#f6303e',
    marginBottom: "8px",
  },
}));

function Box() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {sampleData.map((item, index) => {
        const boxClass =
          index % 2 === 0 ? classes.lightRedBox : classes.lightOrangeBox;

        return (
          <div key={index} className={`${classes.box} ${boxClass}`}>
            <img src={hotSaleImage} alt="" 
            style={{height:'30px',width:'30px',marginBottom: '60px'}}
            />

            <div className={classes.leftColumn}>
              <img src={item.image} alt="" className={classes.image} />
              <div className={classes.text}>
                {item.issue} {item.property}
              </div>
              <div className={classes.text}>
                {item.building} {item.status}
              </div>
            </div>

            <div className={classes.rightColumn}>
              <div className={classes.text}>{item.taskDate}</div>
              <div className={classes.text}>{item.noOfTasks}</div>
              <div>{item.date}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Box;
