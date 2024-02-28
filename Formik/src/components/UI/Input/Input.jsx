import React from "react";
import {
  InputBoxStyled,
  InputLabelStyled,
  InputStyled,
  ErrorStyled,
} from "./InputStyles";

const Input = ({ label, type,name,isError,...field }) => {
  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
      <InputStyled 
      type={type} 
      name={name}
      id={label} 
      error={isError}
      {...field}
      />

      {isError && <ErrorStyled>{isError}</ErrorStyled>}
    </InputBoxStyled>
  );
};

export default Input;
