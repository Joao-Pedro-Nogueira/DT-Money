import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Header/Summary";
import { TransactionsList } from "./components/TransactionsList";
import { TransactionsPageContainer } from "./styles";

interface Transaction {
  id: number,
  description: string,
  type: 'income' | 'outcome',
  price: number,
  category: string,
  createdAt: string
}

export function Transactions() {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransactions() {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json()
    
    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return(
    <TransactionsPageContainer className="container">
      <Summary />
      <TransactionsList />
    </TransactionsPageContainer>
  )
}