import { useContext, useState } from "react";
import { BucketContext } from "../../contexts/BucketContext";
import { AddBtn, FormInput, InputBox } from "./styled";

const BucketInput = () => {
  const { handleAdd } = useContext(BucketContext);
  const [formValue, setFormValue] = useState({
    content: "",
  });

  const handleInputChanges = (e) => {
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

    handleAdd(newBucket);

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
        onChange={handleInputChanges}
        placeholder="What's on your adventure list? You can enter up to 140 characters."
      />
      <AddBtn type="submit" value="Create" onClick={handleSubmit} />
    </InputBox>
  );
};

export default BucketInput;
