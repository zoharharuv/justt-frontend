import { useEffect, useState } from "react"
import { TransactionList } from "../cmps/transaction-cmps/TransactionList"
import { BasicModal } from "../cmps/Modal"
import { Loader } from "../cmps/Loader"
import { transactionService } from '../services/transaction.service';

export const AppBoard = () => {
    const [transactions, setTransactions] = useState(null)
    const [selectedTransaction, setSelectedTransaction] = useState(null)

    const onSelectedTransaction = (transaction) => {
        setSelectedTransaction(transaction)
    }

    const loadTransactions = async () => {
        const transactions = await transactionService.query()
        setTransactions(transactions)
    }

    useEffect(() => {
        loadTransactions()
    }, [])

    if (!transactions?.length) return <Loader />
    return (
        <section className="app-board flex column gap">

            {
                transactions?.length > 0 ?
                    <>
                        <TransactionList
                            transactions={transactions}
                            onSelectedTransaction={onSelectedTransaction} />
                    </>
                    : <h1 style={{ textAlign: 'center' }}>No transactions found!</h1>
            }
            {selectedTransaction && <BasicModal
                onSelectedTransaction={onSelectedTransaction}
                selectedTransaction={selectedTransaction} />}
        </section>
    )
}