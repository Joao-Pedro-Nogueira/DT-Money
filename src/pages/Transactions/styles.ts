import styled from "styled-components";

export const TransactionsPageContainer = styled.div`

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