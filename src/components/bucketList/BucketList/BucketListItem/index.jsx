import {
  BucketBox,
  BucketBoxHeader,
  DeleteButton,
  ContentContainer,
  ImageBox,
  ContentBox,
  Content,
  checkBoxStyle,
} from "./styled";
import Checkbox from "../../../shared/CheckBox";

const BucketListItem = () => {
  const handleClose = () => {
    console.log("You closed the card.");
  };

  return (
    <BucketBox>
      <BucketBoxHeader>
        <DeleteButton onClick={handleClose} />
      </BucketBoxHeader>
      <ContentContainer>
        <ImageBox></ImageBox>
        <ContentBox>
          <Checkbox style={checkBoxStyle} />
          <Content>
            여기에 버킷리스 내용을 보여줄꺼야 근데 밑으로 내려가야 하는데 왜
            안되는거지?
            더 길게 작성해볼까? 여기에 몇글자까지 넣을수 있을까?
            궁금해
            안녕하세요 궁금합니다.
          </Content>
        </ContentBox>
      </ContentContainer>
    </BucketBox>
  );
};

export default BucketListItem;
