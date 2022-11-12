import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Header/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SearchForm } from "./components/SearchForm";
import { TransactionList } from "./components/TransactionsList";
import { TransactionsPageContainer } from "./styles";

export function Transactions() {

  return(
    <TransactionsPageContainer className="container">
      <Summary />
      <TransactionList />
    </TransactionsPageContainer>
  )
}