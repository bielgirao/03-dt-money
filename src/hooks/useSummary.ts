import { TransactionsContext } from '../contexts/TransactionsContext.tsx'
import { useContextSelector } from 'use-context-selector'

export function useSummary() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.transactions
    },
  )

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
