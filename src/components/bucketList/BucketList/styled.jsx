import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; 
  width: 100%; 
  max-width: 70.5em;
  height: 67.95vh;
  overflow-y: auto; 

  @media (max-width: 70.5em) {
    justify-content: center;
  }
`;

