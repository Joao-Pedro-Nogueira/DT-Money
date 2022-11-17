import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionsContext'
import { useMemo } from 'react'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summary = useMemo(() => {
    transactions.reduce(
      function (accumulator, transaction) {
        if (transaction.type === 'income') {
          accumulator.income += transaction.price
        } else {
          accumulator.outcome += transaction.price
        }

        accumulator.total = accumulator.income - accumulator.outcome

        return accumulator
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    )
  }, [transactions])

  return summary
}
