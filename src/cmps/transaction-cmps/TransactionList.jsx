import { memo } from 'react';
import { TransactionPreview } from './TransactionPreview';

export const TransactionList = memo(function _TransactionList({
    transactions,
    onSelectedTransaction }) {

    return (
        <section className="transaction-list">
            <div className="transaction-list-head align-center">
                <span>First name</span>
                <span>Last name</span>
                <span>Currency</span>
                <span>Price</span>
            </div>

            {transactions?.map(transaction => (
                <TransactionPreview
                    key={transaction._id}
                    transaction={transaction}
                    onSelectedTransaction={onSelectedTransaction} />
            ))}
        </section>
    )
})