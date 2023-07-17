import { styled } from "styled-components";

export const CheckboxContainer = styled.div`
  width: ${(props) => props.style?.width || "2.8125em"};
  height: ${(props) => props.style?.height || "2.8125em"};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1875em solid #eec65c;
  cursor: pointer;
  margin-right: 1.0625em;
`;

export const CheckedIcon = styled.div`
  display: ${(props) => {
    const { checked } = props;
    return checked ? "block" : "none";
  }};
  /* display: block; */
  background-image: url(/assets/images/check.svg);
  background-size: cover;
  width: ${(props) => props.style?.width || "1.625em"};
  height: ${(props) => props.style?.height || "1.5625em"};
`;
