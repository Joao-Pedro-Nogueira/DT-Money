import { SummaryCard, SummaryContainer } from "./styles";
import {ArrowCircleDown, ArrowCircleUp, CurrencyDollar} from 'phosphor-react'
import { useTheme } from "styled-components";
import { useContext } from "react";
import { TransactionsContext } from "../../../contexts/TransactionsContext";

export function Summary() {
  
  const theme = useTheme()

  const { transactions } = useContext(TransactionsContext)

  const incomeTransactions = transactions.filter((transactions) => {
    return transactions.type === 'income'
  } )

  const totalIncomePrice = incomeTransactions.reduce((accumulator, incomeTransaction ) => {
    return accumulator + incomeTransaction.price
  }, 0)

  const outcomeTransactions = transactions.filter((transactions) => {
    return transactions.type === 'outcome'
  })

  const totalOutcomePrice = outcomeTransactions.reduce((accumulator, outcome) => {
    return accumulator + outcome.price
  },0)

  const totalResultPrice = totalIncomePrice - totalOutcomePrice

  return(
    <SummaryContainer className="container">
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={23} color={theme["green-300"]} />
        </header>
        <span>{totalIncomePrice}</span>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={23} color={theme["red-300"]} />
        </header>
        <span>{totalOutcomePrice}</span>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={23} color={theme["white"]} />
        </header>
        <span>{totalResultPrice}</span>
      </SummaryCard>
    </SummaryContainer>
  )
}