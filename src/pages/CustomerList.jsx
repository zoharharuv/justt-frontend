import { useState, useEffect } from 'react';
import { Loader } from './../cmps/Loader';
import { CustomerPreview } from './../cmps/customer-cmps/CustomerPreview';
import { customerService } from "../services/customer.service"

export const CustomerList = () => {
    const [customers, setCustomers] = useState(null)

    const loadCustomers = async () => {
        const customers = await customerService.query()
        setCustomers(customers)
    }

    useEffect(() => {
        loadCustomers()
    }, [])

    if (!customers?.length) return <Loader />
    return (
        <section className="customer-list">
            {customers.map(customer => (
                <CustomerPreview
                    key={customer._id}
                    customer={customer} />
            ))}
        </section>
    )
}