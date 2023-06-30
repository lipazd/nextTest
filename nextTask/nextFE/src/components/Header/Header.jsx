import Logo from '../../assets/logo.png'
import * as S from "./Header.style";
const Header = () => {
  return (
    <S.HeaderContainer>
      <S.LogoImg src={Logo} />
    </S.HeaderContainer>
  );
};
export default Header;
