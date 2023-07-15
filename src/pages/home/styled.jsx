import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: row;
  align-items: center;
  justify-content: center;
  padding: 1.875em 3.125em;
`;

export const HeaderTitle = styled.h1`
  font-size: 1.875em;
  font-weight: 900;
  color: #416556;
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: auto;
  padding-left: 0.625em;
`;

export const Content = styled.div`
  width: 43.75em;
  height: 15.625em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const WelcomeMessage = styled.span`
  font-size: 2.1875em;
  font-weight: 200;
  color: #416556;
`;
