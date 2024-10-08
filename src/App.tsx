import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import { Transactions } from './pages/Transactions'
import { GlobalStyles } from './styles/global.ts'
import { TransactionsProvider } from './contexts/TransactionsContext.tsx'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}
