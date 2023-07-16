import { useNavigate } from "react-router-dom";
import BucketInput from "../../components/bucketList/BucketInput";
import BucketList from "../../components/bucketList/BucketList";
import { BodyContainer } from "../../components/shared/BodyContainer/styled";
import Header from "../../components/shared/Header";
import { bodyContainerstyle } from "./styled";
import { IoIosHome } from "react-icons/io";

const BucketLists = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <IoIosHome size={32} color={"#416556"} onClick={() => navigate("/")} />
      </Header>
      <BodyContainer style={bodyContainerstyle}>
        <BucketInput />
        <BucketList />
      </BodyContainer>
    </>
  );
};

export default BucketLists;
