import React from "react";
import { CheckboxContainer, CheckedIcon } from "./styled";

const Checkbox = (props) => {
  const { checked, onClick, style } = props;

  // 축소 비율
  const scale = 0.5;

  // 축소 비율에 맞춰서 style지정
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
