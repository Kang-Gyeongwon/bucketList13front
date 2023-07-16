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
          <Content>내용</Content>
        </ContentBox>
      </ContentContainer>
    </BucketBox>
  );
};

export default BucketListItem;
