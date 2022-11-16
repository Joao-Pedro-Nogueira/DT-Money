import { SummaryCard, SummaryContainer } from './styles'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { priceFormatter } from '../../../utils/formatter'
import { useSummary } from '../../../hooks/useSummary'

export function Summary() {
  const theme = useTheme()

  const summary = useSummary()

  return (
    <SummaryContainer className="container">
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={23} color={theme['green-300']} />
        </header>
        <span>{priceFormatter.format(summary.income)}</span>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={23} color={theme['red-300']} />
        </header>
        <span>{priceFormatter.format(summary.outcome)}</span>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={23} color={theme.white} />
        </header>
        <span>{priceFormatter.format(summary.total)}</span>
      </SummaryCard>
    </SummaryContainer>
  )
}
