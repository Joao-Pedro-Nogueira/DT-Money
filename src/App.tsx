import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { Transactions } from './pages/Transactions'
import { Header } from './components/Header'
import { TransactionsProvider } from './contexts/TransactionsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <GlobalStyle />
        <Header />
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
