import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  filteringContainer: {
    backgroundColor: "#f0f0f0",
    padding: "16px",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 16px",
    backgroundColor: "white",
    borderRadius: "10px",
  },
  leftText: {
    fontWeight: "bold",
  },
  paginationContainer: {
    display: "flex",
    alignItems: "center",
  },
  paginationText: {
    marginRight: "16px",
  },
}));

function Filtering() {
  const classes = useStyles();

  return (
    <div className={classes.filteringContainer}>
      {/* Navigation bar */}
      <div className={classes.navbar}>
        {/* Left side text */}
        <span className={classes.leftText}>All</span>

        {/* Right side pagination and text */}
        <div className={classes.paginationContainer}>
          {/* Pagination text */}
          <span className={classes.paginationText}>Showing 4 of 7 items</span>

          {/* Pagination buttons */}
          <IconButton size="small">
            <ArrowBack />
          </IconButton>
          <IconButton size="small">
            <ArrowForward />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Filtering;
