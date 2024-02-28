import React from "react";
import { InputBoxStyled, InputLabelStyled } from "../Input/InputStyles";
import { TextArea, ErrorStyled } from "./TextAreaInputStyles";

const TextAreaInput = ({ label,name,isError,...field }) => {
  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
      <TextArea name={name} id={label} error={isError} {...field} />
      {isError && <ErrorStyled>{isError}</ErrorStyled>}
    </InputBoxStyled>
  );
};

export default TextAreaInput;
