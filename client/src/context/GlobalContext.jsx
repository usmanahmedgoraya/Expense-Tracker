/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer, useState } from "react";
import ExpenseReducer from "./ExpenseReducer";

// Initial State
const initialState = {
  transactions: []
}

// create Context
export const GlobalContext = createContext(initialState);

// UseReducer Provider
export const GlobalProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([])
  const [state, dispatch] = useReducer(ExpenseReducer, initialState)
  const [loading, setLoading] = useState(false)

  const fetchTransactions = async () => {
    try {
      setLoading(true)
      const res = await fetch('https://expense-tracker-jet-phi.vercel.app/api/get-all-transactions', {
        method: 'GET'
      })
      const data = await res.json();
      setTransactions(data.transactions)
      setLoading(false)
    } catch (error) {
      console.log(error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, [transactions])


  // Delete transactions dispatch Function
  const deleteTransaction = (id) => {
    dispatch({
      type: 'Delete transactions',
      payload: id
    })
  }
  // Add transactions dispatch Function
  const addTransaction = (transactions) => {
    dispatch({
      type: 'Add transactions',
      payload: transactions
    })
  }

  return (<GlobalContext.Provider value={{
    transactions: transactions,
    loading,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}