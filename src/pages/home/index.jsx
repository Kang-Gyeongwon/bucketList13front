import { useState } from "react";
import { Content, WelcomeMessage } from "./styled.jsx";
import { useNavigate } from "react-router-dom";
import Checkbox from "../../components/shared/CheckedBox/index.jsx";
import { BodyContainer } from "../../components/shared/BodyContainer/styled.jsx";
import Header from "../../components/shared/Header/index.jsx";

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
      <Header />
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
