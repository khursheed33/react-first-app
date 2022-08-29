import React from "react";
import classes from "./Header.css";
const pereson = (props) => {
  return (
    <div className={classes.Header}>
      <h1 className={classes.Title}>{props.children}</h1>
    </div>
  );
};

export default pereson;
