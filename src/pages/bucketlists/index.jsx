import BucketInput from "../../components/bucketList/BucketInput";
import BucketList from "../../components/bucketList/BucketList";
import { BodyContainer } from "../../components/shared/BodyContainer/styled";
import Header from "../../components/shared/Header";
import { BodyContainerstyle } from "./styled";

const BucketLists = () => {
  return (
    <>
      <Header></Header>
      <BodyContainer style={BodyContainerstyle}>
        <BucketInput />
        <BucketList />
      </BodyContainer>
    </>
  );
};

export default BucketLists;
