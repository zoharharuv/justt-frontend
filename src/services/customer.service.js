import { httpService } from './http.service'
// const gDatabase = require('../data/data.json');

// (async () => {
//     for (const d of gDatabase) {
//         delete d.total_price
//         delete d.currency
//         delete d.credit_card_number
//         delete d.credit_card_type
//         await add(d)
//     }
// })()

export const customerService = {
    query,
    getById,
    update,
    add,
    remove
}

async function query() {
    try {
        return await httpService.get('customer')
    } catch (err) {
        console.log(err);
    }
}

async function getById(customerId) {
    return await httpService.get(`customer/${customerId}`)
}

async function remove(customerId) {
    return await httpService.delete(`customer/${customerId}`)
}

async function add(customer) {
    return await httpService.post('customer', customer)
}

async function update(customer) {
    return await httpService.put(`customer/${customer._id}`, customer)
}
