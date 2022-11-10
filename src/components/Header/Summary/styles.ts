import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  margin-top: -5rem;
  color: ${props => props.theme.white};
  `

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${props => props.theme["gray-600"]};
  padding: 1.5rem;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border-radius: 6px;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    span {
      color: ${props => props.theme["gray-300"]};
      font-size: 1rem;
      line-height: 160%;
    }
  }

  > span {
    color: ${props => props.theme["gray-100"]};
    font-weight: bold;
    font-size: 2rem;
    line-height: 140%;
  }

  ${props => props.variant === 'green' && css`
    background-color: ${props.theme["green-700"]};
  `}
`