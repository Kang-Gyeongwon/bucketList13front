import { HeaderContainer, HeaderTitle } from "./styled";
import ListIcon from "../ListIcon";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <ListIcon />
        <>Bucket List</>
      </HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
