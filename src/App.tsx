import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { Transactions } from './pages/Transactions'
import { Header } from './components/Header'
import { Summary } from './components/Header/Summary'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Transactions />
    </ThemeProvider>
  )
}
