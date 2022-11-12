import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Header/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsPageContainer, TransactionsTable, TransactionsTableContainer } from "./styles";

export function Transactions() {

  const {transactions} = useContext(TransactionsContext)

  return(
    <TransactionsPageContainer className="container">
      <Summary />
      <TransactionsTableContainer>
      <SearchForm />
      <TransactionsTable>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.price}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            )
          })}
        </tbody>
      </TransactionsTable>
    </TransactionsTableContainer>
    </TransactionsPageContainer>
  )
}