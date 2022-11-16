import { Summary } from '../../components/Header/Summary'
import { TransactionList } from './components/TransactionsList'
import { TransactionsPageContainer } from './styles'

export function Transactions() {
  return (
    <TransactionsPageContainer className="container">
      <Summary />
      <TransactionList />
    </TransactionsPageContainer>
  )
}
