import { SearchButton, SerachFormContainer } from "./styles";
import { MagnifyingGlass } from 'phosphor-react'

export function SearchForm() {
  return (
    <SerachFormContainer>
      <input type="text" placeholder="Busque uma transação"/>
      <SearchButton type="submit">
        <MagnifyingGlass size={20} />
        <span>Busca</span>
      </SearchButton>
    </SerachFormContainer>
  )
}