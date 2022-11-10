import { Header } from "../../components/Header";
import { Summary } from "../../components/Header/Summary";
import { TransactionsList } from "./components/TransactionsList";
import { TransactionsPageContainer } from "./styles";

export function Transactions() {
  return(
    <TransactionsPageContainer className="container">
      <Summary />
      <TransactionsList />
    </TransactionsPageContainer>
  )
}