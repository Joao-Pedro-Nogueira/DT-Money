import { HeaderBackground, HeaderContainer } from "./styles";
import Logo from '../../assets/logo.svg'
import { BasicButton } from "../BasicButton";
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return(
    <HeaderBackground>
      <HeaderContainer className="container">
        <img src={Logo} />

        <Dialog.Root>
          
          <BasicButton content="Nova Transação" />
          

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContainer>
    </HeaderBackground>
  )
}