import React from "react";
import classes from "./Button.css";
const Button = (props) => {
  return (
    <button
      className={classes.Button}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
