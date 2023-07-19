import { HeaderContainer, HeaderTitle } from "./styled";
import ListIcon from "../ListIcon";

const Header = (props) => {
  // children을 사용하여 Header부분에 다른 내용 추가할 수 있게 하기
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
