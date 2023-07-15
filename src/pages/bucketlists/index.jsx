import BucketInput from "../../components/bucketList/BucketInput";
import BucketList from "../../components/bucketList/BucketList";
import { BodyContainer } from "../../components/shared/BodyContainer/styled";
import Header from "../../components/shared/Header";

const BucketLists = () => {
  return (
    <>
      <Header />
      <BodyContainer>
        <BucketInput />
        <BucketList />
      </BodyContainer>
    </>
  );
};

export default BucketLists;
