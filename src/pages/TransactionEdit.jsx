import { useEffect, useMemo, useState } from "react"
import { useParams, useHistory } from "react-router"
import { Button } from "@material-ui/core";
import { useForm } from './../hooks/useForm';
import { Loader } from './../cmps/Loader';
import { transactionService } from './../services/transaction.service';
import { customerService } from './../services/customer.service';
import { utilService } from './../services/utils';
import { Delete } from "@material-ui/icons";

export const TransactionEdit = () => {
    const history = useHistory();
    const { id } = useParams()
    const [transaction, setTransaction] = useState(null)
    const [fields, handleChange, setFields] = useForm(utilService.getEmptyTransaction())
    const [customers, setCustomers] = useState(null)

    const loadCustomers = async () => {
        const customers = await customerService.query()
        setCustomers(customers)
        setFields(prev => ({ ...prev, ...customers[0] }))
    }

    const loadTransaction = async (id) => {
        try {
            const transaction = await transactionService.getById(id)
            setTransaction(transaction)
            setFields(transaction)
        } catch (err) {
            console.log(err);
            history.push('/');
        }
    }

    const onDeleteTransaction = async (id) => {
        try {
            await transactionService.remove(id)
            history.push('/');
        } catch (err) {
            console.log(err);
        }
    }

    const onSaveTransaction = async (ev) => {
        ev.preventDefault()
        try {
            id ? await transactionService.update(fields) : await transactionService.add(fields)
            history.push('/');
        } catch (err) {
            console.log(err);
        }
    }

    const customerList = useMemo(() => {
        return customers?.map(customer => <option
            key={customer._id}
            value={JSON.stringify(customer)}>
            {customer.first_name} {customer.last_name}
        </option>)
    }, [customers])

    useEffect(() => {
        id ? loadTransaction(id) : loadCustomers()
        return () => {
            setTransaction(null)
            setFields(utilService.getEmptyTransaction())
        };
    }, [id])

    if (id && !transaction) return <Loader />
    return (
        <section className="transaction-edit flex column gap align-center">
            <h1>{id ? 'Edit transaction' : 'Add new transaction'}</h1>
            {fields &&
                <form className="flex column gap" onSubmit={onSaveTransaction}>

                    {customers?.length &&
                        <select name="customers"
                            required
                            onChange={({ target }) => {
                                const customer = JSON.parse(target.value)
                                delete customer._id
                                setFields(prev => ({ ...prev, ...customer }))
                            }}>
                            {customerList}
                        </select>}

                    <div className="input-container flex column">
                        <small>Currency</small>
                        <input type="text"
                            name="currency"
                            placeholder="Currency"
                            value={fields.currency}
                            onChange={handleChange}
                            required />
                    </div>

                    <div className="input-container flex column">
                        <small>Amount</small>
                        <input type="number"
                            name="total_price"
                            placeholder="Amount"
                            value={fields.total_price}
                            onChange={handleChange}
                            required
                            min={0}
                            step={0.01} />
                    </div>

                    <div className="input-container flex column">
                        <small>Card type</small>
                        <input type="text"
                            name="credit_card_type"
                            placeholder="Card type"
                            value={fields.credit_card_type}
                            onChange={handleChange}
                            required />
                    </div>

                    <div className="input-container flex column">
                        <small>Card number</small>
                        <input type="text"
                            name="credit_card_number"
                            placeholder="Card number"
                            value={fields.credit_card_number}
                            onChange={handleChange}
                            required />
                    </div>

                    <Button
                        variant="contained"
                        color="primary"
                        type="submit">
                        Save</Button>
                </form>
            }
            {id && <Button
                endIcon={<Delete />}
                size="small"
                className="delete-btn"
                variant="contained"
                color="secondary"
                onClick={() => onDeleteTransaction(id)}>
                Delete</Button>}
        </section >
    )
}

