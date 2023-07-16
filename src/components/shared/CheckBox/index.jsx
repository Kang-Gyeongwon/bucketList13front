import React from "react";
import { CheckboxContainer, CheckedIcon } from "./styled";

const Checkbox = (props) => {
  const { checked, onClick } = props;
  return (
    <CheckboxContainer onClick={onClick}>
      <CheckedIcon checked={checked} />
    </CheckboxContainer>
  );
};

export default Checkbox;
