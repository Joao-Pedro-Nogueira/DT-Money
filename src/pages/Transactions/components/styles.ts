import styled from "styled-components";



// Componente SerchForm

export const SerachFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  
  input {
    flex: 1;
    border-radius: 6px;
    border: 1px solid ${props => props.theme["gray-900"]};
    background-color: ${props => props.theme["gray-900"]};
    color: ${props => props.theme["gray-300"]};
    padding: 1rem;

    &::placeholder {
      color: ${props => props.theme["gray-500"]}
    }

    :focus {
      border: 1px solid ${props => props.theme["green-300"]}
    }
  }
`

export const SearchButton = styled.button`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  border: 1px solid ${props => props.theme["green-300"]};
  padding: 1rem;
  background-color: transparent;
  color: ${props => props.theme["green-300"]};
  font-weight: bold;
  border-radius: 6px;
  line-height: 160%;
  font-size: 1rem;

  transition: background-color 0.2s, color 0.2s, border 0.2s;

  &:hover {
    background-color: ${props => props.theme["green-500"]};
    border: 1px solid ${props => props.theme["green-500"]};
    color: ${props => props.theme["white"]};
  }
`


export const TransactionsTableContainer = styled.section`
  width: 100%;
  margin-top: 4rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    background-color: ${props => props.theme["gray-700"]};
    color: ${props => props.theme["gray-300"]};
    font-size: 1rem;
    line-height: 160%;
    padding: 1.25rem 2rem;

    :first-child{
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    :last-child{
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    :nth-child(2) {

    }
  }
`

interface PriceHighlightProps{
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${props => props.variant === "income" ? props.theme["green-300"] : props.theme["red-300"]}
`