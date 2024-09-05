import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext.tsx'

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  return transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.incomes += transaction.amount
        acc.total += transaction.amount
      } else {
        acc.expenses += transaction.amount
        acc.total -= transaction.amount
      }
      return acc
    },
    { incomes: 0, expenses: 0, total: 0 },
  )
}
