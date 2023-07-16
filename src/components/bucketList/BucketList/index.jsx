import {
  Container,
  ImageBox,
  ContentContainer,
  ContentBox,
  Content,
  DeleteButton,
  BucketBox,
  BucketBoxHeader,
} from "./styled";
import Checkbox from "../../shared/CheckBox";

const BucketList = () => {
  const handleClose = () => {
    console.log("You closed the card.");
  };

  return (
    <Container>
      <BucketBox>
        <BucketBoxHeader>
          <DeleteButton onClick={handleClose} />
        </BucketBoxHeader>
        <ContentContainer>
          <ImageBox></ImageBox>
          <ContentBox>
            <Checkbox />
            <Content>내용</Content>
          </ContentBox>
        </ContentContainer>
      </BucketBox>
    </Container>
  );
};

export default BucketList;
