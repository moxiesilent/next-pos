import api from "@/api";
import TransactionList from "@/components/elements/transactionList/TransactionList";
import Layout from "@/components/layouts/Layout";
import { useEffect, useState } from "react";

export default function Transaction() {
  const [transactions, setTransactions] = useState([])

  const fetchTransaction = async () => {
    const response = await api.get('/transactions')
    const data = await response.data.payload
    setTransactions(data.transactions)
  }

  useEffect(() => {
    fetchTransaction()
  }, [])
  return (
    <Layout>
        <h1>Transactions</h1>
        <TransactionList transactions={transactions}/>
    </Layout>
  )
}
