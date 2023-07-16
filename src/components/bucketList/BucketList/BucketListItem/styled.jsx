import styled from "styled-components";

export const BucketBox = styled.div`
  width: 270px;
  height: 290px;
  background-color: #e4e5e4;
  border: 1px solid #416556;
  box-sizing: border-box;
  margin: 6px;
`;

export const BucketBoxHeader = styled.div`
  padding: 0.1875em;
  border-bottom: 2px solid #416556;
  margin-bottom: 0.1875em;
`;

export const DeleteButton = styled.div`
  background-image: url(./assets/images/gray-Button.svg);
  width: 3.25em;
  height: 0.75em;
  transition: background-image 0.3s ease;
  cursor: pointer;

  &:hover {
    background-image: url(./assets/images/color-button.svg);
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageBox = styled.div`
  background-image: url(./assets/images/bucketlist-image.jpg);
  width: 95%;
  height: 150px;
  background-size: cover;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const checkBoxStyle = {
  width: "1.7em",
  height: "1.7em",
};

export const Content = styled.span`
  font-size: 14px;
  font-weight: 100;
  color: #272727;
`;
