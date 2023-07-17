import { useState } from "react";
import { AddBtn, FormInput, InputBox } from "./styled";
import { QueryClient, useMutation, useQueryClient } from "react-query";
import { addBucketItem } from "../../../api/bucketItems";

const BucketInput = () => {
  const [formValue, setFormValue] = useState({
    content: "",
  });

  const queryClient = useQueryClient();

  const mutation = useMutation(addBucketItem, {
    onSuccess: () => {
      queryClient.invalidateQueries("bucketListItems");
      console.log("success");
    },
  });

  const handkeInputChages = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (formValue.content.length >= 140) {
      window.alert("Please enter up to 140 characters.");
      return;
    }
    const newBucket = {
      ...formValue,
      finish_check: false,
    };

    mutation.mutate(newBucket);

    setFormValue({
      content: "",
    });
  };

  return (
    <InputBox>
      <FormInput
        type="text"
        name="content"
        value={formValue.content}
        onChange={handkeInputChages}
        placeholder="What's on your adventure list? You can enter up to 140 characters."
      />
      <AddBtn type="submit" value="Create" onClick={handleSubmit} />
    </InputBox>
  );
};

export default BucketInput;
