import { HeaderBackground, HeaderContainer } from "./styles";
import Logo from '../../assets/logo.svg'
import { BasicButton } from "../BasicButton";

export function Header() {
  return(
    <HeaderBackground>
      <HeaderContainer className="container">
        <img src={Logo} />
        <BasicButton content="Nova Transação" />
      </HeaderContainer>
    </HeaderBackground>
  )
}