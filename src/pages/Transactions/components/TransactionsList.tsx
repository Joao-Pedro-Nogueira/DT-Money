import { useContext } from 'react'
import { TransactionsContext } from '../../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../../utils/formatter'
import { SearchForm } from './SearchForm'
import {
  PriceHighlight,
  TransactionsTable,
  TransactionsTableContainer,
} from './styles'

export function TransactionList() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <TransactionsTableContainer className="container">
      <SearchForm />
      <TransactionsTable>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            )
          })}
        </tbody>
      </TransactionsTable>
    </TransactionsTableContainer>
  )
}
