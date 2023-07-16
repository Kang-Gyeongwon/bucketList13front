import { HeaderContainer, HeaderTitle } from "./styled";
import ListIcon from "../ListIcon";

const Header = (props) => {
  const { children } = props;
  return (
    <HeaderContainer>
      <HeaderTitle>
        <ListIcon />
        <>Bucket List</>
      </HeaderTitle>
      {children}
    </HeaderContainer>
  );
};

export default Header;
