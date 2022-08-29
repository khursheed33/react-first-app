import React from "react";

import  classes from './InputField.css';

const inputField = (props) => {
  const inputWithoutLabel = (
    <input className={classes.InputField}
    id={props.id}
    onChange={props.onChange}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        disabled= {props.disabled}
        height={props.height}
        width={props.width}
        max={props.max}
        maxLength={props.maxLength}
        min={props.min}
        minLength={props.minLength}
        name={props.name}
        pattern={props.pattern}
        readOnly={props.readOnly}
        required={props.required}
        step={props.step}
        src={props.src}
        formnovalidation={props.formnovalidation}
        formEncType={props.formEncType}
        formAction={props.formAction}
        form={props.form}
        checked={props.checked}
        alt={props.alt}
        accept={props.accept}
      />
  );
  const inputWithLabel = (
    <span className={classes.InputContainer}>
      <label className={classes.Label}>{props.label}</label><br />
      <input className={classes.InputField}
      id={props.id}
      onChange={props.onChange}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        disabled= {props.disabled}
        height={props.height}
        width={props.width}
        max={props.max}
        maxLength={props.maxLength}
        min={props.min}
        minLength={props.minLength}
        name={props.name}
        pattern={props.pattern}
        readOnly={props.readOnly}
        required={props.required}
        step={props.step}
        src={props.src}
        formnovalidation={props.formnovalidation}
        formEncType={props.formEncType}
        formAction={props.formAction}
        form={props.form}
        checked={props.checked}
        alt={props.alt}
        accept={props.accept}
      />
    </span>
  );
  return props.label? inputWithLabel : inputWithoutLabel;
};

export default inputField;
