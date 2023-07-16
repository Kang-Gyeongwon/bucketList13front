import React from "react";
import { CheckboxContainer, CheckedIcon } from "./styled";

const Checkbox = (props) => {
  const { checked, onClick, style } = props;

  const scale = 0.5;  // you can adjust this scale value
  const scaledStyle = style
    ? {
        width: parseFloat(style.width) * scale + "em",
        height: parseFloat(style.height) * scale + "em",
      }
    : {};

  return (
    <CheckboxContainer style={scaledStyle} onClick={onClick}>
      <CheckedIcon checked={checked} style={scaledStyle} />
    </CheckboxContainer>
  );
};

export default Checkbox;
