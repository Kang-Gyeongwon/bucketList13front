import { AddBtn, FormInput, InputBox } from "./styled";

const BucketInput = () => {
  return (
    <InputBox>
      <FormInput
        type="text"
        placeholder="What's on your adventure list? You can enter up to 140 characters."
      />
      <AddBtn type="submit" value="Create" />
    </InputBox>
  );
};

export default BucketInput;
