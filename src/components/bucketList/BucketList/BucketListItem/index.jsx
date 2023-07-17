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
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { completeBucketItem } from "../../../../api/bucketItems";

const BucketListItem = (props) => {
  const { item } = props;

  const [isCompleted, setIsCompleted] = useState(item.finish_check);

  const queryClient = useQueryClient();

  const updateCompletedMutation = useMutation(
    (newStatus) =>
      completeBucketItem(item.id, { ...item, finish_check: newStatus }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("bucketListItems");
      },
    }
  );

  const handleClose = () => {
    console.log("You closed the card.");
  };

  const handleCheck = () => {
    const newStatus = !isCompleted;
    setIsCompleted(newStatus);
    updateCompletedMutation.mutate(newStatus);
  };

  return (
    <BucketBox>
      <BucketBoxHeader>
        <DeleteButton onClick={handleClose} />
      </BucketBoxHeader>
      <ContentContainer>
        <ImageBox></ImageBox>
        <ContentBox>
          <Checkbox
            style={checkBoxStyle}
            checked={isCompleted}
            onClick={handleCheck}
          />
          <Content>{item.content}</Content>
        </ContentBox>
      </ContentContainer>
    </BucketBox>
  );
};

export default BucketListItem;
