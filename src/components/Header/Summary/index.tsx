import { SummaryCard, SummaryContainer } from "./styles";
import {ArrowCircleDown, ArrowCircleUp, CurrencyDollar} from 'phosphor-react'
import { useTheme } from "styled-components";

export function Summary() {

  const theme = useTheme()
  return(
    <SummaryContainer className="container">
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={23} color={theme["green-300"]} />
        </header>
        <span>R$ 17.400,00</span>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={23} color={theme["red-300"]} />
        </header>
        <span>R$ 17.400,00</span>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={23} color={theme["white"]} />
        </header>
        <span>R$ 17.400,00</span>
      </SummaryCard>
    </SummaryContainer>
  )
}