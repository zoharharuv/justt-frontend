export const TransactionPreview = ({ transaction, onSelectedTransaction }) => {
    const { first_name, last_name, currency, total_price } = transaction

    return (
        <section className="transaction-preview"
            onClick={() => {
                onSelectedTransaction(transaction)
            }}>
            <span className="first-name">{first_name}</span>
            <span className="last-name">{last_name}</span>
            <span className="species">{currency}</span>
            <span className="gender">{total_price}</span>
        </section >
    )
}