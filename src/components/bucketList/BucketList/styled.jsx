import styled from "styled-components";

export const Container = styled.div`
  height: 67.95vh;
`;

export const BucketBox = styled.div`
  width: 200px;
  height: 400px;
  background-color: #e4e5e4;
`;

export const BucketBoxHeader = styled.div`
  padding: 0.1875em;
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
  background-image: url(./assets/images/main-image.jpg);
  width: 100px;
  height: 100px;
  background-size: cover;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Content = styled.span`
  /* 내용 스타일링 */
`;
