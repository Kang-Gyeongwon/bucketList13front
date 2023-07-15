import { useState } from "react";
import {
  HeaderContainer,
  HeaderTitle,
  Content,
  WelcomeMessage,
} from "./styled.jsx";
import { useNavigate } from "react-router-dom";
import Checkbox from "../../components/shared/CheckedBox/index.jsx";
import { BodyContainer } from "../../components/shared/BodyContainer/styled.jsx";
import ListIcon from "../../components/shared/ListIcon/index.jsx";

const HomePage = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setChecked(true);
    setTimeout(() => {
      navigate("/bucketlist");
    }, 250);
  };

  return (
    <>
      <HeaderContainer>
        <HeaderTitle>
          <ListIcon />
          <>Bucket List</>
        </HeaderTitle>
      </HeaderContainer>
      <BodyContainer>
        <Content>
          <Checkbox checked={checked} onClick={handleClick} />
          <WelcomeMessage>
            Welcome To Your Bucket List. <br />
            Now, Go To My Bucket List
          </WelcomeMessage>
        </Content>
      </BodyContainer>
    </>
  );
};

export default HomePage;
